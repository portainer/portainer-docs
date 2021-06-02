Agent
=====

Purpose
-------

The Portainer Agent is a workaround for a Docker API limitation when
using the Docker API to manage a Docker environment. The user
interactions with specific resources (containers, networks, volumes and
images) are limited to those available on the node targeted by the
Docker API request.

Docker Swarm mode introduces a concept which is the clustering of Docker
nodes. It also adds services, tasks, configs and secrets which are
cluster-aware resources. Cluster-aware means that you can query for a
list of services or inspect a task inside any node on the cluster, as
long as you’re executing the Docker API request on a manager node.

Containers, networks, volumes and images are node specific resources,
not cluster-aware. When you, for example, want to list all the volumes
available on a node inside your cluster, you will need to send a query
to that specific node.

The purpose of the agent aims to allow previously node specific
resources to be cluster-aware. All while keeping the Docker API request
format. As aforementioned, this means that you only need to execute one
Docker API request to retrieve all these resources from every node
inside the cluster. In all bringing a better Docker user experience when
managing Swarm clusters.

Deployment
----------

Instructions on how to deploy the Agent and how to connect it to
Portainer.

### Deploy it as a stack

Have a look at the deployment documentation Inside a Swarm cluster to
quickly deploy the agent and a Portainer instance inside a Swarm cluster
via `docker stack deploy`.

### Manual deployment

Overall, the setup consists of the following steps:

-   Step 1: Create a new overlay network in your Swarm cluster for the
    Agent.
-   Step 2: Deploy the Agent as a global service in your cluster
    (connected to the overlay network).
-   Step 3: Connect your Portainer instance to any of the agents by
    using the Agent's IP:PORT as an endpoint.

**Note**: This setup assumes that you are executing the following
instructions on a Swarm manager node.

*Step 1*, creating a new overlay network in your Swarm cluster:

    $ docker network create --driver overlay --attachable portainer_agent_network

*Step 2*, deploying the Agent as a global service in your cluster:

    $ docker service create \
        --name portainer_agent \
        --network portainer_agent_network \
        --mode global \
        --constraint 'node.platform.os == linux' \
        --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
        --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
        portainer/agent

*Step 3*, deploying the Portainer instance as a service:

    $ docker service create \
        --name portainer \
        --network portainer_agent_network \
        --publish 9000:9000 \
        --publish 8000:8000 \
        --replicas=1 \
        --constraint 'node.role == manager' \
        portainer/portainer -H "tcp://tasks.portainer_agent:9001" --tlsskipverify

*Step 4*, deploying the Agent for all Windows Server nodes

Because of Docker limitation you need to deploy the Agent to all Windows
Server nodes by running following command on each of them.

    $ docker run -d --name portainer_agent --restart always --network portainer_agent_network -e AGENT_CLUSTER_ADDR=tasks.portainer_agent --mount type=npipe,source=\\.\pipe\docker_engine,target=\\.\pipe\docker_engine portainer/agent:windows1803-amd64

**Note**: If you're using Windows server 1803, you might need to open up
DNS ports to support the DNS resolution of tasks.portainer\_agent. See:
<https://success.docker.com/article/swarm-internal-dns-is-inaccessible-on-windows-server-1803>

### Connecting an existing Portainer instance to an agent

If you want to connect an existing Portainer instance to an agent, you
can choose the **Agent** environment type when creating a new endpoint.

Ensure when deploying the agent, that you expose the Agent's port inside
your Swarm cluster, and that the mode is set to **host** (default port
is 9001):

    $ docker service create \
        --name portainer_agent \
        --network portainer_agent_network \
        --publish mode=host,target=9001,published=9001 \
        --mode global \
        --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
        --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
        portainer/agent

