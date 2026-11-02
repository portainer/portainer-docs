# Admin

The Admin section is visible only to administrators, meaning Portainer administrators. It holds **Getting started** and **Administration**, a submenu that opens on the Audit log and groups the install-wide pages by what you came to do: **Activity**, **Health**, **Delivery** and **Installation**. It contains these pages:

* **Getting started**: a setup checklist for new installations. Steps tick themselves off as you finish them, and you can mark one done yourself if it can't be detected. It opens when an administrator signs in until setup is complete or someone chooses **Don't show again**, which hides it for every administrator. **Skip for now** closes it for the current session. You can always reopen it from **Admin**.
* [**Cluster Readiness**](cluster-readiness.md): check environments for deployment prerequisites, install Sealed Secrets, and disable environments for self-service.
* [**Doctor**](doctor.md): on-demand checks for manifests that nothing deploys, with repairs.
* [**Helm Charts**](helm-charts.md): curate the Helm charts in the catalog, and choose which chart repositories developers may use.
* [**Audit log**](audit-log.md): every change made through Portainer-IDP, with who made it and from where.
* [**CI accounts**](../releasing-from-ci.md#ci-accounts) and [**Release accounts**](../releasing-from-ci.md#release-accounts): the credentials that let a CI pipeline release container images, under **Delivery**.
* [**Settings**](settings.md): the Edge Admin credential and other installation-wide settings.

Non-administrators don't see these pages in the navigation at all, and the backend checks the same role before acting. See [Roles and access control](../../architecture/roles.md).

{% hint style="info" %}
A Portainer administrator bypasses every access list in Portainer-IDP and sees every application, secret and deploy target.
{% endhint %}
