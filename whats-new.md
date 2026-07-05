# What's new in version 2.44

Portainer version 2.44 includes a number of new features, fixes and updates. For a full list of changes, please refer to our [release notes](release-notes.md).

## Short Term Support (STS) <a href="#short-term-support-sts" id="short-term-support-sts"></a>

2.44 is a Short Term Support, or "STS", release of Portainer. STS releases intended to be an introduction of new features and functionality in Portainer, and while we do perform significant testing prior to release are not recommended for production use. For production, we recommend staying with the Long Term Support (LTS) releases. The features that appear in STS releases will, once refined and stable, be implemented in the next LTS release.

You can read more about our release principles in our [lifecycle policy](https://docs.portainer.io/sts/start/lifecycle).

## New in this release

### GPU visibility ![](.gitbook/assets/button_be.png)&#x20;

Kubernetes environments with detected GPU nodes now display a [dedicated GPU view](user/kubernetes/gpu.md) with three tables. The **GPU** table shows node readiness and a per-resource-type breakdown of GPU capacity, allocatable, allocated, and available counts, plus total and degraded node counts. The **GPU Nodes** table lists each node with its GPU capacity, allocatable, and allocated counts, along with a status badge and reason if not ready. The **GPU Workloads** table lists pods with GPU requests, showing namespace, pod name, owner workload, GPU requested, scheduled node, status, and any scheduling issues.

<figure><img src=".gitbook/assets/2.44-GPU-navigation.gif" alt=""><figcaption></figcaption></figure>

### ![](.gitbook/assets/button_be.png) ![](.gitbook/assets/button_ce.png)
