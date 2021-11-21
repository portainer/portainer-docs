# Add a Quay.io registry

From the menu select **Registries** then click **Add registry** and select **Quay.io** as the registry provider.

![](../../../.gitbook/assets/registries-add-quay-1.gif)

Complete the form, using the table below as a guide.

| Field/Option              | Overview                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| Username                  | Enter the username you use to connect to your Quay.io registry.                                    |
| Password                  | Enter the password that corresponds to the username above.                                         |
| Use organisation registry | Toggle on if you need to specify the organization to use when connecting to your Quay.io registry. |

![](../../../.gitbook/assets/registries-add-quay-2.png)

When the form is complete, click **Add registry**.

{% hint style="warning" %}
Simply adding a registry will not make that registry available to non-administrator users. Once you have added the registry to Portainer, you will need to add access to the registry within [Host](../../../user/docker/host/registries.md) / [Swarm](../../../user/docker/swarm/registries.md) / [Cluster](../../../user/kubernetes/cluster/registries.md) for each environment that needs access.
{% endhint %}
