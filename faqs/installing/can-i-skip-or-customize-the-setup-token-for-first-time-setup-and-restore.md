# Can I skip or customize the setup token for first-time setup and restore?

From version 2.43, new Portainer instances require a setup token to complete first-time setup. The token only applies to brand-new instances with no administrator account. Existing deployments are unaffected.

If the default behavior doesn't suit your deployment, you have a few options. Run one of the following on your initial Portainer installation:

`--setup-token <value>` - supply your own token instead of the auto-generated one. Useful for scripted or automated setup.

`--no-setup-token` - disables the token requirement entirely. Only use this when the instance runs on a network you fully control and trust, such as an isolated private or air-gapped network.

`--admin-password` / `--admin-password-file` - pre-set the administrator password at startup. No token is generated or required. This is the recommended approach for managed or marketplace installs where you may not have direct access to the server logs.
