# Add a Azure Container Instace Endpoint

Portainer CE allows you to deploy and manage apps in Azure Container Instances quickly and easily and like no other tool. There is no need to type commands in via CLI or go to Azure Portal to manage your containers; Portainer does it all. Simply deploy Portainer in an Azure container and manage it like any other node.

## Requirements

Before to connect to your Azure Subscription, you need to create an Azure AD Application. You can find information about how do it in this [link](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal).

## Adding an ACI Endpoint

To add an ACI Endpoint you will need the following information:

* Name: Choose a name to identify this endpoint.
* Application ID: This value is from the application you created in Azure.
* Tenant ID: You can get your tenant ID of Azure Subscription page
* Authentication ID: This value is from the process of Application creation in Azure.

Once you have this values, you can start to add an ACI Endpoint to Azure. 

First, go to <b>Endpoints</b> and do a click in <b>Add Endpoint</b>

![aci](assets/aci_1.png)

The following step is choose <b>Azure</b> and fill with the information about your Application and Azure Subscription. Once is all set. Do a click in <b>Add Endpoint</b> button.

![aci](assets/aci_2.png)

Is everything works as expected, you will the following pop up

![aci](assets/aci_3.png)

## Notes

Do you think that is missing something here? Contribute with this admin guide forking the repo [Portainer-Docs](https://github.com/portainer/portainer-docs) and propose changes.