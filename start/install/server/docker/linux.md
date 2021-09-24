# Install Portainer with Docker on Linux

{% hint style="info" %}
These instructions are for Portainer Business Edition. For Community Edition, please refer to the [Community Edition documentation](https://docs.portainer.io/v/ce-2.6/).
{% endhint %}

## Introduction

Portainer consists of two elements, the _Portainer Server_, and the _Portainer Agent_. Both elements run as lightweight Docker containers on a Docker engine. This document will help you install the Portainer Server container on your Linux environment. To add a new Linux environment to an existing Portainer Server installation, please refer to the [Portainer Agent installation instructions](../../agent/docker/linux.md).

To get started, you will need:

* The latest version of Docker installed and working
* sudo access on the machine that will host your Portainer Server instance
* By default, Portainer Server will expose the UI over port `9000` and expose a TCP tunnel server over port `8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.
* A license key for Portainer Business Edition.

The installation instructions also make the following assumptions about your environment:

* You are accessing Docker via Unix sockets. Alternatively, you can also connect via TCP.
* SELinux is disabled on the machine running Docker. If you require SELinux, you will need to pass the `--privileged` flag to Docker when deploying Portainer.
* Docker is running as root. Portainer with rootless Docker has some limitations, and requires additional configuration.

## Deployment

First, create the volume that Portainer Server will use to store its database:

```bash
docker volume create portainer_data
```

Then, download and install the Portainer Server container:

```bash
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee
```

Portainer Server has now been installed. You can check to see whether the Portainer Server container has started by running `docker ps`:

```bash
root@server:~# docker ps
CONTAINER ID   IMAGE                    COMMAND                  CREATED       STATUS      PORTS                                                                                  NAMES             
de5b28eb2fa9   portainer/portainer-ee   "/portainer"             2 weeks ago   Up 9 days   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   portainer
```

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to:

```bash
http://localhost:9000/
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it from `9000` earlier.

You will be presented with the initial setup page for Portainer Server.

{% page-ref page="../setup.md" %}

