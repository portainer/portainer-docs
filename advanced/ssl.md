# Using SSL with Portainer

By default, Portainer’s web interface and API are exposed over HTTP.  Because this is not secure, we recommend enabling SSL, particularly in a production environment.

## On Docker Standalone

To do so, you can use the `--ssl`, `--sslcert` and `--sslkey` flags. Portainer expects certificates in PEM format.

{% hint style="info" %}
When using your own externally-issued certificate, ensure that you include the full certificate chain \(including any intermediate certificates\) in the file you provide via `--sslcert`. Without this you may face certificate validation issues. Your certificate chain can be obtained either from your certificate issuer or via the [What's My Chain Cert?](https://whatsmychaincert.com/) website.
{% endhint %}

To generate and use a self-signed certificate, use the following command on your server:

```text
openssl req -new -newkey rsa:4096 -days 3650 -nodes -x509 -keyout ~/local-certs/portainer.key -out ~/local-certs/portainer.crt
```

Next, start Portainer referencing the certificate and key file you just created:

```text
docker run -d -p 443:9000 -p 8000:8000 \
    --name portainer --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    -v ~/local-certs:/certs \
    portainer/portainer-ce --ssl --sslcert /certs/portainer.crt --sslkey /certs/portainer.key
```

As an alternative, Certbot can be used to generate a certificate and a key. However, because Docker has issues with symlinks, if you use Certbot, you will need to pass both the 'live' and 'archive' directories as volumes \(shown below\).

```text
docker run -d -p 443:9000 -p 8000:8000 \
    --name portainer --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer-data:/data \
    -v /etc/letsencrypt/live/yourdomain:/certs/live/yourdomain:ro \
    -v /etc/letsencrypt/archive/yourdomain:/certs/archive/yourdomain:ro \
    portainer/portainer-ce --ssl --sslcert /certs/live/yourdomain/cert.pem --sslkey /certs/live/yourdomain/privkey.pem
```

Now, you can navigate to `https://$ip-docker-host`.

## On Docker Swarm

Securing Portainer on Docker Swarm is quite simple. The following example assumes that you have an external overlay network and external secrets. If you do not, simply create them:

To create the overlay network:

```text
docker network create --driver overlay portainer
```

To create the secrets:

```text
docker secret create portainer.example.cer portainer.example.cert
docker secret create portainer.example.key portainer.example.key
```

See Docker's own official documentation for more information about [networks](https://docs.docker.com/engine/reference/commandline/network_create/) and [secrets](https://docs.docker.com/compose/compose-file/#secrets).

```text
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
    image: portainer/portainer-ce:latest
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

