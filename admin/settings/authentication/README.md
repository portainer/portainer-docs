# Authentication

Portainer provides its own internal authentication mechanism, encrypting user passwords and storing them in the local Portainer database. Alternatively, external authentication providers are available. In this section, we explain how to authenticate via LDAP, Active Directory and OAuth.

{% hint style="info" %}
For all authentication types you can adjust the session lifetime \(the time before users are forced to reauthenticate\). The default is 8 hours.
{% endhint %}

{% hint style="info" %}
When you configure any external authentication method in Portainer Business Edition, Portainer will create user\(s\) automatically with the standard user role. This can be disabled when setting up your external authentication provider. If automatic user creation is disabled, users must be created beforehand in Portainer in order to log in.
{% endhint %}

{% page-ref page="ldap.md" %}

{% page-ref page="active-directory.md" %}

{% page-ref page="oauth.md" %}





