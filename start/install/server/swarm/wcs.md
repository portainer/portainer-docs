# Install Portainer with Docker Swarm on Windows Container Service

{% hint style="info" %}
These instructions are for Portainer Business Edition. For Community Edition, please refer to the [Community Edition documentation](https://docs.portainer.io/v/ce-2.6/).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows server with Windows Containers. To add a new WCS environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../agent/swarm/wcs.md).

To get started, you will need:

* The latest version of Docker installed and working.
* Swarm mode enabled and working, including the overlay network for the swarm service communication.
* Administrator access on the manager node of your Swarm cluster.
* By default, Portainer Server will expose the UI over port `9000` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* The manager and worker nodes must be able to communicate with each other over port `9001`.

The installation instructions also make the following assumption about your environment:

* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Preparation

To run Portainer Server in a Windows Server/Desktop Environment you need to create exceptions in the firewall. These can easily be added through PowerShell by running the following commands:

```text
netsh advfirewall firewall add rule name="cluster_management" dir=in action=allow protocol=TCP localport=2377
netsh advfirewall firewall add rule name="node_communication_tcp" dir=in action=allow protocol=TCP localport=7946
netsh advfirewall firewall add rule name="node_communication_udp" dir=in action=allow protocol=UDP localport=7946
netsh advfirewall firewall add rule name="overlay_network" dir=in action=allow protocol=UDP localport=4789
netsh advfirewall firewall add rule name="swarm_dns_tcp" dir=in action=allow protocol=TCP localport=53
netsh advfirewall firewall add rule name="swarm_dns_udp" dir=in action=allow protocol=UDP localport=53
```

You will also need to install the Windows Container Host Service and install Docker:

```text
Enable-WindowsOptionalFeature -Online -FeatureName containers -All
Install-Module -Name DockerMsftProvider -Repository PSGallery -Force
Install-Package -Name docker -ProviderName DockerMsftProvider
```

Once this is complete you will need to restart your Windows server. After the restart completes, you're ready to install Portainer itself.

## Deployment

Portainer can be directly deployed as a service in your Docker cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

You can use our YML manifest to run Portainer in Windows using Windows Containers. In PowerShell, run:

```bash
curl https://downloads.portainer.io/portainer_ee_windows_stack.yml -o portainer_windows_stack.yml
```

This will download the YML manifest. To deploy using this, run:

```bash
docker stack deploy --compose-file=portainer_windows_stack.yml portainer
```

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
http://localhost:9000/
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it from `9000` earlier.

You will be presented with the initial setup page for Portainer Server.

{% page-ref page="../setup.md" %}

