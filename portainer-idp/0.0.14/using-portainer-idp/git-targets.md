# Git targets

Everything Portainer-IDP deploys is committed to Git first. A **Git target** is a repository Portainer-IDP can deploy from. It's stored in Portainer as a GitOps source, and Portainer uses its credential to read manifests from the repository and check them for changes.

A Git target is only the repository. The branch and folder are chosen on each [deploy target](deploy-targets.md), so several deploy targets can share one repository, each with its own folder.

{% hint style="info" %}
The credential on a Git target is used by Portainer to **read**. Commits are made with each person's own [Git commit identity](git-commit-identity.md), so Git history shows who changed what.
{% endhint %}

## Adding a Git target

Open **Git Targets** and choose **Add Git Target**.

| Field                     | What to enter                                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Name**                  | Optional. Defaults to the repository name.                                                                                         |
| **Repository URL**        | The full HTTPS or SSH-style Git URL, for example `https://github.com/org/repo`.                                                    |
| **Provider**              | GitHub, GitLab, Bitbucket Cloud, Bitbucket Data Center, Azure DevOps, Gitea/Forgejo, or Custom.                                    |
| **Public repository**     | Read the repository anonymously over HTTPS. No credential is stored.                                                               |
| **Credential**            | A username and token, or a **Saved credential** an administrator stored in Portainer under **Settings** > **Shared Credentials**.  |
| **Skip TLS verification** | For self-hosted Git servers with certificates Portainer can't verify.                                                              |
| **Shared with everyone**  | Administrators only. Lets every user pick this repository in deploy flows. Turn it on for the repositories teams should deploy to. |

Choose **Test connection** to check the details, then **Add Git Target**.

## Sharing

Git targets have no access list of their own in Portainer-IDP. Portainer's sharing setting on the GitOps source applies: a target is visible to the person who created it, and to everyone once an administrator turns on **Shared with everyone**.

## Where things land in the repository

Each deploy target owns a folder in its Git target, on its own branch. Inside it, Portainer-IDP keeps one folder per namespace:

| What                                             | Path                                          |
| ------------------------------------------------ | --------------------------------------------- |
| A namespace                                      | `<path>/<namespace>/namespace.yml`            |
| An application                                   | `<path>/<namespace>/<app>.yml`                |
| A secret                                         | `<path>/secrets/<namespace>/<secret>.yaml`    |
| Adopted manifests that name their own namespaces | `<path>/adopted/<file>`                       |
| System applications (administrators)             | `<system path>/sealed-secrets/controller.yml` |

For example, a deploy target with the path `clusters/production` puts the application `web` in the namespace `team-a` at `clusters/production/team-a/web.yml`.

## Deleting a Git target

A Git target can't be deleted while a deploy target commits to it or an application still deploys from it. Its row shows **In use** with a count.
