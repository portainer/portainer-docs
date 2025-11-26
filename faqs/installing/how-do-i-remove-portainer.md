---
description: >-
  This will guide you through removing Portainer from Docker Standalone, Docker
  Swarm and Kubernetes environments.
---

# How do I remove Portainer?

## **Docker Standalone**

{% stepper %}
{% step %}
### 1. Remove Portainer

{% hint style="info" %}
If you changed the default name of the Portainer container, please use that; the command below assumes you used the default name.
{% endhint %}

{% stepper %}
{% step %}
#### **Stop the Portainer container**

To remove the Portainer server, first, stop the running Portainer container by executing the following docker stop command:&#x20;

```
docker stop portainer
```
{% endstep %}

{% step %}
**Delete the Portainer container**

Once the Portainer container is stopped, you can delete it using the following rm command:

```
docker rm portainer
```
{% endstep %}
{% endstepper %}
{% endstep %}

{% step %}
### Remove Portainer data volume

{% hint style="info" %}
If you changed the default name of the Portainer data volume, please use that; the command below assumes you used the default name.
{% endhint %}

**Delete the Portainer data volume**

Ensure Portainer has been removed before attempting to delete the volume using the following command.&#x20;

**Note that this command will irreversibly delete your Portainer data volume.**

```
docker volume rm portainer_data
```
{% endstep %}

{% step %}
### Remove Portainer Agents

{% hint style="info" %}
If you changed the default name of the Portainer Agent container, please use that; the command below assumes you used the default name.
{% endhint %}

{% stepper %}
{% step %}
#### **Stop the Portainer Agent container**

To remove the Portainer Agent, first, stop the running Portainer Agent container using the following docker stop command:

```
docker stop portainer_agent
```

For Edge Agents:

```
docker stop portainer_edge_agent
```
{% endstep %}

{% step %}
**Delete the Portainer Agent container**

Once the Portainer Agent container is stopped, you can delete it using the following rm command:

```
docker rm portainer_agent
```

For Edge Agents:

```
docker rm portainer_edge_agent
```
{% endstep %}
{% endstepper %}
{% endstep %}
{% endstepper %}

***

## **Docker Swarm**

{% stepper %}
{% step %}
#### **Remove the Docker Swarm stack**

{% hint style="info" %}
This assumes you followed the official Portainer documentation when deploying the Portainer Stack. If you have Edge Agents, refer to "**Removing The Edge Agent Service**" first.
{% endhint %}

For Portainer deployments via Docker Swarm and deployed via the Portainer stack, which includes Portainer, Portainer Agent, and the agent network, can be deleted using the following command.&#x20;

```
docker stack rm portainer
```
{% endstep %}

{% step %}
**Remove the Edge Agent service**

If you are running Portainer Edge Agents, the service for this needs to be removed before removing the Docker Swarm stack.

```
docker service rm portainer_edge_agent
```
{% endstep %}

{% step %}
**Remove the Docker Swarm volume**

The Portainer data volume can now be removed by running the following command.&#x20;

**Please note that this command will permanently delete your Portainer data volume.**

```
docker volume rm portainer_portainer_data
```
{% endstep %}
{% endstepper %}

***

## Kubernetes Deployment

**Remove the Portainer namespace**

Portainer deployments created via Kubernetes can be removed by deleting the Portainer namespace. This process is the same whether Portainer was deployed via Helm or YAML.

This will remove all resources under the Portainer namespace, including Edge Agents.&#x20;

{% hint style="info" %}
By default, the Persistent Volume is not retained when the namespace is removed. If you set your Persistent Volume to retain, you will need to delete it manually.
{% endhint %}

**Please be aware that deleting namespaces in Kubernetes can result in the permanent loss of all resources within that namespace. Proceed with caution and ensure backups are in place if needed.**

```
kubectl delete namespace portainer
```
