# Install Portainer Agent on your Kubernetes environment

## Introduction

Portainer consists of two elements, the _Portainer Server_ and the _Portainer Agent_. Both elements run as lightweight containers on Kubernetes. This document will outline how to install the Portainer Agent on your cluster and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../install/server/kubernetes/baremetal.md) first.

To get started, you will need:

* A working and up to date Kubernetes cluster.
* Access to run `kubectl` commands on your cluster.
* Cluster Admin rights on your Kubernetes cluster. This is so Portainer can create the necessary `ServiceAccount` and `ClusterRoleBinding` for it to access the Kubernetes cluster.

The installation instructions also make the following assumption about your environment:

* Your environment meets [our requirements](../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You will be using the `portainer` namespace for Portainer.
*   You have not set a custom `AGENT_SECRET` on your Portainer Server instance. If you have, you will need to provide that secret to your agent by adding it to the YAML file within the agent deployment definition:

    `env:`

    &#x20; `- name: AGENT_SECRET`

    &#x20;   `value: yoursecret`

## Deployment

To deploy Portainer Agent within a Kubernetes cluster you can use our provided YAML manifests.

{% hint style="info" %}
Helm charts for agent-only deployments will be available soon.
{% endhint %}

From the menu select **Environments** then click **Add environment**.

<figure><img src="../../../.gitbook/assets/2.16-environments-add (1).gif" alt=""><figcaption></figcaption></figure>

Select the **Kubernetes** option and click **Start Wizard**. Select the **Agent** option and choose the tab that matches your configuration (**Kubernetes via load balancer** or **Kubernetes via node port**). Copy the command, then run it on the control node of your Kubernetes cluster.

{% hint style="info" %}
Make sure you run this command on your Kubernetes node before continuing.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-k8s_agent.png" alt=""><figcaption></figcaption></figure>

The deployment command will return something similar to this:

```
namespace/portainer created
serviceaccount/portainer-sa-clusteradmin created
clusterrolebinding.rbac.authorization.k8s.io/portainer-crb-clusteradmin created
service/portainer-agent created
service/portainer-agent-headless created
deployment.apps/portainer-agent created
```

To validate that the agent is running, use this command:

```
 kubectl get pods --namespace=portainer
```

The result should look something like this:

```
NAME                               READY   STATUS    RESTARTS   AGE
portainer-agent-5988b5d966-bvm9m   1/1     Running   0          15m
```

Once the Portainer Agent has been successfully deployed on the cluster, you can complete the rest of the environment configuration.

## Completing the configuration

Regardless of the method used, once the agent is running on the Kubernetes host, you must complete the appropriate environmental details.

{% hint style="warning" %}
Only do this **once** for your environment, regardless of how many nodes are in the cluster. You do **not** need to add each node as an individual environment in Portainer. Adding just one node will allow Portainer to manage the entire cluster.
{% endhint %}

| Field/Option        | Overview                                                                                                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                | Give the environment a descriptive name.                                                                                                                                                |
| Environment address | Define the IP address or name used to connect to the environment (the Kubernetes host) and specify the port if required (`30778` when using NodePort; `9001` when using Load Balancer). |

<figure><img src="../../../.gitbook/assets/2.15-k8s_env_url.png" alt=""><figcaption></figcaption></figure>

As an optional step you can expand the **More settings** section and categorize the environment by adding it to a [group](../../../admin/environments/groups.md) or [tagging](../../../admin/environments/tags.md) it for better searchability.

<figure><img src="../../../.gitbook/assets/2.15-k8s_more_settings.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Connect**. If you have other environments to configure click **Next** to proceed, otherwise click **Close** to return to the list of environments.
