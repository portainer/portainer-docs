# How can I use my custom certificate authority (CA) with Portainer?

If you need to reference external resources (for example, a custom template URL) that use certificates signed by a custom certificate authority (CA), you may run into issues with Portainer out of the box.&#x20;

To resolve this you will need to inject your CA certificate into the Portainer containers (both the Portainer Server and any Portainer Agent containers) by first adding it to the CA store on your hosts then mounting that CA store into the Portainer containers.

#### Adding your CA to the local store

The procedure for this may differ depending on the underlying OS of your host. For most Linux distributions you can use the `ca-certificates` package to manage your local CA store. In Ubuntu for example, you can follow [this guide](https://ubuntu.com/server/docs/install-a-root-ca-certificate-in-the-trust-store).&#x20;

Remember you will need to do this on all hosts that run either Portainer or the Portainer Agent.

#### Mounting your CA store in Portainer

Once you have your CA added to your local store, you can then mount that store within the Portainer containers. This is done by modifying the command you use to create the Portainer containers, and will depend on your containerization platform.

**Docker Standalone**

If you have started Portainer with the `docker run` command, you can add a bind mount to the command to add the CA store:

```
-v /etc/ssl/certs/ca-certificates.crt:/etc/ssl/certs/ca-certificates.crt
```

For example, here is a full `docker run` command including the CA store mount:

<pre><code><strong>docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data -v /etc/ssl/certs/ca-certificates.crt:/etc/ssl/certs/ca-certificates.crt portainer/portainer-ee:2.21.0
</strong></code></pre>

{% hint style="info" %}
If your local CA store is in a different location, adjust the reference on the left side of the colon (and _only_ the left side) in the above example to suit. The Portainer containers expect the CA store to exist at `/etc/ssl/certs/ca-certificates.crt` so that _must_ be the path specified on the right side of the colon.
{% endhint %}

For the Portainer Agent the same process applies but with the docker run command used for the Agent.

**Docker Swarm**

When deploying to Docker Swarm you generally will use a YAML file with `docker stack deploy`. To add the local CA store mount you will need to edit that YAML file to include the mount. Remember to do this for both the Portainer Server and the Portainer Agent service definitions.

For example:

<pre><code>services:
  agent:
    image: portainer/agent:2.21.0
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
<strong>      - /etc/ssl/certs/ca-certificates.crt:/etc/ssl/certs/ca-certificates.crt
</strong>      ...

  portainer:
    image: portainer/portainer-ee:2.21.0
    command: -H tcp://tasks.agent:9001 --tlsskipverify
    ports:
      - "9443:9443"
      - "9000:9000"
      - "8000:8000"
    volumes:
      - portainer_data:/data
<strong>      - /etc/ssl/certs/ca-certificates.crt:/etc/ssl/certs/ca-certificates.crt
</strong>
</code></pre>

{% hint style="info" %}
If your local CA store is in a different location, adjust the reference on the left side of the colon (and _only_ the left side) in the above examples to suit. The Portainer containers expect the CA store to exist at /etc/ssl/certs/ca-certificates.crt so that _must_ be the path specified on the right side of the colon.
{% endhint %}
