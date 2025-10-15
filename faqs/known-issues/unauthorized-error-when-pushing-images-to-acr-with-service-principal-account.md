# "Unauthorized" error when pushing images to ACR with Service Principal account

{% hint style="info" %}
**Affected versions:** 2.13.0 and above

**Fixed in:** Upcoming release
{% endhint %}

#### Issue Description

Users are unable to push images to the Azure Container Registry.  The following error appears:

```
`Unauthorized: authentication required, visit  for more information."},"error":"unauthorized: authentication required, visit  for more information."}`
```

#### Cause

This issue is the result of using Service Principal accounts in the Azure Container Registry configuration in Portainer.

#### Workaround

You will need to configure your Azure Container Registry using the Access Key (Admin) account.
