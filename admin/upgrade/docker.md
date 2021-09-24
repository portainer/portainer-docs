# Upgrading on Docker

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or upgrading to Portainer 2.7.0 make sure all of the agents are also on version 2.7.0.
{% endhint %}

## Upgrading your Portainer Server

{% hint style="warning" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

To upgrade to the latest version of Portainer Server, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```text
docker stop portainer
```

```text
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, you must ensure that you have the latest version of the image locally. You can do this with a `docker pull` command:

```text
docker pull portainer/portainer-ee
```

Finally, deploy the updated version of Portainer:

```text
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee
```

The newest version of Portainer will now be deployed on your system, using the persistent data from the previous version, and will also upgrade the Portainer database to the new version.

When the deployment is finished, go to `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.

## Agent-only upgrade

To upgrade to the latest version of Portainer Agent, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```text
docker stop portainer_agent
```

```text
docker rm portainer_agent
```

Next, pull the updated version of the image:

```text
docker pull portainer/agent
```

Finally, start the agent with the updated image:

```text
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent
```

