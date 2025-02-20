# Install Portainer CE with Docker Swarm on Linux

{% hint style="info" %}
These installation instructions are for Portainer Community Edition (CE). For Portainer Business Edition (BE) refer to the [BE install documentation](../../../install/server/swarm/linux.md).
{% endhint %}

## Introduction <a href="#introduction" id="introduction"></a>

Portainer consists of two elements, the _Portainer Server_ and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you deploy the Portainer Server and Agent containers on your Linux environment. To add a new Linux Swarm environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../../../admin/environments/add/swarm/agent.md).

To get started, you will need:

* The latest version of Docker installed and working. We recommend following the [official installation instructions](https://docs.docker.com/engine/install/) for Docker - in particular, we advise _against_ installing Docker via snap on Ubuntu distributions as you may run into compatibility issues.
* Swarm mode [enabled](https://docs.docker.com/engine/swarm/swarm-mode/) and working, including the overlay network for the swarm service communication
* `sudo` access on the manager node of your swarm cluster
* By default, Portainer will expose the UI over port `9443` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* The manager and worker nodes must be able to communicate with each other over port `9001`.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You are accessing Docker via Unix sockets. Connecting via TCP is not supported in Docker Swarm.
* SELinux is disabled on the machine running Docker.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.
* You are running a single manager node in your swarm. If you have more than one, please [read this knowledge base article](https://portal.portainer.io/knowledge/how-can-i-ensure-portainers-configuration-is-retained) before proceeding.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

## Deployment <a href="#deployment" id="deployment"></a>

{% embed url="https://www.youtube.com/watch?v=S2VuHKxrT3s" %}

Portainer can be directly deployed as a service in your Docker cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

{% hint style="danger" %}
Only do this **once** for your environment, regardless of how many nodes are in the cluster. You **do not** need to add each node in your cluster as a separate environment in Portainer. Deploying the manifest to your swarm will include every node in the cluster automatically. Adding each node as a separate environment will also consume more of your licensed node count than you may expect.
{% endhint %}

First, retrieve the stack YML manifest:

```
curl -L https://downloads.portainer.io/ce-lts/portainer-agent-stack.yml -o portainer-agent-stack.yml
```

Then use the downloaded YML manifest to deploy your stack:

```
docker stack deploy -c portainer-agent-stack.yml portainer
```

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `9443`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#using-your-own-ssl-certificate-on-docker-swarm) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}

Portainer Server and the Agents have now been installed. You can check to see whether the Portainer Server and Agent containers have started by running `docker ps`:

```
root@manager01:~# docker ps
CONTAINER ID   IMAGE                           COMMAND                  CREATED              STATUS              PORTS                NAMES
59ee466f6b15   portainer/agent:lts             "./agent"                About a minute ago   Up About a minute                        portainer_agent.xbb8k6r7j1tk9gozjku7e43wr.5sa6b3e8cl6hyu0snlt387sgv
2db7dd4bfba0   portainer/portainer-ce:lts      "/portainer -H tcp:/…"   About a minute ago   Up About a minute   8000/tcp, 9443/tcp   portainer_portainer.1.gpuvu3pqmt1m19zxfo44v7izx
```

## Logging In <a href="#logging-in" id="logging-in"></a>

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```
https://localhost:9443
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it earlier.

You will be presented with the initial setup page for Portainer Server.

{% content-ref url="../setup.md" %}
[setup.md](../setup.md)
{% endcontent-ref %}
