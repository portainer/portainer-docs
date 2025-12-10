---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/bTMBgpWwhtAF08xfMYTs/user/kubernetes/applications/inspect-helm
---

# Inspect a Helm application

To view information about Helm applications running in a cluster, from the menu select **Applications** then select the Helm application you want to inspect.

<figure><img src="../../../.gitbook/assets/2.35-view-k8-app.gif" alt=""><figcaption></figcaption></figure>

You will be shown details about the Helm application including the name, namespace, revision, chart used for the deployment, the chart source, the application version, the chart version, and the last deployment date. You'll also find buttons to [edit or upgrade](inspect-helm.md#upgrading), roll back or uninstall your Helm deployment.

If your Helm application was deployed using a Git repository, you will also see details of the repo, ref, the commit hash, and if auto-update is on or off. If there is a new chart version available in the Git repo, an **Out of sync** label will be shown. Click on this label to sync the deployment with the repository.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-details.png" alt=""><figcaption></figcaption></figure>

## Revisions

On the right side of the page you will also see a list of revisions for your Helm deployment.

{% hint style="info" %}
On smaller displays the revisions list is hidden by default - click the View revisions link to display them.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.30-kubernetes-helm-revisions-list.png" alt=""><figcaption></figcaption></figure>

Revisions can be used to roll back your deployment to a previous state if something goes wrong. To rollback to a specific revision, select the revision from the sidebar and then click the **Rollback** button.

## Deployment details

You will also see five tabs that provide additional information about your Helm deployment: [Resources](inspect-helm.md#resources), [Events](inspect-helm.md#events), [Values](inspect-helm.md#values), [Manifest](inspect-helm.md#manifest) and [Notes](inspect-helm.md#notes).

### Resources

The **Resources** tab displays information about the resources that make up your Helm deployment. The items listed here will vary depending on the contents of your Helm chart. The **Name**, **Resource type**, **Status**, **Status message** and **Actions** are shown for each resource.

{% hint style="info" %}
Only resources currently in the cluster will be displayed on this tab.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-resources-view.png" alt=""><figcaption></figcaption></figure>

Click on the name of select resource types (such as Deployments and Pods) to [view details of that specific resource](inspect.md). Clicking the **Describe** link for a resource will display a raw description of the resource in a popup window.

<figure><img src="../../../.gitbook/assets/2.29-kubernetes-applications-inspect-helm-resource-describe.png" alt=""><figcaption></figcaption></figure>

### Events

The **Events** tab lists the events related to the deployment of this application. Events listed here are relative to the events TTL setting on the underlying Kubernetes environment, so will disappear after some time.

{% hint style="info" %}
Only events for resources currently in the cluster will be displayed on this tab.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-events-view.png" alt=""><figcaption></figcaption></figure>

### Values

The **Values** tab shows the raw values set on the deployment. By default the **View** option is selected which shows the currently deployed values, but choosing **Diff with previous** or **Diff with specific revision** (and specifying a revision) lets you compare the currently deployed values with those of a previous revision. You can check the **User defined only** option to display only those options explicitly specified by the chart, or untick it to show all values including globally set options.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-values-view.png" alt=""><figcaption></figcaption></figure>

If your Helm application was deployed from **Git**, the **Values** tab will display an **Out of sync** tag when the user-defined values in the Git source do not match those of the current release.

Selecting **Diff with git** lets you compare the values in the deployed release with the latest values from the Git repository.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-values-view-git-diff.png" alt=""><figcaption></figcaption></figure>

### Manifest

The **Manifest** tab displays the raw manifest used to deploy the Helm chart. By default the **View** option is selected which shows the currently deployed manifest, but choosing **Diff with previous** or **Diff with specific revision** (and specifying a revision) lets you compare the currently deployed manifest with that of a previous revision.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-manifest-view.png" alt=""><figcaption></figcaption></figure>

If your Helm application was deployed from **Git**, you will also see a **Diff with git** option. This lets you compare the manifest in the deployed release with the latest manifest from the Git repository.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-manifest-git-diff.png" alt=""><figcaption></figcaption></figure>

### Notes

The **Notes** tab displays any notes that were attached to the Helm chart when it was deployed. By default the **View** option is selected which shows the currently deployed notes, but choosing **Diff with previous** or **Diff with specific revision** (and specifying a revision) lets you compare the currently deployed notes with those of a previous revision.

<figure><img src="../../../.gitbook/assets/2.35-kubernetes-applications-inspect-helm-notes-view.png" alt=""><figcaption></figcaption></figure>
