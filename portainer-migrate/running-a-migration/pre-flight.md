# Pre-flight

The **Target & pre-flight** step sets where your workloads land: the Kubernetes environment, the namespace, where the manifests go in your repository, and how network storage is handled. It also checks whether volume data can be copied automatically.

## Target Kubernetes environment

Choose the Kubernetes environment to migrate into. Every Kubernetes environment your account can reach is listed, including KubeSolo and Edge environments. If none are, you'll see **No Kubernetes environments found**.

## Namespace

The namespace the workloads are deployed into. It defaults to the name of the first stack you selected, or `migrated-app` if you selected only containers or services.

* If the namespace doesn't exist, you'll see **new**: it will be created.
* If it already exists, you'll see **existing**: the workloads will be added to it.

Existing namespaces are shown under **Reuse an existing namespace** so you can pick one with a click. System namespaces (`default`, `kube-*` and `portainer*`) aren't offered.

Use a lowercase name of letters, numbers and hyphens, up to 63 characters. The name isn't validated here, so an invalid name only fails when Portainer deploys the stack.

{% hint style="danger" %}
**Use a new namespace for every migration.** Each migration's manifests are stored under the namespace's name, and its GitOps stack is named after the namespace. A second migration into the same namespace replaces the first one's manifests in Git, and removing either stack in Portainer deletes the whole namespace, including the other app and its volumes. See [Known issues and limitations](../reference/known-issues-and-limitations.md).
{% endhint %}

## Repository folder

The top-level folder in your repository the manifests are committed under. It defaults to the target environment's name. The manifests are committed to:

```
<folder>/portainer-migrate/<namespace>.yaml
```

so everything you migrate to one environment sits together in one folder.

## Storage

**Migrate NFS volumes in place** is off by default. Turn it on to have NFS-backed volumes mount the same NFS export on Kubernetes, with no data copied. Portainer-Migrate creates a static PersistentVolume pointing at the same `server:/path` the container used, with a `Retain` reclaim policy, and binds the new claim to it.

Only turn it on when the target cluster's nodes can reach the NFS server, and the export paths are correct. Other volumes aren't affected. See [Migrating data](../migrating-data.md#nfs-volumes-in-place).

{% hint style="warning" %}
If NFS volumes are selected and this option is off, the migration stops before deploying anything, rather than creating empty volumes.
{% endhint %}

## Data copy readiness

Portainer-Migrate checks whether it can copy volume data to the target you chose:

* **ready**: local volumes, bind mounts and databases can be copied automatically. The Portainer address it will use is shown.
* **Automated data copy isn't available**: the reason is shown. Stateless workloads and NFS volumes migrated in place are unaffected, but if you migrate a workload whose data needs copying, the migration stops before anything is deployed.

The most common reason is that the add-on can't reach the Portainer API. See [Initial configuration](../initial-configuration.md#connect-the-add-on-to-the-portainer-api). For other messages, see [Troubleshooting](../reference/troubleshooting.md).
