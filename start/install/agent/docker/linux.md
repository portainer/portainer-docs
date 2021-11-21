# Install Portainer Agent with Docker on Linux

## Introduction

Portainer uses the _Portainer Agent_ container to communicate with the _Portainer Server_ instance and provide access to the node's resources. This document will outline how to install the Portainer Agent on your node and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../server/docker/linux.md) first.

You will need:

* The latest version of Docker installed and working.
* `sudo` access on the machine that you wish to install the Portainer Agent on.
* Port `9001` accessible on this machine from the Portainer Server instance. If this is not available, we recommend using the [Edge Agent](../edge.md) instead.

The installation instructions also make the following assumptions about your environment:

* You are accessing Docker via Unix sockets. Alternatively, you can also connect via TCP.
* SELinux is disabled on the machine running Docker. If you require SELinux, you will need to pass the `--privileged` flag to Docker when deploying Portainer.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.

## Deployment

Run the following command to deploy the Portainer Agent:

```bash
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent:2.9.2
```

```bash
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes cr.portainer.io/portainer/agent:2.9.3
```

## Adding your new environment

Once the agent has been installed you are ready to add the environment to your Portainer Server installation.&#x20;

{% content-ref url="../../../../admin/environments/add/docker.md" %}
[docker.md](../../../../admin/environments/add/docker.md)
{% endcontent-ref %}
