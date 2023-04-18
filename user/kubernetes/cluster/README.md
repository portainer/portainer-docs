# Cluster

A cluster is a collection of nodes that runs containerized workloads. Portainer lets you keep track of your cluster and its individual nodes, including resource usage and configuration.

From the menu select **Cluster**.&#x20;

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster.gif" alt=""><figcaption></figcaption></figure>

The following information is provided:

| Attribute          | Overview                                                                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Memory reservation | The amount of memory available to the cluster.                                                                                                              |
| Memory used        | The amount of memory used by the cluster. This is only visible if you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api). |
| CPU reservation    | The amount of CPU that has been reserved in the cluster.                                                                                                    |
| CPU used           | The amount of CPU used by the cluster. This is only visible if you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api).    |
| Leader status      | This section lists components and their leader node in your cluster.                                                                                        |

<figure><img src="../../../.gitbook/assets/2.17-k8s-cluster-detail.png" alt=""><figcaption></figcaption></figure>

## Nodes

This section lists the nodes in your cluster with information about each node. To view [details of a specific node](node.md), click the name of the node in the list.&#x20;

<figure><img src="../../../.gitbook/assets/2.17-k8s-cluster-nodeslist.png" alt=""><figcaption></figcaption></figure>

To view usage stats for a node, click the **Stats** link to the right of the node.

{% hint style="info" %}
Node stats are only available when you have [enabled using the metrics API](setup.md#enable-features-using-the-metrics-api).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.17-k8s-cluster-nodestats.png" alt=""><figcaption></figcaption></figure>

If you need to adjust elements of your Kubernetes configuration you can do so here as well.

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

If you would like to define security constraints on the pods in your environment, select **Security constraints**.

{% content-ref url="security.md" %}
[security.md](security.md)
{% endcontent-ref %}



