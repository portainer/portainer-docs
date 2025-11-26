# Manage a namespace

From the menu select **Namespaces** then select the namespace you want to manage.

<figure><img src="../../../.gitbook/assets/2.20-namespaces-manage.gif" alt=""><figcaption></figcaption></figure>

Here you can view details about the namespace and configure options specific to the namespace.

## Resource Quota

Toggle on **Resource assignment** to enable quotas for this namespace, then define the memory and CPU limits. The current resource reservation and usage for the namespace will be displayed when a limit is set.

<figure><img src="../../../.gitbook/assets/2.25-kubernetes-namespaces-manage-resourcequota.png" alt=""><figcaption></figcaption></figure>

## Load balancers

With this setting you can configure the amount of external load balancers that can be created in this namespace.&#x20;

{% hint style="info" %}
This option only appears when **Allow users to use external load balancer** is enabled in the [cluster setup](../cluster/setup.md#allow-users-to-use-external-load-balancer).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.17-k8s-namespaces-manage-loadbalancer.png" alt=""><figcaption></figcaption></figure>

## Networking

This section lets you define which ingress controllers are allowed to be used to publish applications within this namespace. Check the boxes next to the ingresses you want to allow and click **Allow selected**, or click **Disallow selected** to disallow their use in this namespace.

{% hint style="info" %}
This section is only visible when **Configure ingress controller availability per namespace** is enabled in the [Cluster Setup](../cluster/setup.md#networking-ingresses).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.20-namespaces-add-ingress.png" alt=""><figcaption></figcaption></figure>

## Registries

You can define the registries that are available within this namespace in this section. Select the registries from the **Select registries** dropdown to allow access.

<figure><img src="../../../.gitbook/assets/2.18-k8s-namespaces-add-registries.png" alt=""><figcaption></figcaption></figure>

## Storage

For each storage option available in the cluster, you can configure quotas for this namespace to limit usage.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespace_storage.png" alt=""><figcaption></figcaption></figure>

## Summary

If you have made changes to the configuration, this section will list those changes.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespaces_summary.png" alt=""><figcaption></figcaption></figure>

## Actions

Once you have made the necessary changes, click **Update namespace**. Here you can also flag the namespace as a system namespace by clicking **Mark as system**.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespaces_actions.png" alt=""><figcaption></figcaption></figure>
