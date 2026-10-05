# Quick start

This guide takes you from installing Portainer-Migrate to your first workload running on Kubernetes.

{% hint style="warning" %}
Ensure you meet the [requirements](requirements.md) before you start.
{% endhint %}

{% stepper %}
{% step %}
### Install the add-on

Portainer-Migrate is installed from the add-on catalog in Portainer Business. Find **Portainer-Migrate** in the catalog and install it. Portainer deploys it into its own namespace, `portainer-addon-portainer-migrate`, on the cluster that runs Portainer.

For details on installing and managing add-ons, see [Add-ons in the Portainer documentation](https://docs.portainer.io/admin/add-ons).
{% endstep %}

{% step %}
### Open Portainer-Migrate

Once the add-on reports healthy, click the application switcher in the top left of Portainer and choose **Portainer-Migrate**. The same switcher takes you back to Portainer.

Portainer-Migrate opens on **New migration**, the migration wizard.
{% endstep %}

{% step %}
### Prepare a Git repository

Portainer-Migrate deploys everything through Git, so before your first migration, create (or choose) a repository for the migrated manifests and an access token that can write to it. We recommend a repository used only for Portainer-Migrate.

[Initial configuration](initial-configuration.md) has the token scopes for each provider.
{% endstep %}

{% step %}
### Connect your repository

On the **Connections** step, choose your provider, enter your Git username and the access token, then pick the repository and branch from the list. Portainer-Migrate tests the connection as you type and only lists repositories your token can write to.
{% endstep %}

{% step %}
### Choose what to migrate

On **Discover**, pick the Docker or Swarm environment the workloads run in today, then tick the stacks, services or containers to move. For your first migration, pick something small and stateless, such as a single web container.
{% endstep %}

{% step %}
### Choose where it goes

On **Pre-flight**, pick the target Kubernetes environment and a namespace. Use a new namespace for each migration: it keeps each migrated app independent, and you can remove one without affecting another.
{% endstep %}

{% step %}
### Review the manifests

On **Translate**, review the generated Kubernetes YAML and, if the workload has volumes, how each one will be handled. Nothing has been changed yet.
{% endstep %}

{% step %}
### Migrate

On **Migrate**, click **Commit & deploy via GitOps**. Portainer-Migrate commits the manifests to your repository and creates a Portainer GitOps stack that deploys them. You'll see each workload's status move from **Starting** to **Running**, with a link to open it.
{% endstep %}

{% step %}
### You're done!

Your workload is now running on Kubernetes, managed by a Portainer GitOps stack and recorded in **History**. The original workload on Docker is left running, so you can test the new deployment before you switch traffic over and retire the old one.
{% endstep %}
{% endstepper %}

## What's next

* [Initial configuration](initial-configuration.md): prepare your Git repository and tune the add-on for your network.
* [Running a migration](running-a-migration/): every step of the wizard in detail.
* [Migrating data](migrating-data.md): how volumes, bind mounts and databases are moved.
