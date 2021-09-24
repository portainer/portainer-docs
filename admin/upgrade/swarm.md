# Upgrading on Docker Swarm

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or upgrading to Portainer 2.7.0 make sure all of the agents are also on version 2.7.0.
{% endhint %}

To upgrade the Portainer Server and the agents on Docker Swarm, first run the following command on the manager node of your Docker Swarm cluster:

```text
docker service ls 
```

Make note of the service names for Portainer. You will need them later.

```text
ID             NAME                    MODE         REPLICAS   IMAGE                          PORTS
tb9gtxc647fw   portainer-agent_agent   global       3/3        portainer/agent:latest
m3a3mtuy55ed   portainer_portainer     replicated   1/1        portainer/portainer-ee:latest  *:8000->8000/tcp, *:9000->9000/tcp
```

To upgrade Portainer Server to the latest version, run the command below \(replace the `portainer_portainer` service name if your setup differs\):

```text
docker service update --image portainer/portainer-ee --force portainer_portainer 
```

To upgrade the Portainer Agent to the latest version, run the command below \(replace the `portainer_agent` service name if your setup differs\):

```text
docker service update --image portainer/agent --force portainer_agent 
```

This will deploy the newest version of Portainer and the agent across your swarm and upgrade the Portainer database to match.

When this is finished, go to `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.

