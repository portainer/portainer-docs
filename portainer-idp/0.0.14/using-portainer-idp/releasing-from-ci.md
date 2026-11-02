# Releasing from CI

Your CI pipeline (GitHub Actions, GitLab CI, Jenkins) builds, tests and pushes an image, then makes one call to Portainer-IDP to release it. Portainer-IDP changes the container image in the application's manifest in Git and nothing else (comments and formatting stay as they are), commits it, and redeploys the application. The application's deploy targets still decide where it runs.

CI calls as a **release account**: an API account Portainer-IDP creates with no access to any environment. It can release only the applications that grant it **Release** on their **Access** tab.

{% hint style="info" %}
Helm applications can't be released this way yet.
{% endhint %}

## Set it up

{% stepper %}
{% step %}
### Create a CI account

An administrator creates a [CI account](releasing-from-ci.md#ci-accounts) for the application's deploy targets, under **Administration** > **CI accounts**. Without one, a release to that deploy target is refused with `409 ci_integration_disabled`.
{% endstep %}

{% step %}
### Create a release account

An administrator opens **Administration** > **Release accounts** and creates an account with a name such as `web-ci`. Portainer-IDP creates a Portainer user for it, `idp-release-web-ci`, with no team, role or environment access, and shows its token once. Nothing is set up in Portainer by hand.
{% endstep %}

{% step %}
### Grant Release on each application

On the application's **Access** tab, give the release account **Release**, the only right it can hold. Optionally, list the image repositories it may release under **Release images**, such as `ghcr.io/acme/web`. Leave out the tag.
{% endstep %}

{% step %}
### Store the token in your CI system

Store the token as a secret, for example `PORTAINER_API_KEY`. If it's lost or leaks, rotate it on the **Release accounts** page.
{% endstep %}
{% endstepper %}

## Release accounts

A release account's name may hold lowercase letters, numbers and hyphens, up to 40 characters, and must start and end with a letter or number. Choose an account to see its **Overview**, the applications that grant it Release under **Used by**, and its **Activity**. Its token is shown once, when it's created or rotated.

{% hint style="warning" %}
A leaked token can release images to the applications that grant the account Release, limited to their release images, and read those releases. Nothing else: every other request is refused, and the account has no environment access, so the token reaches nothing in Portainer either. If someone gives the account a team, a role or an environment in Portainer, Portainer-IDP refuses it outright until that is taken away, and [Doctor](admin/doctor.md) reports it.
{% endhint %}

## CI accounts

A CI account is a bot account's access token that can push to the GitOps repository of the deploy targets it covers. Releases made through the API commit with it, as `Portainer IDP`, with the release account in the commit's `IDP-Actor` trailer, so the release account needs no Git token of its own.

Create one from **Administration** > **CI accounts** with a **Name**, the **Deploy targets** it covers, the **Bot account username** and an **Access token**. Turn on **Add [skip ci] to release commits** if the GitOps home is inside the application's own repository. Removing a deploy target from a CI account refuses API releases to it until another CI account covers it.

## Making a release

An application's **Revisions** tab shows its exact call under **Automate releases**. The application's name is in the path, and the body is the image:

```bash
curl -fsS -X POST "$IDP_URL/addon-api/v1/apps/web/releases" \
  -H "X-API-Key: $PORTAINER_API_KEY" \
  -H 'Content-Type: application/json' \
  -H 'Prefer: wait=20' \
  -d '{"image":"ghcr.io/acme/web:sha-abc1234"}'
```

Every container whose image is from the same repository moves to the new image. Send `container` to name one instead, and `message` to set the commit message.

* A new release answers `202` with the release: its commit, the images it replaced and its `state`, and `links.self`, a path on the host you called, to read it again until it's no longer `running`.
* `Prefer: wait=20` holds the answer for the rollout, for up to 20 seconds. Without it the answer comes at once.
* If the application already runs that image, nothing is committed or redeployed, and the answer is `200` with `"changed": false`.
* Errors are `application/problem+json` with a `code`.

Release an immutable tag, such as the commit SHA, or a digest. A moving tag such as `latest` is the same image to Portainer-IDP after every push, and the answer warns about it.

### Private images

When the new image's registry has [registry credentials](secrets.md#registry-credentials) in the application's namespace on every deploy target, and the pod names none that serve it, the release adds them to the pod's image pull secrets in the same commit and lists them in `addedPullSecrets`. Nothing else in the file changes. Someone with **Change** on the application gets only credentials they can read. A release account can't read secrets, so for it this happens only when the application has a **Release images** list and the image is on it. When a release moves the application to a private-looking registry with no credentials it may use, the answer warns instead.

## When CI runs on the GitOps repository

Every change Portainer-IDP makes to an application, whether a release, a scale, a rollback or an edit, is a commit to its deploy target's GitOps home: a directory on a branch. If that branch is also the one your CI builds on every push, each commit starts a build. A release then commits again, and the build after it finds the same image and stops.

* **Keep GitOps homes in a deploy repository** that holds only what Portainer-IDP and Portainer deploy, with no CI of its own, or on a **deploy branch** (such as `deploy`) that your workflows don't build. Set the repository and branch on the deploy target's **GitOps target** tab.
* If the home has to stay next to the code, leave it out of the workflow's trigger with `paths-ignore`, for example `paths-ignore: ['deploy/**']`, using `**` so every file below the directory is covered. Or build only on branches the home isn't on, with `branches` or `branches-ignore`.
* Turn on **Add [skip ci] to release commits** on the CI account, or put `[skip ci]` in a release's `message`. This covers releases only: scales, rollbacks and edits still start a build.

[Doctor](admin/doctor.md#ci-runs-on-gitops-commits) checks GitHub Actions workflows for this.