**Note**: Please be aware that this could potentially open up the Agent
for use by anybody in case the Docker host is reachable from the
internet. Publishing the Agent port 9001 in host mode basically means
opening up this port in the Docker hosts firewall for all interfaces.
Therefore it is highly recommended to use the `AGENT_SECRET` environment
variable to define a shared secret, see Shared secret. The Agent
implements the [Trust On First Use
(TOFU)](https://en.wikipedia.org/wiki/Trust_on_first_use) principle, so
only the first Portainer to connect will be able to use it, but you want
to avoid an attacker beating you to it.

You can then use the address of any node in your cluster (with the agent
port) inside the Agent URL field.

Alternatively, you can deploy the agent using the following stack:

<pre><code>
version: '3.2'

services:
  agent:
    image: portainer/agent
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
        mode: host
    networks:
      - portainer_agent
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

networks:
  portainer_agent:
    driver: overlay
    attachable: true
</code></pre>

**Note**: In case you are running only a single Agent cluster in the
same Swarm overlay network as your Portainer instance, you can just omit
publishing the Agent port 9001. Portainer and the Agents will be able to
communicate with each other inside the same overlay network and there is
no need for the Agents to be accessible from the outside.

Configuration
-------------

You can use variant agent configurations to achieve different setups or
enable specific features.

### Shared secret

By default, the agent will register the first Portainer instance that
connects to it and prevent connections from any other instance after
that.

To bypass this security mechanism, Portainer and the agent can be
configured at deployment time to use a shared secret. This configuration
allows multiple Portainer instances to connect to the same agent
endpoint.

The `AGENT_SECRET` environment variable can be used to define the shared
secret.

When deploying the agent as a service:

    $ docker service create \
        --name portainer_agent \
        --network portainer_agent_network \
        --publish mode=host,target=9001,published=9001 \
        -e AGENT_SECRET=mysecrettoken \
        --mode global \
        --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
        --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
        portainer/agent

Via a stack file:

<pre><code>
version: '3.2'

services:
  agent:
    image: portainer/agent
    environment:
      AGENT_SECRET: mysecrettoken
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
        mode: host
    networks:
      - portainer_agent
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

networks:
  portainer_agent:
    driver: overlay
    attachable: true
</code></pre>

The `AGENT_SECRET` must be specified when deploying Portainer as well:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -e AGENT_SECRET=mysecrettoken -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

### Enable host management features

The following features are disabled by default for security reasons:

-   Ability to manage the filesystem of the host where the agent is
    running
-   Ability to retrieve hardware information about the host where the
    agent is running (PCI devices/disks)

In order to enable these features, the agent must be configured properly
by:

-   Enabling the host management features via the `CAP_HOST_MANAGEMENT`
    environment variable
-   Bind-mounting the root of the host in the agent container (must be
    bind-mounted in `/host`)

Example when deploying the agent via a stack file:

<pre><code>
version: '3.2'

services:
  agent:
    image: portainer/agent
    environment:
      CAP_HOST_MANAGEMENT: 1
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
      - /:/host
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
        mode: host
    networks:
      - portainer_agent
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

networks:
  portainer_agent:
    driver: overlay
    attachable: true
</code></pre>

### Available options

You can change the configuration of the agent by using environment
variables.

The following environment variables can be tuned:

-   AGENT\_PORT: Agent port (default: `9001`)
-   LOG\_LEVEL: Agent log level (default: `INFO`)
-   AGENT\_CLUSTER\_ADDR: Address used by each agent to form a cluster.
-   AGENT\_SECRET: Shared secret used to authorize Portainer instances
    to connect to the agent
-   CAP\_HOST\_MANAGEMENT: Enable host management features by setting
    the value to `1`

Usage
-----

### API

If you want to use the Portainer API to query containers running on a
specific node inside a Swarm cluster and when using the Portainer agent
setup, you can specify the `X-PortainerAgent-Target` header in the HTTP
request to target a specific node in the cluster. The value must be set
to the name of a specific node that can be retrieved via the `NodeName`
property when querying cluster resources (containers, volumes...).
