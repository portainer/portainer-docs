=====
Agent
=====

Purpose
=======

The Portainer Agent is a workaround for a Docker API limitation when using the Docker API to manage a Docker environment. The user interactions with specific resources (containers, networks, volumes and images) are limited to those available on the node targeted by the Docker API request.

Docker Swarm mode introduces a concept which is the clustering of Docker nodes. It also adds services, tasks, configs and secrets which are cluster-aware resources. Cluster-aware means that you can query for a list of services or inspect a task inside any node on the cluster, as long as you’re executing the Docker API request on a manager node.

Containers, networks, volumes and images are node specific resources, not cluster-aware. When you, for example, want to list all the volumes available on a node inside your cluster, you will need to send a query to that specific node.

The purpose of the agent aims to allow previously node specific resources to be cluster-aware. All while keeping the Docker API request format. As aforementioned, this means that you only need to execute one Docker API request to retrieve all these resources from every node inside the cluster. In all bringing a better Docker user experience when managing Swarm clusters.

Agent deployment
================

Here follow the instructions to deploy the Agent, and to connect it to Portainer.

Deploy it as a stack
--------------------

Have a look at the deployment documentation :ref:`Inside a Swarm cluster` to quickly deploy the agent and a Portainer instance inside a Swarm cluster via ``docker stack deploy``.

Manual deployment
-----------------

Overall, the setup consists of the following steps:

* Step 1: Create a new overlay network in your Swarm cluster for the Agent.
* Step 2: Deploy the Agent as a global service in your cluster (connected to the overlay network).
* Step 3: Connect your Portainer instance to any of the agents by using the Agent's IP:PORT as an endpoint.

**Note**: This setup assumes that you are executing the following instructions on a Swarm manager node.

*Step 1*, creating a new overlay network in your Swarm cluster:

::

  $ docker network create --driver overlay --attachable portainer_agent_network

*Step 2*, deploying the Agent as a `global` service in your cluster:

::

  $ docker service create \
      --name portainer_agent \
      --network portainer_agent_network \
      -e AGENT_CLUSTER_ADDR=tasks.portainer_agent \
      --mode global \
      --constraint 'node.platform.os == linux' \
      --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
      --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
      portainer/agent

*Step 3*, deploying the Portainer instance as a service:

::

  $ docker service create \
      --name portainer \
      --network portainer_agent_network \
      --publish 9000:9000 \
      --replicas=1 \
      --constraint 'node.role == manager' \
      portainer/portainer -H "tcp://tasks.portainer_agent:9001" --tlsskipverify

*Step 4*, deploying the Agent for all Windows Server nodes

Because of Docker limitation you need deploy Agent to all Windows Server nodes by running following command on each of them.

::

  $ docker run -d --name portainer_agent --restart always --network portainer_agent_network -e AGENT_CLUSTER_ADDR=tasks.agent --mount type=npipe,source=\\.\pipe\docker_engine,target=\\.\pipe\docker_engine portainer/agent:windows1803-amd64


Connecting an existing Portainer instance to an agent
-----------------------------------------------------

If you want to connect an existing Portainer instance to an agent, you can choose the **Agent** environment type when creating a new endpoint.

Ensure when deploying the agent, that you expose the Agent's port inside your Swarm cluster, and that the mode is set to **host**  (default port is 9001):

::

  $ docker service create \
      --name portainer_agent \
      --network portainer_agent_network \
      --publish mode=host,target=9001,published=9001 \
      -e AGENT_CLUSTER_ADDR=tasks.portainer_agent \
      --mode global \
      --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
      --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
      portainer/agent

You can then use the address of any node in your cluster (with the agent port) inside the Agent URL field.

Alternatively, you can deploy the agent using the following stack:

.. code-block:: yaml

  version: '3.2'

  services:
    agent:
      image: portainer/agent
      environment:
        AGENT_CLUSTER_ADDR: tasks.agent
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

Agent configuration
-------------------

You can change the configuration of the agent by using environment variables.

The following environment variables can be tuned:

* AGENT_PORT: Agent port (default: ``9001``)
* LOG_LEVEL: Agent log level (default: ``INFO``)
