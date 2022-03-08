# Install Portainer with Docker on Windows Container Service

{% hint style="info" %}
These instructions are for Portainer Business Edition. For Community Edition, please refer to the [Community Edition documentation](https://docs.portainer.io/v/ce-2.9/).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows server with Windows Containers. To add a new WCS environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../agent/docker/wcs.md).

To get started, you will need:

* Administrator access on the machine that will host your Portainer Server instance
* By default, Portainer Server will expose the UI over port `9443` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* A license key for Portainer Business Edition.

The installation instructions also make the following assumption about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.

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

You will also need to install the Windows Container Host Service and install Docker:

```
Enable-WindowsOptionalFeature -Online -FeatureName containers -All
Install-Module -Name DockerMsftProvider -Repository PSGallery -Force
Install-Package -Name docker -ProviderName DockerMsftProvider
```

Once this is complete you will need to restart your Windows server. After the restart completes, you're ready to install Portainer itself.

## Deployment

First, create the volume that Portainer Server will use to store its database. Using PowerShell:

```
docker volume create portainer_data
```

Then, download and install the Portainer Server container:

```aspnet
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine -v portainer_data:C:\data portainer/portainer-ee:2.12.0
```

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `9443`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#docker-standalone) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}

{% hint style="info" %}
If you require HTTP port `9000` open for legacy reasons, add the following to your `docker run` command:

`-p 9000:9000`
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
