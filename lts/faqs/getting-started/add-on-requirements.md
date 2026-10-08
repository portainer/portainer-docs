# What are the requirements for installing add-ons?

[Add-ons](../../admin/add-ons/) can only be installed when Portainer runs on Kubernetes, with cluster-admin access, outside FIPS mode, and under its default Helm release name and namespace. Some add-ons also need additional configuration in Portainer before they will work. This page lists the requirements that apply to all add-ons.

{% hint style="warning" %}
Add-ons marked as **Pre-release** may change in future releases and should not be used in production environments.
{% endhint %}

## Requirements for all add-ons <a href="#requirements-for-all-add-ons" id="requirements-for-all-add-ons"></a>

Before you can install any add-on, your Portainer server must meet the following requirements. Only Portainer administrators can install, uninstall, or repair add-ons.

#### Portainer must run on Kubernetes <a href="#portainer-must-run-on-kubernetes" id="portainer-must-run-on-kubernetes"></a>

Add-ons are installed into the Kubernetes cluster that Portainer itself runs on. If Portainer runs on Docker or Docker Swarm, the add-on list still displays, but installation is unavailable.&#x20;

***

#### Portainer must have cluster-admin access <a href="#portainer-must-have-cluster-admin-access" id="portainer-must-have-cluster-admin-access"></a>

Portainer installs add-ons using Helm, running as Portainer's in-cluster ServiceAccount. That ServiceAccount must be bound to the `cluster-admin` role. Without it, the add-on pages load but every installation fails.

If you installed Portainer using the official Helm chart, set `localMgmt=true` to create this binding.

***

#### Portainer must not run in FIPS mode <a href="#portainer-must-not-run-in-fips-mode" id="portainer-must-not-run-in-fips-mode"></a>

Add-ons are not available when Portainer runs in FIPS mode, and there is no option to enable them.

***

#### Portainer must use the default release name, namespace, and ports <a href="#the-add-on-secret-key-must-be-available-portainer-30-and-later" id="the-add-on-secret-key-must-be-available-portainer-30-and-later"></a>

Install Portainer as the Helm release `portainer` in the namespace `portainer`, using the chart's default ports. Add-ons connect to Portainer at the following in-cluster address:

```
https://portainer.portainer.svc.cluster.local:9443
```

If Portainer is installed under a different release name, namespace, or port, the add-on still installs and its interface still loads. However, the add-on cannot read its own settings, and displays the following error:

```
Could not check setup status — Unauthorized
```

To fix it, reinstall Portainer using the default release name, namespace, and ports.

***

#### Only one Portainer server per cluster can install add-ons <a href="#only-one-portainer-server-per-cluster-can-install-add-ons" id="only-one-portainer-server-per-cluster-can-install-add-ons"></a>

Each add-on is installed into a namespace named `portainer-addon-<id>`, based on the add-on rather than on the Portainer server that installed it. If two Portainer servers on the same cluster install add-ons, they compete for the same namespaces and Helm release names.

A common symptom is a running `portainer-addon-*` namespace for an add-on that Portainer shows as not installed. This happens because each Portainer server tracks installation status in its own database.

***

## Additional requirements for specific add-ons

Each add-on has its own setup step in its interface. The requirements below are the Portainer-side prerequisites that apply in addition to the requirements for all add-ons.

### Portainer-Command

