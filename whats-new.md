# What's new in version 2.22

Portainer version 2.22 includes a number of new features, fixes, and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS)

2.22 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](start/lifecycle.md).

## New Features

### Podman support ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

Version 2.22 brings official Podman support to Portainer for the first time. While Podman has partially worked in previous versions, there have been some functionality and compatibility issues that we've worked to resolve in this release.&#x20;

At present we support Podman 5.x on CentOS 9. While other versions of Podman on other Linux distributions may work, we have not fully tested outside of the above options as of yet.

### More performance improvements ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

Our ongoing efforts to improve the performance of Portainer continue in this release. In particular we've focused on the Kubernetes UI experience in 2.22, with all-around improvements to the snappiness of the Kubernetes-related functionality within Portainer.

### Two new Kubernetes security options ![](.gitbook/assets/button_be.png)

In some circumstances an administrator may want to restrict access to certain functionality within Portainer from regular users, but still retain that functionality for administrator and environment administrator users if needed. In 2.22 we've added the option for administrators to disable the Kubernetes Config download option and/or the Kubernetes Shell functionality for non-admin users.

## Enhancements and Fixes

### Expanded ACI support ![](.gitbook/assets/button_be.png)&#x20;

This release brings improvements to our Azure Container Instance (ACI) support functionality. During creation you can now select a private virtual network, add tags, volumes, and GPUs. We've also expanded the management capabilities for your ACI workloads by adding stopping and restarting of ACIs as well as viewing of events related to those ACIs.

### Updated third-party binaries and libraries ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)

As we do with every release, we've updated the versions of the third-party binaries and libraries that we use within Portainer to newer versions. This resolves more than 20 reported CVEs as well as providing improved performance and functionality in some cases.
