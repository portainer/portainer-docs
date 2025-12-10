---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/bTMBgpWwhtAF08xfMYTs/whats-new
---

# What's new in version 2.37

Portainer version 2.37 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.37 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New in this release

### Create centralized policies for Fleet Management ![](https://docs.portainer.io/~gitbook/image?url=https%3A%2F%2F3850702872-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FXI7douejaBgpZ6CP2zJf%252Fuploads%252Fgit-blob-f8e305e0cc6fb4cfa36a4ce103c32f968eb78b9a%252Fbutton_be.png%3Falt%3Dmedia\&width=300\&dpr=4\&quality=100\&sign=80bfe218\&sv=2)

[Policies](admin/environments/policies/) are now available as part of the experimental Fleet Management feature. After enabling Fleet Management in the settings under [experimental features](admin/settings/general.md#experimental-features), admin users can create centralized policies that apply configuration, security rules, and cluster settings across groups of environments. Eight policy types are available, each designed for specific environment and access needs, with guided forms to help configure the required setup.

<figure><img src=".gitbook/assets/2.37.0-navigate-to-policies.gif" alt=""><figcaption></figcaption></figure>
