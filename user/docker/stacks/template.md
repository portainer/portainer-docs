# Create a template from a deployed stack

In Portainer you can create an [app template](../templates/) from deployed stacks. This is useful if you need to deploy the same stack several times.

From the menu select **Stacks**, select the already-deployed stack, then click **Create template from stack**.

<figure><img src="../../../.gitbook/assets/2.20-stacks-template.gif" alt=""><figcaption></figcaption></figure>

Define some properties for the new template, using the table below as a guide.

| Field/Option | Overview                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------- |
| Title        | Give the template a descriptive name.                                                       |
| Description  | Enter a brief description of what your template includes.                                   |
| Note         | Note any extra information about the template (optional).                                   |
| Logo         | Enter the URL to a logo to be used for the template when it appears in the list (optional). |
| Platform     | Select the compatible platform for the template. Options are **Linux** or **Windows**.      |
| Type         | Select the type of template. Options are **Standalone / Podman** or **Swarm**.              |

<figure><img src="../../../.gitbook/assets/2.22.0-templates-custom-new.png" alt=""><figcaption></figcaption></figure>

The **Web editor** will be pre-populated with the Compose file for your stack. Make any changes you need here.

{% hint style="info" %}
You can search within the web editor at any time by pressing `Ctrl-F` (or `Cmd-F` on Mac).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.20-stacks-template-webeditor.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Create custom template**.
