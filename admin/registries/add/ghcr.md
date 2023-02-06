# Add a Github registry

From the menu select **Registries** then click **Add registry** and select **Github** as the registry provider.

<figure><img src="../../../.gitbook/assets/2.17-registries-add-github.gif" alt=""><figcaption></figcaption></figure>

Complete the form, using the table below as a guide.

| Field/Option              | Overview                                                                                                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                      | Enter the name you'd like to use in Portainer for your registry.                                                                                                                  |
| Username                  | Enter the username you use to log into your Github registry.                                                                                                                      |
| Personal Access Token     | Enter the personal access token that corresponds to the username above. Your personal access token will need the `delete:packages`, `repo`, and `write:packages` scopes assigned. |
| Use organisation registry | Toggle this on if your registry is part of a Github organization.                                                                                                                 |
| Organisation name         | Enter the name of your Github organization.                                                                                                                                       |

<figure><img src="../../../.gitbook/assets/2.17-registries-add-ghcr-details.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
For more information about creating a personal access token, see [Github's own documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
{% endhint %}

When the form is complete, click **Add registry**.
