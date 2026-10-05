# Overview

This section covers how Portainer-IDP is built and how it relates to Portainer: the boundary that makes its access model work.

## The high-level flow

```
Developer (browser)
  → Portainer-IDP (checks access, commits with the developer's token)
    → Git repository (source of truth, one folder per deploy target)
      → Portainer Edge Stack (pulls the file, polls it for changes)
        → Edge Agent on each environment in the deploy target (applies it)
```

When you deploy, Portainer-IDP writes a manifest file to the Git repository and branch configured on the deploy target, under a folder per namespace, for example `clusters/production/team-a/web.yml`. It commits with your own personal access token, so the commit is attributed to you. It then registers a Portainer Edge Stack that points at that file, targeted at the deploy target's Edge Group. Portainer deploys it to every environment in the group and checks the file for changes every 5 minutes by default.

Every change after that, such as editing, scaling, or rolling back, is a new commit to the same file, followed by a redeploy.

This has two consequences worth knowing:

1. **Git is the source of truth**, not Portainer-IDP's database. The **Revisions** tab of an application is its commit history, and a rollback is a commit that restores an earlier version.
2. **Nothing proprietary sits between the repository and the cluster.** If Portainer-IDP is removed, every application it deployed keeps running as an ordinary Git-backed Edge Stack.

## One credential, checked access

In Portainer, deploying Edge Stacks needs the Edge Administrator role, and that role applies to every stack. Portainer-IDP solves this by holding the edge access itself:

* The Portainer-IDP backend holds a single Portainer account with the Edge Administrator role, the **Edge Admin credential**. Every Edge Stack and Edge Group request is made with it. Users need no edge rights of their own, and a request they sent straight to Portainer would be refused.
* Before the backend acts, it identifies you from your own Portainer session and checks your [role](roles.md) and the access list of the object you're acting on: the application, secret, namespace, or deploy target. The Edge Admin credential only carries out actions. It's never used to decide who you are.
* An application's live state goes through the same check. Its Deployment, pods, Services, Ingresses, metrics, and logs are read by the backend and returned only for applications you can see. The namespaces Portainer-IDP creates give users no direct Kubernetes access.

{% hint style="warning" %}
Access lists are enforced by Portainer-IDP, not by Portainer. Anyone who holds edge rights in Portainer directly, through the Edge Administrator role or an access token for such an account, can use Portainer's Edge Stack API and isn't bound by them. Give developers ordinary Portainer accounts, and keep the Edge Administrator role for administrators and Portainer-IDP's own account.
{% endhint %}

## Components

Portainer-IDP is a single container: a React web application and a small backend, served by Portainer's add-on gateway at `/addons/portainer-idp/` on the same address as Portainer. It runs as one replica in the `portainer-addon-portainer-idp` namespace, with a persistent volume for its database.

```
Browser
  → Portainer add-on gateway (same origin as Portainer, your session cookie)
    → Portainer-IDP backend
      → Portainer API        (identity, as you; Edge Stacks and Groups, as the Edge Admin account)
      → Git provider         (commits, with your personal access token)
      → Edge environments    (live status, logs and metrics, through Portainer)
```

* **Nothing in the browser loads from another origin.** Scripts, fonts, and images are served by the add-on itself, so Portainer-IDP works in air-gapped installations, and anything external, such as a Helm repository or a public Git host, is reached through the backend and checked against an allow list.
* **Credentials stay server-side.** Personal access tokens are encrypted at rest and never returned to the browser. Secret values are sealed in the browser, so the backend never sees them in plaintext.

## Where things are stored

| What                            | Where                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Applications and secrets        | Manifests in Git, and Edge Stacks in Portainer. Access lists and group membership are kept on the Edge Stack itself. |
| Deploy targets                  | The add-on's database, each paired with a Portainer Edge Group.                                                      |
| Git targets                     | Portainer, as GitOps sources.                                                                                        |
| Git commit identities           | The add-on's database, with the token encrypted.                                                                     |
| Audit log                       | The add-on's database, and optionally its standard output.                                                           |
| Edge Admin credential, settings | Portainer's add-on configuration store.                                                                              |
| Encryption key                  | A Secret generated by the Helm chart, kept across upgrades and uninstalls.                                           |
| Sealing key                     | The Secret `portainer-idp-sealing-key` in `kube-system` on each environment.                                         |

## Next: Roles and access control

What a given user can actually see and do inside Portainer-IDP is covered in [Roles and access control](roles.md).
