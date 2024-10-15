# What's new in version 2.23

Portainer version 2.23 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.23 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our CEO Neil's [blog post](https://www.portainer.io/blog/2024-release-principle).

## Enhancements and Fixes

### Performance optimizations ![](.gitbook/assets/button\_be.png) ![](.gitbook/assets/image.png)&#x20;

2.23 builds on the previous versions' optimizations to performance to once again increase the responsiveness of the Portainer experience. In particular we've made improvements to search speed on the Home page (useful for those with a lot of environments), along with a raft of improvements to the load times of Kubernetes-related pages. We've also moved some of the webhook logic into the background to help to avoid timeouts.

### Smaller Git clones ![](.gitbook/assets/button\_be.png) ![](.gitbook/assets/image.png)&#x20;

In 2.23 we've made a small but potentially quite impactful change to how we do our Git clones which should help to reduce the size on disk of those clones. If you're using our Git repository functionality when deploying stacks you may notice a reduction in the amount of disk space used by each clone going forward.

### Improved logging for OAuth and Edge ![](.gitbook/assets/button\_be.png) ![](.gitbook/assets/image.png)&#x20;

We've made some adjustments to logging and error reporting in 2.23, specifically in the OAuth and Edge areas. OAuth logs now have increased verbosity which should help with diagnosing issues with authentication timeouts. Edge API calls now report additional information when they error, including the environment ID and name, to aid in better identification when dealing with large numbers of Edge environments.
