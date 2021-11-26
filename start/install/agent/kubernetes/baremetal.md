# Install Portainer Agent with Kubernetes on your Self-Managed Infrastructure

{% hint style="info" %}
These instructions are for Portainer Business Edition. For Community Edition, please refer to the Community Edition documentation.
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_ and the _Portainer Agent_. Both elements run as lightweight containers on Kubernetes. This document will outline how to install the Portainer Agent on your cluster and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../server/kubernetes/baremetal.md) first.

To get started, you will need:

* A working and up to date Kubernetes cluster.
* Access to run `kubectl` commands on your cluster.
* Cluster Admin rights on your Kubernetes cluster. This is so Portainer can create the necessary `ServiceAccount` and `ClusterRoleBinding` for it to access the Kubernetes cluster.

The installation instructions also make the following assumption about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You will be using the `portainer` namespace for Portainer.
*   You have not set a custom `AGENT_SECRET` on your Portainer Server instance. If you have, you will need to provide that secret to your agent by adding it to the YAML file within the agent deployment definition:

    `env:`

    `  - name: AGENT_SECRET`

    `    value: yoursecret`

## Deployment

To deploy Portainer Agent within a Kubernetes cluster you can use our provided YAML manifests.

{% hint style="info" %}
Helm charts for agent-only deployments will be available soon.
{% endhint %}

### Method 1: Deploying using NodePort

From the menu select **Environments** then click **Add environment**. Ensure **Agent** is selected in **Environment type**.

![](../../../../.gitbook/assets/2.9-install-agent-swarm-1.gif)

In the **Information** section select the correct operating system for the new environment then select the **Kubernetes via node port** tab. Copy the command, then run it on the control node of your Kubernetes cluster.

{% hint style="info" %}
Make sure you run this command on your Kubernetes node before continuing.
{% endhint %}

![](../../../../.gitbook/assets/endpoints-add-k8s-2.png)

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

### Method 2: Deploying using Load Balancer

From the menu select **Environments** then click **Add environment**. Ensure **Agent** is selected in **Environment type**.

![](../../../../.gitbook/assets/2.9-install-agent-swarm-1.gif)

In the **Information section** select the correct operating system for the new environment then select the **Kubernetes via load balancer** tab. Copy the command, then run it on the control node of your Kubernetes cluster.

{% hint style="info" %}
Make sure you run this command on your Kubernetes node before continuing.
{% endhint %}

![](../../../../.gitbook/assets/endpoints-add-k8s-3.png)

The deployment command will return something similar to this:

```
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
svclb-portainer-agent-52xrp        1/1     Running   0          2m26s
```

## Completing the configuration

Regardless of the method used, once the agent is running on the Kubernetes host, you must complete the appropriate environmental details.

| Field/Option | Overview                                                                                                                                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name         | Give the environment a descriptive name. This is a required field.                                                                                                                                                |
| Endpoint URL | Define the IP address or name used to connect to the environment (the Kubernetes host) and specify the port if required (`30778` when using NodePort; `9001` when using Load Balancer). This is a required field. |
| Public IP    | Enter the URL or IP address where exposed containers will be reachable. This field is optional and will default to the environment URL.                                                                           |

![](../../../../.gitbook/assets/install-agent-swarm-linux-3.png)

In the **Metadata** section, as an optional step you can categorize the environment by adding it to a [group](../../../../admin/environments/groups.md) or  [tagging](../../../../admin/environments/tags.md) it for better searchability.

![](../../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When you're ready, click **Add environment**. You will then be taken to the Kubernetes features configuration where you can set the following options:

| Field/Option                              | Overview                                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Allow users to use external load balancer | If enabled, users can expose an application deployed over an external IP address assigned by a cloud provider.       |
| Ingress controller                        | Adding ingress controllers lets users expose an application deployed over an HTTP route.                             |
| Restrict access to the default namespace  | This feature lets you restrict access to the default name space and is only available in Portainer Business Edition. |

![](../../../../.gitbook/assets/install-agent-k8s-6.png)

| Field/Option                         | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow resource over-commit           | This allows you to toggle the over-commit feature, letting you assign more resources to namespaces than are physically available within your cluster. This feature is only available in Portainer Business Edition.                                                                                                                                                                                                                                                                                                  |
| Enable features using metrics server | If enabled, users can use specific features that leverage the metrics server component. The metrics server must be installed on your Kubernetes cluster to use this.                                                                                                                                                                                                                                                                                                                                                 |
| Available storage options            | <p>Select which options will be available to users when they deploy applications. First, take a look at your storage driver documentation to figure out which access policy to configure, and if volume expansion capability is supported. Options are:</p><p></p><ul><li><strong>Local-path:</strong> Applications will be stored in the node.</li><li><strong>Shared Access Policy:</strong> RWO or RWX.</li><li><strong>Volume Expansion:</strong> Enable to expand the persistent storage of the pods.</li></ul> |

![](../../../../.gitbook/assets/install-agent-k8s-7.png)

{% hint style="info" %}
Find more information about access modes in [Kubernetes' own documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes).
{% endhint %}

When the setup is complete, click **Save configuration**.&#x20;
