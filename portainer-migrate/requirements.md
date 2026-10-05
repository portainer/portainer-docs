# Requirements

Before you install Portainer-Migrate, check that you have the following in place.

## Portainer

* **Portainer Business Edition with add-on support.** Portainer-Migrate is an add-on and installs through Portainer's add-on catalog. Add-ons run on the Kubernetes cluster that hosts Portainer, so Portainer itself must be running on Kubernetes (1.21 or later). See [Add-ons in the Portainer documentation](https://docs.portainer.io/admin/add-ons).
* **Portainer 2.45.0 or 2.45.1.** These are the versions Portainer-Migrate is currently tested against. Later 2.45 builds have a known issue that stops the first migration into a repository; see [Known issues and limitations](reference/known-issues-and-limitations.md).
* **A valid Portainer Business license.** If the license is invalid, Portainer-Migrate sends you to Portainer's license page.
* **A Portainer administrator account** to run migrations. See [Permissions](architecture/permissions.md).

{% hint style="info" %}
Portainer-Migrate needs about 50m CPU and 64 MiB of memory (limits of 250m CPU and 256 MiB), plus up to 2 GiB of temporary disk on the node it runs on, used while it stages volume data for a copy.
{% endhint %}

## Source environments

The workloads you want to move must be in a **Docker** or **Docker Swarm** environment that Portainer manages: a local environment, the Portainer Agent, or the Portainer Edge Agent. Kubernetes environments are migration targets only, never sources.

If you want Portainer-Migrate to copy volume data automatically, the source must be a **standalone Docker** environment. Data in Swarm services can only be migrated when it lives on NFS. See [Migrating data](migrating-data.md).

## Target environment

You need a **Kubernetes** environment in Portainer to migrate into: a local environment, the Portainer Agent or the Portainer Edge Agent, including KubeSolo. It must:

* Be online and reachable through Portainer's Kubernetes API proxy. Disconnected or asynchronous Edge environments can't receive copied data.
* Have a **default StorageClass**, if any workload you migrate has volumes.
* Be able to pull your workloads' images.
* Be able to pull `python:3.13-alpine`, if you are copying volume data. It is used by a short-lived restore container. If your cluster enforces the `restricted` pod-security profile, note that this container runs as root so it can preserve file ownership.

## Git repository

Portainer-Migrate deploys through Git, so you need a repository it can write to on **GitHub** (including GitHub Enterprise), **GitLab** or **Gitea**, either hosted or self-hosted, and an access token with write access to it. For GitLab and Gitea, the branch you deploy from must already exist.

See [Initial configuration](initial-configuration.md) for how to prepare the repository and token.

## Network

| From                            | To                                         | Why                                                     |
| ------------------------------- | ------------------------------------------ | ------------------------------------------------------- |
| The Portainer-Migrate pod       | The Portainer API                          | Staging volume data and checking your session.          |
| The Portainer-Migrate pod       | Your Git provider's API (HTTPS)            | Listing repositories and committing manifests.          |
| Portainer                       | Your Git repository                        | Pulling the manifests to deploy them.                   |
| The target cluster's API server | Pods in the target namespace, on port 8080 | Delivering copied volume data to the restore container. |
| The target cluster's nodes      | Your NFS server (port 2049)                | Only when you migrate NFS volumes in place.             |

{% hint style="warning" %}
If your Portainer installation applies a default-deny NetworkPolicy to add-on namespaces, make sure the Portainer-Migrate pod is still allowed outbound HTTPS to your Git provider. Without it, the Connections step can't list repositories.
{% endhint %}

Once you've confirmed the above, move on to the [Quick Start](quick-start.md).
