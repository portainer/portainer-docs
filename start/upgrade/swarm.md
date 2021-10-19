# Upgrading on Docker Swarm

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or upgrading to Portainer 2.6.3 make sure all of the agents are also on version 2.6.3.
{% endhint %}

To upgrade the Portainer Server and the agents on Docker Swarm, first run the following command on the manager node of your Docker Swarm cluster:

```text
docker service ls 
```

Make note of the service names for Portainer. You will need them later.

![](../../.gitbook/assets/docker-service-ls.png)

To upgrade Portainer Server to the latest version, run the command below \(replace the `portainer_portainer` service name if your setup differs\):

```text
docker service update --image portainer/portainer-ce:2.6.3 --force portainer_portainer 
```

To upgrade the Portainer Agent to the latest version, run the command below \(replace the `portainer_agent` service name if your setup differs\):

```text
docker service update --image portainer/agent:2.6.3 --force portainer_agent 
```

This will deploy the newest version of Portainer and the agent across your swarm and upgrade the Portainer database to match.

When this is finished, go to `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.

