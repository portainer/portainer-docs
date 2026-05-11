---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/start/install/server/docker/linux
---

# Install Portainer BE with Docker on Linux

{% hint style="info" %}
These installation instructions are for Portainer Business Edition (BE). For Portainer Community Edition (CE) refer to the [CE install documentation](../../../install-ce/server/docker/linux.md).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Linux environment. To add a new Linux environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../../../admin/environments/add/docker/agent.md).

To get started, you will need:

* The latest version of Docker installed and working. We recommend following the [official installation instructions](https://docs.docker.com/engine/install/) for Docker - in particular, we advise _against_ installing Docker via snap on Ubuntu distributions as you may run into compatibility issues.
* sudo access on the machine that will host your Portainer Server instance
* By default, Portainer Server will expose the UI over port `9443` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* A license key for Portainer Business Edition.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You are accessing Docker via Unix sockets. Alternatively, you can also connect via TCP.
* SELinux is disabled on the machine running Docker. If you require SELinux, you will need to pass the `--privileged` flag to Docker when deploying Portainer.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.

## Deployment

You can choose to deploy Portainer using `docker run` or via Docker Compose.

{% tabs %}
{% tab title="docker run" %}
To install using `docker run`, first create the volume that Portainer Server will use to store its database:

```bash
docker volume create portainer_data
```

Then, download and install the Portainer Server container:

<pre><code><strong>docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:lts
</strong></code></pre>

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `9443`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#using-your-own-ssl-certificate-on-docker-standalone) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}

{% hint style="info" %}
If you require HTTP port `9000` open for legacy reasons, add the following to your `docker run` command:

`-p 9000:9000`
{% endhint %}

Portainer Server has now been installed. You can check to see whether the Portainer Server container has started by running `docker ps`:

```bash
root@server:~# docker ps
CONTAINER ID   IMAGE                        COMMAND        CREATED         STATUS         PORTS                                                                                                NAMES
7963585688a9   portainer/portainer-ee:sts   "/portainer"   8 seconds ago   Up 8 seconds   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp, 0.0.0.0:9443->9443/tcp, [::]:9443->9443/tcp, 9000/tcp   portainer
```
{% endtab %}

{% tab title="Docker Compose" %}
To install using Docker Compose, download the compose file using the following `curl` command:

```
curl -L https://downloads.portainer.io/ee-sts/portainer-compose.yaml -o portainer-compose.yaml
```

Alternatively, create a `portainer-compose.yaml` file with the following contents:

```
services:
  portainer:
    container_name: portainer
    image: portainer/portainer-ee:lts
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    ports:
      - 9443:9443
      - 8000:8000  # Remove if you do not intend to use Edge Agents

volumes:
  portainer_data:
    name: portainer_data

networks:
  default:
    name: portainer_network
```

Once you have created or downloaded the compose file, you can deploy it with the following command:

```
docker compose -f portainer-compose.yaml up -d
```

Docker Compose will create the necessary resources and deploy Portainer. You can check to see whether the Portainer Server container has started by running `docker ps`:

```
root@server:~# docker ps
CONTAINER ID   IMAGE                        COMMAND        CREATED         STATUS         PORTS                                                                                                NAMES
7963585688a9   portainer/portainer-ee:sts   "/portainer"   8 seconds ago   Up 8 seconds   0.0.0.0:8000->8000/tcp, [::]:8000->8000/tcp, 0.0.0.0:9443->9443/tcp, [::]:9443->9443/tcp, 9000/tcp   portainer
```
{% endtab %}
{% endtabs %}

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
