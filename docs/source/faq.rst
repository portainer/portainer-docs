===
FAQ
===

How can I configure my reverse proxy to serve Portainer?
========================================================

Here is a working configuration for Nginx (tested on 1.11) to serve Portainer at `myhost.mydomain/portainer:`

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
