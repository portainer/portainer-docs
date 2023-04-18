# Volumes

In Kubernetes, a volume is an abstraction of a file system that is available to applications. In Portainer you can manage the volumes that have been deployed by your applications within your cluster.

{% hint style="info" %}
Volumes can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

{% content-ref url="inspect.md" %}
[inspect.md](inspect.md)
{% endcontent-ref %}

{% content-ref url="../../docker/volumes/remove.md" %}
[remove.md](../../docker/volumes/remove.md)
{% endcontent-ref %}

## Volumes tab

Lets you view information about the volumes that exist within the cluster, including:

* The namespace that each volume is a part of.
* Which applications use each volume.
* The storage class each volume belongs to.
* The size of each volume.
* When the volumes were created and by whom.
* A volume with the **external** flag was created outside of Portainer, which means Portainer has limited knowledge on it compared to one created within Portainer. A label of **unused** means that Portainer cannot see any applications that are using this volume. This label may also appear on **external** resources because of the limited information available.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_volumes_voulme_list.png" alt=""><figcaption></figcaption></figure>

## Storage tab

The storage tab lists the storage classes available within your infrastructure along with the disk space used by each volume. Each storage class can be expanded to list the volumes contained within.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_volumes_storage_list.png" alt=""><figcaption></figcaption></figure>
