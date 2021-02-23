# :fontawesome-solid-shield-alt: Secure Portainer using SSL

By default, Portainer’s web interface and API is exposed over HTTP. This is not secure, Portainer recommends enabling SSL, particularly in a production environment.

## :fontawesome-solid-lock: Securing Portainer using SSL with Docker

To do so, you can use the following flags <code>--ssl</code>, <code>--sslcert</code> and <code>--sslkey</code>:

<pre><code>$ docker run -d -p 443:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v ~/local-certs:/certs -v portainer_data:/data portainer/portainer-ce --ssl --sslcert /certs/portainer.crt --sslkey /certs/portainer.key</code></pre>

Now, you can navigate to https://$ip-docker-host

## :fontawesome-solid-lock: Securing Portainer using SSL with Docker Swarm

Securing Portainer on Docker Swarm is fairly simple. The following example takes in to asumption that you have an external overlay network and external secrets. If you do not, simply create them:

**Create the overlay network**
```
docker network create --driver overlay portainer
```

**Create the secrets**
```
docker secret create portainer.example.cer portainer.example.cert
docker secret create portainer.example.key portainer.example.key
```

More on Docker Networks: https://docs.docker.com/engine/reference/commandline/network_create/

More on Docker Secrets: https://docs.docker.com/compose/compose-file/#secrets

```yml
version: '3.2'

services:
  agent:
    image: portainer/agent
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
    networks:
      - portainer
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

  portainer:
    image: portainer/portainer-ce
    command: -H tcp://tasks.agent:9001 --tlsskipverify --ssl --sslcert /run/secrets/portainer.example.com.cer --sslkey /run/secrets/portainer.example.com.key
    ports:
      - "9000:9000"
      - "8000:8000"
    volumes:
      - /data/portainer:/data
    networks:
      - portainer
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints: [node.role == manager]
    secrets:
        - portainer.example.com.cer
        - portainer.example.com.key

networks:
  portainer:
    external: true

secrets:
  portainer.example.com.cer:
    external: true
  portainer.example.com.key:
    external: true


```

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
