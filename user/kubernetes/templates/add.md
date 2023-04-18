# Add a new custom template

## Creating the template

From the menu select **Custom Templates** then click **Add Custom Template**.

<figure><img src="../../../.gitbook/assets/2.15-k8s_kubernetes_add_custom_templates.gif" alt=""><figcaption></figcaption></figure>

Complete the form, using the table below as a guide.

| Field/Option | Overview                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------ |
| Title        | Enter a title for your custom template. This is how the template will appear when it's deployed. |
| Description  | Enter a description of the template.                                                             |
| Note         | As an optional step, record some extra information about the template.                           |
| Icon URL     | Optionally, enter the URL to an image to use as an icon for the template.                        |

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_create_custom_template.png" alt=""><figcaption></figcaption></figure>

Next, select the **Build method**.

## Selecting the build method

### Method 1: Web editor

Define or paste the contents of your manifest file into the web editor. When deploying an application using a custom template you will be given an opportunity to edit the manifest before deployment.

{% hint style="info" %}
You can search within the web editor at any time by pressing `Ctrl-F` (or `Cmd-F` on Mac).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_custom_template_web_editor.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Create custom template**.

### Method 2: Upload

If you have a manifest file locally, you can upload it directly to Portainer. Click **Select file** to browse to the file.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_custom_template_upload.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Create custom template**.

## Variables in templates

Custom templates support the use of variables to provide further customization of the deployed stack. A stack can define a variable that can then be adjusted by the user at deployment.

{% hint style="info" %}
This feature is only available in Portainer Business Edition.
{% endhint %}

Variables are identified in stacks with `{{ }}`. For example, the following stack provides a `REPLICA_COUNT` variable:

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_custom_template_web_editor_variables.png" alt=""><figcaption></figcaption></figure>

When a variable is defined, options appear to customize how the variable appears when deploying the stack. You can set the **label**, **description** and **default value**.

When a template is deployed, any variables that have been configured are editable:

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_custom_template_saved_variables.png" alt=""><figcaption></figcaption></figure>
