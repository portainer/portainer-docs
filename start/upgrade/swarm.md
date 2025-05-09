# Updating on Docker Swarm

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or updating to Portainer 2.27.6 make sure all of the agents are also on version 2.27.6.
{% endhint %}

{% hint style="warning" %}
Starting from Portainer CE 2.9 and BE 2.10, HTTPS is enabled by default on port `9443.` These instructions will configure Portainer to use 9443 for HTTPS  and 9000 for HTTP. You can choose to [completely disable HTTP](../../admin/settings/#force-https-only) after the update.&#x20;

Before you make Portainer HTTPS only, make sure you have all your Agents and Edge Agents already communicating with Portainer using HTTPS.&#x20;
{% endhint %}

{% hint style="danger" %}
If you are updating from the 1.x version of Portainer, you **must** first [update to 2.0.0](from-1.x.md) **before** updating to the newest version or you will run into issues.
{% endhint %}

{% hint style="danger" %}
Before beginning any update, we highly recommend [taking a backup](../../admin/settings/general.md#back-up-portainer) of your current Portainer configuration.
{% endhint %}

To update the Portainer Server and the agents on Docker Swarm, first run the following command on the manager node of your Docker Swarm cluster:

```
docker service ls 
```

Make note of the service names for Portainer. You will need them later.

```
ID             NAME                    MODE         REPLICAS   IMAGE                          PORTS
tb9gtxc647fw   portainer-agent_agent   global       3/3        portainer/agent:2.26.0
m3a3mtuy55ed   portainer_portainer     replicated   1/1        portainer/portainer-ee:2.26.0  *:8000->8000/tcp, *:9000->9000/tcp
```

To update Portainer Server to the most recent version, run one of the sets of commands below depending on your edition of Portainer (replace the `portainer_portainer` service name if your setup differs):

{% tabs %}
{% tab title="Business Edition" %}
```
docker pull portainer/portainer-ee:lts
docker service update --image portainer/portainer-ee:lts --publish-add 9443:9443 --force portainer_portainer
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker pull portainer/portainer-ce:lts
docker service update --image portainer/portainer-ce:lts --publish-add 9443:9443 --force portainer_portainer
```
{% endtab %}
{% endtabs %}

To update the Portainer Agent to the latest version, run the commands below (replace the `portainer_agent` service name if your setup differs):

```
docker pull portainer/agent:lts
docker service update --image portainer/agent:lts --force portainer_agent 
```

This will deploy the newest version of Portainer and the agent across your swarm and upgrade the Portainer database to match.

When this is finished, go to `https://your-server-address:9443` or `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.
