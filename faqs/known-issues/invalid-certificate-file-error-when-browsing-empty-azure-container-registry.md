# "Invalid certificate file" error when browsing empty Azure Container Registry

{% hint style="info" %}
**Affected versions:** 2.13.0 to 2.17.1

**Fixed in:** 2.18.1 and above
{% endhint %}

#### Issue Description

Users are unable to browse the Azure Container Registry. The following error will appear:

```
Invalid certificate file. Ensure that the file is uploaded correctly
```

#### Cause

This issue is the result attempting to browse an empty Azure Container Registry.

#### Fix

Upgrade Portainer to 2.18.1 or above.

#### Workaround

Users will need to manually create create a repository in the Azure Container Registry and while logged in with the Access Key in Portainer, push an image. Users can then navigate back to the Registry and browse.
