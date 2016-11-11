===
FAQ
===

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
    location /portainer/ws/ {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
        proxy_pass http://portainer/ws/;
    }
  }

Replace ``ADDRESS:PORT`` with the Portainer server/container details.

How can I setup basic HTTP authentication in front of Portainer?
=================================================================

Here is a working configuration for Nginx (tested on 1.11 with **bcrypt** support) to serve Portainer at `myhost.mydomain/portainer` with basic HTTP authentication:

.. code-block:: nginx

  upstream portainer {
      server ADDRESS:PORT;
  }

  server {
    listen 80;

    auth_basic "myhost.mydomain/portainer";
    auth_basic_user_file  /etc/nginx/conf.d/portainer.htpasswd;

    location /portainer/ {
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_pass http://portainer/;
    }
    location /portainer/ws/ {
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_http_version 1.1;
        proxy_pass http://portainer/ws/;
    }
  }

Replace ``ADDRESS:PORT`` with the Portainer server/container details.

You can generate the authentication file using the following command:

.. code-block:: bash

  docker run --rm httpd htpasswd -nbB <USERNAME> <PASSWORD> /etc/nginx/conf.d/portainer.htpasswd

You can also checkout our pre-configured setup using Docker compose `here <https://github.com/portainer/portainer-compose>`_.

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
      timeout client              1m
      timeout server              1m
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


Why does Portainer not work in Kitematic?
=========================================

Portainer has to be connected to a Docker instance either by bind-mounting the Docker socket or using the ``-H`` flag in the container command to specify
the Docker host address. Unfortunately, Kitematic does not allow you to specify any of these at the moment.
