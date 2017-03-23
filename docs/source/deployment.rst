==========
Deployment
==========

Portainer is built to run on Docker and is really simple to deploy.

Portainer deployment scenarios can be executed on any platform unless specified.

Quick start
===========

Deploying Portainer is as simple as:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer

Voilà, you can now access Portainer by pointing your web browser at ``http://DOCKER_HOST:9000``

Ensure you replace ``DOCKER_HOST`` with address of your Docker host where Portainer is running.

You'll then be prompted to specify a new password for the ``admin`` account. After specifying your password,
you'll then be able to connect to the Portainer UI.

Manage a new endpoint
=====================

After your first authentication, Portainer will ask you information about the Docker endpoint you want to manage.

You'll have the following choices:

* **Not available for Windows Containers (Windows Server 2016)** - Manage the local engine where Portainer is running (you'll need to bind mount the Docker socket via `-v /var/run/docker.sock:/var/run/docker.sock` on the Docker CLI when running Portainer)
* Manage a remote Docker engine, you'll just have to specify the url to your Docker endpoint, give it a name and TLS info if needed

Declare initial endpoint via CLI
================================

You can specify the initial endpoint you want Portainer to manage via the CLI, use the ``-H`` flag and the ``tcp://`` protocol to connect to a remote Docker endpoint:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -H tcp://<REMOTE_HOST>:<REMOTE_PORT>

Ensure you replace ``REMOTE_HOST`` and ``REMOTE_PORT`` with the address/port of the Docker engine you want to manage.

You can also bind mount the Docker socket to manage a local Docker engine (**not available for Windows Containers (Windows Server 2016)**):

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer

**Note**: If your host is using SELinux, you'll need to pass the ``--privileged`` flag to the Docker run command:

.. code-block:: bash

  $ docker run -d -p 9000:9000 --privileged -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer

Connect to a Swarm cluster
==========================

Portainer will automatically detect if your endpoint is part of a Swarm cluster (either Docker Swarm or Swarm mode).

**Note**: Ensure you connect to either a *primary* node when connecting to a Docker Swarm cluster or a *manager* node
when connecting to a cluster created with Docker swarm mode.

As simple as:

.. code-block:: bash

  $ docker run -d -p 9000:9000 portainer/portainer -H tcp://<SWARM_MANAGER_IP>:2375

Alternatively, if you're using swarm mode, you can also deploy it as a service in your cluster:

.. code-block:: bash

  $ docker service create \
      --name portainer \
      --publish 9000:9000 \
      --constraint 'node.role == manager' \
      --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
      portainer/portainer \
      -H unix:///var/run/docker.sock

Connect to a Docker engine with TLS enabled
===========================================

If your Docker engine is protected using TLS, you'll need to ensure that you have access to CA, the certificate and the public key used to access your Docker engine.

You can upload the required files via the Portainer UI or use the ``--tlsverify`` flag on the CLI.

Portainer will try to use the following paths to the files specified previously (on Linux, see the configuration section for details about Windows):

* CA: ``/certs/ca.pem``
* certificate: ``/certs/cert.pem``
* public key: ``/certs/key.pem``

You must ensure these files are present in the container using a bind mount:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /path/to/certs:/certs portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify

You can also use the ``--tlscacert``, ``--tlscert`` and ``--tlskey`` flags if you want to change the default path to the CA, certificate and key file respectively:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /path/to/certs:/certs portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify --tlscacert /certs/myCa.pem --tlscert /certs/myCert.pem --tlskey /certs/myKey.pem

Persist Portainer data
======================

By default, Portainer will store its data inside the container in the `/data` folder on Linux (`C:\data` on Windows, this can be changed via CLI, see configuration).

You'll need to persist Portainer data to keep your changes after restart/upgrade of the Portainer container. You can use a bind mount
to persist the data on the Docker host folder:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /path/on/host/data:/data portainer/portainer

On Windows:

.. code-block:: powershell

  $ docker run -d -p 9000:9000 -v C:\ProgramData\Portainer:C:\data portainer/portainer:windows


Without Docker
==============

Portainer binaries are available on each release page: `Portainer releases <https://github.com/portainer/portainer/releases>`_

Download and extract the binary to a location on disk:

.. code-block:: bash

  $ cd /opt
  $ wget https://github.com/portainer/portainer/releases/download/1.12.1/portainer-1.12.1-linux-amd64.tar.gz
  $ tar xvpfz portainer-1.12.1-linux-amd64.tar.gz

Then just use the portainer binary as you would use CLI flags with Docker.

.. code-block:: bash

  $ cd /opt
  $ ./portainer/portainer -H tcp://DOCKER_HOST:DOCKER_PORT

You can use the ``-p`` flag to serve Portainer on another port:

.. code-block:: bash

  $ ./portainer -H tcp://DOCKER_HOST:DOCKER_PORT -p 8080
