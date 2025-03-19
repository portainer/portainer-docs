# What's new in version 2.28

Portainer version 2.28 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.28 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New in this release

### Helm SDK migration ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

In 2.28 we've switched to integrating the Helm SDK with Portainer, rather than our previous method of leveraging the Helm binary. Like the move away from the Docker Compose binary in previous versions, this change means one less vector for CVEs as well as improved performance and functionality. This also restores the ability to use the Bitnami Helm chart repo out of the box.

### Performance optimizations ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

With every release we try to make using Portainer more responsive and performant, and this release is no exception. We've migrated more of our views to the React framework, as well as made some adjustments to how systems work to reduce double-handling of data and in some cases drastically improve the load time of elements and data.&#x20;

### mTLS improvements ![](.gitbook/assets/button_be.png)&#x20;

2.28 brings updates to our mTLS functionality. We've added a new icon for environments on the dashboard that indicates the mTLS status where relevant. We've also improved the ability to view and manage your mTLS certificates from the UI rather than just the CLI, as well as fixed a few mTLS-related bugs.
