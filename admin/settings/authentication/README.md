# Authentication

Portainer provides its own internal authentication mechanism, encrypting user passwords and storing them in the local Portainer database. Alternatively, external authentication providers are available. In this section, we explain how to authenticate via LDAP, Active Directory and OAuth.

{% hint style="info" %}
For all authentication types you can adjust the session lifetime (the time before users are forced to reauthenticate). The default is 8 hours.

Session lifetime changes apply only to new logins, existing sessions keep their original expiry.&#x20;

Expired sessions redirect to login without ending the upstream OAuth session.
{% endhint %}

When using internal authentication, an administrator can set the minimum length for users' passwords. The default is 12 characters, but this can be adjusted using the slider. Any users with passwords that don't meet the requirements will be asked to update their passwords when they next log in.

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication.png" alt=""><figcaption></figcaption></figure>

{% content-ref url="ldap.md" %}
[ldap.md](ldap.md)
{% endcontent-ref %}

{% content-ref url="active-directory.md" %}
[active-directory.md](active-directory.md)
{% endcontent-ref %}

{% content-ref url="oauth.md" %}
[oauth.md](oauth.md)
{% endcontent-ref %}



