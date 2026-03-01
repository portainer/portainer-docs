---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/xdTQRpMuktD2l0URtOJO/admin/settings/general
---

# General

## Application settings

### Snapshot interval

Defines how often a data snapshot of environments is taken. A data snapshot consists of the information displayed on the home page for the environment as well as other basic information. The default is every 5 minutes.

### Edge agent default poll frequency

This setting defines the default interval used by Edge Agents when checking in with the Portainer instance.

### Use custom logo

Replaces our logo with your own. Toggle on and enter the URL to the logo. The recommended size is 155px by 55px.

<figure><img src="../../.gitbook/assets/2.38.0-general-settings.png" alt=""><figcaption></figcaption></figure>

### Login screen banner

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

This setting allows you to specify a custom text banner that will appear on the login screen for all users. This could be used to provide informational detail, a warning message, or whatever you need. To enable this, toggle the **Login screen banner** option on and enter your message in the **Details** box.

<figure><img src="../../.gitbook/assets/2.16-settings-login-screen-banner.png" alt=""><figcaption></figcaption></figure>

Your message will then be shown at the login screen.

<figure><img src="../../.gitbook/assets/login-with-message.png" alt="" width="375"><figcaption></figcaption></figure>

### App Templates

You can deploy containers and services using Portainer's set of built-in app templates, or [replace them with your own](../../advanced/app-templates/build.md) set of templates. Once you have a JSON file containing the template definitions, you can provide the URL to it here.

<figure><img src="../../.gitbook/assets/2.15-settings-settings-2.png" alt=""><figcaption></figcaption></figure>

### Automatic Portainer patch updates

{% hint style="warning" %}
This is a beta feature and is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

{% hint style="info" %}
Automatic patch update settings can only be edited by an admin user.&#x20;
{% endhint %}

{% hint style="danger" %}
Enabling automatic updates deviates from standard deployment practices where version control is managed externally. This may result in the running version of Portainer becoming out of sync with your deployment manifests or configuration management tools.
{% endhint %}

{% hint style="info" %}
This feature is designed for environments where maintaining a high security posture via immediate patching is the priority. It is suitable for standalone Portainer instances where manual maintenance overhead must be minimized.

#### When to avoid this feature

* **Infrastructure as Code (IaC):** If you operate a strict GitOps or IaC workflow, this feature may lead to configuration drift. The running Portainer version will no longer match the version defined in your deployment manifests (e.g. Docker Compose files).
* **Helm Deployments:** Portainer instances deployed via Helm charts are not aware of automatic patching. Reapplying a Helm chart will likely overwrite a patched version, resulting in an unintended rollback to the version specified in the chart.
* **Environmental Consistency:** For environments where containers must remain identical to their tested image (immutability), this feature is not recommended. It introduces a change to the running environment that has not been explicitly triggered by your deployment tools.
* **Change Control:** This feature should be avoided in environments requiring manual validation or staging of all updates before they reach production.
{% endhint %}

Toggle **Apply patch updates when available** to enable your Portainer version to be automatically updated when a new patch is released. Automatic updates will _only_ apply to patches, for example from 2.35.0 to 2.35.1. Your Portainer version will not automatically update with major or minor releases (2.35.0 to 2.36.0 for example).&#x20;

Specify the time you want Portainer to check for new updates each day, the time specified is UTC.&#x20;

{% hint style="warning" %}
Update checks only start **one hour after enabling**. The first check runs at the next scheduled check time that is **at least one hour later**.
{% endhint %}

By default, Portainer retrieves update images from Docker Hub. You can override this by selecting **Use** **custom registry**, which tells Portainer to use your own image registry. This option is useful for environments that mirror Portainer images internally, operate within air-gapped networks, or restrict direct internet access for security and compliance reasons.&#x20;

When specifying a custom registry, the following fields are mandatory:

| Field/Option               | Overview                                                                                                                                                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Registry                   | The address of your custom image registry, selected from your existing Portainer registries.                                                                                                                                       |
| Portainer image repository | The repository for the Portainer image (for example, `myrepo/portainer-ee`).                                                                                                                                                       |
| Updater image repository   | <p>The repository for the Portainer updater image used to perform the update (for example, <code>myrepo/portainer-updater</code>). </p><p>The updater repository must exist in the same registry as the Portainer repository. </p> |

