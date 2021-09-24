# Manage a namespace

From the menu select Namespaces then select the namespace you want to manage.

![](../../../.gitbook/assets/2.9-namespaces-manage-1.gif)

Here you can view details about the namespace and configure options specific to the namespace.

## Quota

Toggle on **Resource assignment** to enable quotas for this namespace, then define the memory and CPU limits.

![](../../../.gitbook/assets/2.9-namespaces-manage-2.png)

## Load balancers

{% hint style="info" %}
This feature is only available in Portainer Business Edition.
{% endhint %}

With this setting you can configure the amount of external load balancers that can be created in this namespace. 

![](../../../.gitbook/assets/2.9-namespaces-manage-3.png)

## Ingresses

This section lists the available ingresses and whether they can be used by this namespace. For each namespace you can toggle on **Allow users to use this ingress**, then configure the ingress hostname, route redirection and advanced settings as needed.

![](../../../.gitbook/assets/2.9-namespaces-manage-4.png)

## Registries

Define which [registries](../cluster/registries.md) are available to this namespace. Select registries you want to make enable in the **Select registries** dropdown.

![](../../../.gitbook/assets/2.9-namespaces-manage-5.png)

## Storage

{% hint style="info" %}
This feature is only available in Portainer Business Edition.
{% endhint %}

For each storage option available in the cluster, you can configure quotas for this namespace to limit usage.

![](../../../.gitbook/assets/2.9-namespaces-manage-6.png)

## Summary

If you have made changes to the configuration, this section will list those changes.

![](../../../.gitbook/assets/2.9-namespaces-manage-7.png)

## Actions

Once you have made the necessary changes, click **Update namespace**. Here you can also flag the namespace as a system namespace by clicking **Mark as system**.

![](../../../.gitbook/assets/2.9-namespaces-manage-8.png)

