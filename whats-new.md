# What's new in version 2.43

Portainer version 2.43 includes a number of new fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS) <a href="#short-term-support-sts" id="short-term-support-sts"></a>

2.42 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](https://docs.portainer.io/sts/start/lifecycle).

## New in this release

#### Automated image cleanup policies ![](.gitbook/assets/button_be.png)&#x20;

You can now create an [image cleanup policy](admin/environments/policies/docker-policies/cleanup-policy.md) that automatically removes old and unused Docker images on a schedule, helping you reclaim disk space without manual intervention. Configure age-based or storage-threshold-triggered cleanup, apply policies across environment groups, and protect specific images from removal.&#x20;



#### Add KubeSolo Edge Environments directly from Portainer ![](.gitbook/assets/button_be.png)&#x20;

Business edition users can now [onboard KubeSolo edge environments](admin/environments/add/add-a-kubesolo-edge-environment/) directly through the Portainer Environment Wizard.&#x20;

[KubeSolo](https://kubesolo.io/) is a lightweight, single-node Kubernetes distribution built for edge deployments. The wizard generates the setup command for your environment and walks you through deploying the Portainer Edge Agent - whether you're installing KubeSolo fresh or already have it running and just need to add the agent.

<figure><img src=".gitbook/assets/2.43-whats-new-kubesolo.png" alt=""><figcaption></figcaption></figure>

### Edit directly from the GitOps sources view ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

The [GitOps source](user/app-delivery/sources.md) details view is now editable. Previously read-only, you can now update connection details and authentication settings directly from the Sources view, rather than having to update workflows individually.

<figure><img src=".gitbook/assets/2.43-edit-a-source-3.png" alt=""><figcaption></figcaption></figure>