<figure><img src="../../.gitbook/assets/2.35_auto_patch_updates.png" alt=""><figcaption></figcaption></figure>

Any patches that have been applied will display in the **Patch history** table, showing the version, the date the patch was applied, and a status of **In Progress**, **Succeeded** or **Failed**.

## Kubernetes settings

### Helm Repository

If you wish to use your own Helm repository in place of the Bitnami repository we include by default, you can enter the URL here.

<figure><img src="../../.gitbook/assets/2.15-settings-settings-3.png" alt=""><figcaption></figcaption></figure>

### Kubeconfig

Here you can select the expiry time for [exported kubeconfig files](../../user/kubernetes/kubeconfig.md) from this dropdown. The new expiry time will only apply to configurations created after this value was changed. Administrators are also able to disable Kubeconfig download for non-admin users here.

<figure><img src="../../.gitbook/assets/2.22.0-settings-kubernetes-kubeconfig.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Tokens used in `kubeconfig` files become invalid when Portainer restarts — irrespective of the value set for **Kubeconfig expiry**. In this case, you will need to re-download the `kubeconfig` file.
{% endhint %}

### KubeShell

This option lets administrators disable KubeShell access for non-admin users.

<figure><img src="../../.gitbook/assets/2.22.0-settings-kubernetes-kubeshell.png" alt=""><figcaption></figcaption></figure>

### Deployment options

In this section you can configure various Kubernetes-specific deployment options.

| Field/Option                                            | Overview                                                                                                                                                                                                           |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enforce code-based deployment                           | Enable this option to hide the Add with form button when deploying applications and prevent the adding or editing of Kubernetes resources via forms.                                                               |
| Allow web editor and custom template use                | When code-based deployment is enforced, enable this to allow the use of the web editor and custom templates when deploying an application.                                                                         |
| Allow specifying of a manifest via a URL                | When code-based deployment is enforced, enable this allow the use of the URL option when deploying an application.                                                                                                 |
| Allow per-environment override                          | Enable this to allow the above enforcement options to be overridden on a per-environment basis.                                                                                                                    |
| Require a note on applications                          | Enable this to require that deployments have the Notes field completed in order to deploy. This setting currently only applies when deploying via a form.                                                          |
| Allow stacks functionality with Kubernetes environments | Enable this to allow grouping of Kubernetes deployments into "stacks", helping to organize and manage related workloads. Disabling this option will hide the stacks functionality on your Kubernetes environments. |

<figure><img src="../../.gitbook/assets/2.20-settings-general-kubernetes-deployment.png" alt=""><figcaption></figcaption></figure>

## Certificate Authority file for Kubernetes Helm repositories

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

This section lets you supply a certificate authority (CA) file for use with HTTPS connections to Helm repositories from Portainer. This is useful if the TLS certificate your Helm repository uses is signed by a custom CA, and applies to both the Helm Repository configured above and to Helm repositories configured per environment.

<figure><img src="../../.gitbook/assets/2.18-settings-helmcafile.png" alt=""><figcaption></figcaption></figure>

## SSL certificate

During installation, Portainer by default creates a self-signed SSL certificate to encrypt traffic between the Portainer Server and the end user, as well as between the Portainer Server and the Portainer Agent. This certificate can be replaced with your own certificate.

