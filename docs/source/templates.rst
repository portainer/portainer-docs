=========
Templates
=========

Template definitions are written in JSON.

It must consist of an array with every template definition consisting of one element.

Container template definition format
====================================

A template element must be a valid `JSON <http://www.json.org/>`_ object.

Example of a container template:

.. code-block:: json

  {
    "type": 1,
    "title": "Nginx",
    "description": "High performance web server",
    "logo": "https://cloudinovasi.id/assets/img/logos/nginx.png",
    "image": "nginx:latest",
    "ports": [
      "8080:80/tcp",
      "443/tcp"
    ]
  }

It is composed of multiple fields, some mandatory and some optionals.

``type``
--------

Template type, valid values are: 1 (container), 2 (Swarm stack) or 3 (Compose stack).

**NOTE:** Type 3 (Compose stack) is limited to using the version: "2" stack format, this is a limitation of docker/libcompose.

This field is **mandatory**.

``title``
---------

Title of the template.

This field is **mandatory**.

``description``
---------------

Description of the template.

This field is **mandatory**.

``image``
---------

The Docker image associated to the template. The image tag **must** be included.

This field is **mandatory**.

``administrator_only``
----------------------

Should the template be available to administrator users only.

This field is **optional**.

Example:

.. code-block:: json

  {
    "administrator_only": true
  }


``name``
--------

Default name to use for this template in the UI.

This field is **optional**.


``logo``
--------

URL of the template's logo.

This field is **optional**.

``registry``
------------

The registry where the Docker image is stored. If not specified, Portainer will use the Dockerhub as the default registry.

This field is **optional**.

``command``
------------

The command to run in the container. If not specified, the container will use the default command specified in its Dockerfile.

This field is **optional**.

Example:

.. code-block:: json

  {
    "command": "/bin/bash -c \"echo hello\" && exit 777"
  }


``env``
-------

A JSON array describing the environment variables required by the template. Each element in the array must be a valid JSON object.

An input will be generated in the templates view for each element in the array. Depending on the object properties, different types of
inputs can be generated (text input, select).

This field is **optional**.

Element format:

.. code-block:: json

  {
    "name": "the name of the environment variable, as supported in the container image (mandatory)",
    "label": "label for the input in the UI (mandatory unless set is present)",
    "description": "a short description for this input, will be available as a tooltip in the UI (optional)",
    "default": "default value associated to the variable (optional)",
    "preset": "boolean. If set to true, the UI will not generate an input (optional)",
    "select": "an array of possible values, will generate a select input (optional)"
  }

Example:

