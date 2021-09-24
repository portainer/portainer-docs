# Install Portainer Agent with Docker Swarm on Linux

## Introduction

Portainer uses the _Portainer Agent_ container to communicate with the _Portainer Server_ instance and provide access to the node's resources. This document will outline how to install the Portainer Agent on your node and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../server/swarm/linux.md) first.

To get started, you will need:

* The latest version of Docker installed and working.
* Swarm mode enabled and working, including the overlay network for the swarm service communication.
* `sudo` access on the manager node of your swarm cluster.
* The manager and worker nodes must be able to communicate with each other over port `9001`. In addition, the Portainer Server installation must be able to reach the nodes on port `9001`. If this is not possible, we advise looking at the [Edge Agent](../edge.md) instead.

The installation instructions also make the following assumptions about your environment:

* You are accessing Docker via Unix sockets. Connecting via TCP is not supported in Docker Swarm.
* SELinux is disabled on the machine running Docker. If you require SELinux, you will need to pass the `--privileged` flag to Docker when deploying Portainer.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Deploying the Agent

From the menu select **Endpoints** then click **Add endpoint**. Ensure **Agent** is selected in **Environment type**.

![](../../../../.gitbook/assets/be-agent-swarm-linux-1.gif)

In the **Information** tab click the **Linux** button and select the **Docker Swarm** tab. Copy the command, then run the command on the manager node of your Docker Swarm cluster. 

{% hint style="info" %}
You must run the command on the Docker Swarm cluster before you proceed to entering the environment details.
{% endhint %}

![](../../../../.gitbook/assets/be-agent-swarm-linux-2.png)

The deployment command will return something similar to:

```text
Creating network portainer-agent_portainer_agent
Creating service portainer-agent_agent
```

To validate the Agent is running, you can run the following command:

```text
 docker service ls
```

the result of which should look something like this:

```text
ID                  NAME                    MODE                REPLICAS            IMAGE                    PORTS
tshb6ee2710s        portainer-agent_agent   global              1/1                 portainer/agent:latest
```

## Finishing the configuration

Once the Agent is running on the Docker Swarm cluster, enter the **environment details** using the table below as a guide:

| Field | Overview |
| :--- | :--- |
| Name | Give the endpoint a descriptive name. This is a required field. |
| Endpoint URL | Enter the IP or DNS name at which the Portainer Server instance can reach the endpoint along with the port \(`9001`\) if required. This is a required field. |
| Public IP | URL or IP address where exposed containers will be reachable. This is an optional field and will default to the endpoint URL. This can be changed at a later date. |

![](../../../../.gitbook/assets/install-agent-swarm-linux-3.png)

In the **Metadata** section, as an optional step you can categorize the endpoint by adding it to a [group](../../../../admin/endpoints/groups.md) or  [tagging](../../../../admin/endpoints/tags.md) it for better searchability.

![](../../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When everything is set, you can click **Add Endpoint**.



