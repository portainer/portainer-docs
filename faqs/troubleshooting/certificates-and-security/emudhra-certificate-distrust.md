# eMudhra certificate distrust in Portainer 2.45.3 LTS

Portainer 2.45.3 LTS no longer trusts TLS certificates issued by eMudhra (emSign). Most customers are not affected. If any service Portainer connects to uses an eMudhra or emSign certificate, that connection will fail after you upgrade, and the certificate needs to be reissued by another certificate authority.

{% hint style="warning" %}
**Before you upgrade:** check the certificates of your identity providers (OAuth/OIDC, LDAPS), registries, Git hosts, and Kubernetes and Docker endpoints. If your single sign-on or LDAP provider uses an affected certificate, users other than the initial admin will not be able to sign in after the upgrade.
{% endhint %}

### What happened? <a href="#what-happened" id="what-happened"></a>

Eight intermediate certificate authority (CA) certificates from eMudhra (emSign) were found to have compromised private keys. This is tracked as CVE-2026-111943.

Anyone can calculate the private keys for these intermediates, so anyone can forge a certificate that chains through them. Chrome, Apple and Microsoft already block these intermediates, and Go 1.26.10 now blocks them too.

### What has changed in Portainer 2.45.3? <a href="#what-has-changed-in-portainer-2453" id="what-has-changed-in-portainer-2453"></a>

Portainer 2.45.3 makes two changes that stop it trusting these certificates:

1. **The emSign root certificates are removed from the CA bundle** in Portainer's Linux images. Certificates that chain to an emSign root are no longer trusted.
2. **Portainer is built with Go 1.26.10**, which rejects any certificate chain that contains one of the eight compromised intermediates. This applies even when the chain ends at a root you trust, for example a root added through a custom CA bundle.

This applies to the Portainer Server (Business and Community Edition), the Portainer Agent, the Portainer updater and the compose unpacker. Because all four emSign roots are removed from the Linux images, any certificate that chains to an emSign root is no longer trusted there, not only those issued through the compromised intermediates.

### Am I affected? <a href="#am-i-affected" id="am-i-affected"></a>

You are affected only if a service Portainer connects to presents a certificate issued by eMudhra (emSign). Connections that could be affected include:

* Identity providers: OAuth/OIDC and LDAPS
* Container registries
* Git hosts used for stacks and GitOps
* Webhooks
* Kubernetes and Docker API endpoints
* Client certificates (mTLS), where Portainer is configured to verify them

**LDAPS:** Portainer checks LDAPS certificates against the CA file you upload in the LDAP settings, not the image's CA bundle. LDAPS is only affected if that CA file contains an emSign root.

**Connections with TLS verification turned off** (skip TLS verification) are not affected.

### Could my users be locked out? <a href="#could-my-users-be-locked-out" id="could-my-users-be-locked-out"></a>

Yes, if your OAuth/OIDC or LDAP provider presents an affected certificate. In that case, every user except the initial admin will be unable to sign in after the upgrade, including other administrators with internal passwords.

The initial admin account (the first admin created when Portainer was set up) can always sign in with its internal password, whichever authentication method is configured.

### What error will I see? <a href="#what-error-will-i-see" id="what-error-will-i-see"></a>

Affected connections fail with a certificate error. Neither message mentions eMudhra, and both can also be caused by other certificate problems, so check the certificate chain with the command above.

| Error                                                                              | When you see it                                                                                       |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `tls: failed to verify certificate: x509: certificate signed by unknown authority` | Most cases, using Portainer's built-in CA bundle                                                      |
| `tls: failed to verify certificate: x509: no valid chains built`                   | The chain ends at a root you still trust, for example one in a custom CA bundle or your LDAPS CA file |

**Single sign-on and LDAP errors may not show the cause.** OAuth sign-in shows `Unable to authenticate through OAuth`, and in Business Edition, an LDAP connection check shows `Failed to create LDAP connection: there is no valid connection`. To see the certificate error, set the Portainer Server log level to `DEBUG` and check the server logs.

### How do I fix an affected connection? <a href="#how-do-i-fix-an-affected-connection" id="how-do-i-fix-an-affected-connection"></a>

Have the service's certificate reissued by a certificate authority other than eMudhra (emSign). Once the service presents the new certificate, the connection works again with no change needed in Portainer.

### Can I turn this check off? <a href="#can-i-turn-this-check-off" id="can-i-turn-this-check-off"></a>

No. The check is built into Go and Portainer has no setting to bypass it. We do not recommend staying on Portainer 2.45.2 or earlier to avoid it: those versions also lack the other security fixes in 2.45.3, and certificates issued through the compromised intermediates can be forged.

### What about Windows images? <a href="#what-about-windows-images" id="what-about-windows-images"></a>

The Go 1.26.10 check applies on Windows too, so Portainer on Windows rejects chains that contain the compromised intermediates. Windows images use the Windows certificate store rather than Portainer's CA bundle, so whether other emSign certificates are trusted depends on Microsoft's root store.

### Will there be further updates? <a href="#will-there-be-further-updates" id="will-there-be-further-updates"></a>

We will keep monitoring for upstream changes, including new kubectl and helm releases, and will release patches as they become available.

### References <a href="#references" id="references"></a>

* Go issues: [#82345](https://github.com/golang/go/issues/82345), [#82348](https://github.com/golang/go/issues/82348), [#82349](https://github.com/golang/go/issues/82349)
* [Mozilla bug 2083449](https://bugzilla.mozilla.org/show_bug.cgi?id=2083449)
* [Go release history](https://go.dev/doc/devel/release)
* [Portainer 2.45.3 LTS release notes](../../../release-notes.md#release-2.45.2-lts)
