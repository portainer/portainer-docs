# Add an ACI environment

Before connecting to your Azure subscription, you need to create an Azure AD application. For more information please refer to [Microsoft's own documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

{% hint style="info" %}
The following ACI features are not currently supported:

* ACI persistent storage.
* Private networks.
{% endhint %}

From the menu select **Environments** then click **Add environment** and select **Azure** as the environment type.

![](../../../.gitbook/assets/2.9-environments-add-azure-1.gif)

Enter the details, using the table below as a guide.

| Field/Option      | Overview                                                          |
| ----------------- | ----------------------------------------------------------------- |
| Name              | Give the environment a descriptive name.                          |
| Application ID    | Take this value from the application you created in Azure.        |
| Tenant ID         | Use the same tenant ID as appears on the Azure subscription page. |
| Authentication ID | Take this value from the application creation process in Azure.   |

| Field/Option      | Overview                                                          |
| ----------------- | ----------------------------------------------------------------- |
| Name              | Give the environment a descriptive name.                          |
| Application ID    | Take this value from the application you created in Azure.        |
| Tenant ID         | Use the same tenant ID as appears on the Azure subscription page. |
| Authentication ID | Take this value from the application creation process in Azure.   |

![](../../../.gitbook/assets/endpoints-add-aci-2.png)

In the **Metadata** section, as an optional step you can categorize the environment by adding it to a [group](../groups.md) or  [tagging](../tags.md) it for better searchability.

![](../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When you're ready, click **Add environment**.
