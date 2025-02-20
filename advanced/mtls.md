# Using mTLS with Portainer

Mutual TLS (or **mTLS**) is a certificate-based system whereby the client and server (in this case, the Portainer Edge Agent and the Portainer Server) authenticate each other cryptographically via a trusted source (a certificate authority). This can be used as an extra layer of security to protect the communications between the Edge Agent and Portainer. Under this setup, if a third-party system attempts to communicate with the Portainer Server and is not using a certificate signed by the certificate authority it will be rejected.

This article will walk you through the process of deploying the Portainer Server and the Edge Agents with mTLS support.&#x20;

{% hint style="info" %}
mTLS support is only available in Portainer Business Edition.
{% endhint %}

## Requirements

In order to configure Portainer with mTLS support, you will need the following:

* A Portainer Server and a Portainer Edge Agent.
* A certificate authority (CA). You can use your own corporate CA or a CA for which you completely control the certificate issuance policy.
* The CA certificate for your certificate authority, in PEM format (`mtlsca.crt`).
* A domain (or subdomain) you can point to your Portainer Server instance to be specifically used for mTLS. This will be the domain the server certificate is issued for.
* A server certificate (`mtlsserver.crt`) and corresponding key (`mtlsserver.key`) issued by your CA for the Portainer Server, in PEM format. Ensure these are issued with `serverAuth` selected for `extendedKeyUsage`. This certificate should have the domain (or subdomain) that will be used for mTLS as the Subject Alternative Name (SAN).
* A client certificate (`client.crt`) and corresponding key (`client.key`) issued by your CA for the Edge Agent, in PEM format. Ensure these are issued with `clientAuth` selected for `extendedKeyUsage`.

## Configuring the Portainer Server

