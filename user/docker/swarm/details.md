# Details

This page provides information about the Docker Swarm cluster for the selected environment. The page is split into the following sections: Cluster status and Nodes, with clicking a node name taking you to the Node overview for that node.

{% hint style="info" %}
This page is only available on Docker Swarm environments.
{% endhint %}

## Cluster status

This section describes the cluster's basic configuration, including the number of nodes, the Docker API version, and the total CPU and memory available. A link to the [cluster visualizer](cluster-visualizer.md) is also included.

<figure><img src="../../../.gitbook/assets/2.15-swarm-clusterstatus.png" alt=""><figcaption></figcaption></figure>

## Nodes

Lists all of the nodes in the cluster along with a summary of each node, including:

* The role of the node.
* The number of CPUs and memory available on the node.
* The Docker Engine version running on the node.
* The node's IP address.
* The status and availability of the node.

<figure><img src="../../../.gitbook/assets/2.15-swarm-nodes.png" alt=""><figcaption></figcaption></figure>

Clicking on an individual node's name will take you to an overview page for that node.

## Node overview

### Host Details

This section describes the node's basic configuration, including the hostname, OS information, and total CPU and memory.

<figure><img src="../../../.gitbook/assets/2.15-swarm-nodedetail.png" alt=""><figcaption></figcaption></figure>

### Engine Details

Information such as the Docker version and the available volume and network plugins helps you to understand more about the Docker engine running on your node.

<figure><img src="../../../.gitbook/assets/2.15-swarm-nodedetail-engine.png" alt=""><figcaption></figcaption></figure>

### PCI Devices and Physical Disks

These sections list the available PCI devices and physical disks on the node.&#x20;

{% hint style="info" %}
These sections are only visible when [host management features](setup.md#host-and-filesystem) are enabled for the cluster.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-docker-host-pci.png" alt=""><figcaption></figcaption></figure>

### Node Details

Here you'll find details about the node's configuration as part of the cluster. You can view the role, set the availability status of the node, view the current status and apply labels to the node.

<figure><img src="../../../.gitbook/assets/2.15-swarm-nodedetail-detail.png" alt=""><figcaption></figcaption></figure>

