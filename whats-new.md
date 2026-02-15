---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/whats-new
---

# What's new in version 2.38

Portainer version 2.38 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.38 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New in this release

#### Policy Based Management templates ![](https://docs.portainer.io/~gitbook/image?url=https%3A%2F%2F3850702872-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FXI7douejaBgpZ6CP2zJf%252Fuploads%252Fgit-blob-f8e305e0cc6fb4cfa36a4ce103c32f968eb78b9a%252Fbutton_be.png%3Falt%3Dmedia\&width=300\&dpr=4\&quality=100\&sign=80bfe218\&sv=2) <a href="#create-centralized-policies-for-fleet-management" id="create-centralized-policies-for-fleet-management"></a>

Since the initial release of [Policies](admin/environments/policies/) as part of the Policy Based Management feature, improvements and new functionality have been added to simplify creating centralized policies across groups of environments.&#x20;

Along with [numerous fixes and UI improvements](release-notes.md#release-2.38.0-sts), this release introduces policy templates that provide preconfigured policies, making policy creation possible in just a few clicks. Templates are currently available for [Kubernetes security ](admin/environments/policies/kubernetes-policies/kubernetes-security-policy.md)and [Docker security](admin/environments/policies/docker-policies/security-policy.md) policies, with more to come in future releases.

<figure><img src=".gitbook/assets/2.38-whatsnew-policy-templates.png" alt=""><figcaption></figcaption></figure>
