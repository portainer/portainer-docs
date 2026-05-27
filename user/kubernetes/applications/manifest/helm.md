# Create an application from a Helm chart

When creating an application from a Helm chart, you can deploy it from either a **Git repository** or a **Helm repository**. First, select your deployment method in the **Deploy from** section.

<figure><img src="../../../../.gitbook/assets/2.35-Helm-install-deploy-from.png" alt=""><figcaption></figcaption></figure>

## Git repository

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

Use the provided fields to enter the details of your Git repository containing your Helm chart and values files.

{% hint style="warning" %}
When an application is deployed from Git, Portainer will clone the entire Git repository as part of the deployment process. Ensure you have enough free space to accommodate this.
{% endhint %}

{% hint style="warning" %}
Portainer's Git deployment functionality does not currently support the use of Git submodules. If your repository includes submodules, they will not be pulled as part of the deployment. We [hope to add support](https://github.com/orgs/portainer/discussions/9767) for submodules in a future release.
{% endhint %}

| Field/Option          | Overview                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authentication        | Toggle this on if your repository requires authentication.                                                                                                                                                                                                                                                                                                                                                                   |
| Git Credentials       | If the **Authentication** toggle is enabled and you have configured [individual](../../../account-settings.md#git-credentials) or [shared](../../../../admin/settings/credentials/git.md) Git credentials, you can select them from this dropdown. Shared Git credentials can be identified with the **Shared** tag, and are only available to administrators at present. Leave this field unset to provide new credentials. |
| Authorization type    | Select either **Basic** or **Token** authorization depending on what your Git repository requires. For example, GitHub, GitLab, and Bitbucket Cloud expect Basic Auth, even when using an API or access token.                                                                                                                                                                                                               |
| Username              | Enter your Git username.                                                                                                                                                                                                                                                                                                                                                                                                     |
| Personal Access Token | Enter your personal access token or password.                                                                                                                                                                                                                                                                                                                                                                                |
| Save credential       | Check this option to save the credentials entered above for future use under the name provided in the **credential name** field.                                                                                                                                                                                                                                                                                             |

<figure><img src="../../../../.gitbook/assets/2.35-stacks-add-git-auth.png" alt=""><figcaption></figcaption></figure>

| Field/Option          | Overview                                                                                                                                                                                          |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository URL        | Enter the repository URL. If you have enabled Authentication above the credentials will be used to access the repository. The below options will be populated by what is found in the repository. |
| Skip TLS Verification | Toggle this on to skip the verification of TLS certificates used by your repository. This is useful if your repo uses a self-signed certificate.                                                  |
| Repository reference  | Select the reference to use when deploying the stack (for example, the branch).                                                                                                                   |

<figure><img src="../../../../.gitbook/assets/2.35-Git-Helm-Git-repo.png" alt=""><figcaption></figcaption></figure>

#### Automatic updates

Enabling **GitOps updates** gives Portainer the ability to update your application automatically, either by polling the repository at a defined interval for changes or by using a webhook to trigger an update.

{% hint style="info" %}
For more detail on how GitOps updates function under the hood, have a look at [this knowledge base article](https://portal.portainer.io/knowledge/how-do-automatic-updates-for-stacks-applications-work).
{% endhint %}

{% hint style="warning" %}
If your application is configured for GitOps updates and you make changes locally, these changes will be overridden by the application definition in the Git repository. Bear this in mind when making configuration changes.
{% endhint %}

| Field/Option                                                 | Overview                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mechanism                                                    | Choose from **Polling** or **Webhook**.                                                                                                                                                                                                                                                                                                                                                                |
| Fetch interval                                               | When using the **Polling** method, choose how often you wish to check the Git repository for updates to your application.                                                                                                                                                                                                                                                                              |
| Webhook                                                      | <p>When using the <strong>Webhook</strong> method, this displays the webhook URL to use. Click <strong>Copy link</strong> to copy the webhook to your clipboard.<br>For more on webhooks, refer to the <a href="../webhooks.md">webhook documentation</a>.</p>                                                                                                                                         |
| Always upgrade Helm release to ensure compliance with source | <p>Enable this setting to ensure a Helm upgrade is always performed when a redeploy is triggered via a webhook or polling, even if Portainer detects no changes between the Git repository and the last local pull.</p><p>This is useful if you treat your Git repository as the source of truth and are comfortable with any changes made directly to resources in the cluster being overwritten.</p> |

<figure><img src="../../../../.gitbook/assets/2.35-Helm-install-from-git-polling.png" alt=""><figcaption><p>GitOps updates using the polling mechanism</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/2.35-Helm-install-rom-git-webhook.png" alt=""><figcaption><p>GitOps updates using the webhook mechanism</p></figcaption></figure>

### Deploy to

Once you have selected a **Namespace** for your Helm deployment you will need to specify a **Release name** for your deployment.

<figure><img src="../../../../.gitbook/assets/2.35-Git-Helm-Deploy-to.png" alt=""><figcaption></figcaption></figure>

### Helm chart

From the dropdown, select the **Helm chart source** you want to pull from, and enter the **Helm chart path**. The path must point to a folder that includes a `Chart.yaml` file.

<figure><img src="../../../../.gitbook/assets/2.35-Git-Helm-Helm-chart.png" alt=""><figcaption></figcaption></figure>

### Install options

Under **Install options**, you can view the **Version** of the Helm chart as defined in the `Chart.yaml` file from the specified Helm chart path. This field is read-only and cannot be changed.

You can also specify one or more **Values files** to override the default chart values. If multiple files are provided, they are merged in the order listed, with the last file taking precedence.

{% hint style="info" %}
You can get more information about the Helm values file format in the [official Helm documentation](https://helm.sh/docs/chart_template_guide/values_files/).
{% endhint %}

**User-defined values from Git** and **Values reference** are displayed side by side, showing the values that will be applied during the creation of the application. These views are read-only.

<figure><img src="../../../../.gitbook/assets/2.35-Git-Helm-Install-options.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Deploy**.

## Helm repository

Once you have selected a **Namespace** for your Helm deployment, specify a **Release name** for your deployment.

Next, choose a **Helm chart source** from the dropdown. Portainer will pull the available chart list from the selected registry and display them below. Select a chart to use from the list. You can search within the list or filter by category.

{% hint style="info" %}
Business Edition users will be able to choose charts from OCI registries if they have been [configured](../../../../admin/registries/) and [given access to the selected namespace](../../cluster/registries.md#managing-access).
{% endhint %}

{% hint style="info" %}
When a Helm chart source is chosen for the first time, it may take some time to download and populate the charts in the list.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/2.35-Helm-repo-deploy-to.png" alt=""><figcaption></figcaption></figure>

Once you have selected a chart, Portainer will import the `values.yaml` file for the latest version of the chart and display it in the right hand pane as a reference. You can make any necessary customizations to the `values.yaml` file in the left-hand pane. You can also choose to deploy a different version of the chart by choosing the version from the **Version** dropdown. To view a preview of the manifest you will create when you deploy the Helm chart, click the **Manifest preview** heading.

Once you've made your customizations, click **Install** to begin the deployment.

<figure><img src="../../../../.gitbook/assets/image (36).png" alt=""><figcaption></figcaption></figure>