To use mTLS with your Edge Agents, the Portainer Server instance must be configured with mTLS support. This can either be done during the initial installation of the Portainer Server instance, or after installation through the [Edge Compute settings](../admin/settings/edge.md#mtls-certificate).

### Configure mTLS during installation

When deploying your Portainer Server, you will need to make the CA certificate, server certificate and server key available to Portainer. How you do this will depend on your deployment.

#### Docker Standalone

On your Docker host, upload your CA certificate (`mtlsca.crt`), server certificate (`mtlsserver.crt`) and server key (`mtlsserver.key`) into a directory that will be bind mounted into the Portainer container. In this example we assume your certificates are located at `/root/certs`.

Modify your `docker run` command to mount the `/root/certs` directory to `/certs` and add the `--mtlscacert`, `--mtlscert`, and `--mtlskey` options:

```bash
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always \ 
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    -v /root/certs:/certs \
    portainer/portainer-ee:lts \
    --mtlscacert /certs/mtlsca.crt \    
    --mtlscert /certs/mtlsserver.crt \
    --mtlskey /certs/mtlsserver.key

```

This will start Portainer using your provided CA and certificates.

#### Docker Swarm

To add mTLS certificates to Portainer Server on Docker Swarm during installation, we recommend adding the necessary files as secrets and then referencing those secrets within the YAML used to deploy Portainer.&#x20;

First, upload your CA certificate (`mtlsca.crt`), server certificate (`mtlsserver.crt`) and server key (`mtlsserver.key`) into a directory that will be referenced by the secret creation. In this example we assume your certificates are located at `/root/certs`. Once you have uploaded the files, create your secrets as follows:

```
docker secret create portainer.mtlscacert /root/certs/mtlsca.crt
docker secret create portainer.mtlscert /root/certs/mtlsserver.crt
docker secret create portainer.mtlskey /root/certs/mtlsserver.key
```

Modify your Portainer YAML file to attach the secrets and add the `--mtlscacert`, `--mtlscert` and `--mtlskey` options:

```yaml
  portainer:
    image: portainer/portainer-ee:lts
    command: -H tcp://tasks.agent:9001 --tlsskipverify --mtlscacert /run/secrets/portainer.mtlscacert --mtlscert /run/secrets/portainer.mtlscert --mtlskey /run/secrets/portainer.mtlskey
    ports:
      - "9443:9443"
      - "9000:9000"
      - "8000:8000"
    volumes:
      - portainer_data:/data
    networks:
      - agent_network
    deploy:
      mode: replicated
      replicas: 1
      placement:
        constraints: [node.role == manager]
    secrets:
        - portainer.mtlscacert
        - portainer.mtlsscert
        - portainer.mtlskey
```

and to add the `secrets` definitions to include the secrets we just created:

```yaml
secrets:
  portainer.mtlscacert:
    external: true
  portainer.mtlscert:
    external: true
  portainer.mtlskey:
    external: true
```

#### Kubernetes (via Helm)

If it doesn't already exist, create the `portainer` namespace:

```
kubectl create namespace portainer
```

Next, create a secret containing the CA, certificate and matching private key:

```
kubectl create secret generic portainer-mtls-certs-secret -n portainer \
    --from-file=mtlsca.crt=ca.crt \
    --from-file=mtlscert.crt=server.crt \
    --from-file=mtlskey.key=server.key
```

Replace `ca.crt`, `server.crt` and `server.key` in the above command with the paths to your CA certificate, certificate and matching key respectively.

Install Portainer via Helm with the `mtls.existingSecret` parameter set to the name of the secret you just created:

{% tabs %}
{% tab title="NodePort" %}
```
helm install -n portainer portainer portainer/portainer \
    --set mtls.existingSecret=portainer-mtls-certs-secret \
    --set enterpriseEdition.enabled=true
```
{% endtab %}

{% tab title="Load Balancer" %}
```
helm install -n portainer portainer portainer/portainer \
    --set mtls.existingSecret=portainer-mtls-secret \
    --set service.type=LoadBalancer \
    --set enterpriseEdition.enabled=true
```
{% endtab %}
{% endtabs %}

### Configure mTLS post installation

If you already have Portainer Server deployed, you can configure mTLS support through the Portainer UI.

As an admin user, from the left menu select **Settings** then **Edge Compute**. Toggle on **Enable Edge Compute features** if it isn't already on and click **Save Settings**. Then scroll down to the **mTLS Certificate** section.

<figure><img src="../.gitbook/assets/2.18-settings-edge-mtls.png" alt=""><figcaption></figcaption></figure>

Here you can enable the use of mTLS with the **Use separate mTLS cert** toggle, and upload the CA certificate, server certificate and server key using the buttons for **TLS CA certificate**, **TLS certificate** and **TLS key** respectively.

{% hint style="warning" %}
If you add or change the mTLS CA certificate through this method you will need to restart the Portainer Server in order for the change to apply. You should also ensure any Edge Agents that are using mTLS are also updated to use the new CA certificate.
{% endhint %}

## Deploying the Edge Agents

Once you have the Portainer Server instance configured to use mTLS, you can then configure your Edge Agent deployments to use it as well.

When deploying an Edge Agent you will be provided with a command to run by the Portainer UI. We will take that command and modify it for mTLS support.

### Docker Standalone

On your Docker host, upload your CA certificate (`mtlsca.crt`), client certificate (`client.crt`) and client key (`client.key`) into a directory that will be bind mounted into the Edge Agent container. In this example we assume your certificates are located at `/root/certs`.

Once the certificates are in place and the secrets created, you can begin to set up your Edge Agent within the Portainer UI.&#x20;

{% hint style="warning" %}
When doing so, remember to use the domain (or subdomain) you chose for mTLS usage (and that the server certificate was issued for) as the Portainer API server URL and tunnel address (if appropriate).
{% endhint %}

When you have completed the Edge Agent setup in the Portainer UI and have your deployment command, modify the command to mount the `/root/certs` directory to `/certs`, change the `EDGE_INSECURE_POLL` option to `0`, and add the `--mtlscacert`, `--mtlscert`, and `--mtlskey` options:

```bash
docker run -d \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /var/lib/docker/volumes:/var/lib/docker/volumes \
  -v /:/host \
  -v /root/certs:/certs \
  -v portainer_agent_data:/data \
  --restart always \
  -e EDGE=1 \
  -e EDGE_ID=your-edge-id \
  -e EDGE_KEY=your-edge-key \
  -e EDGE_INSECURE_POLL=0 \
  --name portainer_edge_agent \
  portainer/agent:lts \
  --mtlscacert /certs/mtlsca.crt \
  --mtlscert /certs/client.crt \
  --mtlskey /certs/client.key
```

Run the command to deploy your Edge Agent with mTLS support.

### Docker Swarm

To add mTLS certificates to the Edge Agent, we recommend adding the necessary files as secrets and then referencing those secrets within the YAML used to deploy Portainer.&#x20;

First, upload your CA certificate (`mtlsca.crt`), client certificate (`client.crt`) and client key (`client.key`) into a directory that will be referenced by the secret creation. In this example we assume your certificates are located at `/root/certs`. Once you have uploaded the files, create your secrets as follows:

```
docker secret create portainer.mtlscacert /root/certs/mtlsca.crt
docker secret create portainer.mtlscert /root/certs/client.crt
docker secret create portainer.mtlskey /root/certs/client.key
```

Once the certificates are in place and the secrets created, you can begin to set up your Edge Agent within the Portainer UI.

{% hint style="warning" %}
When doing so, remember to use the domain (or subdomain) you chose for mTLS usage (and that the server certificate was issued for) as the Portainer API server URL and tunnel address (if appropriate).
{% endhint %}

When you have completed the Edge Agent setup in the Portainer UI and have your deployment command, modify the command to change the `EDGE_INSECURE_POLL` option to `0` and add the `--mtlscacert`, `--mtlscert` and `--mtlskey` options, using the secrets we defined above:

```bash
docker network create \
  --driver overlay \
  portainer_agent_network;

docker service create \
  --name portainer_edge_agent \
  --network portainer_agent_network \
  -e EDGE=1 \
  -e EDGE_ID=your-edge-id \
  -e EDGE_KEY=your-edge-key \
  -e EDGE_INSECURE_POLL=0 \
  -e AGENT_CLUSTER_ADDR=tasks.portainer_edge_agent \
  --mode global \
  --constraint 'node.platform.os == linux' \
  --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock \
  --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes \
  --mount type=bind,src=//,dst=/host \
  --mount type=volume,src=portainer_agent_data,dst=/data \
  portainer/agent:lts \
  --mtlscacert /run/secrets/portainer.mtlscacert \
  --mtlscert /run/secrets/portainer.mtlscert \
  --mtlskey /run/secrets/portainer.mtlskey

```

Run the commands to deploy your Edge Agent with mTLS support.

### Kubernetes

At present, mTLS support for the Portainer Agent running on a Kubernetes environment is a work in progress. If you require instructions for deploying a Portainer Agent with mTLS on a Kubernetes environment, please [get in touch with our support team](../#getting-support).
