# How can I deploy the Portainer Agent on a Swarm cluster with Linux and Windows nodes?

Our default deployment configurations assume that you are running all nodes in your Docker Swarm environment on the same OS (Linux or Windows), and not a mix of OS types across your nodes. To deploy the Portainer Agent to a mixed-OS swarm, it is necessary to adjust your deployment commands.

The Portainer Agent can require slightly different configurations on Linux and Windows platforms, for example due to the different paths to the Docker socket. This means a different service definition is needed for Linux and Windows nodes. We can identify the different node types using node placement constraints, specifically the node.platform.os constraint:

```
   deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == windows
```

The above would restrict a service to Windows nodes. We can do the same for Linux:

```
    deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == linux
```

This lets you create a service for each OS, and configure each service as required.

However, in this configuration the nodes would have different internal DNS names and wouldn't be able to communicate as Portainer expects. Portainer uses the tasks.agent name internally for this. We can get this to work with our multiple service setup by ensuring that the two services are added to the same network, and defining the same alias on each service:

```
    networks:
      agent_network:
        aliases:
          - agent
```

Adding this to both service definitions would allow the Agents on each node type to communicate.

Below are some full example YAML files you can base your deployments on. You may need to adjust the configuration to suit your needs.

### Deploying Portainer Server and the Portainer Agent to a mixed-OS swarm

You can use the following YAML to deploy the Portainer Server and the Portainer Agent to your swarm. Note this restricts the Portainer Server container to a Linux node.

```
version: '3.9'

networks:
  agent_network:
    driver: overlay

volumes:
  portainer_data:

services:
  agent_linux:
    image: portainer/agent:latest
    environment:
      - AGENT_CLUSTER_ADDR=tasks.agent
    volumes:
      - type: bind
        source: /var/run/docker.sock
        target: /var/run/docker.sock
      - type: bind
        source: /var/lib/docker/volumes
        target: /var/lib/docker/volumes
    networks:
      agent_network:
        aliases:
          - agent
    deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == linux

  agent_windows:
    image: portainer/agent:latest
    environment:
      - AGENT_CLUSTER_ADDR=tasks.agent
    volumes:
      - type: npipe
        source: \\.\pipe\docker_engine
        target: \\.\pipe\docker_engine
      - type: bind
        source: C:\ProgramData\docker\volumes
        target: C:\ProgramData\docker\volumes
    networks:
      agent_network:
        aliases:
          - agent
    deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == windows
    
  portainer:
    image: portainer/portainer-ee:latest
    command: -H tcp://tasks.agent:9001 --tlsskipverify
    ports:
      - target: 9443
        published: 9443
      - target: 9000
        published: 9000
      - target: 8000
        published: 8000
    volumes:
      - portainer_data:/data
    networks:
      - agent_network
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints:
          - node.platform.os == linux
```

### Deploying the Portainer Agent to a mixed-OS swarm

You can use the following YAML as an example of how to deploy the Portainer Agent to a mixed Linux and Windows swarm. This is for use when you already have a Portainer Server installation and are adding this cluster as a new environment.

```
version: '3.9'

networks:
  agent_network:
    driver: overlay

volumes:
  portainer_data:

services:
  agent_linux:
    image: portainer/agent:latest
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
    environment:
      - AGENT_CLUSTER_ADDR=tasks.agent
    volumes:
      - type: bind
        source: /var/run/docker.sock
        target: /var/run/docker.sock
      - type: bind
        source: /var/lib/docker/volumes
        target: /var/lib/docker/volumes
    networks:
      agent_network:
        aliases:
          - agent
    deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == linux

  agent_windows:
    image: portainer/agent:latest
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
    environment:
      - AGENT_CLUSTER_ADDR=tasks.agent
    volumes:
      - type: npipe
        source: \\.\pipe\docker_engine
        target: \\.\pipe\docker_engine
      - type: bind
        source: C:\ProgramData\docker\volumes
        target: C:\ProgramData\docker\volumes
    networks:
      agent_network:
        aliases:
          - agent
    deploy:
      mode: global
      placement:
        constraints: 
          - node.platform.os == windows
    

```

&#x20;
