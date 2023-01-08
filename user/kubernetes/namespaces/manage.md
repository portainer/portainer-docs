# Manage a namespace

From the menu select Namespaces then select the namespace you want to manage.

<figure><img src="../../../.gitbook/assets/2.15-k8s_kubernetes_namespaces_manage_namespace.gif" alt=""><figcaption></figcaption></figure>

Here you can view details about the namespace and configure options specific to the namespace.

## Quota

Toggle on **Resource assignment** to enable quotas for this namespace, then define the memory and CPU limits.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_create_namespace_resource_assignment (1).png" alt=""><figcaption></figcaption></figure>

## Load balancers

With this setting you can configure the amount of external load balancers that can be created in this namespace.&#x20;

{% hint style="info" %}
This option only appears when **Allow users to use external load balancer** is enabled in the [cluster setup](../cluster/setup.md#allow-users-to-use-external-load-balancer).
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespace_load_balancer.png" alt=""><figcaption></figcaption></figure>

## Storage

For each storage option available in the cluster, you can configure quotas for this namespace to limit usage.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespace_storage.png" alt=""><figcaption></figcaption></figure>

## Ingresses

This section lists the available ingresses and whether they can be used by this namespace. For each namespace you can toggle on **Allow users to use this ingress**, then configure the ingress hostname, route redirection and advanced settings as needed.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespaces_ingress.png" alt=""><figcaption></figcaption></figure>

## Summary

If you have made changes to the configuration, this section will list those changes.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespaces_summary.png" alt=""><figcaption></figcaption></figure>

## Actions

Once you have made the necessary changes, click **Update namespace**. Here you can also flag the namespace as a system namespace by clicking **Mark as system**.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_namespaces_manage_namespaces_actions.png" alt=""><figcaption></figcaption></figure>
