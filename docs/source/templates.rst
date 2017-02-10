=========
Templates
=========

Template definitions are written in JSON.

It must consist of an array with every template definition consisting of one element.

Template definition format
==========================

A template element must be a valid `JSON <http://www.json.org/>`_ object.

Example:

.. code-block:: json

  {
    "title": "Nginx",
    "description": "High performance web server",
    "logo": "https://cloudinovasi.id/assets/img/logos/nginx.png",
    "image": "nginx:latest",
    "ports": [
      "80/tcp",
      "443/tcp"
    ]
  }

It is composed of multiple fields, some mandatory and some optionals.

``title``
---------

Title of the template.

This field is **mandatory**.

``description``
---------------

Description of the template.

This field is **mandatory**.

``logo``
--------

URL of the template's logo.

This field is **mandatory**.

``image``
---------

The Docker image associated to the template. The image tag **must** be included.

This field is **mandatory**.

``registry``
------------

The registry where the Docker image is stored. If not specified, Portainer will use the Dockerhub as the default registry.

This field is **optional**.

``env``
-------

A JSON array describing the environment variables required by the template. Each element in the array must be a valid JSON object.

An input will be generated in the templates view for each element in the array.

This field is **optional**.

Element format:

.. code-block:: json

  {
    "name": "the name of the environment variable, as supported in the container image (mandatory)",
    "label": "label for the input in the UI (mandatory)",
    "set": "pre-defined value for the variable, will not generate an input in the UI (optional)"
  }

Example:

.. code-block:: json

  {
    "env": [
      {
        "name": "MYSQL_ROOT_PASSWORD",
        "label": "Root password"
      },
      {
        "name": "MYSQL_USER",
        "label": "MySQL user",
        "set": "myuser"
      },
      {
        "name": "MYSQL_PASSWORD",
        "label": "MySQL password",
        "set": "mypassword"
      }
    ]
  }

``network``
-----------

A string corresponding to the name of an existing Docker network.

Will auto-select the network (if it exists) in the templates view.

This field is **optional**.

Example:

.. code-block:: json

  {
    "network": "host"
  }

``volumes``
-----------

A JSON array describing the associated volumes of the template. Each element in the array must be a valid JSON string.

For each element in the array, a Docker volume will be created and associated when starting the container.

This field is **optional**.

Example:

.. code-block:: json

  {
    "volumes": ["/var/lib/mysql", "/var/log/mysql"]
  }

``ports``
---------

A JSON array describing the ports exposed by template. Each element in the array must be a valid JSON string specifying the port number in the container and the protocol.

Each port will be automatically bound on the host by Docker when starting the container.

This field is **optional**.

Example:

.. code-block:: json

  {
    "ports": ["80/tcp", "443/tcp"]
  }

Build and host your own templates
=================================

You can build your own container that will use `Nginx <https://hub.docker.com/_/nginx/>`_ to serve the templates definitions.

Clone the `Portainer templates repository <https://github.com/portainer/templates>`_, edit the templates file, build and run the container:

.. code-block:: bash

  $ git clone https://github.com/portainer/templates.git portainer-templates
  $ cd portainer-templates
  # Edit the file templates.json
  $ docker build -t portainer-templates .
  $ docker run -d -p "8080:80" portainer-templates

Now you can access your templates definitions at ``http://docker-host:8080/templates.json``.

You can also mount the ``templates.json`` file inside the container, so you can edit the file and see live changes:

.. code-block:: bash

  $ docker run -d -p "8080:80" -v "${PWD}/templates.json:/usr/share/nginx/html/templates.json" portainer-templates
