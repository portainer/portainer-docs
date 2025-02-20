# Install Portainer CE with Docker Swarm on Windows Container Service

{% hint style="info" %}
These installation instructions are for Portainer Community Edition (CE). For Portainer Business Edition (BE) refer to the [BE install documentation](../../../install/server/swarm/wcs.md).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows server with Windows Containers. To add a new WCS environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../../../admin/environments/add/swarm/agent.md).

To get started, you will need:

* The latest version of Docker installed and working.
* Swarm mode [enabled](https://docs.docker.com/engine/swarm/swarm-mode/) and working, including the overlay network for the swarm service communication.
* Administrator access on the manager node of your Swarm cluster.
* By default, Portainer will expose the UI over port `9443` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* The manager and worker nodes must be able to communicate with each other over port `9001`.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You are running a single manager node in your swarm. If you have more than one, please [read this knowledge base article](https://portal.portainer.io/knowledge/how-can-i-ensure-portainers-configuration-is-retained) before proceeding.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Preparation

To run Portainer Server in a Windows Server/Desktop Environment you need to create exceptions in the firewall. These can easily be added through PowerShell by running the following commands:

```
netsh advfirewall firewall add rule name="cluster_management" dir=in action=allow protocol=TCP localport=2377
netsh advfirewall firewall add rule name="node_communication_tcp" dir=in action=allow protocol=TCP localport=7946
netsh advfirewall firewall add rule name="node_communication_udp" dir=in action=allow protocol=UDP localport=7946
netsh advfirewall firewall add rule name="overlay_network" dir=in action=allow protocol=UDP localport=4789
netsh advfirewall firewall add rule name="swarm_dns_tcp" dir=in action=allow protocol=TCP localport=53
netsh advfirewall firewall add rule name="swarm_dns_udp" dir=in action=allow protocol=UDP localport=53
```

You will also need to install the Windows Container Host Service and install Docker. Microsoft have [provided](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=dockerce#windows-server-1) a PowerShell script to perform the necessary actions. You can download the script and run it with the following commands:

```
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

Once this is complete you will need to restart your Windows server. After the restart completes, you're ready to install Portainer itself.

## Deployment

Portainer can be directly deployed as a service in your Docker cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

{% hint style="danger" %}
Only do this **once** for your environment, regardless of how many nodes are in the cluster. You **do not** need to add each node in your cluster as a separate environment in Portainer. Deploying the manifest to your swarm will include every node in the cluster automatically. Adding each node as a separate environment will also consume more of your licensed node count than you may expect.
{% endhint %}

You can use our YML manifest to run Portainer in Windows using Windows Containers. In PowerShell, run:

```
curl https://downloads.portainer.io/ce-lts/portainer_windows_stack.yml -o portainer-windows-stack.yml
```

Then use the downloaded YML manifest to deploy your stack:

```bash
docker stack deploy --compose-file=portainer-windows-stack.yml portainer
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
