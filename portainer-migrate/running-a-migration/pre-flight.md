# Pre-flight

The **Target & pre-flight** step sets where your workloads land: the Kubernetes environment, the namespace, where the manifests go in your repository, how network storage and web access are handled, and whether pods may escalate privileges. It also checks whether volume data can be copied automatically.

## Target Kubernetes environment

Choose the Kubernetes environment to migrate into. Every Kubernetes environment your account can reach is listed, including KubeSolo environments. If none are, you'll see **No Kubernetes environments found**.

## Namespace

The namespace the workloads are deployed into. It defaults to the name of the first stack you selected, or `migrated-app` if you selected only containers or services.

* If the namespace doesn't exist, you'll see **new**: it will be created.
* If it already exists, you'll see **existing**: the workloads will be added to it.

Existing namespaces are shown under **Reuse an existing namespace** so you can pick one with a click. System namespaces (`default`, `kube-*` and `portainer*`) aren't offered.

Use a lowercase name of letters, numbers and hyphens, up to 63 characters. A name Kubernetes would refuse is flagged here, and **Next** and **Commit** stay disabled until it's fixed.

{% hint style="info" %}
Each migrated app gets its own manifest file and its own Portainer stack, so you can group several migrations in one namespace. Removing one app's stack doesn't remove the others. Migrate won't commit if a stack on the environment already has the name it would create, or if another app in the namespace already owns a Deployment, Service, PersistentVolumeClaim or Ingress it would create. See [Known issues and limitations](../reference/known-issues-and-limitations.md).
{% endhint %}

## Repository folder

The top-level folder in your repository the manifests are committed under. It defaults to the target environment's name. Each app's manifests are committed to:

```
<folder>/portainer-migrate/<namespace>/<app>.yaml
```

so everything you migrate to one environment sits together in one folder, with a subfolder per namespace. An absolute folder, or one that climbs out of the repository with `..`, is flagged here and blocks **Next** and **Commit**.

## Storage

**Migrate NFS volumes in place** is off by default. Turn it on to have NFS-backed volumes mount the same NFS export on Kubernetes, with no data copied. Portainer-Migrate creates a static PersistentVolume pointing at the same `server:/path` the container used, with a `Retain` reclaim policy, and binds the new claim to it.

Only turn it on when the target cluster's nodes can reach the NFS server, and the export paths are correct. Other volumes aren't affected. See [Migrating data](../migrating-data.md#nfs-volumes-in-place).

### NFS path mappings

With **Migrate NFS volumes in place** on, you can also add **NFS path mappings** for bind mounts whose host path is on an NFS share. Each mapping has a **Host path**, an **NFS server** and an **Export path**: it says that the host path `P` is the export `server:/E`. Bind mounts under `P` are then mounted in place through a static PersistentVolume, with no copy. The longest matching host path wins, and a mapped single file mounts its parent directory with `subPath`. The target cluster's nodes need an NFS client, but you don't mount the share on them.

Mappings also apply to standalone Docker bind mounts: a mapped bind mount is mounted in place instead of copied. Swarm bind mounts can only be migrated this way. **Next** stays disabled until every mapping you enter is complete and valid.

## Networking

**Expose web workloads through an Ingress** is off by default. Turn it on, choose an **IngressClass** the target cluster has (its default is preselected) and enter a **domain**. Each component that publishes a port gets an Ingress at `<deployment>.<domain>`, routed to its HTTP-looking port. Databases are skipped, and the NodePort Services stay. If the cluster has no IngressClass, no Ingress is generated until you install an ingress controller.

## Security

**Block privilege escalation** is on by default. Turn it off for images that rely on file capabilities, such as pgAdmin, which otherwise listens on port 8080 instead of 80.

{% hint style="warning" %}
If NFS volumes are selected and this option is off, the migration stops before deploying anything, rather than creating empty volumes.
{% endhint %}

## Data copy readiness

Portainer-Migrate checks whether it can copy volume data to the target you chose:

* **ready**: local volumes, bind mounts and databases can be copied automatically. The Portainer address it will use is shown.
* **Automated data copy isn't available**: the reason is shown. Stateless workloads and NFS volumes migrated in place are unaffected, but if you migrate a workload whose data needs copying, the migration stops before anything is deployed.

The most common reason is that the add-on can't reach the Portainer API. See [Initial configuration](../initial-configuration.md#connect-the-add-on-to-the-portainer-api). For other messages, see [Troubleshooting](../reference/troubleshooting.md).
