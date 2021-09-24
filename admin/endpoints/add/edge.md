# Add an Edge endpoint

The Edge Agent was created as a way to manage an Edge Compute environment where devices typically lack the networking capability to run the traditional Portainer Agent. For more information about the Edge Agent and how it works, take a look at our [advanced documentation](../../../advanced/edge-agent.md).

## Preparation

### Exposing port 8000

{% hint style="info" %}
Exposing the tunnel port only applies when the Portainer Server is running in a Docker or Docker Swarm environment. Kubernetes users do not need to expose this port.
{% endhint %}

The Edge Agent communicates with the Portainer Server instance over port `8000`. Through this port, the Edge Agent can poll the Portainer instance, connect to Portainer, see when it is required, then initiate a tunnel or receive configuration updates. Without port `8000` exposed on the Portainer Server instance, you cannot access the Edge endpoint. If you already deployed Portainer without this port open, you will need to redeploy with port `8000` exposed alongside the port used to access Portainer. Using the CLI flag `--tunnel-port` you can set a different port if `8000` is already in use. For more information see [CLI options](../../../advanced/cli.md).

### Deployment methods available

| Method | Overview |
| :--- | :--- |
| Portainer with TLS | If your Portainer instance is deployed with TLS, the agent will use HTTPS for the connection it makes back to Portainer. This is the recommended approach. |
| Portainer with Self-Signed Certs | If you are using a self-signed Portainer instance, the Edge Agent must be deployed with the flag `-e EDGE_INSECURE_POLL=1`. If you do not deploy Portainer with this flag, the agent cannot communicate with Portainer. This option is less secure than TLS. |
| Portainer Fallback to HTTP | If Portainer is not configured with either of the above options, it will use HTTP for agent polling as a fallback. We do not recommend this option because it is not secure. |

## Adding an Edge endpoint to Portainer

From the menu select **Endpoints** then click **Add endpoint** and select **Edge Agent** as the environment type.

![](../../../.gitbook/assets/be-endpoints-add-edge-1.gif)

Enter the environment details, using the table below as a guide. 

| Field/Option | Overview |
| :--- | :--- |
| Name | Give the endpoint a descriptive name. |
| Portainer server URL | The public IP or DNS of your Portainer Server instance and the port. |
| Poll frequency | How often the Edge Agent polls the Portainer Server instance. Defaults to 5 seconds. |

![](../../../.gitbook/assets/endpoints-add-edge-2.png)

When you have finished, click **Add endpoint**.

You will be taken to the **Endpoint details** page for the new endpoint where you can select the type of endpoint to deploy. You will be given a command to run on the endpoint which will initiate the connection with the Portainer Server instance.

![](../../../.gitbook/assets/endpoints-add-edge-3.png)

{% hint style="info" %}
A join token is also displayed if you are pre-staging your Edge agents.
{% endhint %}

Once you have run the command, go to the **Configuration** section and enter the public IP for the endpoint you just added.

![](../../../.gitbook/assets/endpoints-add-edge-4.png)

In the **Metadata** section, as an optional step you can categorize the endpoint by adding it to a [group](../groups.md) or  [tagging](../tags.md) it for better searchability.

![](../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When you're ready, click **Update endpoint** to complete the configuration.

