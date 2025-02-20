# Inspect a node

To view details of an individual node in your cluster, from the menu expand **Cluster** and select **Details**, then scroll down and click on the name of the node you want to inspect.

<figure><img src="../../../.gitbook/assets/2.20-kubernetes-cluster-node-inspect.gif" alt=""><figcaption></figcaption></figure>

Information about the cluster is separated into two screen tabs.

## Node

The **Node** tab summarizes the following information about the selected node:

| Field/Option    | Overview                                                                               |
| --------------- | -------------------------------------------------------------------------------------- |
| Hostname        | The hostname of the node.                                                              |
| Kubernetes API  | The address and port of the Kubernetes API for this node.                              |
| Role            | The role of the node.                                                                  |
| Kubelet version | The version of kubelet on the node.                                                    |
| Creation date   | The date when this node was created.                                                   |
| Status          | The status of the node.                                                                |
| Availability    | Defines the availability of the node. Options are **Active**, **Pause** and **Drain**. |

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-details.png" alt=""><figcaption></figcaption></figure>

### Resource reservation

This section provides details about resource reservations assigned on the node as well as the node's resource usage.&#x20;

{% hint style="info" %}
**Memory used** and **CPU used** are only displayed if you have [enabled using the metrics API](setup.md#enable-features-using-metrics-server).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-resource.png" alt=""><figcaption></figcaption></figure>

### Labels

This section lists the labels that apply to the node. You can add additional labels if required, as well as edit non-system labels.

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-labels.png" alt=""><figcaption></figcaption></figure>

### Taints

In this section you can add taints to prevent certain pods being deployed on the node.

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-taints.png" alt=""><figcaption></figcaption></figure>

## Events

Shows information about node-related events.

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-events.png" alt=""><figcaption></figcaption></figure>

## Applications running on this node

This section provides information about the applications running on the selected node. Clicking the application name will take you to the application details page for that application.

<figure><img src="../../../.gitbook/assets/2.15-k8s-cluster-node-apps.png" alt=""><figcaption></figcaption></figure>
