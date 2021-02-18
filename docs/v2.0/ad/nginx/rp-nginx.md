# Deploy Portainer behind NGINX Reverse Proxy

### Deploying in a Docker Standalone scenario

To deploy Portainer behind NGINX Proxy in a Docker standalone scenario we will use a Docker Compose file. In the following docker-compose.yml you will find the configuration of the Portainer Server and NGINX Proxy.

<pre><code>
version: "2"

services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    restart: always
    networks:
      - proxy
    ports:
      - "80:80"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "./vhost.d:/etc/nginx/vhost.d:ro"

  portainer:
    image: portainer/portainer-ce:2.0.0
    command: -H unix:///var/run/docker.sock
    restart: always
    networks:
      - proxy
    environment:
      - VIRTUAL_HOST=portainer.yourdomain.com
      - VIRTUAL_PORT=9000
    ports:
      - 8000:8000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data

networks:
  proxy:

volumes:
  portainer_data:
</code></pre>

To setup and start working with this recipe, you need to change the VIRTUAL_HOST value. You can then run the following:

<pre><code>docker-compose up -d</code></pre>

Once complete, you will able to run <code> docker ps</code> and you will see an output similar to this:

<pre><code>CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                              NAMES
088da047e931        portainer/portainer-ce:2.0.0   "/portainer -H unix:…"   32 minutes ago       Up 22 minutes        0.0.0.0:8000->8000/tcp, 9000/tcp   nginx-port_portainer_1
1ec0594f8a01        jwilder/nginx-proxy            "/app/docker-entrypo…"   32 minutes ago      Up 22 minutes       0.0.0.0:80->80/tcp                 nginx-port_nginx-proxy_1</code></pre>

Once the deployment is complete you can browse <code>portainer.yourdomain.com</code>.

### Deploying in a Docker Swarm scenario

Deploying Portainer in Docker Swarm behind NGINX has similar steps to the Docker Standalone scenario.

First, you need to create a few networks. One for the agent and the communication with Portainer Server and other to "expose" the Portainer container to the same network that the Reverse Proxy.

Before deploying, you need to create 2 elements: Networks and volumes.

1. First, create 2 networks for the agent to communicate with Portainer Server and other to "expose" the Portainer container to the same network that as the Reverse Proxy

<pre><code> docker network create -d overlay proxy</code></pre>

<pre><code> docker network create -d overlay agent_network</code></pre>

2. Then create the volume:

<pre><code> docker volume create portainer_data</code></pre>

3. Save the below recipe as portainer.yml

<pre><code>version: '3.2'

services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    networks:
      - proxy
    ports:
      - "80:80"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"
      - "./vhost.d:/etc/nginx/vhost.d:ro"

  agent:
    image: portainer/agent
    environment:
      # REQUIRED: Should be equal to the service name prefixed by "tasks." when
      # deployed inside an overlay network
      AGENT_CLUSTER_ADDR: tasks.agent
      # AGENT_PORT: 9001
      # LOG_LEVEL: debug
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
    networks:
      - agent_network
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

  portainer:
    image: portainer/portainer-ce:2.0.0
    command: -H tcp://tasks.agent:9001 --tlsskipverify
    volumes:
      - data:/data
    environment:
      - VIRTUAL_HOST=portainer.yourdomain.com
      - VIRTUAL_PORT=9000
    ports:
      - 8000:8000
    networks:
      - proxy
      - agent_network
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints: [node.role == manager]

networks:
  proxy:
    external: true
  agent_network:
    external: true

volumes:
   data:
</code></pre>

4. To setup and start working with this recipe, you need to change the VIRTUAL_HOST value.

5. You're now ready to deploy Portainer by executing the following:

<pre><code> docker stack deploy portainer -c portainer.yml</code></pre>

6. To check the deployment you can run <code> docker service ls</code> and you will see an output similar to the following:

<pre><code>ID                  NAME                    MODE                REPLICAS            IMAGE                          PORTS
gy2bjxid0g4p        portainer_agent         global              1/1                 portainer/agent:latest
jwvjp5bux4sz        portainer_nginx-proxy   replicated          1/1                 jwilder/nginx-proxy:latest     *:80->80/tcp
5nflcvoxl3c7        portainer_portainer     replicated          1/1                 portainer/portainer-ce:2.0.0   *:8000->8000/tcp</code></pre>

Once the services are running, you can browse the url specified (e.g. portainer.yourdomain.com) to access Portainer.

### Deploying in a Kubernetes scenario

WIP

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=\_blank}
