=============
Configuration
=============

Portainer can be easily tuned using CLI flags.

Hiding specific containers
==========================

Portainer allows you to hide containers with a specific label by using the ``-l`` flag.

For example, take a container started with the label *owner=acme* (note that this is an example label, you can define your own labels):

.. code-block:: bash

  $ docker run -d --label owner=acme nginx

To hide this container, simply add the ``-l owner=acme`` option on the CLI when starting Portainer:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer -l owner=acme

Note that the ``-l`` flag can be repeated multiple times to specify multiple labels:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer -l owner=acme -l service=secret

Use your own logo
=================

You do not like our logo? Want to make Portainer more corporate? Don't worry, you can easily switch for an external logo using the ``--logo`` flag:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"

Use your own templates
======================

Portainer allows you to rapidly deploy containers using App Templates.

By default `Portainer templates <https://raw.githubusercontent.com/portainer/templates/master/templates.json>`_ will be used but you can also define your own templates.

Add the ``--templates`` flag and specify the external location of your templates when starting Portainer:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer --templates http://my-host.my-domain/templates.json

For more information about hosting your own template definitions see :doc:`Templates <templates>`

Available flags
===============

The following CLI flags are available:

* ``--host``, ``-H``: Docker daemon endpoint (default: ``unix:///var/run/docker.sock``)
* ``--bind``, ``-p``: Address and port to serve Portainer (default: ``:9000``)
* ``--tlsverify``: TLS support (default: ``false``)
* ``--tlscacert``: Path to the CA (default: ``/certs/ca.pem``)
* ``--tlscert``: Path to the TLS certificate file (default: ``/certs/cert.pem``)
* ``--tlskey``: Path to the TLS key (default: ``/certs/key.pem``)
* ``--hide-label``, ``-l``: Hide containers with a specific label in the UI
* ``--logo``: URL to a picture to be displayed as a logo in the UI, use Portainer logo if not specified
* ``--templates``, ``-t``: URL to templates (apps) definitions (default: ``https://raw.githubusercontent.com/portainer/templates/master/templates.json``)
