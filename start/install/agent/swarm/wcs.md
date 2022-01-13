# Install Portainer Agent with Docker Swarm on Windows Container Service

## Introduction

Portainer uses the _Portainer Agent_ container to communicate with the _Portainer Server_ instance and provide access to the node's resources. This document will outline how to install the Portainer Agent on your node and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../server/swarm/wcs.md) first.

To get started, you will need:

* The latest version of Docker installed and working.
* Swarm mode enabled and working, including the overlay network for the swarm service communication.
* Administrator access on the manager node of your Swarm cluster.
* The manager and worker nodes must be able to communicate with each other over port `9001`. In addition, the Portainer Server installation must be able to reach the nodes on port `9001`. If this is not possible, we advise looking at the [Edge Agent](../edge.md) instead.

The installation instructions also make the following assumption about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.
*   You have not set a custom `AGENT_SECRET` on your Portainer Server instance. If you have, you will need to provide that secret to your agent by adding it to the stack file:

    `environment:`

    &#x20; `- AGENT_SECRET: yoursecret`

## Deploying the Agent

From the menu select **Environments** then click **Add environment**. Ensure **Agent** is selected in **Environment type**.

![](../../../../.gitbook/assets/2.9-install-agent-swarm-1.gif)

In the **Information** tab click the **Windows** button and select the **Docker Swarm** tab. Copy the command, then run the command on the manager node of your Docker Swarm cluster.

{% hint style="info" %}
You must run the command on the Docker Swarm cluster before you proceed to entering the environment details.
{% endhint %}

![](../../../../.gitbook/assets/install-agent-swarm-windows-2.png)

The deployment command will return something similar to:

```
Creating network portainer-agent_portainer_agent
Creating service portainer-agent_agent
```

To validate the Agent is running, you can run the following command:

```
 docker service ls
```

the result of which should look something like this:

```
ID                  NAME                    MODE                REPLICAS            IMAGE                    PORTS
tshb6ee2710s        portainer-agent_agent   global              1/1                 portainer/agent:latest
```

## Finishing the configuration

Once the Agent is running on the Docker Swarm cluster, enter the **environment details** using the table below as a guide:

| Field        | Overview                                                                                                                                                              |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name         | Give the environment a descriptive name. This is a required field.                                                                                                    |
| Endpoint URL | Enter the IP or DNS name at which the Portainer Server instance can reach the environment along with the port (`9001`). This is a required field.                     |
| Public IP    | URL or IP address where exposed containers will be reachable. This is an optional field and will default to the environment URL. This can be changed at a later date. |

![](../../../../.gitbook/assets/install-agent-swarm-linux-3.png)

In the **Metadata** section, as an optional step you can categorize the environment by adding it to a [group](../../../../admin/environments/groups.md) or  [tagging](../../../../admin/environments/tags.md) it for better searchability.

![](../../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When everything is set, you can click **Add environment**.
