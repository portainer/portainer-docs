# Requirements

Portainer-IDP is an add-on, so it runs inside an existing Portainer Business installation and deploys through Portainer's Edge features. Make sure the following are in place before you install it.

## Portainer Business Edition

Portainer-IDP is installed and managed through Portainer's [add-on catalog](https://docs.portainer.io/admin/add-ons), which is part of Portainer Business Edition. Portainer itself must run on Kubernetes, because the add-on is deployed into the same cluster as a Helm chart.

## Edge Compute enabled

Portainer-IDP deploys everything as Edge Stacks targeted at Edge Groups. Turn on **Edge Compute** in Portainer's settings. Without it, deploying applications and secrets is unavailable, and Portainer-IDP shows a notice saying so.

## Kubernetes environments connected with the Edge Agent

Deploy targets can only contain Kubernetes environments connected with the Portainer Edge Agent. Docker environments and other Kubernetes connection types are not listed.

For the best experience, each environment should also have:

* **An ingress controller**, if applications should get their own hostnames.
* **A default storage class**, for applications that use persistent storage.
* **metrics-server**, for the CPU and memory charts on an application's **Metrics** tab.

[Cluster Readiness](using-portainer-idp/admin/cluster-readiness.md) checks each environment for these once Portainer-IDP is installed.

## A default storage class on the Portainer cluster

The add-on keeps a small database on a persistent volume: Git commit identities, deploy targets and the audit log. The cluster Portainer runs on needs a default storage class, or you can name one in the chart's `storageClass` value.

## A Git repository

Everything Portainer-IDP deploys is committed to Git first. You'll need a repository on GitHub, GitLab, Gitea or Forgejo that manifests can be committed to. A private repository is strongly recommended.

You'll also need two kinds of credential:

* **A read credential for Portainer**, stored on the [Git target](using-portainer-idp/git-targets.md). Portainer uses it to read manifests and check them for changes.
* **A personal access token for each person who deploys**, with permission to push to the repository. Portainer-IDP commits with it, so every commit is attributed to the person who made the change. See [Git commit identity](using-portainer-idp/git-commit-identity.md).

## Next step

Once these are in place, continue to [Quick Start](quick-start.md) to get Portainer-IDP running.
