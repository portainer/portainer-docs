# Deploy Portainer behind Traefik Proxy

[Traefik Proxy](https://traefik.io/traefik/) is a reverse proxy and load balancing solution focused on micro services.

### Deploying in a Docker Standalone scenario

To deploy Portainer behind Traefik Proxy in a Docker standalone scenario we will use a Docker Compose file. In the following docker-compose.yml you will find the configuration of the Portainer Traefik with SSL support and Portainer Server.

<pre><code>version: "3.3"

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
    image: portainer/portainer-ce:2.0.0
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
  portainer_data:</code></pre>

Before you run this file in Docker you will need to create the <code>acme.json</code> file that will store the SSL certificates. Once it has been created you need to define the path of that file in the following sections:

In the volume and command section of the Traefik Proxy container

<pre><code>- "./acme.json:/acme.json"</code></pre>

<pre><code>- --certificatesresolvers.leresolver.acme.storage=./acme.json</code></pre>

You need to setup your email address for the registration with Let's Encrypt. 

<pre><code>- --certificatesresolvers.leresolver.acme.email=your-email</code></pre>

Next, need to customize some labels in the Traefik container. The following labels need to be modified with the url that you want use to access Portainer.

<pre><code>- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"</code></pre>

<pre><code>- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"</code></pre>

After all this setup, you're ready to deploy Portainer:

<pre><code>docker-compose up -d</code></pre>

After the images have been downloaded and deployed you will able to access Portainer in the URL you defined earlier. Eg: <code>https://portainer.yourdomain.com</code>

This file also exists in [our repository on Github](https://github.com/portainer/portainer-compose/tree/master/traefik).

### Deploying in a Docker Swarm scenario

To deploy Portainer behind Traefik Proxy in a Docker Swarm scenario we will use a Docker Compose file. In the following docker-compose.yml you will find the configuration of the Portainer Traefik with SSL support and Portainer Server.

Before deploying, you need to create 2 elements: Networks and volumes. 

1. First, create 2 overlay networks:

<pre><code> docker network create -d overlay agent_network</code></pre>

<pre><code> docker network create -d overlay public</code></pre>

2. Then create the volume:

<pre><code> docker volume create portainer_data</code></pre>

3. Save the below recipe as portainer.yml

<pre><code>version: '3.2'

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
</code></pre>

4. Before you can deploy, you need to customize these labels to match the URL that you want. 

<pre><code>- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"</code></pre>

<pre><code>- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"</code></pre>

5. You're now ready to deploy Portainer by executing the following:

<pre><code> docker stack deploy portainer -c portainer.yml</code></pre>

6. To check the deployment you can run <code> docker service ls</code> and you will see an output similar to the following:

<pre><code>ID                  NAME                  MODE                REPLICAS            IMAGE                          PORTS
lt21zrypsll6        portainer_agent       global              1/1                 portainer/agent:latest
m6912ynwdcd7        portainer_portainer   replicated          1/1                 portainer/portainer-ce:2.0.0
tw2nb4i640e4        portainer_traefik     replicated          1/1                 traefik:latest                 *:80->80/tcp, *:443->443/tcp</code></pre>

Once the services are running, you can browse the URL specified (e.g. portainer.yourdomain.com) to access Portainer.

### Deploying in a Kubernetes scenario

WIP


## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}