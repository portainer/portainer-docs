# How can I switch back to internal authentication?

If you are able to log into Portainer as an administrator you can change your authentication method under Settings, [Authentication](../../../admin/settings/authentication/) and selecting Internal.

If you are unable to log into Portainer (for example if you have been locked out due to a external authentication / SSO misconfiguration) you can force using internal authentication by going to:

```
https://localhost:9443/#!/internal-auth
```

Replace https://localhost:9443 with the URL and port of your Portainer server. You can then log in as the initial administrator user you first set up when installing Portainer.

If you don't have the password for the initial administrator user, you can use our [password reset helper.](../../../advanced/reset-admin.md)
