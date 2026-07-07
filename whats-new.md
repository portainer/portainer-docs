# What's new in version 2.44

Portainer version 2.44 includes a number of new features, fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS) <a href="#short-term-support-sts" id="short-term-support-sts"></a>

2.44 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](https://docs.portainer.io/sts/start/lifecycle).

## New in this release

### GPU visibility ![](.gitbook/assets/button_be.png)&#x20;

Kubernetes environments with detected GPU nodes now display a [dedicated GPU view](user/kubernetes/gpu.md) with three tables. The **GPU** table shows node readiness and a per-resource-type breakdown of GPU capacity, allocatable, allocated, and available counts, plus total and degraded node counts. The **GPU Nodes** table lists each node with its GPU capacity, allocatable, and allocated counts, along with a status badge and reason if not ready. The **GPU Workloads** table lists pods with GPU requests, showing namespace, pod name, owner workload, GPU requested, scheduled node, status, and any scheduling issues.

<figure><img src=".gitbook/assets/2.44-GPU-navigation.gif" alt=""><figcaption></figcaption></figure>

### **A dedicated node shell** ![](.gitbook/assets/button_be.png)&#x20;

Administrators can now open a root shell directly on any cluster node from the [Nodes table](user/kubernetes/cluster/details/#nodes), without needing SSH. The feature is disabled by default and can be enabled per cluster in Cluster → Setup → [Security](user/kubernetes/cluster/setup.md#security), or centrally through a [Kubernetes Security Policy](admin/environments/policies/kubernetes-policies/kubernetes-security-policy.md).

<figure><img src=".gitbook/assets/2.44-an-open-node-shell.png" alt="" width="563"><figcaption></figcaption></figure>

### ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)
