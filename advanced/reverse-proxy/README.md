# Using Portainer with reverse proxies

When running Portainer behind a reverse proxy, several security behaviours can interact with your proxy configuration in ways that may not be immediately obvious. Review the sections below before deploying.

### Auth cookies and scheme detection

Portainer sets the `Secure` flag on authentication cookies when it believes the connection is using HTTPS. This is triggered when any of the following are true:

* Portainer itself is serving over TLS (`:9443`)
* The proxy sends an `X-Forwarded-Proto: https` or `Forwarded: proto=https` header
* The [Force secure cookies setting](../../admin/settings/general.md#force-secure-cookies) is enabled in Portainer

A `Secure` cookie is silently dropped by the browser if the browser-to-proxy connection is plain HTTP. This causes users to be immediately logged out or unable to log in, with a 401 response.

The proxy must make Portainer's view of the connection scheme match what the browser is actually using. If the browser connects to the proxy over HTTP, do not forward `X-Forwarded-Proto: https` to Portainer, and do not connect to Portainer over TLS unless you also upgrade the browser-facing connection to HTTPS.

{% hint style="info" %}
A common misconfiguration is a setup where the browser connects to the proxy over HTTP on port 80, but the proxy forwards to Portainer over HTTPS on port 9443. In this case, Portainer sets `Secure` cookies, the browser discards them, and login fails.&#x20;
{% endhint %}

### CSRF protection and host forwarding

CSRF protection is always enabled. Portainer validates incoming requests by comparing the `Origin` header to the `Host` header. If these don't match, the request is rejected with a 403.

When configuring your proxy, forward the full host as the browser sent it, including any non-standard port. In nginx, use `$http_host` rather than `$host`:

<pre class="language-nginx" data-title="nginx"><code class="lang-nginx"><strong>proxy_set_header Host $http_host;
</strong></code></pre>

If your public-facing origin cannot be inferred from the forwarded headers, for example, if the proxy rewrites the host, you can explicitly trust an origin using the `--trusted-origins` flag or the `TRUSTED_ORIGINS` environment variable:

```
--trusted-origins https://portainer.yourdomain.com
```

### Recommended forwarded headers

Set the following headers in your proxy configuration to ensure Portainer correctly detects the client IP and connection scheme:

```
X-Forwarded-For: <client-ip>
X-Forwarded-Proto: http   # or https, matching the browser-facing scheme
X-Real-IP: <client-ip>
Host: $http_host
```

### Content Security Policy

Portainer sends a `Content-Security-Policy` header by default (controlled by the `--csp` flag, which is on by default). This header includes `frame-ancestors 'none'`, which means:

* Portainer cannot be embedded in an iframe, for example, within a web portal or dashboard.
* Proxies that inject or rewrite page content (scripts, headers) will break the Portainer UI.

If you need to embed Portainer in a frame, you will need to disable or customise the CSP header by setting `--no-csp`.

{% hint style="warning" %}
Disabling CSP reduces your security posture. Only do this if your deployment specifically requires iframe embedding, and ensure other controls are in place.&#x20;
{% endhint %}

## Reverse proxy guides

We have guides to walk you through deploying Portainer behind a proxy for Traefik and nginx:

{% content-ref url="traefik.md" %}
[traefik.md](traefik.md)
{% endcontent-ref %}

{% content-ref url="nginx.md" %}
[nginx.md](nginx.md)
{% endcontent-ref %}

