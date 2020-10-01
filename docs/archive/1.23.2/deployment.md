Deployment
==========

Portainer is built to run on Docker and is really simple to deploy.
Portainer deployment scenarios can be executed on any platform unless
specified.

Quick start
-----------

If you are running Linux, deploying Portainer is as simple as:

    $ docker volume create portainer_data
    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer

Voilà, you can now use Portainer by accessing the port 9000 on the
server where Portainer is running.

Inside a Swarm cluster
----------------------

Before deploying Portainer inside your Swarm cluster, you should ensure
that Docker and your Swarm are configured correctly. You can refer to
the Troubleshooting section to ensure you have correctly configured your
environment.

Following the above, you are ready to deploy Portainer inside a Swarm
cluster using our recommended agent-enabled deployment. **Note**: This
setup will assume that you're executing the following instructions on a
Swarm manager node.

    $ curl -L https://downloads.portainer.io/portainer-agent-stack.yml -o portainer-agent-stack.yml
    $ docker stack deploy --compose-file=portainer-agent-stack.yml portainer

Have a look at the Agent section to find more details on how to connect
an existing Portainer instance to a manually deployed Portainer agent.

Persist Portainer data
----------------------

By default, Portainer store its data inside the container in the `/data`
folder on Linux (`C:\\data` on Windows).

You'll need to persist Portainer data to keep your changes after
restart/upgrade of the Portainer container. You can use a bind mount on
Linux to persist the data on the Docker host folder:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /path/on/host/data:/data portainer/portainer

### Windows

Docker for Windows 10 supports running both Linux and Windows containers
and you need to use a different start command depending on which
container type you are using. Windows Server supports only native
Windows containers.

**Note:** You must create the folder in which you want the data to be
persisted before running the following command. For example, if you want
the data to persist in C:ProgramDataPortainer you need to create the
Portainer directory within C:ProgramData as it does not exist by
default.

Example for Linux containers:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v C:\ProgramData\Portainer:/data portainer/portainer

Example for native Windows containers:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine -v C:\ProgramData\Portainer:C:\data portainer/portainer

### Docker Swarm service

If you deployed Portainer as a Docker Swarm service:

    $ docker service create \
        --name portainer \
        --publish 9000:9000 \
        --publish 8000:8000 \
        --replicas=1 \
        --constraint 'node.role == manager' \
        --mount type=bind,src=//path/on/host/data,dst=/data \
        portainer/portainer

**Note**: The Swarm service example will persist Portainer data in
`/path/on/host/data` for each host in the cluster. If the container is
re-scheduled on another node, existing Portainer data might not be
available. Persisting data across all nodes of a Swarm cluster is
outside the scope of this documentation.

Advanced deployment
-------------------

Advanced Portainer deployment scenarios.

### Declaring the Docker environment to manage upon deployment

You can specify the initial environment you want Portainer to manage via
the CLI, use the `-H` flag and the `tcp://` protocol to connect to a
remote Docker environment:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v portainer_data:/data portainer/portainer -H tcp://<REMOTE_HOST>:<REMOTE_PORT>

Ensure you replace `REMOTE_HOST` and `REMOTE_PORT` with the address/port
of the Docker server you want to manage.

You can also bind mount the Docker socket to manage a local Docker
environment (**only possible on environments where the Unix socket is
available**):

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer -H unix:///var/run/docker.sock

If your Docker environment is protected using TLS, you'll need to ensure
that you have access to CA, the certificate and the public key used to
access your Docker engine.

You can upload the required files via the Portainer UI or use the
`--tlsverify` flag on the CLI.

Portainer will try to use the following paths to the files specified
previously (on Linux, see the configuration section for details about
Windows):

-   CA: `/certs/ca.pem`
-   certificate: `/certs/cert.pem`
-   public key: `/certs/key.pem`

You must ensure these files are present in the container using a bind
mount:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always  -v /path/to/certs:/certs -v portainer_data:/data portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify

You can also use the `--tlscacert`, `--tlscert` and `--tlskey` flags if
you want to change the default path to the CA, certificate and key file
respectively:

    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer -v /path/to/certs:/certs portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify --tlscacert /certs/myCa.pem --tlscert /certs/myCert.pem --tlskey /certs/myKey.pem
    $ docker run -d -p 9000:9000 -p 8000:8000 --name portainer --restart always  -v /path/to/certs:/certs -v portainer_data:/data portainer/portainer -H tcp://<DOCKER_HOST>:<DOCKER_PORT> --tlsverify --tlscacert /certs/myCa.pem --tlscert /certs/myCert.pem --tlskey /certs/myKey.pem

### Secure Portainer using SSL

By default, Portainer's web interface and API is exposed over HTTP. This
is not secured, it's recommended to enable SSL in a production
environment.

To do so, you can use the following flags `--ssl`, `--sslcert` and
`--sslkey`:

    $ docker run -d -p 443:9000 -p 8000:8000 --name portainer --restart always -v ~/local-certs:/certs -v portainer_data:/data portainer/portainer --ssl --sslcert /certs/portainer.crt --sslkey /certs/portainer.key

You can use the following commands to generate the required files:

    $ openssl genrsa -out portainer.key 2048
    $ openssl ecparam -genkey -name secp384r1 -out portainer.key
    $ openssl req -new -x509 -sha256 -key portainer.key -out portainer.crt -days 3650

Note that [Certbot](https://certbot.eff.org/) could be used as well to
generate a certificate and a key. However, because Docker has issues
with [symlinks](https://github.com/portainer/portainer/issues/2302), if
you use Certbot, you will need to pass both the "live" and "archive"
directories as volumes (shown below).

    docker run -d -p 9000:9000 -p 8000:8000 \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -v /root/portainer/data:/data \
        -v /etc/letsencrypt/live/<redacted>:/certs/live/<redacted>:ro \
        -v /etc/letsencrypt/archive/<redacted>:/certs/archive/<redacted>:ro \
        --name portainer \
        portainer/portainer:1.13.4 --ssl --sslcert /certs/live/<redacted>/cert.pem --sslkey /certs/live/<redacted>/privkey.pem

### Deploy Portainer via docker-compose

You can use [docker-compose](https://docs.docker.com/compose/) to deploy
Portainer.

Here is an example compose file:

<pre><code>
version: '2'

services:
  portainer:
    image: portainer/portainer
    command: -H unix:///var/run/docker.sock
    restart: always
    ports:
      - 9000:9000
      - 8000:8000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer_data:/data

volumes:
  portainer_data:
</code></pre>

[Click here](https://downloads.portainer.io/docker-compose.yml) to
download the Compose file.

### Deploy Portainer without Docker

Portainer binaries are available on each release page: [Portainer
releases](https://github.com/portainer/portainer/releases)

Download and extract the binary to a location on disk:

    $ cd /opt
    $ wget https://github.com/portainer/portainer/releases/download/1.23.2/portainer-1.23.2-linux-amd64.tar.gz
    $ tar xvpfz portainer-1.23.2-linux-amd64.tar.gz

Then just use the portainer binary as you would use CLI flags with
Docker.

**Note**: Portainer will try to write its data into the /data folder by
default. You must ensure this folder exists first (or change the path it
will use via the `--data`, see below).

    $ mkdir /data
    $ cd /opt/portainer
    $ ./portainer --template-file "${PWD}/templates.json"

You can use the `-p` flag to serve Portainer on another port:

    $ ./portainer -p :8080

You can change the folder used by Portainer to store its data with the
`--data` flag:

    $ ./portainer --data /opt/portainer-data
