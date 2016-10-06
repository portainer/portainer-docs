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
