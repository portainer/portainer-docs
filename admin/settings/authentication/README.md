# Authentication

Portainer provides its own internal authentication mechanism, encrypting user passwords and storing them in the local Portainer database. Alternatively, external authentication providers are available. In this section, we explain how to authenticate via LDAP, Active Directory and OAuth.

{% hint style="info" %}
For all authentication types you can adjust the session lifetime (the time before users are forced to reauthenticate). The default is 8 hours.
{% endhint %}

![](../../../.gitbook/assets/2.10-authentication-splash.png)

{% content-ref url="ldap.md" %}
[ldap.md](ldap.md)
{% endcontent-ref %}

{% content-ref url="active-directory.md" %}
[active-directory.md](active-directory.md)
{% endcontent-ref %}

{% content-ref url="oauth.md" %}
[oauth.md](oauth.md)
{% endcontent-ref %}



