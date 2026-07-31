# Add-ons are unavailable because the local Kubernetes environment is missing

#### Issue Description

[Add-ons](../../admin/add-ons/) are only available on when Portainer Server is installed on a Kubernetes environment. Portainer determines whether an install qualifies by checking for a local Kubernetes environment. If this environment doesn't exist, add-ons are gated, even if every other environment in your instance is Kubernetes.

If you have deleted your local Kubernetes environment, add-ons will remain unavailable until the local environment is recreated.

#### Workaround

{% hint style="warning" %}
[Back up](../../admin/settings/general.md#back-up-portainer) your Portainer instance first.
{% endhint %}

As a workaround, you can recreate the local environment using the API.&#x20;

Send a request to the `/api/endpoints` endpoint, specifying `EndpointCreationType=5` (Local Kubernetes). Replace `$PORTAINER_URL` and `$ADMIN_TOKEN` with your Portainer URL and an administrator [API token](../../api/access.md#creating-an-access-token) respectively.

{% code title="" %}
```
curl -sf -X POST "$PORTAINER_URL/api/endpoints" \
  -H "X-API-Key: $ADMIN_TOKEN" \
  -F "Name=local" \
  -F "EndpointCreationType=5"
```
{% endcode %}

The name you give the environment doesn't matter. Portainer only checks the environment type, so you can name it anything you like. If you already have an environment named `local` (for example, a leftover Docker environment), consider giving the new environment a different name to avoid confusion.\
\
Once you've recreated the local Kubernetes environment, add-ons should be available to install.
