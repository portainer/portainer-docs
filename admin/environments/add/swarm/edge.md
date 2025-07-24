# Install Edge Agent Standard on Docker Swarm

When a remote environment is not directly accessible from the Portainer Server instance, we recommend deploying the Portainer _Edge Agent_ to the remote environment. This allows you to manage the remote environment from your Portainer Server instance without having to open any ports on the environment. Rather than the traditional approach of the server connecting to Agents, the Edge Agent instead polls the Portainer Server periodically to see if there are any pending jobs to perform, and acts appropriately.

{% hint style="info" %}
For a technical summary of how the Edge Agent works, refer to our [advanced documentation](../../../../advanced/edge-agent.md).
{% endhint %}

## Preparation

The Edge Agent requires two ports be open on the Portainer Server instance: the UI port (usually `9443` or `30779` on Kubernetes with NodePort) and the tunnel port ( `8000` or `30776` when using Kubernetes with NodePort). The tunnel port is used to provide a secure TLS tunnel between the Portainer Edge Agent and the Portainer Server instance. Our installation instructions configure Portainer Server to listen on both ports by default, and you will need to ensure your firewalling provides external access to these ports in order to proceed.

{% hint style="warning" %}
If your Portainer Server instance is deployed with TLS, the agent will use HTTPS for the connection it makes back to Portainer. However if your Portainer instance uses a self-signed certificate, the Edge Agent must be deployed with the `-e EDGE_INSECURE_POLL=1` flag. If you do not deploy the Edge Agent with this flag, then the agent will not be able to communicate with the Portainer Server instance.
{% endhint %}

In addition, our instructions assume your environment meets [our requirements](../../../../start/requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.

## Deploying

To add a standard Edge Agent to a Docker Swarm environment, from the menu expand **Environment-related**, click **Environments**, then click **Add environment**.

<figure><img src="../../../../.gitbook/assets/2.22-environments-add.gif" alt=""><figcaption></figcaption></figure>

Select **Docker Swarm** then click **Start Wizard**. Then select the **Edge Agent Standard** option. Enter the environment details using the table below as a guide.

| Field                           | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                            | Enter a name for your environment.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Portainer API server URL        | Enter the URL and port of your Portainer Server instance as it will be seen from your Edge environment. If using a FQDN, ensure that DNS is properly configured to provide this.                                                                                                                                                                                                                                                                                                                                                              |
| Portainer tunnel server address | <p>Enter the address and port of your Portainer Server instance's tunnel server as it will be seen from your Edge environment. If using a FQDN, ensure that DNS is properly configured to provide this.<br>In most cases, this will be the same address as the Portainer API server URL, but without the protocol and on port <code>8000</code>.<br>This field is only available in Portainer Business Edition. For Community Edition users, refer to <a href="https://github.com/portainer/portainer/issues/6251">this GitHub issue</a>.</p> |

<figure><img src="../../../../.gitbook/assets/2.17-install-agent-edge-nameurl.png" alt=""><figcaption></figcaption></figure>

As an optional step you can expand the **More settings** section and adjust the Poll frequency for the environment - this defines how often this Edge Agent will check the Portainer Server for new jobs. The default is every 5 seconds. You can also categorize the environment by adding it to a [group](../../groups.md) or [tagging](../../tags.md) it for better searchability.

<figure><img src="../../../../.gitbook/assets/2.15-edge_agent_more_settings.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Create**. If you are pre-staging your Edge Agent deployment, you can now retrieve the join token for use in your deployment.&#x20;

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-docker-edge-jointoken.png" alt=""><figcaption></figcaption></figure>

Otherwise, complete the new fields that have appeared using the table below as a guide.

| Field/Option            | Overview                                                                                                                                                                                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment variables   | <p>Enter a comma separated list of environment variables that will be sourced from the host where the agent is deployed and provided to the agent.<br>For security, the agent will only pass through environment variables with a <code>PORTAINER_</code> prefix.</p> |
| Allow self-signed certs | Toggle this on to allow self-signed certificates when the agent is connecting to Portainer via HTTPS.                                                                                                                                                                 |

<figure><img src="../../../../.gitbook/assets/2.30-environments-create-docker-edge-envvars.png" alt=""><figcaption></figcaption></figure>

Choose your platform (**Linux** or **Windows**), copy the generated command and run the command on your Edge environment to complete the installation.

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance (by specifying an `AGENT_SECRET` environment variable when starting the Portainer Server container) you **must** remember to explicitly provide the same secret to your Edge Agent in the same way (as an environment variable) when deploying your Edge Agent by adding it to the stack file:

`environment:`\
&#x20; `- AGENT_SECRET: yoursecret`
{% endhint %}

{% hint style="info" %}
If Docker on the environment you're deploying the Edge Agent to has the Docker volume path at a non-standard location (instead of `/var/lib/docker/volumes`) you will need to adjust the volume mount in the deployment command to suit.&#x20;

For example, if your volume path was `/srv/data/docker`, you would change the line in the command to:

```
--mount type=bind,src=//srv/data/docker,dst=/var/lib/docker/volumes \
```

The `dst` value of the mount should remain as `/var/lib/docker/volumes`, as that is what the Edge Agent expects.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-swarm-edge-command.png" alt=""><figcaption></figcaption></figure>

If you have another Edge standard environment of the same type to deploy you can click **Add another environment** to do so. Otherwise if you have any other environments to configure click **Next** to proceed, or click **Close** to return to the list of environments.
