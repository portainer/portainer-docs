# Inspect a node

To view details of an individual node in your cluster, from the menu select **Cluster** then scroll down and click on the name of the node you want to inspect.

![](../../../.gitbook/assets/2.9-cluster-node-1.gif)

Information about the cluster is separated into two screen tabs.

## Node tab

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

![](../../../.gitbook/assets/cluster-node-2.png)

### Resource reservation section

This section provides details about resource reservations assigned on the node as well as the node's resource usage.&#x20;

![](../../../.gitbook/assets/2.9-cluster-node-3.png)

### Labels section

This section lists the labels that apply to the node. You can add additional labels if required, as well as edit non-system labels.

![](../../../.gitbook/assets/cluster-node-4.png)

### Taints section

In this section you can add taints to prevent certain pods being deployed on the node.

![](../../../.gitbook/assets/cluster-node-5.png)

## Events tab

Shows information about node-related events.

![](../../../.gitbook/assets/cluster-node-6.png)

## Applications running on this node section

This section provides information about the applications running on the selected node. Clicking the application name will take you to the application details page for that application.

![](../../../.gitbook/assets/cluster-node-7.png)
