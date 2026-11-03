# Welcome to Portainer-IDP

{% hint style="warning" %}
Portainer-IDP is in active development and is not currently intended for production use. Features may change without notice, and this documentation may not always reflect the latest updates.
{% endhint %}

Portainer-IDP is a self-service developer portal for Kubernetes that runs as a Portainer add-on. Developers deploy, watch and manage their own applications across many clusters at once, and platform teams decide where those applications may run, who may deploy them and what they may contain.

<a href="architecture/overview.md" class="button secondary" data-icon="buildings">Architecture</a><a href="requirements.md" class="button secondary" data-icon="clipboard-list-check">Requirements</a><a href="quick-start.md" class="button primary" data-icon="rocket-launch">Quick Start</a>

## Why Portainer-IDP exists

[Portainer's Edge Stacks](https://app.gitbook.com/s/MmwXfSb4bP3JyB8BLrAf/user/edge/stacks) are a strong way to deploy one application to a whole fleet of Kubernetes clusters from Git. They have one catch: deploying them needs the Edge Administrator role, and that role applies to every stack in the installation. There's no way to give a developer the right to deploy _their_ application to _their_ clusters without also giving them the rights to everyone else's.

So in practice, every deployment becomes a ticket to the platform team. The platform team becomes the bottleneck, developers wait, and nobody is happy with the arrangement.

Portainer-IDP removes that trade-off. It holds the edge access itself and puts its own access control in front of it: each application, secret, namespace and deploy target has its own access list. Developers deploy without being edge administrators, and without seeing each other's work. The platform team's role shifts from processing every deployment to setting the rules once: which clusters, which namespaces, which Git repositories, which Helm charts, and who may use them.

It's built for two groups of people:

* **Platform administrators**, who connect Git repositories, decide which clusters and namespaces teams can deploy to, curate the catalog, and control who can see and change what.
* **Developers**, who deploy applications and secrets into the places they have been given, follow their status, logs and metrics, and change, roll back or remove them.

## What Portainer-IDP does

From Portainer-IDP, a developer can:

* **Deploy an application** from a ready-made catalog template, a single container image, a Helm chart, a full Kubernetes form with live YAML preview, or manifests that already exist in another Git repository.
* **Deploy to many clusters at once.** A deploy target groups environments together, and one deployment lands on all of them.
* **Monitor, scale, restart, edit and roll back** everything they can access, with per-environment status, live logs and CPU and memory metrics.
* **Create secrets safely.** Values are encrypted in the browser as [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) before they are committed, so plaintext never reaches Git.

Underneath all of it, every deployment is a Kubernetes manifest committed to Git with the developer's own credentials, and deployed by Portainer as an Edge Stack. Git is the record of what's running and why, every change is a commit, and administrators can see who did what in the audit log.

## Where to go next

* New to Portainer-IDP? Start with [Requirements](requirements.md) and then [Quick Start](quick-start.md).
* Already running it? Jump to [Using Portainer-IDP](https://app.gitbook.com/s/EQDMEQ53IxZJXhaQq1Az/using-portainer-idp) to explore the interface, or [Architecture](architecture/overview.md) to understand how it fits together with Portainer.
