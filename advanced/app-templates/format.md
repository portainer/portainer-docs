# App template JSON format

App template definitions are written in JSON. Valid templates consist of an array, and every template definition consists of one element.

## Container template definition format

A container template element must be a valid JSON object, composed of both mandatory and optional data fields. Here's an example of the format:

```
{
  "version": "2",
  "templates": [
    {
      // template1
    },
    {
      // template2
    },
    ...
  ]
}
```

### type

* **Description:** The template type.
* **Format:** Integer
* **Valid values:** `1` = container; `2` = Swarm stack; `3` = Compose stack
* **Required/Optional:** Required
* **Other information:** Type `3` is limited to using the version `"2"` stack format (this is a docker/libcompose limitation).

### title

* **Description:** The template title.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Required

### description

* **Description:** The template description.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Required

### image

* **Description:** The Docker image associated with a template.
* **Format:** String
* **Valid values:** Any valid URL.
* **Required/Optional:** Required

### administrator-only

* **Description:** Indicates whether or not a template should be available just to admin users.
* **Format:** Boolean
* **Valid values:** `true` = available to admins only; `false` = available to all users
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "administrator-only": true
}
```

### name

* **Description:** The default name of a template (shows in the Portainer UI).
* **Format:** String
* **Valid values:** Any valid string.
* **Required/Optional:** Optional

### logo

* **Description:** The template logo.
* **Format:** String
* **Valid values:** Any valid URL.
* **Required/Optional:** Optional

### registry

* **Description:** The registry where the Docker image is stored. If not specified, Portainer will use Docker Hub as the default.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Optional

### command

* **Description:** The command to run in the container. If not specified, the container will use the default command in its Dockerfile.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "command": "/bin/bash -c \"echo hello\" && exit 777"
}
```

### env

* **Description:** A JSON array describing the environment variables required by a template. Each element in the array must be a valid JSON object. An input will be generated in the templates view for each element in the array. Depending on the object properties, different types of inputs can be generated (text input, select).
* **Format:** Array
* **Required/Optional:** Optional

Array format:

```
{
  "name": "the name of the environment variable, as supported in the container image (mandatory)",
  "label": "label for the input in the UI (mandatory unless set is present)",
  "description": "a short description for this input, will be available as a tooltip in the UI (optional)",
  "default": "default value associated to the variable (optional)",
  "preset": "boolean. If set to true, the UI will not generate an input (optional)",
  "select": "an array of possible values, will generate a select input (optional)"
}
```

Example:

```
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
```

### network

* **Description:** A string that corresponds to the name of an existing Docker network. Will auto-select the network in the templates view.
* **Format:** String
* **Valid values:** Any string value. If the string does not match an existing network name when the template is used it will fall back to the first available network.
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "network": "host"
}
```

### volumes

* **Description:** A JSON array describing the volumes associated with a template. Each element in the array must be a valid JSON object with a required container property. For each element in the array, a Docker volume will be created and associated when starting the container. If a `bind` property is defined, it will be used as the source of a bind mount. If a `readonly` property is is defined and = true, the volume will be mounted in `readonly` mode.
* **Format:** Array
* **Required/Optional:** Optional
* **Example:** See below.

```
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
```

### ports

* **Description:** A JSON array describing the ports exposed by a template. Each element in the array must be a valid JSON string specifying the port number in the container, as well as the protocol. Can be optionally prefixed with a port number and colon (for example `8080:`) to define the port to be mapped on the host. If the host port is not specified, the Docker host will automatically assign it when starting the container.
* **Format:** Array
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "ports": ["8080:80/tcp", "443/tcp"]
}
```

### labels

* **Description:** A JSON array describing the labels associated with a template. Each element in the array must be a valid JSON object with two properties (`name:` and `"<value>"`).
* **Format:** Array
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "labels": [
    { "name": "com.example.vendor", "value": "Acme" },
    { "name": "com.example.license", "value": "GPL" },
    { "name": "com.example.version", "value": "1.0" }
  ]
}
```

### privileged

* **Description:** Indicates whether or not the container should be started in `privileged` mode. Defaults to `false` if not specified.
* **Format:** Boolean
* **Valid values:** `true` = start the container in privileged mode; `false` = do not start the container in privileged mode
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "privileged": true
}
```

### interactive

* **Description:** Indicates whether or not the container should be started in `foreground` mode. Defaults to `false` if not specified.
* **Format:** Boolean
* **Valid values:** `true` = start the container in foreground mode; `false` = do not start the container in foreground mode
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "interactive": true
}
```

### restart\_policy

* **Description:** The restart policy associated with the container. Will default to `"always"` if no value is specified.
* **Format:** String
* **Valid values:**
  * `"always"` Always restart the container regardless of the exit status.
  * `"no"` Never automatically restart the container.
  * `"on-failure"` Restart the container only if it exits with a non-zero status.
  * `"unless-stopped"` Always restart the container regardless of the exit status (unless the container was manually stopped).
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "restart_policy": "unless-stopped"
}
```

