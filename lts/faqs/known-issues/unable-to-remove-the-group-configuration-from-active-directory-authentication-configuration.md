# Unable to remove the Group Configuration from Active Directory authentication configuration

{% hint style="info" %}
**Affected versions:** 2.14.0 to 2.16.2

**Fixed in:** 2.17.0 and above
{% endhint %}

#### Issue Description

Users are unable to remove the Group Configuration from the Active Directory authentication after the configuration has been saved.

#### Cause

This issue is the result of a bug not allowing the Group Configuration fields to be edited after saving the configuration. The fields are static and greyed out.

#### Fix

Update Portainer to 2.17.0 or above.

#### Workaround

Use LDAP or Custom Authentication.
