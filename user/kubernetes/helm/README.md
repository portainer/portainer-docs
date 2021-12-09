# Helm

Portainer CE 2.9 introduces support for [Helm](https://helm.sh), the most popular packaging system for Kubernetes applications. With Helm you can deploy applications based on pre-prepared charts, either self-made or supplied by third-party repositories.

{% hint style="info" %}
Helm support in Portainer is still in its early stages, and more functionality will be added soon. If there is specific functionality you'd like to see in a future release, [let us know](../../../contribute/contribute.md).
{% endhint %}

## Adding additional repositories

By default, Portainer ships with the [Bitnami Helm chart repository](https://bitnami.com/stacks/helm) already pre-configured. If you would like to add an additional third-party repo, enter the repository URL then click **Add repository**.

![](../../../.gitbook/assets/k8s-helm-2.png)

## Changing the pre-configured global repository

You can [change the pre-configured global Helm repository](../../../admin/settings/#helm-repository) if required. If you do not have a global Helm repository configured, a warning will be displayed on this page.

![](../../../.gitbook/assets/2.11-helm-global-repo-warning.png)

## Deploying applications from Helm charts

From the **Charts** section you can deploy an application from the Helm charts provided by the repositories you have configured. The list of charts can be filtered by category and is searchable.

![](../../../.gitbook/assets/k8s-helm-3.png)



{% content-ref url="deploy.md" %}
[deploy.md](deploy.md)
{% endcontent-ref %}
