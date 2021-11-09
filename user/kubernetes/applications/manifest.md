# Add a new application using a manifest

There are two ways to add a new application: [manually by using a form](add.md) or automatically by using a manifest. This article explains how to add an application using a manifest.

{% hint style="info" %}
Manifests aren't just for applications - you can also deploy namespaces, ConfigMaps, secrets and volumes using a manifest.
{% endhint %}

From the menu select **Applications** then click **Create from manifest**.

![](../../../.gitbook/assets/2.9.1-applications-manifest-1.gif)

Select the namespace for your deployment, define a name for your application, and then choose the build method from the options provided.

![](../../../.gitbook/assets/2.9.1-applications-manifest-2.png)

## Option 1: Git Repository

From **Deployment type** select either **Kubernetes** or **Compose** (depending on the format of the manifest) then enter the details of your Git repo.

{% hint style="info" %}
Portainer uses Kompose to convert a Compose manifest to a Kubernetes-compliant manifest. Be aware that currently not all Compose format options are supported by Kompose.
{% endhint %}

| **Field/Option**      | **Overview**                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Repository URL        | Enter the URL to your Git repository.                                                                                                 |
| Repository reference  | Enter the reference to use when pulling from your repository. If this is left blank, Portainer will use the default `HEAD` reference. |
| Manifest path         | When using the Kubernetes deployment type, enter the path to your manifest file relative to the root of your repository.              |
| Compose path          | When using the Compose deployment type, enter the path to your compose file relative to the root of your repository.                  |
| Additional paths      | Click **add file** to define additional manifests or compose files to process as part of the deployment.                              |
| Authentication        | Toggle this on if your repository requires authentication.                                                                            |
| Username              | When using authentication, enter the username for your Git repository.                                                                |
| Personal Access Token | When using authentication, enter the personal access token or password for your Git repository.                                       |

![](../../../.gitbook/assets/2.9.1-applications-manifest-3.png)

### Automatic updates

Enabling Automatic updates gives Portainer the ability to update your application automatically, either by polling the repository at a defined interval for changes or by using a webhook to trigger an update.

{% hint style="info" %}
For more detail on how automatic updates function under the hood, have a look at [this FAQ entry](../../../faq/troubleshooting/how-do-automatic-updates-for-stacks-applications-work.md).
{% endhint %}

{% hint style="warning" %}
If your application is configured for automatic updates and you make changes locally, these changes will be overridden by the application definition in the Git repository. Bear this in mind when making configuration changes.
{% endhint %}

| **Field/Option** | **Overview**                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Mechanism        | Choose from **Polling** or **Webhook**.                                                                                             |
| Fetch interval   | When using the **Polling** method, choose how often you wish to check the Git repository for updates to your application.           |
| Webhook          | When using the **Webhook** method, this displays the webhook URL to use. Click **Copy link** to copy the webhook to your clipboard. |

![Automatic updates using the Polling mechanism](../../../.gitbook/assets/2.9.1-applications-manifest-4.png)

![Automatic updates using the Webhook mechanism](../../../.gitbook/assets/2.9.1-applications-manifest-5.png)

When you're ready, click **Deploy**.

## Option 2: Web editor

From **Deployment type** select either **Kubernetes** or **Compose** (depending on the format of the manifest) then write or paste in your Kubernetes manifest.&#x20;

{% hint style="info" %}
Portainer uses Kompose to convert a Compose manifest to a Kubernetes-compliant manifest. Be aware that currently not all Compose format options are supported by Kompose.
{% endhint %}

![](../../../.gitbook/assets/applications-manifest-4.png)

When you're ready, click **Deploy**. &#x20;

## Option 3: URL

From **Deployment type** select either **Kubernetes** or **Compose** (depending on the format of the manifest) then enter the **URL** to your manifest file.

{% hint style="info" %}
Portainer uses Kompose to convert a Compose manifest to a Kubernetes-compliant manifest. Be aware that currently not all Compose format options are supported by Kompose.
{% endhint %}

![](../../../.gitbook/assets/applications-manifest-5.png)

When you're ready, click **Deploy**.

## Option 4: Custom template

From the **Template** dropdown, select the custom template to use. As an optional step, you can edit the template before deploying the application. If you have no custom templates you will be given a link to the [Custom Templates](../templates/) section.

![](../../../.gitbook/assets/applications-manifest-6.png)

When you're ready, click **Deploy**.