.. code-block:: json

  {
    "env": [
      {
        "name": "MYSQL_ROOT_PASSWORD",
        "label": "Root password",
        "description": "Password used by the root user."
      },
      {
        "name": "ENV_VAR_WITH_DEFAULT_VALUE",
        "default": "default_value",
        "preset": true
      },
      {
        "name": "ENV_VAR_WITH_SELECT_VALUE",
        "label": "An environment variable",
        "description": "A description for this env var",
        "select": [
          {
            "text": "Yes, I agree",
            "value": "Y",
            "default": true
          },
          {
            "text": "No, I disagree",
            "value": "N"
          },
          {
            "text": "Maybe",
            "value": "YN"
          }
        ],
        "description": "Some environment variable."
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

A JSON array describing the associated volumes of the template. Each element in the array must be a valid JSON object that has a required container property.

For each element in the array, a Docker volume will be created and associated when starting the container.
If a bind property is defined it will be used as the source of a bind mount.
If a readonly property is is defined and true, the volume will be mounted in read-only mode.

This field is **optional**.

Example:

.. code-block:: json

  {
    "volumes": [
      {
        "container": "/etc/nginx"
      },
      {
        "container": "/usr/share/nginx/html",
        "bind": "/var/www",
        "readonly": true
      }
    ]
  }

``ports``
---------

A JSON array describing the ports exposed by template. Each element in the array must be a valid JSON string specifying the port number in the container and the protocol.

It can be optionally prefixed with the port that must be mapped on the host in the ``port:`` form.

If the host port is not specified, the Docker host will automatically assign one when starting the container.

This field is **optional**.

Example:

.. code-block:: json

  {
    "ports": ["8080:80/tcp", "443/tcp"]
  }


``labels``
----------

A JSON array describing the labels associated to the template. Each element in the array must be a valid JSON object with two properties ``name`` and ``value``.

This field is **optional**.

Example:

.. code-block:: json

  {
    "labels": [
      { "name": "com.example.vendor", "value": "Acme" },
      { "name": "com.example.license", "value": "GPL" },
      { "name": "com.example.version", "value": "1.0" }
    ]
  }


``privileged``
--------------

Should the container be started in privileged mode. Boolean, will default to false if not specified.

This field is **optional**.

.. code-block:: json

  {
    "privileged": true
  }


``interactive``
---------------

Should the container be started in foreground (equivalent of ``-i -t`` flags). Boolean, will default to false if not specified.

This field is **optional**.

.. code-block:: json

  {
    "interactive": true
  }

``restart_policy``
------------------

Restart policy associated to the container. Value must be one of the following:

* no
* unless-stopped
* on-failure
* always

This field is **optional**. Will default to ``always`` if not specified.

.. code-block:: json

  {
    "restart_policy": "unless-stopped"
  }

``hostname``
------------------

Set the hostname of the container.

This field is **optional**. Will use Docker default if not specified.

.. code-block:: json

  {
    "hostname": "mycontainername"
  }

``note``
--------

Usage / extra information about the template. This will be displayed inside the template
creation form in the Portainer UI.

Supports HTML.

This field is **optional**.

.. code-block:: json

  {
    "note": "You can use this field to specify extra information. <br/> It supports <b>HTML</b>."
  }

``platform``
------------

Supported platform. This field value must be set to **linux** or **windows**. This will display a small
platform related icon in the Portainer UI.

This field is **optional**.

.. code-block:: json

  {
    "platform": "linux"
  }

``categories``
--------------

An array of categories that will be associated to the template. Portainer UI category filter
will be populated based on all available categories.

This field is **optional**.

.. code-block:: json

  {
    "categories": ["webserver", "open-source"]
  }


Stack template definition format
================================

A template element must be a valid `JSON <http://www.json.org/>`_ object.

Example of a stack template:

.. code-block:: json

  {
    "type": 2,
    "title": "CockroachDB",
    "description": "CockroachDB cluster",
    "note": "Deploys an insecure CockroachDB cluster, please refer to <a href=\"https://www.cockroachlabs.com/docs/stable/orchestrate-cockroachdb-with-docker-swarm.html\" target=\"_blank\">CockroachDB documentation</a> for production deployments.",
    "categories": ["database"],
    "platform": "linux",
    "logo": "https://cloudinovasi.id/assets/img/logos/cockroachdb.png",
    "repository": {
      "url": "https://github.com/portainer/templates",
      "stackfile": "stacks/cockroachdb/docker-stack.yml"
    }
  }

It is composed of multiple fields, some mandatory and some optionals.

``type``
--------

Template type, valid values are: 1 (container), 2 (Swarm stack) or 3 (Compose stack).

A Swarm stack will be deployed using the equivalent of ``docker stack deploy`` whereas a Compose stack will be deployed using the equivalent of ``docker-compose``.

**NOTE:** Type 3 (Compose stack) is limited to using the version: "2" stack format, this is a limitation of docker/libcompose.

This field is **mandatory**.

``title``
---------

Title of the template.

This field is **mandatory**.

``description``
---------------

Description of the template.

This field is **mandatory**.

``repository``
--------------

A JSON object describing the public git repository from where the stack template will be loaded. It indicates
the URL of the git repository as well as the path to the Compose file inside the repository.

Element format:

.. code-block:: json

  {
    "url": "URL of the public git repository (mandatory)",
    "stackfile": "Path to the Compose file inside the repository (mandatory)",
  }

Example:

.. code-block:: json

  {
    "url": "https://github.com/portainer/templates",
    "stackfile": "stacks/cockroachdb/docker-stack.yml"
  }


This field is **mandatory**.

``administrator_only``
----------------------

Should the template be available to administrator users only.

This field is **optional**.

Example:

.. code-block:: json

  {
    "administrator_only": true
  }


``name``
--------

Default name to use for this template in the UI.

This field is **optional**.


``logo``
--------

URL of the template's logo.

This field is **optional**.

``env``
-------

A JSON array describing the environment variables required by the template. Each element in the array must be a valid JSON object.

An input will be generated in the templates view for each element in the array. Depending on the object properties, different types of
inputs can be generated (text input, select).

This field is **optional**.

Element format:

.. code-block:: json

  {
    "name": "the name of the environment variable, as supported in the container image (mandatory)",
    "label": "label for the input in the UI (mandatory unless set is present)",
    "description": "a short description for this input, will be available as a tooltip in the UI (optional)",
    "default": "default value associated to the variable (optional)",
    "preset": "boolean. If set to true, the UI will not generate an input (optional)",
    "select": "an array of possible values, will generate a select input (optional)"
  }

Example:

.. code-block:: json

  {
    "env": [
      {
        "name": "MYSQL_ROOT_PASSWORD",
        "label": "Root password",
        "description": "Password used by the root user."
      },
      {
        "name": "ENV_VAR_WITH_DEFAULT_VALUE",
        "default": "default_value",
        "preset": true
      },
      {
        "name": "ENV_VAR_WITH_SELECT_VALUE",
        "label": "An environment variable",
        "description": "A description for this env var",
        "select": [
          {
            "text": "Yes, I agree",
            "value": "Y",
            "default": true
          },
          {
            "text": "No, I disagree",
            "value": "N"
          },
          {
            "text": "Maybe",
            "value": "YN"
          }
        ],
        "description": "Some environment variable."
      }
    ]
  }

``note``
--------

Usage / extra information about the template. This will be displayed inside the template
creation form in the Portainer UI.

Supports HTML.

This field is **optional**.

.. code-block:: json

  {
    "note": "You can use this field to specify extra information. <br/> It supports <b>HTML</b>."
  }

``platform``
------------

Supported platform. This field value must be set to **linux** or **windows**. This will display a small
platform related icon in the Portainer UI.

This field is **optional**.

.. code-block:: json

  {
    "platform": "linux"
  }

``categories``
--------------

An array of categories that will be associated to the template. Portainer UI category filter
will be populated based on all available categories.

This field is **optional**.

.. code-block:: json

  {
    "categories": ["webserver", "open-source"]
  }

Build and host your own templates
=================================


The simplest way to use your own templates is to bind mount your own template file directly into the Portainer container, see :doc:`Configuration <configuration>`.

You can also build your own container that will use `Nginx <https://hub.docker.com/_/nginx/>`_ to serve the templates definitions.

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
