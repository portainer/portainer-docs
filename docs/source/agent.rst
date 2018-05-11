=====
Agent
=====

Purpose
=======

The purpose of the agent is to work around a Docker API limitation. When using the Docker API to manage a Docker environment, the user interactions with specific resources (containers, networks, volumes and images) are limited to these available on the node targeted by the Docker API request.

Docker Swarm mode introduce the concept of cluster of Docker nodes. With that concept, it also introduces the services, tasks, configs and secrets which are cluster aware resources. This means that you can query for the list of service or inspect a task inside any node on the cluster as long as you're executing the Docker API request on a manager node.

Containers, networks, volumes and images are node specific resources, not cluster aware. If you want to get the list of all the volumes available on the node number 3 inside your cluster, you need to execute the request to query the volumes on that specific node.

The agent purpose aims to solve that issue and make the containers, networks and volumes resources cluster aware while keeping the Docker API request format.

This means that you only need to execute one Docker API request to retrieve all the volumes inside your cluster for example.

The final goal is to bring a better Docker UX when managing Swarm clusters.

Deployment
==========

Instructions to deploy the Portainer agent and to connect Portainer to an agent.

Deploy it as a stack
--------------------

Have a look at the deployment documentation :ref:`Inside a Swarm cluster` to quickly deploy the agent and a Portainer instance inside a Swarm cluster via ``docker stack deploy``.

Manual deployment
-----------------

Overall, the setup consists of the following steps:

* Step 1: create a new overlay network in your Swarm cluster for the Portainer agent
* Step 2: deploy the Portainer agent as a global service in your cluster (inside the overlay network created previously)
* Step 3: connect your Portainer instance to any of the agents by using the agent IP:PORT as an endpoint

**Note**: This setup will assume that you're executing the following instructions on a Swarm manager node.

First step, create a new overlay network in your Swarm cluster:

::

  $ docker network create --driver overlay portainer_agent_network

Second step, deploy the agent as a global service inside the network you previously created:

::

  $ docker service create \
      --name portainer_agent \
      --network portainer_agent_network \
      -e AGENT_CLUSTER_ADDR=tasks.portainer_agent \
      --mode global \
      --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
      portainer/agent

Third step, deploy the Portainer instance as a service:

::

  $ docker service create \
      --name portainer \
      --network portainer_agent_network \
      --publish 9000:9000 \
      --replicas=1 \
      --constraint 'node.role == manager' \
      portainer/portainer -H "tcp://tasks.portainer_agent:9001" --tlsskipverify

Connecting an existing Portainer instance to an agent
-----------------------------------------------------

If you want to connect an existing Portainer instance to an agent, you can choose the **Agent** environment type when creating a new endpoint.

Ensure that you exposed the Agent port inside your Swarm cluster via when you deployed the agent (default port is 9001):

::

  $ docker service create \
      --name portainer_agent \
      --network portainer_agent_network \
      --publish 9001:9001 \
      -e AGENT_CLUSTER_ADDR=tasks.portainer_agent \
      --mode global \
      --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
      portainer/agent

You can then use the address of any node in your cluster (with the agent port) inside the Agent URL field.

Configuration
-------------

You can change the configuration of the agent by using environment variables.

The following environment variables can be tuned:

* AGENT_PORT: Agent port (default: ``9001``)
* LOG_LEVEL: Agent log level (default: ``INFO``)
