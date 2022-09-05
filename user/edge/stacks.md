# Edge Stacks

Edge Stacks is a feature that lets you deploy multiple applications to multiple environments from a single page and multiple sources, regardless of their current state.&#x20;

{% hint style="info" %}
This functionality requires you to [enable Edge Compute](../../admin/settings/edge.md) features.
{% endhint %}

The Edge Stacks page displays the list Edge Stacks deployed across your environments and devices and includes their name, the status of the deployment across the relevant environments (acknowledged, successful, and failed), and the creation date.

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-list.png" alt=""><figcaption></figcaption></figure>

You can click on the individual stacks to edit the stack:

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-edit.png" alt=""><figcaption></figcaption></figure>

You can also view details about the stack's deployment across environments on the **Environments** tab, as well as retrieve, download, and clear retrieved log files from the respective environments (for stacks deployed on [Edge Devices](devices/)).

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-edit-env.png" alt=""><figcaption></figcaption></figure>

## Add a new stack

From the menu select **Edge Stacks** then click **Add stack**.

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-add.gif" alt=""><figcaption></figcaption></figure>

Give the stack a descriptive name then select one or more [Edge Groups](groups.md).

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-add-name.png" alt=""><figcaption></figcaption></figure>

In **Deployment type**, select the type of deployment you are performing.

{% hint style="info" %}
This may be auto-selected by your choice of [Edge Groups](groups.md).
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-add-deptype.png" alt=""><figcaption></figcaption></figure>

In the **Build Method**, define how to deploy your app from one of the following options:

| Option     | Overview                                                                        |
| ---------- | ------------------------------------------------------------------------------- |
| Web editor | Use the Portainer web editor to write or paste in your build file.              |
| Upload     | Upload a build file from your computer.                                         |
| Repository | Use a GitHub repo where the build file is stored.                               |
| Template   | Use an Edge stack template. Only available for the **Compose** deployment type. |

{% hint style="info" %}
You can search within the web editor at any time by pressing `Ctrl-F` (or `Cmd-F` on Mac).
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-add-buildmethod.png" alt=""><figcaption></figcaption></figure>

If your stack requires access to images in private registries, you can specify which registry to use as part of the deployment.

<figure><img src="../../.gitbook/assets/2.15-edge-stacks-add-registry.png" alt=""><figcaption></figcaption></figure>

Once the configuration is completed, click **Deploy stack**.
