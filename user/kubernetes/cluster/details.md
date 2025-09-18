# Details

A cluster is a collection of nodes that runs containerized workloads. Portainer lets you keep track of your cluster and its individual nodes, including resource usage and configuration.

From the menu expand the **Cluster** section and select **Details**.&#x20;

<figure><img src="../../../.gitbook/assets/2.20-kubernetes-cluster-details.gif" alt=""><figcaption></figcaption></figure>

The following information is provided:

| Attribute          | Overview                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Memory reservation | The amount of memory available to the cluster.                                                                                                              |
| Memory used        | The amount of memory used by the cluster. This is only visible if you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api). |
| CPU reservation    | The amount of CPU that has been reserved in the cluster.                                                                                                    |
| CPU used           | The amount of CPU used by the cluster. This is only visible if you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api).    |

<figure><img src="../../../.gitbook/assets/2.27-kubernetes-cluster-details-resource-reservation.png" alt=""><figcaption></figcaption></figure>

## Omni cluster management

{% hint style="info" %}
This section only appears when the environment is a [Talos Kubernetes cluster provisioned by Portainer through Omni](../../../admin/environments/add/kube-create/omni.md).
{% endhint %}

In this section you can see and update the versions of Kubernetes and Talos on your Talos Kubernetes cluster provisioned by Portainer.

{% hint style="warning" %}
This functionality is in beta and only tested with some configurations.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.26-kubernetes-cluster-details-omni.png" alt=""><figcaption></figcaption></figure>

## MicroK8s cluster management

{% hint style="info" %}
This section only appears when the environment is a MicroK8s cluster provisioned via the [Create a Kubernetes cluster](../../../admin/environments/add/kube-create/microk8s/) functionality.
{% endhint %}

{% hint style="danger" %}
MicroK8s cluster management functionality is deprecated and will be removed in a future release. You will still be able to use your MicroK8s clusters as normal but this management functionality will be removed.
{% endhint %}

In this section you can see and make changes to the configuration of your MicroK8s cluster provisioned by Portainer.

{% hint style="warning" %}
This functionality is in beta and only tested with some configurations. Refer to our [known issues knowledge base article](https://portal.portainer.io/knowledge/microk8s-known-issues) for caveats when using this feature.
{% endhint %}

| Field/Option                        | Overview                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kubernetes version                  | <p>Displays the version of Kubernetes that is running on your cluster.<br>If a newer version of Kubernetes is available, you can click the <strong>Upgrade</strong> button to upgrade your cluster to the version specified. Note that upgrading may cause your cluster to be unavailable while the upgrade processes. </p> |
| Required addons (already installed) | Displays a list of the already installed required addons for your cluster.                                                                                                                                                                                                                                                  |
| Optional addons                     | Displays the optional addons (if any) that are installed on your cluster, as well as any arguments that were used in their configuration. You can adjust the arguments for the addons here, click the **Add addon** button to add additional addons, or click the trash can icon next to an addon to remove it.             |

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-cluster-microk8s.png" alt=""><figcaption></figcaption></figure>

Click the **Apply Changes** button to apply any adjustments you have made to addon configurations, or **Cancel** to revert your changes.

## Nodes

This section lists the nodes in your cluster with information about each node. To view [details of a specific node](node.md), click the name of the node in the list.&#x20;

<figure><img src="../../../.gitbook/assets/2.27-kubernetes-details-nodes-list.png" alt=""><figcaption></figcaption></figure>

The **Conditions** column shows any conditions that are currently active on the node. If no conditions are displayed, this indicates the node is healthy. Any active conditions (DiskPressure, MemoryPressure, PIDPressure, NetworkUnavailable) will be displayed for the particular node.

To view usage stats for a node, click the stats icon to the right of the node.

{% hint style="info" %}
Node stats are only available when you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.17-k8s-cluster-nodestats.png" alt=""><figcaption></figcaption></figure>

On Talos Kubernetes or MicroK8s environments provisioned with the [Create a Kubernetes cluster](../../../admin/environments/add/kube-create/) feature, you will also see buttons to add and remove nodes as well as additional action icons on MicroK8s environments to view the MicroK8s status (for control plane nodes) and to connect to the environment via SSH console.

If you need to adjust elements of your Kubernetes configuration you can do so by selecting **Setup** in the left menu.

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

If you would like to define security constraints on the pods in your environment, select **Security constraints**.

{% content-ref url="security.md" %}
[security.md](security.md)
{% endcontent-ref %}

