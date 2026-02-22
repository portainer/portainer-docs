---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/whats-new
---

# What's new in version 2.39

Portainer version 2.39 includes a number of new fixes and updates, bringing the changes from the previous STS releases into the LTS stream. For a full list of changes, please refer to our [release notes](release-notes.md).

## Long Term Support (LTS)

2.39 is a Long Term Support, or "LTS", release of Portainer. LTS releases are intended to to be solid, tested, production-ready versions of Portainer, suitable for running in both testing and production environments. LTS releases generally do not have any additional features as compared to the previous STS release, but rather are a consolidation of all the new features and changes that have gone into the previous STS releases but with additional polishing and testing.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New in this release

### Fleet Governance Policies  ![](.gitbook/assets/button_be.png)

With this release we’re introducing [Fleet Governance Policies](admin/environments/policies/) - a new way to govern container infrastructure at scale.

As organizations grow, it’s common to end up managing tens or even hundreds of clusters, each configured slightly differently, which quickly turns into an operational and security headache. Fleet Governance Policies help you define security, access, and configuration standards once, then automatically enforce them across your entire fleet, regardless of cloud, region, or deployment model. Policies stay continuously enforced, correct drift automatically, and apply instantly to new clusters as they’re onboarded. With prebuilt policy templates for production and development environments, it’s easier than ever to get started - and this is just the first step toward true fleet-wide cluster management in Portainer.

We're really excited about where this will lead in the future - give it a try and let us know your feedback!

### Alerting graduates from experimental  ![](.gitbook/assets/button_be.png)

In earlier releases, we introduced [alerting](user/observability/alerting.md) as an experimental feature, allowing administrators to configure alerts based on conditions such as environments going offline, failed backups, or high resource usage. Since then, we’ve refined and improved the feature, and in 2.39 alerting is now generally available. Administrators can enable alerting under **Observability** from the [Additional Functionality](admin/settings/general.md#additional-functionality) section, making it easier to monitor environment health and react to issues without relying solely on external tooling.

### Docker stack renaming  ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

You can now rename an existing Docker stack as part of the [Stack duplication or migration workflow](user/docker/stacks/migrate.md). This makes it easier to reorganize or migrate stacks without needing to recreate them from scratch.

### Shared Git credentials  ![](.gitbook/assets/button_be.png)

You can now create and manage shared Git credentials directly from the [Shared Credentials](admin/settings/credentials/) view. These credentials can be reused across deployments and templates by any admin-level user, without exposing the underlying secrets. Once added, shared Git credentials can be selected when setting up a deployment or when creating a custom Docker template, reducing duplication and simplifying Git-based workflows.

### Registry management improvements  ![](.gitbook/assets/button_be.png)

As part of our ongoing transition from Angular to React, we’ve refactored the [registry repository management view](admin/registries/browse.md). Managing repository tags is now significantly simpler. We’ve streamlined how tags are loaded, added, and removed, eliminating the need for manual batch loading and making registry management faster and more intuitive - especially when working with large repositories.

### Inspect Kubernetes CRDs and custom resources  ![](.gitbook/assets/button_be.png)

Administrators can now inspect [Kubernetes Custom Resource Definitions](user/kubernetes/more-resources/custom-resources.md) and their associated custom resources directly from the Portainer UI. You can view resources as raw YAML or see a detailed summary equivalent to kubectl describe, making it easier to understand and troubleshoot custom resources without leaving Portainer.

### Node YAML editor  ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

We’ve added the ability to view node YAML directly from the [Node details](user/kubernetes/cluster/details/node.md) view. For Portainer Business Edition users, this goes a step further - you can now apply changes to the node YAML directly from the UI, making it easier to inspect and manage node-level configuration without switching tools or contexts.

### Git-based Helm deployments  ![](.gitbook/assets/button_be.png)

Helm chart deployments can now be managed directly from Git. You can [deploy Helm charts from a Git repository](user/kubernetes/applications/manifest/helm.md#git-repository), track whether a release is in sync with its source, and view Git details for deployed releases. Applications created from Git can also be updated by modifying the Git settings directly within the application view, bringing Helm workflows more closely in line with GitOps practices.

### Helm manifest preview  ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

When creating or upgrading a Helm chart, you’ll now see a [Manifest preview](user/kubernetes/applications/inspect-helm.md#manifest) alongside the values YAML. This allows you to inspect exactly what Kubernetes resources will be applied before committing a deployment or upgrade, helping catch configuration issues earlier and making Helm-based workflows more transparent.

### Always clone option for Edge stacks  ![](.gitbook/assets/button_be.png)

For Edge stacks that use relative path volumes, there’s now an [Always clone](user/edge/stacks/add.md#always-clone-git-repository) option. When enabled, Portainer will automatically pull the latest content from the Git repository during deployment, ensuring that Edge environments always receive the most up-to-date configuration and files.
