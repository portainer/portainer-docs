# Install Portainer BE with Docker Swarm on WSL / Docker Desktop

{% hint style="info" %}
These installation instructions are for Portainer Business Edition (BE). For Portainer Community Edition (CE) refer to the [CE install documentation](../../../install-ce/server/swarm/wsl.md).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows environment with WSL and Docker Desktop. To add a new WSL / Docker Desktop Swarm environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../../../admin/environments/add/swarm/agent.md).

To get started, you will need:

* The latest version of Docker Desktop installed and working.
* Swarm mode [enabled](https://docs.docker.com/engine/swarm/swarm-mode/) and working, including the overlay network for the swarm service communication.
* Administrator access on the manager node of your Swarm cluster.
* Windows Subsystem for Linux (WSL) installed and a Linux distribution selected. For a new installation we recommend WSL2.
* By default, Portainer will expose the UI over port `9443` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* The manager and worker nodes must be able to communicate with each other over port `9001`.
* A license key for Portainer Business Edition.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You are accessing Docker via Unix sockets. Alternatively, you can also connect via TCP.
* SELinux is disabled within the Linux distribution used by WSL.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.
* You are running a single manager node in your swarm. If you have more than one, please [read this article](../../../../faqs/installing/how-can-i-ensure-portainers-configuration-is-retained.md) before proceeding.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Deployment

Portainer can be directly deployed as a service in your Docker Swarm cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

{% hint style="danger" %}
Only do this **once** for your environment, regardless of how many nodes are in the cluster. You **do not** need to add each node in your cluster as a separate environment in Portainer. Deploying the manifest to your swarm will include every node in the cluster automatically. Adding each node as a separate environment will also consume more of your licensed node count than you may expect.
{% endhint %}

To begin the installation, first retrieve the stack YML manifest:

```
curl -L https://downloads.portainer.io/ee-lts/portainer-agent-stack.yml -o portainer-agent-stack.yml
```

Then use the downloaded YML manifest to deploy your stack:

```bash
docker stack deploy -c portainer-agent-stack.yml portainer
```

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `9443`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#using-your-own-ssl-certificate-on-docker-swarm) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
https://localhost:9443
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it earlier.

You will be presented with the initial setup page for Portainer Server.

{% content-ref url="../setup.md" %}
[setup.md](../setup.md)
{% endcontent-ref %}
