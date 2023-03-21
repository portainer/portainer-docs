# Install Portainer Agent with Docker on Windows Container Service

## Introduction

Portainer uses the _Portainer Agent_ container to communicate with the _Portainer Server_ instance and provide access to the node's resources. This document will outline how to install the Portainer Agent on your node and how to connect to it from your Portainer Server instance. If you do not have a working Portainer Server instance yet, please refer to the [Portainer Server installation guide](../../install/server/docker/wcs.md) first.

You will need:

* The latest version of Docker installed and working.
* Administrator access on the machine that will host your Portainer Server instance.
* Port `9001` accessible on this machine from the Portainer Server instance. If this is not available, we recommend using the [Edge Agent](../edge.md) instead.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
*   You have not set a custom `AGENT_SECRET` on your Portainer Server instance. If you have, you will need to provide that secret to your agent when deploying with:

    `-e AGENT_SECRET=yoursecret`

## Deployment

To run Portainer Agent in a Windows Container scenario, you need to execute the following commands:

```bash
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v C:\:C:\host -v C:\ProgramData\docker\volumes:C:\ProgramData\docker\volumes -v \\.\pipe\docker_engine:\\.\pipe\docker_engine portainer/agent:latest
```

Once the agent has been installed you are ready to add the environment to your Portainer Server installation.&#x20;

{% content-ref url="../../../admin/environments/add/docker.md" %}
[docker.md](../../../admin/environments/add/docker.md)
{% endcontent-ref %}
