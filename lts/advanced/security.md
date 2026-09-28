# Security and compliance

Portainer runs exclusively on your servers, within your network, behind your own firewalls. We do not host any of your infrastructure, so we hold no SOC or PCI/DSS compliance of our own. You can run Portainer completely disconnected (air-gapped) with no loss of functionality.

Portainer collects no behavioural product analytics. Business Edition instances send basic installation and licensing metadata to our licensing service to administer your license - not to track usage - and this is not sent by Community Edition or by air-gapped instances. We comply with GDPR in relation to this data. See also our [privacy policy](https://www.portainer.io/legal/privacy-policy).

We scan our published container images for known vulnerabilities as part of our release process, and we act on issues reported through the responsible-disclosure process at the end of this page.

### **Our security model** <a href="#id-12d3c979-39ea-4cb5-a6ed-0af99a430878" id="id-12d3c979-39ea-4cb5-a6ed-0af99a430878"></a>

Portainer is a management plane in front of Docker, Swarm, and Kubernetes. We operate a **shared-responsibility model**, and the line between the two sides is what defines a vulnerability:

* **Portainer's responsibility - our controls work as documented.** Every request is checked against your access rules and governance policies before it proceeds, including requests Portainer proxies to the Docker and Kubernetes APIs on a caller's behalf. A request that should be denied but is allowed through is a defect in Portainer, and we fix it as a vulnerability.
* **Your responsibility - configuration and exposure.** You own the roles and policies you define, how permissive you leave those settings, and whether and how you expose Portainer to the network. Within the access you grant, Portainer does not restrict what Docker or Kubernetes themselves allow an authorized user to do.

### **Working as intended** <a href="#d75091b4-a9f3-4e2e-a694-79f356e1139b" id="d75091b4-a9f3-4e2e-a694-79f356e1139b"></a>

The following are features behaving as designed, not vulnerabilities to patch. Each is resolved by the operator, not by a code change:

* An authorized user exercising a capability Docker or Kubernetes grants, where the relevant security setting or hardening control was left permissive. The fix is to tighten the setting.
* Risk from skipped hardening on an exposed instance - plaintext HTTP, no reverse proxy or VPN, no identity provider or MFA, over-long sessions. See the hardening guidance below.
* An unpatched image you did not update.
* A user doing what the rights you granted permit.
* Findings that require host or root access to the Portainer server itself - an attacker at that level has already defeated the deployment boundary.

The test in every case: does the report demonstrate a bypass of a Portainer control - not merely that Docker, Kubernetes, or a permissive setting allows powerful behaviour? If you are unsure which side of the line a finding falls on, report it anyway.

### **Hardening and exposing Portainer safely** <a href="#id-74798368-63bb-4b7b-9022-ecab060c5030" id="id-74798368-63bb-4b7b-9022-ecab060c5030"></a>

Running Portainer securely - especially if you expose it - combines Portainer's own settings with standard deployment practice. Start here:

* [Using your own SSL certificate](ssl.md) and [deploying behind a reverse proxy](reverse-proxy/) - serve HTTPS, disable plain HTTP, and set trusted origins.
* [The Portainer Edge Agent](edge-agent.md) and [using mTLS](mtls.md) - prefer outbound Edge connectivity and mutual TLS for anything internet-facing.
* [Access control](access-control.md), [Docker roles and permissions](docker-roles-and-permissions.md), and [Kubernetes roles and bindings](kubernetes-roles-and-bindings.md) - grant least privilege and tighten the per-environment security settings.
* [Encrypting the Portainer database](db-encryption.md)  protect API keys, agent secrets, and stored credentials at rest.
* [Streaming auth and activity logs to a SIEM](siem.md) - watch for repeated authentication failures and unexpected activity.
* [CLI configuration options](cli.md) - the flags behind all of the above.

For the architecture behind this model, see the [Portainer architecture guide](https://architecture.portainer.io/).

### **Reporting a vulnerability** <a href="#id-25a5037b-f7dc-4189-abb5-07decfd426c5" id="id-25a5037b-f7dc-4189-abb5-07decfd426c5"></a>

For details on reporting a Portainer vulnerability, see the FAQ [How do I report a security vulnerability?](https://docs.portainer.io/faqs/contributing/how-do-i-report-a-security-vulnerability)

