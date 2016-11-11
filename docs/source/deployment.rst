==========
Deployment
==========

Portainer is built to run on Docker and is really simple to deploy.

**Note**: the following instructions target Docker for Linux, if your target is Docker for Windows please use the
``portainer/portainer:windows`` Docker image instead of the ``portainer/portainer`` Docker image.

Portainer deployment scenarios can be executed on both platforms unless specified.

Quick start
===========

The most common deployment scenario is to deploy Portainer to manage a remote Docker host, it's as simple as:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -H tcp://<REMOTE_HOST>:<REMOTE_PORT>

Voilà, you can now access Portainer by pointing your web browser at ``http://DOCKER_HOST:9000``

Ensure you replace ``DOCKER_HOST`` with address of your Docker host where Portainer is running.

Connect to a remote Docker engine
=================================

In order to connect to a remote host, use the ``-H`` flag and the ``tcp://`` protocol:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -H tcp://<REMOTE_HOST>:<REMOTE_PORT>

Ensure you replace ``REMOTE_HOST`` and ``REMOTE_PORT`` with the address/port of the Docker engine you want to manage.

Connect to a local Docker engine
================================

*Docker for Linux only*

By default, Portainer will try to connect to the local Docker engine using the unix socket path at ``/var/run/docker.sock``

You will need to bind mount the Docker socket to manage a local Docker engine:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer


If your host is using SELinux, you'll need to pass the ``--privileged`` flag to the Docker run command:

.. code-block:: bash

  $ docker run -d -p 9000:9000 --privileged -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer

You can also specify an alternative path to the Docker socket using the ``-H`` flag combined with the ``unix://`` protocol:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/docker/docker.sock portainer/portainer -H unix:///docker/docker.sock

Connect to a Swarm cluster
==========================

If you want to manage a cluster created with Docker Swarm or using the swarm mode of Docker 1.12 all you need to do
is to add the ``--swarm`` flag to the portainer command line.

**Note**: Ensure you connect to either a *primary* node when connecting to a Docker Swarm cluster or a *manager* node
when connecting to a cluster created with Docker swarm mode.

For example, when connecting to a remote Swarm node:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -H tcp://<REMOTE_HOST>:<REMOTE_PORT> --swarm


Connect to a Docker engine with TLS enabled
===========================================

If your Docker engine is protected using TLS, you'll need to ensure that you have access to CA, the certificate and the public key used to access your Docker engine.

You can then use the ``--tlsverify`` flag to enable TLS communication with the Docker API.

Portainer will try to use the following paths to the files specified previously:

* CA: ``/certs/ca.pem``
* certificate: ``/certs/cert.pem``
* public key: ``/certs/key.pem``

You must ensure these files are present in the container using a bind mount:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /path/to/certs:/certs portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify

You can also use the ``--tlscacert``, ``--tlscert`` and ``--tlskey`` flags if you want to change the default path to the CA, certificate and key file respectively:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -v /path/to/certs:/certs -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify --tlscacert /certs/myCa.pem --tlscert /certs/myCert.pem --tlskey /certs/myKey.pem

Without Docker
==============

Portainer binaries are available on each release page: `Portainer releases <https://github.com/portainer/portainer/releases>`_

Download and extract the binary to a location on disk:

.. code-block:: bash

  $ cd /opt
  $ wget https://github.com/portainer/portainer/releases/download/1.10.0/portainer-1.10.0-linux-amd64.tar.gz
  $ tar xvpfz portainer-1.10.0-linux-amd64.tar.gz

Then just use the portainer binary as you would use CLI flags with Docker.

.. code-block:: bash

  $ /opt/portainer/portainer -H tcp://DOCKER_HOST:DOCKER_PORT

You can use the ``-p`` flag to serve Portainer on another port:

.. code-block:: bash

  $ /opt/portainer/portainer -H tcp://DOCKER_HOST:DOCKER_PORT -p 8080
