# Can I use internal authentication and external authentication at the same time?

With Portainer you can choose whether to use the built-in authentication system **or** to use an external authentication provider (for example LDAP, Microsoft AD, or an OAuth provider) to validate your users. You cannot use both internal authentication and an external authentication provider at the same time.&#x20;

The exception to this is the initial admin user that was created when you first installed Portainer. This user is able to log in using internal authentication when an external authentication provider is enabled, and is intended as an emergency "break glass" method of accessing Portainer if you have issues with your external authentication provider or configuration. No other internal users, even those that are admins, will be able to log in using internal authentication when an external authentication provider is enabled.

When configuring an external authentication provider within Portainer, you can enable the **Hide internal authentication prompt** option to hide the internal authentication option from the login page. If you have done this and find yourself locked out, refer to [this knowledge base article](../troubleshooting/access-and-authentication/how-can-i-switch-back-to-internal-authentication.md).
