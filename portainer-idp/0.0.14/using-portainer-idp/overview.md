# Overview

Portainer-IDP's navigation is organized into four areas: **Main**, **Deploy**, **Admin** (visible to administrators only), and **Help**. Items you mark as favorites appear in their own **Favorites** section at the top.

* **Main**
  * [**Applications**](applications.md): the page you land on. Status, logs, metrics, revisions, and controls for every application you can see.
  * **Catalog**: ready-made templates and Helm charts. See [Deploy](deploy.md#catalog).
  * [**Secrets**](secrets.md): Kubernetes Secrets, sealed in your browser before they're committed to Git.
  * [**Git Targets**](git-targets.md): the repositories manifests are stored in.
  * [**Deploy Targets**](deploy-targets.md): the groups of environments and namespaces applications are deployed to.
* [**Deploy**](deploy.md): Simple Deploy, Helm Chart, Source Deploy, and Application Builder.
* [**Admin**](admin/): visible only to administrators.
  * [Cluster Readiness](admin/cluster-readiness.md): environment health checks, Sealed Secrets, and enable or disable controls.
  * [Helm Charts](admin/helm-charts.md): the curated Helm catalog and the chart hosts developers may use.
  * [Audit log](admin/audit-log.md): every change made through Portainer-IDP, and who made it.
  * [Settings](admin/settings.md): the Edge Admin credential and other installation-wide settings.
* **Help** > **Documentation**: this documentation, built into the product.

Your own [Git commit identity](git-commit-identity.md) is under **Settings** in the account menu, which also shows your role as a badge.

## Search and favorites

Press `Ctrl`+`K` (`⌘`+`K` on a Mac) from anywhere to search applications, secrets, and deploy targets, or jump to any page.

Use the star in the header of an application, application group, secret, or deploy target to add it to **Favorites**. Favorites are saved in your browser, per Portainer user, and disappear when the item is deleted or you lose access to it.

## What determines what you see

Two things decide what you can do in Portainer-IDP, and you need both:

* **Your role**, which comes from your environment roles in Portainer, limits the kinds of actions you can take anywhere. Buttons your role doesn't allow are disabled, with a tooltip saying why.
* **Access lists** on each application, secret, namespace, and deploy target decide which objects you can take those actions on. Anything you have no access to doesn't appear at all.

See [Roles and access control](../architecture/roles.md) for the full picture.
