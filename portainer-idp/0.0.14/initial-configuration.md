# Initial configuration

If you have completed the [Quick Start](quick-start.md), Portainer-IDP is installed and has its Edge Admin credential. Before developers can deploy, an administrator needs to set up a few things: who gets which role, which repository manifests are committed to, and which clusters and namespaces teams may deploy into.

Everything in Portainer-IDP is set up in this order, and each step needs the one before it:

{% stepper %}
{% step %}
## Git target

A repository Portainer can read.
{% endstep %}

{% step %}
## Deploy target

A group of environments, plus a branch and folder in that repository.
{% endstep %}

{% step %}
## Applications

Deployed into a namespace on a deploy target.
{% endstep %}
{% endstepper %}

## In Portainer

The following steps are completed within Portainer itself, as an administrator.

{% stepper %}
{% step %}
## Set up users and teams

Portainer-IDP shares Portainer's [authentication](https://docs.portainer.io/admin/settings/authentication), so anyone who uses it needs a Portainer account. Give developers ordinary Portainer accounts. They do **not** need edge rights; Portainer-IDP deploys on their behalf.

Grouping people into [Teams](https://docs.portainer.io/admin/user/teams) makes the rest easier, because Portainer-IDP's access lists accept teams as well as users.

{% hint style="warning" %}
Keep Portainer's Edge Administrator role for administrators and Portainer-IDP's own account. Anyone with edge rights in Portainer can use Portainer's Edge Stack API directly, and Portainer-IDP's access lists don't bind them there.
{% endhint %}
{% endstep %}

{% step %}
## Assign environment roles

Each user's role in Portainer-IDP comes from the environment roles you assign in Portainer, to the user or one of their teams, on each Kubernetes environment or its environment group. For example, an Operator in Portainer is a Limited Operator in Portainer-IDP, who can scale, restart and roll back but not deploy.

See [Roles and access control](architecture/roles.md) for the full mapping.
{% endstep %}
{% endstepper %}

## In Portainer-IDP

The following steps are performed in Portainer-IDP as an administrator.

{% stepper %}
{% step %}
## Set your Git commit identity

Everyone who deploys needs a Git commit identity, including administrators. It's the personal access token Portainer-IDP commits manifests with, so commits are made as you. Open the account menu, choose **Settings**, and fill in your provider, username and token. See [Git commit identity](using-portainer-idp/git-commit-identity.md).
{% endstep %}

{% step %}
## Check your clusters

Open **Admin** > **Cluster Readiness**. It checks each environment for an ingress controller, load balancer support, a default storage class, healthy nodes and GPUs, and whether Sealed Secrets is installed. Fix what it reports before developers deploy.

While you're here, install Sealed Secrets on each environment that will hold secrets. The first time you do, you'll be asked where system applications live in Git. See [Cluster Readiness](using-portainer-idp/admin/cluster-readiness.md).

{% hint style="info" %}
Use **Disable** on an environment to stop it being added to deploy targets, for example while it's being repaired.
{% endhint %}
{% endstep %}

{% step %}
## Create a Git target

Open **Git Targets** and choose **Add Git Target**. Enter the repository URL and provider, give Portainer read access, and turn on **Shared with everyone** so developers can use it. Choose **Test connection**, then **Add Git Target**.

See [Git Targets](using-portainer-idp/git-targets.md) for the details.
{% endstep %}

{% step %}
## Create deploy targets

Open **Deploy Targets** and choose **New deploy target**. Give it a name developers will recognize, such as `production-eu`, pick its environments, choose the Git target, branch and folder its manifests live in, and add a namespace for each team.

On each namespace, add the people or teams who may deploy into it under **Who may use it**. That also shows them the deploy target and lets them deploy onto it, into that namespace only.

See [Deploy Targets](initial-configuration.md#deploy-target) for the details.
{% endstep %}

{% step %}
## Set a base domain

If applications should get their own hostnames, open the deploy target's **Ingress** tab and set a **Base domain**, with wildcard DNS pointing at the cluster. A catalog application called `myapp` on a target with the base domain `apps.example.com` is then reachable at `myapp.apps.example.com`. Without a base domain, applications are exposed on a NodePort.
{% endstep %}

{% step %}
## Invite developers

Ask everyone to set their [Git commit identity](using-portainer-idp/git-commit-identity.md), then point them at [Deploy](using-portainer-idp/deploy.md).
{% endstep %}
{% endstepper %}

## Optional configuration

* **Curate Helm charts.** Choose which chart repositories developers may use, and add pinned charts to the catalog with locked values. See [Helm Charts](using-portainer-idp/admin/helm-charts.md).
* **Allow source hosts.** Choose which Git hosts Source Deploy may read public repositories from. See [Settings](using-portainer-idp/admin/settings.md).
