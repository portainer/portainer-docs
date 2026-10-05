# Admin

The Admin section is visible only to administrators, meaning Portainer administrators. It contains four pages:

* [**Cluster Readiness**](cluster-readiness.md): check environments for deployment prerequisites, install Sealed Secrets, and disable environments for self-service.
* [**Helm Charts**](helm-charts.md): curate the Helm charts in the catalog, and choose which chart repositories developers may use.
* [**Audit log**](audit-log.md): every change made through Portainer-IDP, with who made it and from where.
* [**Settings**](settings.md): the Edge Admin credential and other installation-wide settings.

Non-administrators don't see this section in the navigation at all, and the backend checks the same role before acting. See [Roles and access control](../../architecture/roles.md).

{% hint style="info" %}
A Portainer administrator bypasses every access list in Portainer-IDP and sees every application, secret and deploy target.
{% endhint %}
