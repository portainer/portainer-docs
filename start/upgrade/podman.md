# Updating on Podman

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or updating to Portainer 2.27.6 make sure all of the agents are also on version 2.27.6.
{% endhint %}

{% hint style="danger" %}
Before beginning any update, we highly recommend [taking a backup](../../admin/settings/general.md#back-up-portainer) of your current Portainer configuration.
{% endhint %}

## Updating your Portainer Server

{% hint style="warning" %}
Starting from Portainer CE 2.9 and BE 2.10, HTTPS is enabled by default on port `9443.` These instructions will configure Portainer to use 9443 for HTTPS and do not expose 9000 for HTTP. If you need to retain HTTP access, you can add:

`-p 9000:9000`

to your command.

You can also choose to [completely disable HTTP](https://github.com/portainer/portainer-docs/blob/2.21/admin/settings/general/README.md#force-https-only) after the update. Before you make Portainer HTTPS only, make sure you have all your Agents and Edge Agents already communicating with Portainer using HTTPS.
{% endhint %}

{% hint style="info" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

To update to the latest version of Portainer Server, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
podman stop portainer
```

```
podman rm portainer
```

Now that you have stopped and removed the old version of Portainer, you must ensure that you have the most up to date version of the image locally. You can do this with a `podman pull` command:

{% tabs %}
{% tab title="Business Edition" %}
```
podman pull portainer/portainer-ee:lts
```
{% endtab %}

{% tab title="Community Edition" %}
```
podman pull portainer/portainer-ce:lts
```
{% endtab %}
{% endtabs %}

Finally, deploy the updated version of Portainer:

{% tabs %}
{% tab title="Business Edition" %}
```
podman run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always --privileged -v /run/podman/podman.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:lts
```
{% endtab %}

{% tab title="Community Edition" %}
```
podman run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always --privileged -v /run/podman/podman.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
These `podman run` commands include opening port `8000` which is used for Edge Agent communication as included in our [installation instructions](../install/server/docker/linux.md). If you do not need this port open, you can remove it from the command.
{% endhint %}

{% hint style="info" %}
To provide your own SSL certs you may use `--sslcert` and `--sslkey` flags as below to provide the certificate and key files. The certificate file needs to be the full chain and in PEM format. For example, for Business Edition:

```
podman run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always --privileged -v /run/podman/podman.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:lts --sslcert /path/to/cert/portainer.crt --sslkey /path/to/cert/portainer.key
```
{% endhint %}

The newest version of Portainer will now be deployed on your system, using the persistent data from the previous version, and will also upgrade the Portainer database to the new version.

When the deployment is finished, go to `https://your-server-address:9443` or `http://your-server-address:9000` and log in. You should notice that the update notification has disappeared and the version number has been updated.

## Agent-only update

To update to the latest version of Portainer Agent, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
podman stop portainer_agent
```

```
podman rm portainer_agent
```

Next, pull the updated version of the image:

```
podman pull portainer/agent:lts
```

Finally, start the agent with the updated image:

```
podman run -d -p 9001:9001 --name portainer_agent --restart=always --privileged -v /run/podman/podman.sock:/var/run/docker.sock -v /var/lib/containers/storage/volumes:/var/lib/docker/volumes portainer/agent:lts
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance (by specifying an `AGENT_SECRET` environment variable when starting the Portainer Server container) you must remember to explicitly provide the same secret to your Agent in the same way (as an environment variable) when updating your Agent:

`-e AGENT_SECRET=yoursecret`
{% endhint %}
