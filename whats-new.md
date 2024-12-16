# What's new in version 2.25

Portainer version 2.25 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.25 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## Enhancements and Fixes

### Edge Stacks: Staggered deployment improvements ![](.gitbook/assets/button_be.png)&#x20;

We've made some improvements to the way that Edge Stack staggered deployments work in this release. Timeout values now apply to the batch when performing parallel deployments, avoiding issues where a failed environment in a batch could halt the entire deployment unexpectedly.

### Ask the AI ![](.gitbook/assets/button_be.png)&#x20;

On our website, in our Slack channel and in our documentation we've long been using an AI bot to provide quick and easy answers for users running into issues or needing a bit of guidance. In 2.25 we've added a link in-app to the AI bot in the top right, next to the notifications icon.

<figure><img src=".gitbook/assets/2.25.0-icons.png" alt=""><figcaption></figcaption></figure>

We're interested in hearing your feedback on this addition, so please let us know your thoughts.

### Portainer support bundle ![](.gitbook/assets/button_be.png) &#x20;

For those times when you're having issues with Portainer and the documentation or the AI isn't able to help you, 2.25 introduces a [support bundle](admin/settings/) feature. This feature lets you create an export of your Portainer configuration that can then be provided to the Portainer support team, helping us to identify and troubleshoot issues more efficiently.

<figure><img src=".gitbook/assets/2.25.0-settings-support-bundle.png" alt=""><figcaption></figcaption></figure>
