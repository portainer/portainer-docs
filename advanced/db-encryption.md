# Encrypting the Portainer database

Portainer uses a BoltDB database to store the configuration, kept in the `portainer_data` volume created during installation. This database can be encrypted for additional security through the use of a secret provided when the Portainer Server is started. Encryption can be added during the initial installation or at a later date.

{% hint style="warning" %}
At present, encryption of the database is not reversible.
{% endhint %}

## Docker Standalone

To enable encryption on Docker Standalone, you will first need to create a secret key, then modify your docker run command to mount the secret in the container.

### Create a secret

Create a text file on the system running Docker Standalone that is accessible to the Docker executable, yet somewhere secure. For this example, we'll assume the file is called `/root/secrets/portainer`. In this file enter a secret. This will be the key used to encrypt the Portainer database.

### Mount the secret

If Portainer is already running, you will need to stop and remove the Portainer container before continuing:

```
docker stop portainer
docker rm portainer
```

To encrypt the database, add a bind mount to the `docker run` command that mounts your secret in `/run/secrets/portainer`:

```
-v /root/secrets/portainer:/run/secrets/portainer
```

Your final `docker run` command may look like this:

```
docker run -d -p 8000:8000 -p 9443:9443 --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    -v /root/secrets/portainer:/run/secrets/portainer \
    portainer/portainer-ee:lts
```

When the Portainer container starts, it will encrypt any existing database, or for a fresh install will create a new encrypted database as part of the install process.

## Docker Swarm

To enable encryption on Docker Swarm, you will first need to create a secret. You will then either update the service to incorporate the new secret (if you have an existing Portainer installation) or edit the compose file used to create the stack to include the secret (if this is a fresh installation of Portainer).

### Create a secret

On a manager node, you can run the following command to create a secret:

```
echo "This is a secret" | docker secret create portainer -
```

Replace `This is a secret` with your secret. This will create a secret named `portainer`, which will be the key used to encrypt the Portainer database.

{% hint style="info" %}
You can also create a secret in Portainer if you are adding encryption to an existing installation.
{% endhint %}

### Existing installations: Update the service

To add encryption to an existing Portainer deployment on Docker Swarm, you can use the following command on a manager node:

```
docker service update \
    --secret-add src=portainer,target="/run/secrets/portainer" \
    portainer
```

The service will add the new secret and encrypt the database.

### New installations: Edit the compose file

To install Portainer on Docker Swarm with encryption, you will need to edit the compose file you downloaded as part of the installation process. Add a secrets section to the `portainer` service definition:

```
secrets:
  - portainer
```

This tells the service to use the `portainer` secret created earlier.

In addition, because we created it separately earlier we will need to specify it as `external` so that Docker knows not to create it when creating the stack. To do this we add a `secrets:` definition outside of the `services:` definition for the `portainer` secret:

```
secrets:
  portainer:
    external: true
```

With the secret added, your full Portainer stack file may look like this:

```
version: '3.2'

services:
  agent:
    image: portainer/agent:lts
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
      - portainer

networks:
  agent_network:
    driver: overlay
    attachable: true

volumes:
  portainer_data:
      
secrets:
  portainer:
    external: true
```

Save your changes, then use the compose file to deploy your Portainer installation as covered in the Swarm installation instructions. The database will be deployed encrypted as part of the installation process.

## Kubernetes

To enable encryption on Kubernetes you will first need to create a secret. You will then mount this secret as a volume in Portainer.

### Create a secret

From the command line on your Kubernetes cluster, you can run the following command to create your secret:

```
kubectl create secret generic portainer-key --from-literal=secret=IAmASecretKey --namespace portainer
```

Replace `IAmASecretKey` with your secret. This will create a secret named `portainer-key`, which will be the key used to encrypt the Portainer database.

### Modify the YAML file

Once the secret has been created, we need to modify the YAML file to mount the secret as a volume in Portainer. Download the YAML file for your particular deployment and locate the `container` definition for the `portainer` container. It should look something like this:

```
containers:
  - name: portainer
    image: "portainer/portainer-ee:lts"
    imagePullPolicy: Always
    args:          
    volumeMounts:
      - name: data
        mountPath: /data  
```

In the `volumeMounts` section, add a definition for the secret created earlier:

```
volumeMounts:
  - name: data
    mountPath: /data
  - name: portainer-key
    mountPath: /run/secrets/portainer
    subPath: portainer
```

We also need to add a definition to the `volumes` definition for the `spec`:

```
spec:
  containers:
    portainer:
    ...
  volumes:
    - name: portainer-key
      secret:
        secretName: portainer-key
        items:
          - key: secret
            path: portainer
      
```

Save the file, then apply it to your running configuration:

```
kubectl apply -f portainer.yaml
```

Replace `portainer.yaml` with the name of your modified YAML file.
