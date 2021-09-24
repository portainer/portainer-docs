# Add an ACI endpoint

Before connecting to your Azure subscription, you need to create an Azure AD application. For more information please refer to [Microsoft's own documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

{% hint style="info" %}
The following ACI features are not currently supported:

* ACI persistent storage.
* Private networks.
{% endhint %}

From the menu select **Endpoints** then click **Add endpoint** and select **Azure** as the environment type.

![](../../../.gitbook/assets/endpoints-add-azure-1.gif)

Enter the details, using the table below as a guide.

| Field/Option | Overview |
| :--- | :--- |
| Name | Give the endpoint a descriptive name. |
| Application ID | Take this value from the application you created in Azure. |
| Tenant ID | Use the same tenant ID as appears on the Azure subscription page. |
| Authentication ID | Take this value from the application creation process in Azure. |

![](../../../.gitbook/assets/endpoints-add-aci-2.png)

In the **Metadata** section, as an optional step you can categorize the endpoint by adding it to a [group](../groups.md) or  [tagging](../tags.md) it for better searchability.

![](../../../.gitbook/assets/install-agent-swarm-linux-4.png)

When you're ready, click **Add endpoint**.

