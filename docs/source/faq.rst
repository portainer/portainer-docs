===
FAQ
===

My host is using SELinux, can I use Portainer ?
===============================================

If you want to manage a local Docker environment with **SELinux** enabled, you'll need to pass the ``--privileged`` flag to the Docker run command when deploying Portainer:

::

  $ docker run -d --privileged -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

You can also have a look at this helper: https://github.com/dpw/selinux-dockersock.

How can I expose the Docker API over TCP so that Portainer can communicate with my environment?
===============================================================================================

To manage a remote Docker environment, Portainer must be able to communicate with the Docker API over the network (usually on TCP 2375, 2376 with TLS).

You have to take into account the **security issues depending on your network environment**.

Please refer to `Daemon socket option`_ in the Docker Reference and to `Docker Engine on Windows`_.

.. _Docker Engine on Windows: https://docs.microsoft.com/en-us/virtualization/windowscontainers/manage-docker/configure-docker-daemon
.. _Daemon socket option: https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-socket-option

How can I setup Portainer on Windows Server 2016 ?
==================================================

Have a look at the `Airdesk blog post <http://blog.airdesk.com/2017/10/windows-containers-portainer-gui.html>`_ for instructions.

How can I play with Portainer outside of the public demo?
=========================================================

You can deploy Portainer as a stack in `Play-with-Docker <http://play-with-docker.com/?stack=https://raw.githubusercontent.com/portainer/portainer-compose/master/docker-stack.yml&stack_name=portainer>`_.

How can I configure my reverse proxy to serve Portainer?
========================================================

Here is a working configuration for Nginx (tested on 1.11) to serve Portainer at `myhost.mydomain/portainer`:

.. code-block:: nginx

  upstream portainer {
      server ADDRESS:PORT;
  }

  server {
    listen 80;

    location /portainer/ {
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_pass http://portainer/;
    }
    location /portainer/api/websocket/ {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
        proxy_pass http://portainer/api/websocket/;
    }
  }

Replace ``ADDRESS:PORT`` with the Portainer server/container details.

How can I configure my reverse proxy to serve Portainer using HAProxy?
======================================================================

Here is a working configuration for HAProxy to serve Portainer at `portainer.127.0.0.1.xip.io`:

.. code-block:: haproxy

  global
      maxconn                     10000
      daemon
      ssl-server-verify           none
      tune.ssl.default-dh-param   2048

  defaults
      mode    http
      log     global
      option  httplog
      option  dontlognull
      option  http-server-close
      option  forwardfor          except 127.0.0.0/8
      option  redispatch
      retries 30
      timeout http-request        300s
      timeout queue               1m
      timeout connect             10s
      timeout client              1d
      timeout server              1d
      timeout http-keep-alive     10s
      timeout check               10s
      maxconn 10000

  userlist users
      group all
      group demo
      group haproxy

  listen stats
      bind            *:2100
      mode            http
      stats           enable
      maxconn         10
      timeout client  10s
      timeout server  10s
      timeout connect 10s
      timeout         queue   10s
      stats           hide-version
      stats           refresh 30s
      stats           show-node
      stats           realm Haproxy\ Statistics
      stats           uri  /
      stats           admin if TRUE

  frontend www-http
      bind    *:80
      stats   enable
      mode    http
      option  http-keep-alive

      acl portainer   hdr_end(host)   -i portainer.127.0.0.1.xip.io

      use_backend     portainer       if portainer

  backend portainer
      stats   enable
      option  forwardfor
      option  http-keep-alive
      server  portainer    127.0.0.1:9000 check


**Note**: http-keep-alive must be set for both frontend and backend

Exposed ports in the container view redirects me to 0.0.0.0, what can I do?
===========================================================================

In order for Portainer to be able to redirect you to your Docker host IP address and not the 0.0.0.0 address, you will have
to change the configuration of your Docker daemon and add the ``--ip`` option.

Have a look at the `Docker documentation <https://docs.docker.com/engine/reference/commandline/dockerd/>`_ for more details.

Note that you will have to restart your Docker daemon for the changes to be taken in effect.

I restarted Portainer and lost all my data, why?
================================================

Portainer data is stored inside the Docker container. If you want to keep the data of your Portainer instance
after reboot/upgrade, you'll need to persist the data. See :doc:`Deployment <deployment>`

I am getting the error "Your session has expired" on login and cannot login. What's wrong?
==========================================================================================

When running Portainer inside a container, it will use your Docker engine system time to calculate the authentication
token expiry time. A timedrift in your Docker system time might occur when using computer/VM hibernation. You need to ensure
that your Docker engine system time is the same as your machine system time and if not, restart your Docker engine.

As simple way to check your Docker system time is to use ``docker info`` or if the information is not available ``docker run busybox date``.

Users of Docker for Windows can also fix this by navigating to hyper-v-management -> virtual machines -> right-click on MobyLinuxVM -> settings -> integration services
and enabling the time sync checkbox in the services list.

How can I access the Docker API on port 2375 on Windows?
========================================================

On some Windows setup, Docker is listening on the local loopback address and cannot be accessed from within the
Portainer container. You can use ``netsh`` to create a port redirection, and then use the newly created IP address
to connect from Portainer.

Create a redirection from the loopback address on port 2375 to a newly created address **10.0.75.1** on port 2375 (DOS/Powershell command):

.. code-block:: bash

  > netsh interface portproxy add v4tov4 listenaddress=10.0.75.1 listenport=2375 connectaddress=127.0.0.1 connectport=2375

You'll then be able to use **10.0.75.1:2375** as the URL of your endpoint.

How can I use Portainer behind a proxy?
=======================================

When using Portainer behind a proxy, some features requiring access to the Internet (such as Apps Templates) might be
unavailable.

When running Portainer as a container, you can specify the ``HTTP_PROXY`` and ``HTTPS_PROXY`` env var to specify
which proxy should be used.

Example:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -e HTTP_PROXY=my.proxy.domain:7777 portainer/portainer

How can I upgrade my version of Portainer?
==========================================

If you're running Portainer as a container, it's simply a matter of Docker image version. Just stop your existing Portainer
container, pull the latest *portainer/portainer* image and create a new Portainer container (using the same options you used to
create the previous one).

If you're running Portainer as a service in a Swarm cluster, you can issue the following command to update the image (assuming your Docker service
is called *portainer*):

.. code-block:: bash

  $ docker service update --image portainer/portainer:latest portainer

If you're running Portainer outside of Docker, download and extract the new binaries and restart the Portainer binary using the same
options you used before.

How can I manage a remote Dokku host with Portainer?
====================================================

Have a look at `this gist <https://gist.github.com/woudsma/03c69260715327ee8453f73b121f416c>`_ for instructions.

How can I enable LDAP authentication ?
======================================

Have a look at `this post <https://www.linkedin.com/pulse/teamgroup-management-docker-portainerio-neil-cresswell>`_ for detailed instructions.
