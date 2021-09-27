# Install Portainer with Docker on Windows Container Service

{% hint style="info" %}
These instructions are for Portainer Community Edition. For Business Edition, please refer to the [Business Edition documentation](https://docs.portainer.io/v/be-2.7/).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows server with Windows Containers. To add a new WCS environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../agent/docker/wcs.md).

To get started, you will need:

* The latest version of Docker installed and working
* Administrator access on the machine that will host your Portainer Server instance
* By default, Portainer Server will expose the UI over port `9000` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.

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

First, create the volume that Portainer Server will use to store its database:

```text
docker volume create portainer_data
```

Then, download and install the Portainer Server container:

```text
docker run -d -p 9000:9000 --name portainer --restart always -v \.\pipe\docker_engine:\.\pipe\docker_engine -v portainer_data:C:\data portainer/portainer-ce:2.6.3
```

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
http://localhost:9000/
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it from `9000` earlier.

You will be presented with the initial setup page for Portainer Server.

{% page-ref page="../setup.md" %}