### hostname

* **Description:** The hostname of the container. Will default to Docker if not specified.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "hostname": "mycontainername"
}
```

### note

* **Description:** Extra information about a template, for example what it is used for. Displayed inside the template-creation form in the Portainer UI. Supports HTML.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "note": "You can use this field to record extra information about a template."
}
```

### platform

* **Description:** The supported platform. Displays a small platform-related icon in the Portainer UI. Must contain a valid value.
* **Format:** String
* **Valid values:** `"linux"`; `"windows"`
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "platform": "linux"
}
```

### categories

* **Description:** An array of categories associated with a template. Populates the category filter in the Portainer UI.
* **Format:** Array
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "categories": ["webserver", "open-source"]
}
```

## Stack template definition format

A stack template element must be a valid JSON object, composed of mandatory and optional data fields. Here's an example of the format:

```
{
  "type": 2,
  "title": "CockroachDB",
  "description": "CockroachDB cluster",
  "note": "Deploys an insecure CockroachDB cluster, please refer to CockroachDB documentation for production deployments.",
  "categories": ["database"],
  "platform": "linux",
  "logo": "https://cloudinovasi.id/assets/img/logos/cockroachdb.png",
  "repository": {
    "url": "https://github.com/portainer/templates",
    "stackfile": "stacks/cockroachdb/docker-stack.yml"
  }
}
```

### type

* **Description:** The template type. A Swarm stack will be deployed using the equivalent of `docker stack deploy`. A Compose stack will be deployed using the equivalent of `docker-compose.`
* **Format:** Integer
* **Valid values:** `1` = container; `2` = Swarm stack; `3` = Compose stack
* **Required/Optional:** Required
* **Other information:** Type `3` is limited to using the version `"2"` stack format (this is a docker/libcompose limitation).

### title

* **Description:** The template title.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Required

### description

* **Description:** The template description.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Required

### repository

* **Description:** A JSON object describing the public Git repository from where the stack template will be loaded. It indicates the URL of the Git repository as well as the path to the Compose file inside the repository.
* **Format:** Object
* **Valid values:** See the example below.
* **Required/Optional:** Required

{% hint style="warning" %}
This value **must** reference a Git repository.
{% endhint %}

Object format:

```
{
  "url": "URL of the public git repository (mandatory)",
  "stackfile": "Path to the Compose file inside the repository (mandatory)",
}
```

Example:

```
{
  "url": "https://github.com/portainer/templates",
  "stackfile": "stacks/cockroachdb/docker-stack.yml"
}
```

### administrator\_only

* **Description:** Indicates whether or not a template should be available just to admin users.
* **Format:** Boolean
* **Valid values:** `true` = available to admins only; `false` = available to all users
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "administrator_only": true
}
```

### name

* **Description:** The default name of a template (shows in the Portainer UI).
* **Format:** String
* **Valid values:** Any valid string.
* **Required/Optional:** Optional

### logo

* **Description:** The template logo.
* **Format:** String
* **Valid values:** Any valid URL.
* **Required/Optional:** Optional

### env

* **Description:** A JSON array describing the environment variables required by a template. Each element in the array must be a valid JSON object. An input will be generated in the templates view for each element in the array. Depending on the object properties, different types of inputs can be generated (text input, select).
* **Format:** Array
* **Required/Optional:** Optional

An input will be generated in the templates view for each element in the array. Depending on the object properties, different types of inputs can be generated (text input, select).

Array format:

```
{
  "name": "the name of the environment variable, as supported in the container image (mandatory)",
  "label": "label for the input in the UI (mandatory unless set is present)",
  "description": "a short description for this input, will be available as a tooltip in the UI (optional)",
  "default": "default value associated to the variable (optional)",
  "preset": "boolean. If set to true, the UI will not generate an input (optional)",
  "select": "an array of possible values, will generate a select input (optional)"
}
```

Example:

```
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
```

### note

* **Description:** Extra information about a template, for example what it is used for. Displayed inside the template-creation form in the Portainer UI. Supports HTML.
* **Format:** String
* **Valid values:** Any string value.
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "note": "You can use this field to record extra information about a template."
}
```

### platform

* **Description:** The supported platform. Displays a small platform-related icon in the Portainer UI. Must contain a valid value.
* **Format:** String
* **Valid values:** `"linux"`; `"windows"`
* **Required/Optional:** Optional
* **Example:** See below.

```
{ "platform": "linux" }
```

### categories

* **Description:** An array of categories associated with a template. Populates the category filter in the Portainer UI.
* **Format:** Array
* **Required/Optional:** Optional
* **Example:** See below.

```
{
  "categories": ["webserver", "open-source"]
```
