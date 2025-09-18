# Add a Gitlab registry

From the menu select **Registries** then click **Add registry** and select **Gitlab** as the registry provider.

<figure><img src="../../../.gitbook/assets/2.15-settings-registries-add-gitlab.gif" alt=""><figcaption></figcaption></figure>

Complete the form, using the table below as a guide.

| Field/Option                   | Overview                                                                                                                                                         |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username                       | Enter the username you use to log into your Gitlab registry.                                                                                                     |
| Personal Access Token          | Enter the personal access token that corresponds to the username above. Your personal access token will need the `read_api` and `read_registry` scopes assigned. |
| Override default configuration | If you need to make changes to the Portainer defaults for Gitlab, you can do so here.                                                                            |

<figure><img src="../../../.gitbook/assets/2.15-settings-registries-add-gitlab-details.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
For more information about creating a personal access token, see [Gitlab's own documentation](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html).
{% endhint %}

When the form is complete, click **Add registry**.
