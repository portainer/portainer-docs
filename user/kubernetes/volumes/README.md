# Volumes

In Kubernetes, a volume is an abstraction of a file system made available to applications. In Portainer, you can manage the volumes deployed by your applications within your cluster.

Volumes and storage classes can be added [using a manifest](../applications/manifest/create.md) or a [helm chart](../applications/manifest/helm.md) by clicking **Create from code.**

## Persistent volume claims

Lists the persistent volume claims that exist within the cluster. To resize a persistent volume claim, select the edit icon in the **Actions** menu. Click the volume name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.43-PVC-1.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.43-PVC-2.png" alt=""><figcaption></figcaption></figure>

## Persistent volumes

Lists the persistent volumes that exist within the cluster. To edit the reclaim policy of a volume, select the edit icon in the **Actions** menu. Click the volume name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.43-PV.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.42-edit-reclaim-policy.png" alt="" width="364"><figcaption></figcaption></figure>

## Storage classes

Lists the storage classes available within your cluster. To set a storage class as the cluster default, select the star icon in the **Actions** menu. Click the storage class name to [view its details](inspect.md).

<figure><img src="../../../.gitbook/assets/2.43-storage-class.png" alt=""><figcaption></figcaption></figure>

{% content-ref url="inspect.md" %}
[inspect.md](inspect.md)
{% endcontent-ref %}

{% content-ref url="../../docker/volumes/remove.md" %}
[remove.md](../../docker/volumes/remove.md)
{% endcontent-ref %}
