# Deploying Portainer behind nginx reverse proxy

## Deploying in a Docker Standalone scenario

To deploy Portainer behind an nginx proxy in a Docker standalone scenario you must use a Docker Compose file. In the following docker-compose.yml you will find the configuration of the nginx proxy and the Portainer Server.

{% hint style="info" %}
This example uses the excellent [jwilder/nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy) image as the proxy container, which requires no additional configuration beyond the two environment variables added to the `portainer` container's definition.
{% endhint %}

```text
version: "2"

services:
  nginx-proxy:
    image: jwilder/nginx-proxy
    restart: always
    ports:
      - "80:80"
    volumes:
      - "/var/run/docker.sock:/tmp/docker.sock:ro"

  portainer:
    image: portainer/portainer-ce
    command: -H unix:///var/run/docker.sock
    restart: always
    environment:
      - VIRTUAL_HOST=portainer.yourdomain.com
      - VIRTUAL_PORT=9000
    ports:
      - 8000:8000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data

volumes:
  portainer_data:
```

To start working with this recipe, change the `VIRTUAL_HOST` value then deploy Portainer by running the following:

```text
docker-compose up -d
```

When this has finished, run `docker ps` . You should  see an output similar to this:

```text
CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                              NAMES
088da047e931        portainer/portainer-ce         "/portainer -H unix:…"   32 minutes ago      Up 22 minutes       0.0.0.0:8000->8000/tcp, 9000/tcp   portainer_portainer_1
1ec0594f8a01        jwilder/nginx-proxy            "/app/docker-entrypo…"   32 minutes ago      Up 22 minutes       0.0.0.0:80->80/tcp                 portainer_nginx-proxy_1
```

Once the deployment has finished you can browse `portainer.yourdomain.com`.

## Deploying in a Docker Swarm scenario

Deploying Portainer in Docker Swarm behind nginx has similar steps to the Docker Standalone scenario. Before deploying, you need to create two elements: networks and volumes.

First, create two networks:

* One for the agent and the communication with the Portainer Server.
* One to 'expose' the Portainer container to the same network as the reverse proxy.

```text
 docker network create -d overlay proxy
```

```text
 docker network create -d agent_network
```

Next, create the volume:

```text
 docker volume create portainer_data
```

And finally, save the following recipe as `portainer.yml`:

```text
version: '3.2'

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
    image: portainer/portainer-ce
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
```

To start working with this recipe, change the `VIRTUAL_HOST` value then deploy Portainer by running the following:

```text
 docker stack deploy portainer -c portainer.yml
```

To check the deployment, run `docker service ls`. You should see an output similar to the following:

```text
ID                  NAME                    MODE                REPLICAS            IMAGE                          PORTS
gy2bjxid0g4p        portainer_agent         global              1/1                 portainer/agent:latest
jwvjp5bux4sz        portainer_nginx-proxy   replicated          1/1                 jwilder/nginx-proxy:latest     *:80->80/tcp
5nflcvoxl3c7        portainer_portainer     replicated          1/1                 portainer/portainer-ce         *:8000->8000/tcp
```

Once the services are running, you will be able to access Portainer from the URL you defined earlier, for example: `portainer.yourdomain.com`.

