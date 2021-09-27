# Install Portainer with Docker Swarm on WSL / Docker Desktop

{% hint style="info" %}
These instructions are for Portainer Community Edition. For Business Edition, please refer to the [Business Edition documentation](https://docs.portainer.io/v/be-2.7/).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Windows environment with WSL and Docker Desktop. To add a new WSL / Docker Desktop Swarm environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../agent/swarm/wsl.md).

To get started, you will need:

* The latest version of Docker Desktop installed and working.
* Swarm mode enabled and working, including the overlay network for the swarm service communication.
* Administrator access on the manager node of your Swarm cluster.
* Windows Subsystem for Linux \(WSL\) installed and a Linux distribution selected. For a new installation we recommend WSL2.
* By default, Portainer Server will expose the UI over port `9000` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* The manager and worker nodes must be able to communicate with each other over port `9001`.

The installation instructions also make the following assumptions about your environment:

* You are accessing Docker via Unix sockets. Alternatively, you can also connect via TCP.
* SELinux is disabled within the Linux distribution used by WSL. If you require SELinux, you will need to pass the `--privileged` flag to Docker when deploying Portainer.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Deployment

Portainer can be directly deployed as a service in your Docker Swarm cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

If you haven't already, you will need to ensure you have initiated Swarm mode. You can do this by running:

```text
docker swarm init
```

To begin the installation, first retrieve the stack YML manifest:

```bash
curl -L https://downloads.portainer.io/ce2.6.3/portainer-agent-stack.yml -o portainer-agent-stack.yml
```

Then, use the downloaded YML manifest to deploy your stack:

```bash
docker stack deploy -c portainer-agent-stack.yml portainer
```

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
http://localhost:9000/
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it from `9000` earlier.

You will be presented with the initial setup page for Portainer Server.

{% page-ref page="../setup.md" %}

