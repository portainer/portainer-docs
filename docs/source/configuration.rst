=============
Configuration
=============

Portainer can be easily tuned using CLI flags.

Disable authentication
======================

To disable Portainer internal authentication mechanism, start Portainer with the ``--no-auth`` flag:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer --no-auth

Admin password
==============

``From the command line``
-------------------------

Portainer allows you to specify an encrypted password from the command line for the admin account. You need to generate the encrypted password first.

You can generate an encrypted password with the following command:

.. code-block:: bash

  $ htpasswd -nb -B admin <password> | cut -d ":" -f 2

or if your system does not provide htpasswd you can use a docker container with the command:

.. code-block:: bash

  $ docker run --rm httpd:2.4-alpine htpasswd -nbB admin <password> | cut -d ":" -f 2

To specify the admin password from the command line, start Portainer with the ``--admin-password`` flag:

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer --admin-password '$2y$05$qFHAlNAH0A.6oCDe1/4W.ueCWC/iTfBMXIHBI97QYfMWlMCJ7N.a6'

``Inside a file``
-----------------

You can also store the plaintext password inside a file and use the ``--admin-password-file`` flag:

.. code-block:: bash

  # mypassword is plaintext here
  $ echo -n mypassword > /tmp/portainer_password
  $ docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer --admin-password-file /tmp/portainer_password

This works well with Swarm & Docker secrets too:

.. code-block:: bash

  # mypassword is plaintext here
  $ echo -n mypassword | docker secret create portainer-pass -
  $ docker service create \
    --name portainer \
    --secret portainer-pass \
    --publish 9000:9000 \
    --replicas=1 \
    --constraint 'node.role == manager' \
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
    portainer/portainer \
    --admin-password-file '/run/secrets/portainer-pass' \
    -H unix:///var/run/docker.sock

**Note**: This will automatically create an administrator account called **admin** with the specified password.

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

You do not like our logo? Want to make Portainer more corporate? Don't worry, you can easily switch for an external logo (it must be exactly 155px by 55px) using the ``--logo`` flag:

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

Use an external endpoint source
===============================

Portainer gives you the option to define all the endpoints available in the UI from a JSON file.

You just need to start Portainer with the ``--external-endpoints`` flag and specify the path to the JSON file in the container.

Note: when using the external endpoint management, endpoint management will be disabled in the UI.

.. code-block:: bash

  $ docker run -d -p 9000:9000 -v /tmp/endpoints:/endpoints portainer/portainer --external-endpoints /endpoints/endpoints.json

For more information about the endpoint definition format see :doc:`External endpoints <external_endpoints>`

Available flags
===============

The following CLI flags are available:

* ``--host``, ``-H``: Docker daemon endpoint
* ``--bind``, ``-p``: Address and port to serve Portainer (default: ``:9000``)
* ``--data``, ``-d``: Directory where Portainer data will be stored (default: ``/data`` on Linux, ``C:\data`` on Windows)
* ``--tlsverify``: TLS support (default: ``false``)
* ``--tlscacert``: Path to the CA (default: ``/certs/ca.pem`` on Linux, ``C:\certs\ca.pem`` on Windows)
* ``--tlscert``: Path to the TLS certificate file (default: ``/certs/cert.pem``, ``C:\certs\cert.pem`` on Windows)
* ``--tlskey``: Path to the TLS key (default: ``/certs/key.pem``, ``C:\certs\key.pem`` on Windows)
* ``--no-analytics``: Disable analytics (default: ``false``)
* ``--no-auth``: Disable internal authentication mechanism (default: ``false``)
* ``--external-endpoints``: Enable external endpoint management by specifying the path to a JSON endpoint source in a file
* ``--sync-interval``: Time interval between two endpoints synchronization requests expressed as a string, e.g. ``30s``, ``5m``, ``1h``... as supported by the `time.ParseDuration method <https://golang.org/pkg/time/#ParseDuration>`_ (default: ``60s``)
* ``--admin-password``: Admin password in the form ``admin:<hashed_password>``
* ``--admin-password-file``: Path to the file containing the password for the admin user
* ``--ssl``: Secure Portainer instance using SSL (default: ``false``)
* ``--sslcert``: Path to the SSL certificate used to secure the Portainer instance (default: ``/certs/portainer.crt``, ``C:\certs\portainer.crt`` on Windows)
* ``--sslkey``: Path to the SSL key used to secure the Portainer instance (default: ``/certs/portainer.key``, ``C:\certs\portainer.key`` on Windows)
* ``--hide-label``, ``-l``: Hide containers with a specific label in the UI
* ``--logo``: URL to a picture to be displayed as a logo in the UI, use Portainer logo if not specified
* ``--templates``, ``-t``: URL to templates (apps) definitions (default: ``https://raw.githubusercontent.com/portainer/templates/master/templates.json``)
