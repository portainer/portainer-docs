# Deploy Portainer trough a Reverse Proxy

Portainer can be deployed trough a Reverse Proxy.

## Deploy Portainer behind Traefik Proxy

[Traefik Proxy](https://traefik.io/traefik/) is a solution of reverse proxy and load balancing focused in micro services. In this section, you will going to see how to deploy Portainer behind this solution.

### Deploying in a Docker Standalone scenario

To deploy Portainer behind Traefik Proxy in a Docker standalone scenario we going to use a Docker Compose file. In the following docker-compose.yml you will find the configuration of the Portainer Traefik with SSL support and Portainer Server.

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

Before to run this file in Docker. You will need to create the <code>acme.json</code> file that where saved the SSL certificates. After the creation, you need to define the path of that file in the following sections of the file:

In the volume and command section of the Traefik Proxy container

<pre><code>- "./acme.json:/acme.json"</code></pre>

<pre><code>- --certificatesresolvers.leresolver.acme.storage=./acme.json</code></pre>

Also, you need to setup your email address for the registration to Let's Encrypt. 

<pre><code>- --certificatesresolvers.leresolver.acme.email=your-email</code></pre>

After enter this information. We need to customize some labels in the Traefik container. The following labels need to be modified with the url that you want use to access to Portainer.

<pre><code>- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"</code></pre>

<pre><code>- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"</code></pre>

After all this setup, you're ready to deploy Portainer. Execute the following:

<pre><code>docker-compose up -d</code></pre>

And after a moment (Download the images of Traefik and Portainer depends of your Internet speed) you will able to enter to Portainer in the URL you defined earlier. Ex: <code>https://portainer.yourdomain.com</code>

You can get access to this file, directly from [our repository on Github](https://github.com/portainer/portainer-compose/tree/master/traefik).

### Deploying in a Docker Swarm scenario

To deploy Portainer behind Traefik Proxy in a Docker Swarm scenario we going to use a Docker Compose file. In the following recipe you will find the configuration of the Portainer Traefik, and Portainer Server almost ready to deploy in a Docker Swarm scenario.

Before deploy, you need to create a few docker elements. Networks and volumes. 

You need to create two overlay networks:

<pre><code>$ docker network create -d overlay agent_network</code></pre>

<pre><code>$ docker network create -d overlay public</code></pre>

Let's create the volume:

<pre><code>$ docker volume create portainer_data</code></pre>

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
   data:</code></pre>

Before to deploy, you need to customize this labels to match with the URL that you want. 

<pre><code>- "traefik.http.routers.frontend.rule=Host(`portainer.yourdomain.com`)"</code></pre>

<pre><code>- "traefik.http.routers.edge.rule=Host(`edge.yourdomain.com`)"</code></pre>

After all this set up, you're ready to deploy Portainer. Execute the following:

<pre><code>$ docker stack deploy portainer -c portainer.yml</code></pre>

After the deploy, you can run <code>$ docker service ls</code> and you will see an output similar to the following:

<pre><code>ID                  NAME                  MODE                REPLICAS            IMAGE                          PORTS
lt21zrypsll6        portainer_agent       global              1/1                 portainer/agent:latest
m6912ynwdcd7        portainer_portainer   replicated          1/1                 portainer/portainer-ce:2.0.0
tw2nb4i640e4        portainer_traefik     replicated          1/1                 traefik:latest                 *:80->80/tcp, *:443->443/tcp</code></pre>

Once the services are running, you can enter to Portainer directly with the URL specified in the configuration.

### Deploying in a Kubernetes scenario

WIP

## Deploy Portainer behind NGINX Reverse Proxy

### Deploying in a Docker Standalone scenario

To deploy Portainer behind NGINX Proxy in a Docker standalone scenario we going to use a Docker Compose file. In the 
following docker-compose.yml you will find the configuration of the Portainer Server and NGINX Proxy.

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

To setup and start working with this recipe, you need to change the VIRTUAL_HOST value. Once it's done. You can run the following:

<pre><code>$ docker-compose up -d</code></pre>

After a few seconds, you will able to run <code>$ docker ps</code> and you will see an output like this:

<pre><code>CONTAINER ID        IMAGE                          COMMAND                  CREATED             STATUS              PORTS                              NAMES
088da047e931        portainer/portainer-ce:2.0.0   "/portainer -H unix:…"   32 minutes ago       Up 22 minutes        0.0.0.0:8000->8000/tcp, 9000/tcp   nginx-port_portainer_1
1ec0594f8a01        jwilder/nginx-proxy            "/app/docker-entrypo…"   32 minutes ago      Up 22 minutes       0.0.0.0:80->80/tcp                 nginx-port_nginx-proxy_1</code></pre>

After the deploy, you can point your browser to <code>portainer.yourdomain.com0</code>.

### Deploying in a Docker Swarm scenario

Deploy Portainer in Docker Swarm behind NGINX is similar to run in Docker Standalone. 

First, you need to create a few networks. One for the agent and the communication with Portainer Server and other to "expose" the Portainer container to the same network that the Reverse Proxy. 

<pre><code>$ docker network create -d overlay proxy</code></pre>

<pre><code>$ docker network create -d agent_network</code></pre>

Also, you need create a volume:

<pre><code>$ docker volume create portainer_data</code></pre>

The recipe that you need to deploy is the following:

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
   data:</code></pre>

To setup and start working with this recipe, you need to change the VIRTUAL_HOST value. Once it's done. You can run the following:

<pre><code>$ docker stack deploy portainer -c portainer.yml</code></pre>

After the deploy, you can run <code>$ docker service ls</code> and you will see an output similar to the following:

<pre><code>ID                  NAME                    MODE                REPLICAS            IMAGE                          PORTS
gy2bjxid0g4p        portainer_agent         global              1/1                 portainer/agent:latest
jwvjp5bux4sz        portainer_nginx-proxy   replicated          1/1                 jwilder/nginx-proxy:latest     *:80->80/tcp
5nflcvoxl3c7        portainer_portainer     replicated          1/1                 portainer/portainer-ce:2.0.0   *:8000->8000/tcp</code></pre>

After the deploy, you can point your browser to <code>portainer.yourdomain.com</code>.

### Deploying in a Kubernetes scenario

WIP

## Notes

Do you think that is missing something here? Contribute with this admin guide forking the repo [Portainer-Docs](https://github.com/portainer/portainer-docs) and propose changes.