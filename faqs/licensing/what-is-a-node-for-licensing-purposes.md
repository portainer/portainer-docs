# What is a node for licensing purposes?

#### With Portainer Business Edition, pricing is on a "per-node" basis. But what constitutes a node? <a href="#hs_cos_wrapper_kb-article-module-4" id="hs_cos_wrapper_kb-article-module-4"></a>

A "node" can be simply described as a "server" (whether this is an actual physical server, a VM, a Raspberry Pi, your desktop or laptop, an industrial computer, or an embedded compute device) that is capable of running containers (via Docker, Kubernetes or another orchestrator) which is either running the Portainer Server or is under the management of a Portainer Server installation.

{% hint style="info" %}
Node pricing is also dependent on the [type of node](what-is-the-pricing-for-business-edition.md) you are using.
{% endhint %}

### Docker

For Docker, we consider anything that runs Portainer, whether that be Portainer Server or Portainer Agent, as a node. This is important to remember as on clustered environments like Docker Swarm the Portainer Agent will be running on each server in the cluster and therefore count towards your number of licenses.

{% hint style="info" %}
If you are managing a Swarm cluster without using the Portainer Agent, those nodes will still count toward the number of licensed nodes. If it runs Docker-CE, is a Kubelet, or is a serverless endpoint and you manage it with Portainer, it counts as a node.
{% endhint %}

Let's look at a few examples. Say you are running a small setup consisting of three Docker Standalone servers. One of these servers is hosting the Portainer Server container, and the other two are managed from the Portainer Server container using the Portainer Agent:

<figure><img src="../../.gitbook/assets/nodes-standalone.png" alt=""><figcaption></figcaption></figure>

In this scenario, Portainer is running in three places (one Server and two Agents) so would need a 3 node license.

### Docker Swarm

Now, for Docker Swarm let's imagine a setup with one manager node (manager01) and two worker nodes (swarm01 and swarm02):

<figure><img src="../../.gitbook/assets/nodes-swarm.png" alt=""><figcaption></figcaption></figure>

Portainer Server is running on the manager node, and the agent is running on all three nodes across the swarm. Therefore, this would also require a 3 node license.

{% hint style="info" %}
If a node is running both the Portainer Server and the Portainer Agent, this is only counted as one node for licensing purposes.
{% endhint %}

An easy way to tell how many nodes are in your Docker Swarm cluster is to run

```
docker node ls
```

on your Swarm manager node. This should give you something like the following:

```
ID                            HOSTNAME     STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
081e4818wwmrecufr58jggndi *   swarm01      Ready     Active         Leader           20.10.21
mnnf958tj5c1w1tij6mpm129u     swarm02      Ready     Active                          20.10.21
ucrrkaqs549b4kfva3zwdtx1t     swarm03      Ready     Active                          20.10.21
```

### Kubernetes

Kubernetes by nature works differently to Docker, so licensing does too. Let's consider a Kubernetes cluster with one master node and two worker nodes:

<figure><img src="../../.gitbook/assets/nodes-kube.png" alt=""><figcaption></figcaption></figure>

With Kubernetes, the Portainer Agent has the ability to access the Kubernetes API in order to manage the entire cluster. This access is used to determine the number of nodes in the cluster (three in this case) which then gives you the required number of licenses (three).

An easy way to tell how many nodes are in your Kubernetes cluster is to run:

```
kubectl get nodes
```

on a server in your Kubernetes cluster. This should return something like the following:

```
NAME        STATUS   ROLES    AGE    VERSION
kube01      Ready    <none>   273d   v1.23.14-2+55c3aa5b608650
kube02      Ready    <none>   273d   v1.23.14-2+55c3aa5b608650
kube03      Ready    <none>   273d   v1.23.14-2+55c3aa5b608650
```

Each entry in the list counts as one node.

### Multiple Environments&#x20;

But what if you're running multiple environments? Let's combine what we have above into something more complex: one "management" server (running Docker Standalone) that manages a three node Docker Swarm and a three node Kubernetes cluster:

<figure><img src="../../.gitbook/assets/nodes-mixed.png" alt=""><figcaption></figcaption></figure>

You'll note the Portainer Server is only running in one place - the management server. The rest of the cluster is running the Portainer Agent. With three Docker Swarm nodes and three nodes in the Kubernetes cluster that's 6 nodes, plus the management node makes 7, for a 7 node license.\
Hopefully that has made the node licensing model easier to understand. If you're still confused, feel free to [Contact our Sales team](https://www.portainer.io/contact-sales?hsLang=en) who can help put a quote together for your specific needs.
