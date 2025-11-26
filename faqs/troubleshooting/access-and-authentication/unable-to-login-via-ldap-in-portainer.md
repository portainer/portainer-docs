# Unable to Login via LDAP in Portainer

**Issue:**

Users encounter the following error in the Portainer logs when attempting to login via an LDAP user:

```
level=info msg="http error: Only initial admin is allowed to login without oauth (err=LDAP Result Code 49 \"Invalid Credentials\": 80090308: LdapErr: DSID-0C090511, comment: AcceptSecurityContext error, data 533, v4f7c\x00) (code=403)"
```

**Cause:**

This error occurs when the LDAP credentials configured in Portainer are no longer valid. It typically happens when the LDAP service account password has been changed or the account is no longer authorized.

**Resolution:**

To resolve this issue, follow these steps:

{% stepper %}
{% step %}
**Log in with a Local Portainer Admin Account**

Use a local Portainer admin account to access the Portainer web interface.
{% endstep %}

{% step %}
**Update LDAP Credentials**

&#x20;• Navigate to **Settings** > **Authentication** in the Portainer interface.

&#x20;• Update the **LDAP password** with the correct credentials for the LDAP account.
{% endstep %}

{% step %}
**Verify Connectivity**

&#x20;• Perform a **Connectivity Check** to confirm the LDAP configuration is valid.

&#x20;• Ensure the test passes before saving changes.
{% endstep %}

{% step %}
**Save Changes**

Save the updated settings and ensure that the connection is stable.<br>
{% endstep %}
{% endstepper %}
