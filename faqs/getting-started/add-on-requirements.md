# What are the requirements for installing add-ons?

[Add-ons](../../admin/add-ons/) can only be installed when Portainer runs on Kubernetes, with cluster-admin access, outside FIPS mode, and under its default Helm release name and namespace. Some add-ons also need additional configuration in Portainer before they will work. This page lists the requirements that apply to all add-ons.

{% hint style="warning" %}
Add-ons marked as **Beta** may change in future releases and should not be used in production environments.
{% endhint %}

### Requirements for all add-ons <a href="#requirements-for-all-add-ons" id="requirements-for-all-add-ons"></a>

Before you can install any add-on, your Portainer server must meet the following requirements. Only Portainer administrators can install, uninstall, or repair add-ons.

#### Portainer must run on Kubernetes <a href="#portainer-must-run-on-kubernetes" id="portainer-must-run-on-kubernetes"></a>

Add-ons are installed into the Kubernetes cluster that Portainer itself runs on. If Portainer runs on Docker or Docker Swarm, the add-on list still displays, but installation is unavailable.

#### The add-on secret key must be available (Portainer 3.0 and later) <a href="#the-add-on-secret-key-must-be-available-portainer-30-and-later" id="the-add-on-secret-key-must-be-available-portainer-30-and-later"></a>

The `--addons-secret-key-name` flag must point to a file that exists. This flag is separate from `--secret-key-name`, and Portainer does not fall back to the main secret key if the add-on key is missing.

The simplest way to meet this requirement is to reuse your existing database encryption key. Point `--addons-secret-key-name` at the same key file that `--secret-key-name` uses, so no new secret or volume mount is needed.

If you installed Portainer using the Helm chart, add the flag to the `feature.flags` value. If you already set other flags in `feature.flags`, include them as well, or they will be removed:

```
helm upgrade portainer portainer/portainer -n portainer --reuse-values \
  --set feature.flags="--addons-secret-key-name=<path-to-key-file>"
```

#### Portainer must have cluster-admin access <a href="#portainer-must-have-cluster-admin-access" id="portainer-must-have-cluster-admin-access"></a>

Portainer installs add-ons using Helm, running as Portainer's in-cluster ServiceAccount. That ServiceAccount must be bound to the `cluster-admin` role. Without it, the add-on pages load but every installation fails.

If you installed Portainer using the official Helm chart, set `localMgmt=true` to create this binding.

#### Portainer must not run in FIPS mode <a href="#portainer-must-not-run-in-fips-mode" id="portainer-must-not-run-in-fips-mode"></a>

Add-ons are not available when Portainer runs in FIPS mode, and there is no option to enable them.

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

#### Only one Portainer server per cluster can install add-ons <a href="#only-one-portainer-server-per-cluster-can-install-add-ons" id="only-one-portainer-server-per-cluster-can-install-add-ons"></a>

Each add-on is installed into a namespace named `portainer-addon-<id>`, based on the add-on rather than on the Portainer server that installed it. If two Portainer servers on the same cluster install add-ons, they compete for the same namespaces and Helm release names.

A common symptom is a running `portainer-addon-*` namespace for an add-on that Portainer shows as not installed. This happens because each Portainer server tracks installation status in its own database.

### Do I need to change the add-on catalog URL? <a href="#do-i-need-to-change-the-add-on-catalog-url" id="do-i-need-to-change-the-add-on-catalog-url"></a>

In most cases, no. When the Add-on **Catalog URL** field is empty, Portainer uses its own published catalog, which is the correct choice for almost all deployments. You can find this setting under **Administration** > **Settings** > **General** > **Add-on settings**.

You might set a custom catalog URL if you need to:

* Pin a specific catalog that your organization has reviewed.
* Serve the catalog from an internal mirror, for example in an air-gapped environment.

If you use a custom catalog, keep the following in mind:

* **Changes may not appear immediately.** Portainer caches the catalog. If the add-on list does not update after you change the URL, restart the Portainer server. The setting itself will show the new URL even while the list is out of date.
* **Set `"tlsVerify": true` for each catalog entry.** If an entry omits `tlsVerify`, Portainer treats it as `false` and pulls the add-on's chart without verifying the registry's TLS certificate. For a registry with a publicly signed certificate, always set `"tlsVerify": true`.
