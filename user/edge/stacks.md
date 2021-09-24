# Edge Stacks

Edge Stacks is a feature that lets you deploy multiple applications to multiple environments from a single page and multiple sources, regardless of their current state \(online, disconnected, new\).

{% hint style="info" %}
This functionality requires you to [enable edge compute](../../admin/settings/#edge-compute) features.
{% endhint %}

From the menu select **Edge Stacks** then click **Add stack**.

![](../../.gitbook/assets/2.9-edge-stacks-add-1.gif)

Give the stack a descriptive name then select one or more [Edge groups](groups.md).

![](../../.gitbook/assets/edge-stacks-2.png)

In **Deployment type**, select the type of deployment you are performing.

![](../../.gitbook/assets/2.9-edge-stacks-add-3.png)

In the **Build Method**, define how to deploy your app from one of the following options:

| Option | Overview |
| :--- | :--- |
| Web Editor | Use the Portainer web editor to write or paste in a `docker-compose` file. |
| Upload | Upload a `docker-compose.yml` file from your computer. |
| Repository | Use a GitHub repo where the compose file is stored. |
| Template | Use an Edge stack template. Only available for the **Compose** deployment type. |

Once the configuration is completed, click **Deploy stack**.

