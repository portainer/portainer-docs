# Deploying Portainer behind Traefik Proxy

[Traefik Proxy](https://traefik.io/traefik/) is a reverse proxy and load balancing solution focused on micro services.

## Deploying in a Docker Standalone scenario

To deploy Portainer behind Traefik Proxy in a Docker standalone scenario you must use a Docker Compose file. In the following `docker-compose.yml` you will find the configuration for Portainer Traefik with SSL support and the Portainer Server.

{% tabs %}
{% tab title="Business Edition" %}
```
version: "3.3"

services:
  traefik:
    container_name: traefik
    image: "traefik:latest"
    command:
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --providers.docker
      - --log.level=ERROR
      - --certificatesresolvers.leresolver.acme.httpchallenge=true
      - --certificatesresolvers.leresolver.acme.email=your-email #Set your email address here, is for the generation of SSL certificates with Let's Encrypt. 
      - --certificatesresolvers.leresolver.acme.storage=./acme.json
      - --certificatesresolvers.leresolver.acme.httpchallenge.entrypoint=web
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./acme.json:/acme.json"
    labels:
      - "traefik.http.routers.http-catchall.rule=hostregexp(`{host:.+}`)"
      - "traefik.http.routers.http-catchall.entrypoints=web"
      - "traefik.http.routers.http-catchall.middlewares=redirect-to-https"
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"

  portainer:
    image: portainer/portainer-ee:lts
    command: -H unix:///var/run/docker.sock
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    labels:
      # Frontend
      - "traefik.enable=true"
      - "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"
      - "traefik.http.routers.frontend.entrypoints=websecure"
      - "traefik.http.services.frontend.loadbalancer.server.port=9000"
      - "traefik.http.routers.frontend.service=frontend"
      - "traefik.http.routers.frontend.tls.certresolver=leresolver"

      # Edge
      - "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
      - "traefik.http.routers.edge.entrypoints=websecure"
      - "traefik.http.services.edge.loadbalancer.server.port=8000"
      - "traefik.http.routers.edge.service=edge"
      - "traefik.http.routers.edge.tls.certresolver=leresolver"


volumes:
  portainer_data:
```
{% endtab %}

{% tab title="Community Edition" %}
```
version: "3.3"

services:
  traefik:
    container_name: traefik
    image: "traefik:latest"
    command:
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --providers.docker
      - --log.level=ERROR
      - --certificatesresolvers.leresolver.acme.httpchallenge=true
      - --certificatesresolvers.leresolver.acme.email=your-email #Set your email address here, is for the generation of SSL certificates with Let's Encrypt. 
      - --certificatesresolvers.leresolver.acme.storage=./acme.json
      - --certificatesresolvers.leresolver.acme.httpchallenge.entrypoint=web
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./acme.json:/acme.json"
    labels:
      - "traefik.http.routers.http-catchall.rule=hostregexp(`{host:.+}`)"
      - "traefik.http.routers.http-catchall.entrypoints=web"
      - "traefik.http.routers.http-catchall.middlewares=redirect-to-https"
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"

  portainer:
    image: portainer/portainer-ce:lts
    command: -H unix:///var/run/docker.sock
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data
    labels:
      # Frontend
      - "traefik.enable=true"
      - "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"
      - "traefik.http.routers.frontend.entrypoints=websecure"
      - "traefik.http.services.frontend.loadbalancer.server.port=9000"
      - "traefik.http.routers.frontend.service=frontend"
      - "traefik.http.routers.frontend.tls.certresolver=leresolver"

      # Edge
      - "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
      - "traefik.http.routers.edge.entrypoints=websecure"
      - "traefik.http.services.edge.loadbalancer.server.port=8000"
      - "traefik.http.routers.edge.service=edge"
      - "traefik.http.routers.edge.tls.certresolver=leresolver"


volumes:
  portainer_data:
```
{% endtab %}
{% endtabs %}

Before you run this file in Docker, you will need to create the `acme.json` file with permission `600` that will store the SSL certificates. Once it has been created, you can define the file path in the following sections in the Docker Compose file:

In the volumes and command section of the Traefik Proxy container:

```
- "./acme.json:/acme.json"
```

```
- --certificatesresolvers.leresolver.acme.storage=./acme.json
```

You also need to enter your email address for Let's Encrypt registration.

```
- --certificatesresolvers.leresolver.acme.email=your-email
```

Next, customize some labels in the Traefik container. The following labels need to be updated with the URL that you want use to access Portainer:

```
- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"
```

```
- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
```

Once this is done, you're ready to deploy Portainer:

```
docker-compose up -d
```

After the images have been downloaded and deployed you will able to access Portainer from the URL you defined earlier, for example: `https://portainer.yourdomain.com`.

## Deploying in a Docker Swarm scenario

To deploy Portainer behind Traefik Proxy in a Docker Swarm scenario you must use a Docker Compose file. In the following `docker-compose.yml` you will find the configuration for Portainer Traefik with SSL support and the Portainer Server.

{% hint style="warning" %}
This deployment assumes you are running one manager node. If you are using multiple managers we advise [reading this knowledge base article](https://portal.portainer.io/knowledge/how-can-i-ensure-portainers-configuration-is-retained) before proceeding.
{% endhint %}

Before deploying the Docker Compose file, you need to create two elements: networks and volumes.

First, create two overlay networks:

```
 docker network create -d overlay agent_network
```

```
 docker network create -d overlay public
```

Then create the volume:

```
 docker volume create portainer_data
```

Save this recipe as `portainer.yml`:

{% tabs %}
{% tab title="Business Edition" %}
```
version: '3.2'

services:
  traefik:
    image: "traefik:latest"
    command:
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --providers.docker=true
      - --providers.docker.swarmMode=true
      - --providers.docker.exposedbydefault=false
      - --providers.docker.network=public
      - --api
      - --log.level=ERROR
    ports:
      - "80:80"
      - "443:443"
    networks:
      - public
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  agent:
    image: portainer/agent:lts
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
    image: portainer/portainer-ee:lts
    command: -H tcp://tasks.agent:9001 --tlsskipverify
    volumes:
      - data:/data
    networks:
      - public
      - agent_network
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints: [node.role == manager]
      labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portainer.rule=Host(`portainer.yourdomain.com`)"
      - "traefik.http.routers.portainer.entrypoints=web"
      - "traefik.http.services.portainer.loadbalancer.server.port=9000"
      - "traefik.http.routers.portainer.service=portainer"
      # Edge
      - "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
      - "traefik.http.routers.edge.entrypoints=web"
      - "traefik.http.services.edge.loadbalancer.server.port=8000"
      - "traefik.http.routers.edge.service=edge"

networks:
  public:
    external: true
  agent_network:
    external: true

volumes:
   data:
```
{% endtab %}

{% tab title="Community Edition" %}
```
version: '3.2'

services:
  traefik:
    image: "traefik:latest"
    command:
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      - --providers.docker=true
      - --providers.swarm=true
      - --providers.docker.exposedbydefault=false
      - --providers.docker.network=public
      - --api
      - --log.level=ERROR
    ports:
      - "80:80"
      - "443:443"
    networks:
      - public
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"

  agent:
    image: portainer/agent:lts
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
    image: portainer/portainer-ce:lts
    command: -H tcp://tasks.agent:9001 --tlsskipverify
    volumes:
      - data:/data
    networks:
      - public
      - agent_network
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints: [node.role == manager]
      labels:
      - "traefik.enable=true"
      - "traefik.http.routers.portainer.rule=Host(`portainer.yourdomain.com`)"
      - "traefik.http.routers.portainer.entrypoints=web"
      - "traefik.http.services.portainer.loadbalancer.server.port=9000"
      - "traefik.http.routers.portainer.service=portainer"
      # Edge
      - "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
      - "traefik.http.routers.edge.entrypoints=web"
      - "traefik.http.services.edge.loadbalancer.server.port=8000"
      - "traefik.http.routers.edge.service=edge"

networks:
  public:
    external: true
  agent_network:
    external: true

volumes:
   data:
```
{% endtab %}
{% endtabs %}

Finally, customize these labels to match the URL that you want to use to access Portainer:

```
- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"
```

```
- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"
```

You can now deploy Portainer by executing the following:

```
 docker stack deploy portainer -c portainer.yml
```

To check the deployment, run `docker service ls`. You should see an output similar to the following:

```
ID                  NAME                  MODE                REPLICAS            IMAGE                          PORTS
lt21zrypsll6        portainer_agent       global              1/1                 portainer/agent:lts
m6912ynwdcd7        portainer_portainer   replicated          1/1                 portainer/portainer-ee:lts
tw2nb4i640e4        portainer_traefik     replicated          1/1                 traefik:latest                 *:80->80/tcp, *:443->443/tcp
```

Once the services are running, you will able to access Portainer from the URL you defined earlier, for example: `portainer.yourdomain.com`.
