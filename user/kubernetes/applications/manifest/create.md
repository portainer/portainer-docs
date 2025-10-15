# Create an application from a Manifest

When creating an application from a Manifest, first select your deployment method in the **Deploy from** section.

<figure><img src="../../../../.gitbook/assets/2.35-K8-from-manifest.png" alt=""><figcaption></figcaption></figure>

Then, select the **Namespace** to deploy to and optionally provide a **Name** for your deployment in the **Deploy to** section.

{% hint style="info" %}
If you want to use namespaces defined in your manifest, you can leave **Namespace** set to `default` and toggle on the **Use namespace(s) specified from manifest** option.&#x20;
{% endhint %}

Your next options will depend on the deployment method you selected.

## Repository

Use the provided fields to enter the details of your Git repository containing your Kubernetes manifests.

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
| Manifest path         | Enter the path to your manifest file relative to the root of your repository.                                                                                                                     |
| Additional paths      | Click **Add file** to define additional manifests or compose files to process as part of the deployment.                                                                                          |
| GitOps updates        | Toggle this on to enable GitOps updates (see below).                                                                                                                                              |

<figure><img src="../../../../.gitbook/assets/2.24.0-kubernetes-applications-manifest-git.png" alt=""><figcaption></figcaption></figure>

#### GitOps updates

Enabling GitOps updates gives Portainer the ability to update your application automatically, either by polling the repository at a defined interval for changes or by using a webhook to trigger an update.

{% hint style="info" %}
For more detail on how GitOps updates function under the hood, have a look at [this knowledge base article](https://portal.portainer.io/knowledge/how-do-automatic-updates-for-stacks-applications-work).
{% endhint %}

{% hint style="warning" %}
If your application is configured for GitOps updates and you make changes locally, these changes will be overridden by the application definition in the Git repository. Bear this in mind when making configuration changes.
{% endhint %}

| Field/Option   | Overview                                                                                                                                                                                                                                                       |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mechanism      | Choose from **Polling** or **Webhook**.                                                                                                                                                                                                                        |
| Fetch interval | When using the **Polling** method, choose how often you wish to check the Git repository for updates to your application.                                                                                                                                      |
| Webhook        | <p>When using the <strong>Webhook</strong> method, this displays the webhook URL to use. Click <strong>Copy link</strong> to copy the webhook to your clipboard.<br>For more on webhooks, refer to the <a href="../webhooks.md">webhook documentation</a>.</p> |

<figure><img src="../../../../.gitbook/assets/2.19-stacks-add-git-polling.png" alt=""><figcaption><p>GitOps updates using the polling mechanism</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/2.19-stacks-add-git-webhook.png" alt=""><figcaption><p>GitOps updates using the webhook mechanism</p></figcaption></figure>

| Field/Option          | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Always apply manifest | <p>Enable this setting to force the redeployment of your application (kubectl apply) at the specified interval (or when the webhook is triggered), overwriting any changes that have been made in the local environment, even if there has been no update to the application in Git. This is useful if you want to ensure that your Git repository is the source of truth for your applications and are happy with the local application being replaced.</p><p></p><p>If this option is left disabled, automatic updates will only trigger if Portainer detects a change in the remote Git repository.</p> |

<figure><img src="../../../../.gitbook/assets/2.19-kubernetes-ingress-add-manifest-git-alwaysapply.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Deploy**.

## Web editor

Use the Web editor to write or paste in your Kubernetes manifest.&#x20;

<figure><img src="../../../../.gitbook/assets/2.20-kubernetes-applications-manifest-webeditor.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
You can search within the web editor at any time by pressing `Ctrl-F` (or `Cmd-F` on Mac).
{% endhint %}

When you're ready, click **Deploy**. &#x20;

## URL

Enter the **URL** to your manifest file in the provided field.

<figure><img src="../../../../.gitbook/assets/2.20-kubernetes-applications-manifest-url.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Deploy**.

## Custom template

From the **Template** dropdown, select the custom template to use. Depending on the template, you may need (or be able) to set template variables that will adjust the deployment configuration. As an optional step, you can edit the template before deploying the application. If you have no custom templates you will be given a link to the [Custom Templates](../../templates/) section.

<figure><img src="../../../../.gitbook/assets/2.20-kubernetes-applications-manifest-customtemplate.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Deploy**.
