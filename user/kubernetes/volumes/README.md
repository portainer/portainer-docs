---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/user/kubernetes/volumes
---

# Volumes

In Kubernetes, a volume is an abstraction of a file system made available to applications. In Portainer, you can manage the volumes deployed by your applications within your cluster.

Volumes and storage classes can be added [using a manifest](../applications/manifest/create.md) or a [helm chart](../applications/manifest/helm.md) by clicking **Create from code.**

## Persistent volumes

Lists the persistent volumes that exist within the cluster. To edit the reclaim policy of a volume, select the edit icon in the **Actions** menu. Click the volume name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.42-P-volumes.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.42-edit-reclaim-policy.png" alt="" width="364"><figcaption></figcaption></figure>

## Persistent volume claims

Lists the persistent volume claims that exist within the cluster. To resize a persistent volume claim, select the edit icon in the **Actions** menu. Click the volume name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.42-PVCs.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.42-resize-PVC.png" alt="" width="352"><figcaption></figcaption></figure>

## Storage classes

Lists the storage classes available within your cluster. To set a storage class as the cluster default, select the star icon in the **Actions** menu. Click the storage class name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.42-storage-classes.png" alt=""><figcaption></figcaption></figure>

{% content-ref url="inspect.md" %}
[inspect.md](inspect.md)
{% endcontent-ref %}

{% content-ref url="../../docker/volumes/remove.md" %}
[remove.md](../../docker/volumes/remove.md)
{% endcontent-ref %}
