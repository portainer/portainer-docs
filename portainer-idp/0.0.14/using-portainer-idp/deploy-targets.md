# Deploy targets

A **deploy target** is a named place applications are deployed to, such as `production-eu` or `staging`. It brings together three things:

* **Environments**: one or more Kubernetes environments connected with the Edge Agent. A deployment to the target goes to all of them.
* **A GitOps target**: a [Git target](git-targets.md), branch and folder that the target's manifests are committed to.
* **Namespaces**: the namespaces applications may be deployed into, and who may use each one.

Portainer-IDP creates a Portainer Edge Group for each deploy target, and every application deployed to it is an Edge Stack targeted at that group.

## Creating a deploy target

Open **Deploy Targets** and choose **New deploy target**. The wizard has these steps:

{% stepper %}
{% step %}
## Name

What developers will pick when they deploy.
{% endstep %}

{% step %}
## Environments

Choose one or more Kubernetes Edge environments. Environments an administrator has disabled in [Cluster Readiness](admin/cluster-readiness.md) can't be added.
{% endstep %}

{% step %}
## GitOps target

Choose the **Git Target**, **Branch** and **Path in repository**. The path is a folder this target owns, for example `clusters/production`.
{% endstep %}

{% step %}
## Namespaces

Choose **Add namespace** for each namespace applications may use, and under **Who may use it** add the users or teams who may deploy into it. Leave that empty to keep the namespace for administrators.
{% endstep %}

{% step %}
## Review

Check the details, then choose **Create deploy target**.
{% endstep %}
{% endstepper %}

Each namespace is itself committed to Git, as `<path>/<namespace>/namespace.yml`, and deployed as an Edge Stack, so it's created on every environment in the target. Applications can only be deployed into namespaces declared here, and a target with no namespaces can't take deployments.

## The deploy target detail page

| Tab               | What it's for                                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Environments**  | The environments in the target. Add or remove them.                                                                               |
| **GitOps target** | The Git target, branch and folder manifests are committed to.                                                                     |
| **Namespaces**    | Add and remove namespaces, and change who may use each one. Removing a namespace deletes it from every environment in the target. |
| **Deployments**   | Every application and secret deployed to the target.                                                                              |
| **Ingress**       | How catalog applications get their addresses. See [Ingress](deploy-targets.md#ingress).                                           |
| **Access**        | Who can see, deploy to and manage the target. See [Access](deploy-targets.md#access).                                             |
| **Activity**      | Every change made to this target through Portainer-IDP, and by whom.                                                              |

## Ingress

On the **Ingress** tab:

* **Base domain**: with wildcard DNS pointing at the cluster, catalog applications get a hostname under it, such as `myapp.apps.example.com`. Without a base domain, they're exposed on a NodePort.
* **Ingress class**: optional. Leave it empty to use the cluster's default.
* **TLS secret**: optional. A TLS secret that exists in each namespace; without one, applications are served over plain HTTP.

The base domain also limits which hostnames a Helm chart may use under the Standard and Restricted [Helm policies](deploy.md#the-helm-policy).

## Access

Deploy targets have their own access rights, on the **Access** tab:

| Right      | Allows                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| **View**   | See the target, its environments, GitOps target and namespaces.                                                        |
| **Deploy** | Deploy applications and secrets onto it, in the namespaces they have been granted.                                     |
| **Manage** | Change its name, environments, GitOps target, namespaces and ingress settings, delete it, and change this access list. |

The person who creates a target gets all three. Adding someone to a namespace under **Who may use it** also shows them the target and lets them deploy into that namespace, so most of the time that's the only place you need to grant access. Use the **Access** tab for people who should see or manage the target itself.

{% hint style="info" %}
Resource quotas and limits per namespace are coming soon.
{% endhint %}
