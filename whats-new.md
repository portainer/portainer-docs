# What's new in version 2.35

Portainer version 2.35 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.35 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New in this release

### Automatic patch updates ![](https://docs.portainer.io/~gitbook/image?url=https%3A%2F%2Fcontent.gitbook.com%2Fcontent%2FXI7douejaBgpZ6CP2zJf%2Fblobs%2FpVQRQqVtoWyELrx2mP2t%2Fbutton_be.png\&width=300\&dpr=4\&quality=100\&sign=b5e853a3\&sv=2)&#x20;

Portainer now supports [automatic patch updates](admin/settings/general.md#automatic-portainer-patch-updates), keeping your instance up to date with the latest patch releases. You can schedule when patches are applied, use a custom registry for air-gapped or restricted environments, and track applied updates in the Patch history table.&#x20;

This feature is in beta and should be used with caution in production environments.

<figure><img src=".gitbook/assets/2.35_auto_patch_updates.png" alt=""><figcaption></figcaption></figure>

### Git integration for Helm chart deployments ![](https://docs.portainer.io/~gitbook/image?url=https%3A%2F%2Fcontent.gitbook.com%2Fcontent%2FXI7douejaBgpZ6CP2zJf%2Fblobs%2FpVQRQqVtoWyELrx2mP2t%2Fbutton_be.png\&width=300\&dpr=4\&quality=100\&sign=b5e853a3\&sv=2)&#x20;

Portainer now supports [deploying Helm charts directly from a Git source](user/kubernetes/applications/manifest/helm.md#git-repository), allowing you to manage Helm releases through your Git repository. You can view Git details for deployed Helm releases and see when a release is out of sync with its Git source. Applications created from Git [can also be edited](user/kubernetes/applications/edit-helm.md) and upgraded by modifying the Git settings directly within the application view.

<figure><img src=".gitbook/assets/2.35-whats-new-helm.gif" alt=""><figcaption></figcaption></figure>

### Always clone option for Edge stacks ![](https://docs.portainer.io/~gitbook/image?url=https%3A%2F%2Fcontent.gitbook.com%2Fcontent%2FXI7douejaBgpZ6CP2zJf%2Fblobs%2FpVQRQqVtoWyELrx2mP2t%2Fbutton_be.png\&width=300\&dpr=4\&quality=100\&sign=b5e853a3\&sv=2)&#x20;

You can now choose to [always clone your Git repository](user/edge/stacks/add.md#always-clone-git-repository) when deploying Edge stacks that use relative path volumes. Enabling this option will ensure that Portainer automatically pulls the latest content from your Git repository to the target environment during deployment.

<figure><img src=".gitbook/assets/2.35-Always-clone-git-standalone.png" alt=""><figcaption></figcaption></figure>