{% hint style="warning" %}
Note that SSL certificates [specified by CLI options](../../advanced/cli.md#configuration-flags-available-at-the-command-line) will override any certificates uploaded here.
{% endhint %}

{% hint style="info" %}
We recommend including the full chain in the certificate to ensure compatibility. If you do not have the full chain for your certificate, ask your certificate provider or use [What's My Chain Cert?](https://whatsmychaincert.com/) to generate it.
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-settings-settings-ssl-1.png" alt=""><figcaption></figcaption></figure>

### Force HTTPS only

If you have configured your Portainer Server instance to listen on `9443` (HTTPS) and `9000` (HTTP) you can toggle **Force HTTPS only** on to disable listening on port `9000`.

{% hint style="danger" %}
Make sure that your HTTPS configuration is working correctly **before** enabling this option. Failure to do so may result in you being [locked out of your Portainer installation](https://portal.portainer.io/knowledge/i-enabled-force-https-only-and-now-im-locked-out-of-portainer-how-do-i-get-back-in).
{% endhint %}

{% hint style="warning" %}
Ensure that any Edge Agents have been correctly configured for HTTPS communication before enabling this. This setting does **not** affect Standard Agent deployments, as these use HTTPS certificates generated by the Agent on installation.
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-settings-settings-ssl-force.png" alt=""><figcaption></figcaption></figure>

After making changes to this section, click **Apply Changes**.

## Additional functionality

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

This section contains options for enabling and configuring additional functionality within Portainer.

| Field/Option  | Overview                                                                                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Observability | <p>Toggle this on to enable the Observability feature which is avaliable under <strong>Additional Functionality</strong> in the left hand menu.<br>This feature is currently limited to alerting, with additional observability capabilities to be introduced in future updates.</p> |

<figure><img src="../../.gitbook/assets/2.39-additional-functionality.png" alt=""><figcaption></figcaption></figure>

## Experimental features

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

This section allows you to enable experimental Portainer features for use in your deployment. These features are in early development and have gone through a limited set of testing, and are provided to users in order to gather feedback on the feature at an earlier stage of development.

{% hint style="danger" %}
Enabling experimental features should be done cautiously and at your own risk.
{% endhint %}

<figure><img src="../../.gitbook/assets/2.38-experimental-features.png" alt=""><figcaption></figcaption></figure>

## Hidden containers

Stops a container from appearing in the Portainer UI through the container label. Enter the name and value of the label, then click **Add filter**. Containers with matching labels will be hidden.

<figure><img src="../../.gitbook/assets/2.15-settings-settings-hiddencontainers.png" alt=""><figcaption></figcaption></figure>

## Back up Portainer

This setting contains all of the information that Portainer stores on the `/data` volume, archived in a `tar.gz` file, and is optionally encrypted with a password. This archive is all you need to restore Portainer.

{% hint style="warning" %}
This backup is **only** intended to back up the Portainer configuration. It does **not** back up what you have deployed on your environments (for example, containers, stacks, services, volumes, etc).&#x20;
{% endhint %}

### Backing up to a local disk <a href="#backup-to-local-disk" id="backup-to-local-disk"></a>

Log in as an admin user. From the menu select **Settings**, then scroll down to the **Back up Portainer** section.

<figure><img src="../../.gitbook/assets/Back-up-Portainer-new.gif" alt=""><figcaption></figcaption></figure>

**Download backup file** is the default option. As an optional step, toggle **Password protect** on and enter a password to encrypt the backup file. When you click **Download backup**, a `tar.gz` file will be downloaded via the browser.

### Backing up to S3

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

With Portainer Business Edition you have the option to store a backup of your configuration in an S3 bucket, either on demand or on a defined schedule.

To do this, log in as an admin user, select **Settings** from the menu, then scroll down to **Backup Portainer**.

<figure><img src="../../.gitbook/assets/Back-up-Portainer-new.gif" alt=""><figcaption></figcaption></figure>

Select **Store in S3** and fill in the options, using the below as a guide.

| Field/Option               | Overview                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schedule automatic backups | Enable this to schedule an automatic backup of your configuration to an S3 bucket.                                                                                                                                                                                                                            |
| Cron rule                  | <p>Define how often you want the backup to run using the <a href="https://en.wikipedia.org/wiki/Cron">cron</a> format.</p><p><code>[minute] [hour] [day of month] [month] [day of week]</code></p><p>For example, the following would run a backup at 3:41am every Tuesday:</p><p><code>41 3 * * 2</code></p> |
| Access Key ID              | Enter the access key ID for your S3 bucket. Leave this field blank to allow the AWS SDK to resolve credentials from the environment, for example via IAM Roles for Service Accounts (IRSA) when running in EKS.                                                                                               |
| Secret Access Key          | Enter the secret key for your S3 bucket. Leave this field blank to allow the AWS SDK to resolve credentials from the environment, for example via IAM Roles for Service Accounts (IRSA) when running in EKS.                                                                                                  |
| Region                     | Enter the region where your bucket is located (for example, `us-west-1`).                                                                                                                                                                                                                                     |
| Bucket name                | Enter the name of your S3 bucket.                                                                                                                                                                                                                                                                             |
| S3 compatible host         | If you are using a non-AWS S3-compatible provider (such as MinIO), enter the URL (including the protocol and port if necessary) here. If you're using AWS S3, leave this blank.                                                                                                                               |
| Password protect           | Enable this to protect your backups with a password.                                                                                                                                                                                                                                                          |
| Password                   | Enter the password to set on your backups.                                                                                                                                                                                                                                                                    |

<figure><img src="../../.gitbook/assets/take-a-backup.png" alt=""><figcaption></figcaption></figure>

### Restoring from a local file

Restoring a configuration is only possible on a fresh instance of Portainer during the initial installation. When you need to restore Portainer, deploy a fresh instance of Portainer with an empty data volume and choose the **Restore Portainer from backup** option during setup.

<figure><img src="../../.gitbook/assets/2.15-backup-restore-file.png" alt=""><figcaption></figcaption></figure>

On the initialization page, expand **Restore Portainer from backup**. Click **Select file** then browse to and select the `tar.gz` backup file. If the backup was originally encrypted, enter the password then click **Restore Portainer**.

The restore might take a few moments. When it has finished, you will be redirected to the login page. You can now log in with your previous credentials and your previous configuration will be restored.

### Restoring from S3

{% hint style="info" %}
This feature is only available in Portainer Business Edition.
{% endhint %}

Restoring a configuration is only possible on a fresh instance of Portainer during the initial installation. When you need to restore Portainer, deploy a fresh instance of Portainer with an empty data volume and choose the **Restore Portainer from backup** option during setup, making sure to select **Retrieve from S3**. Complete the fields using the table below as a guide.

| Field/Option       | Overview                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access key ID      | Enter the access key ID for your S3 bucket.                                                                                                                                     |
| Secret access key  | Enter the secret key for your S3 bucket.                                                                                                                                        |
| Region             | Enter the region where your bucket is located (for example, `us-west-1`).                                                                                                       |
| Bucket name        | Enter the name of your S3 bucket.                                                                                                                                               |
| S3 Compatible Host | If you are using a non-AWS S3-compatible provider (such as MinIO), enter the URL (including the protocol and port if necessary) here. If you're using AWS S3, leave this blank. |
| Filename           | Enter the filename of the backup you want to restore.                                                                                                                           |
| Password           | Enter the password set on your backup (if any).                                                                                                                                 |

<figure><img src="../../.gitbook/assets/restore-from-backup.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Restore Portainer**. The restore might take a few moments. When it has finished, you will be redirected to the login page. You can now log in with your previous credentials and your previous configuration will be restored.

## Portainer support

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

In this section you will find settings related to troubleshooting your Portainer installation.

### Support bundle

This functionality allows you to collect information about your Portainer installation in a bundle that can then be provided to the Portainer support team to aid in troubleshooting issues. Personal information such as passwords and other sensitive credentials are removed from this bundle before being generated.

You can optionally choose to password protect the bundle by toggling on **Password Protect** and setting a password. If you do choose to set a password, ensure you provide the password to the Portainer support team when you supply the bundle.

<figure><img src="../../.gitbook/assets/2.25.0-settings-support-bundle.png" alt=""><figcaption></figcaption></figure>

Click **Download support bundle** to generate and download a .tar.gz file containing the bundle.

### Debug log

Toggle **Enable debug log** on to enable debug logging in the Portainer container logs. Debug logging can help with troubleshooting issues by providing a more verbose output.

<figure><img src="../../.gitbook/assets/2.25.0-settings-support-debug.png" alt=""><figcaption></figcaption></figure>

