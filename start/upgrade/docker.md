# Updating on Docker Standalone

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or updating to Portainer 2.19.4 make sure all of the agents are also on version 2.19.4.
{% endhint %}

{% hint style="danger" %}
Before beginning any update, we highly recommend [taking a backup](../../admin/settings/#backup-portainer) of your current Portainer configuration.
{% endhint %}

## Updating your Portainer Server

{% hint style="warning" %}
Starting from Portainer CE 2.9 and BE 2.10, HTTPS is enabled by default on port `9443.` These instructions will configure Portainer to use 9443 for HTTPS and do not expose 9000 for HTTP. If you need to retain HTTP access, you can add:

`-p 9000:9000`

to your command.&#x20;

You can also choose to [completely disable HTTP](../../admin/settings/#force-https-only) after the update. Before you make Portainer HTTPS only, make sure you have all your Agents and Edge Agents already communicating with Portainer using HTTPS.&#x20;
{% endhint %}

{% hint style="info" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

To update to the latest version of Portainer Server, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
docker stop portainer
```

```
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, you must ensure that you have the latest version of the image locally. You can do this with a `docker pull` command:

{% tabs %}
{% tab title="Business Edition" %}
```
docker pull portainer/portainer-ee:latest
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker pull portainer/portainer-ce:latest
```
{% endtab %}
{% endtabs %}

Finally, deploy the updated version of Portainer:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
These `docker run` commands include opening port `8000` which is used for Edge Agent communication as included in our [installation instructions](../install/server/docker/linux.md). If you do not need this port open, you can remove it from the command.
{% endhint %}

{% hint style="info" %}
To provide your own SSL certs you may use `--sslcert` and `--sslkey` flags as below to provide the certificate and key files. The certificate file needs to be the full chain and in PEM format. For example, for Business Edition:

```
docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest --sslcert /path/to/cert/portainer.crt --sslkey /path/to/cert/portainer.key
```
{% endhint %}

The newest version of Portainer will now be deployed on your system, using the persistent data from the previous version, and will also upgrade the Portainer database to the new version.

When the deployment is finished, go to `https://your-server-address:9443` or `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.

## Agent-only upgrade

To update to the latest version of Portainer Agent, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
docker stop portainer_agent
```

```
docker rm portainer_agent
```

Next, pull the updated version of the image:

```
docker pull portainer/agent:latest
```

Finally, start the agent with the updated image:

```
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent:latest
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance you must remember to explicitly provide this when updating your agent:

`-e AGENT_SECRET=yoursecret`
{% endhint %}
