# Unable to Authenticate After Portainer Update

**Issue**

After updating Portainer, login attempts result in a 403 Forbidden error. The UI loads correctly, but authentication fails.

**Symptoms**

* Logging in returns “Unable to login” with no server-side logs.
* Browser console shows:

```
POST https://<your-domain>/portainer/api/auth 403 (Forbidden)
```

**Cause**

Portainer releases include security patches, including fixes for known CVEs. These changes invalidate existing authentication sessions server-side. However, the client (browser) may still store outdated tokens in cache or local storage, leading to failed authentication requests.

**Resolution**

Clear your browser cache and try logging in again.

**Alternative Workaround**

Open the Portainer login page in an incognito/private browsing window and attempt to log in from there.

**Technical Context**

Authentication tokens persisted in local storage or cookies can conflict with the updated server-side session handling introduced in this version. Since no auth request is successfully processed by the server, there are no related logs.