Portainer-Command needs a credential configured on its settings page before it can create sessions. See the [Portainer-Command documentation](https://docs.portainer.ai/portainer-command/initial-configuration) for details.&#x20;

Portainer-Command also runs its own Postgres database in its add-on namespace. Include this database in your resource planning and backup strategy.

***

### Portainer-IDP

{% hint style="info" %}
Portainer embeds the Edge Compute addresses in each Edge key when it creates the environment. It doesn't read them again afterwards. If you change the addresses later, existing Edge environments keep the old values, and you must recreate them for the change to take effect.
{% endhint %}

In the add-on, you must provide:

* An [Edge Admin API key](../../user/account-settings.md#access-tokens).
* A Git credential encryption key.

In Portainer, you must have:

1. [Edge Compute features enabled](../../admin/settings/edge.md).
2. Valid Edge Compute server addresses. Set the **Portainer API server URL** and **Tunnel server address** to addresses that the Edge agent can resolve from its own network location. Do not use `localhost`. Inside an agent container, `localhost` refers to the agent itself, not the Portainer server.&#x20;
3. An [Edge environment on Kubernetes](../../admin/environments/add/kubernetes/edge.md) with an associated agent. A local Kubernetes environment is not a valid deployment target for Portainer-IDP.
4. An [Edge group](../../user/edge/groups.md) that contains that environment. If no Edge groups exist, the deployment target list is empty.

Each user must also add a Git personal access token, which Portainer-IDP uses for their commit identity.

***

### Portainer-Migrate

**To install**

* The Kubernetes cluster that hosts the add-on must run Kubernetes 1.21 or later. The add-on image is `portainer/portainer-migrate`. For air-gapped installs, you can point the chart at a mirror of this image.
* The add-on's backend must be able to reach the Portainer API. In most setups it discovers the address by itself, and the **Pre-flight** check reports the result. If discovery fails, set the chart value `portainerUrl`. If Portainer uses a self-signed certificate, also set `portainerTlsSkipVerify`.

**To migrate**

* **Source:** a Docker standalone or Docker Swarm environment in Portainer.
* **Target:** a Kubernetes environment in Portainer. This can be the same cluster that hosts the add-on. The target needs a StorageClass that can provision PersistentVolumeClaims (PVCs) for named volumes.
* **A Git repository and an access token.** Portainer-Migrate is GitOps-only. It commits the generated manifests to your repository, then creates a Portainer Kubernetes Git stack for each application. The token needs read/write access to repository contents. For a GitHub fine-grained token, this means **Contents: Read and write** and **Metadata: Read**.

**Requirements for some workloads**

The following apply only if your applications use these features:

* **Copying volume data (cold copy):** the target cluster must be able to pull `python:3.13-alpine`, which Portainer-Migrate uses for a short-lived restore init container. Clusters with restricted admission policies may need to allow this image. The source container is stopped briefly while its data is copied.
* **NFS-backed volumes or bind mounts:** the target nodes must be able to reach the same NFS server, which lets the data stay in place. Bind mounts also need a host path to `server:/export` mapping, which you set in the migration wizard.
* **Ingress:** the target needs an Ingress controller. Without one, Portainer-Migrate falls back to NodePort Services.

**Permissions**

A non-administrator user needs access to the target namespace and, for Docker sources, permission to stop and start containers.

***

## Do I need to change the add-on catalog URL? <a href="#do-i-need-to-change-the-add-on-catalog-url" id="do-i-need-to-change-the-add-on-catalog-url"></a>

In most cases, no. When the Add-on **Catalog URL** field is empty, Portainer uses its own published catalog, which is the correct choice for almost all deployments. You can find this setting under **Administration** > **Settings** > **General** > [**Add-on settings**](../../admin/settings/general.md#add-on-settings).

You might set a custom catalog URL if you need to:

* Pin a specific catalog that your organization has reviewed.
* Serve the catalog from an internal mirror, for example in an air-gapped environment.

If you use a custom catalog, keep the following in mind:

* **Changes may not appear immediately.** Portainer caches the catalog. If the add-on list does not update after you change the URL, restart the Portainer server. The setting itself will show the new URL even while the list is out of date.
* **Set `"tlsVerify": true` for each catalog entry.** If an entry omits `tlsVerify`, Portainer treats it as `false` and pulls the add-on's chart without verifying the registry's TLS certificate. For a registry with a publicly signed certificate, always set `"tlsVerify": true`.
