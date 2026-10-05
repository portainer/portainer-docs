# Migrating data

Stateless workloads are easy to move: the same image with the same settings runs anywhere. Data is the hard part. This page explains how Portainer-Migrate handles each kind of storage, so you can plan a migration before you start it.

## How each mount is handled

Portainer-Migrate looks at every volume and bind mount on the workloads you select and decides how to migrate it, in this order:

| Mount                                                       | Handled as         | Data moved?                              |
| ----------------------------------------------------------- | ------------------ | ---------------------------------------- |
| A mount you marked **Start empty**                          | An empty directory | No, by your choice.                      |
| A volume using NFS (the `nfs` driver, or `type=nfs`/`nfs4`) | NFS in place       | Not needed: the same storage is mounted. |
| A volume used by a database image                           | Cold copy          | Yes                                      |
| A volume using any other non-local driver                   | Cold copy          | Yes                                      |
| A bind mount of a host directory or file                    | Cold copy          | Yes                                      |
| A local named volume                                        | Cold copy          | Yes                                      |

NFS is checked first, so a database whose volume is on NFS mounts in place too.

Databases are recognized by image name (for example `postgres`, `mysql`, `mariadb`, `mongo`, `redis`, `elasticsearch` and `influxdb`), but images that are clearly tools around a database, such as exporters, backup tools, proxies and admin UIs, are not. Databases are copied the same way as other volumes; the label is a reminder that the target must run the **same major version**, because the files are copied as they are on disk. MySQL volumes can't currently be cold-copied; see [Known issues and limitations](reference/known-issues-and-limitations.md).

## NFS volumes in place

If a volume is backed by NFS, the data doesn't need to move: Kubernetes can mount the same export. Turn on **Migrate NFS volumes in place** on [Pre-flight](/broken/pages/405d622072a61e34cbda4962832051bf1647d408), and Portainer-Migrate generates:

* A **PersistentVolume** pointing at the same NFS server and path the container used, with `ReadWriteMany` access, a `Retain` reclaim policy and no StorageClass. PersistentVolumes are cluster-wide, so it is named `<namespace>-<component>-<volume>`.
* A **PersistentVolumeClaim** bound to that PersistentVolume.

No NFS CSI driver or StorageClass is needed, but every node that might run the pod must be able to mount the export. Because the reclaim policy is `Retain`, deleting the PersistentVolume never deletes data on the NFS server.

The server and path are read from the volume's driver options (`o: addr=...` and `device: :/path`). If they can't be read, the volume is treated as not mounted in place and the migration is blocked.

{% hint style="warning" %}
With NFS in place, the Docker workload and the Kubernetes workload use the **same files at the same time**. That's fine for static content, but a database must never run on both sides at once. Stop the source database before the Kubernetes one starts, or it can corrupt its data or fail to start.
{% endhint %}

An NFS directory mounted on the Docker host and passed in as a bind mount isn't recognized as NFS. It is cold-copied instead. To mount it in place, declare it as an NFS volume in your Compose file.

## Cold copy

Every other volume and bind mount is copied into a new PersistentVolumeClaim on the target. The copy is "cold": the source container is stopped while its data is archived, so the snapshot is consistent, even for a database.

{% stepper %}
{% step %}
## Stop the container

The container is stopped with a 60-second grace period.
{% endstep %}

{% step %}
## Archive mounts

Every mount being copied is archived during that single stop.
{% endstep %}

{% step %}
## Restart the container

The container is started again, if it was running before.
{% endstep %}

{% step %}
## Stage the archive

The archive is checked and held by Portainer-Migrate for up to 30 minutes.
{% endstep %}

{% step %}
## Restore data

Once the GitOps stack deploys, each new pod starts with a restore container that receives the archive through Portainer, verifies it and unpacks it into the volume, keeping file ownership and permissions.
{% endstep %}

{% step %}
## Start the application

Your application container starts, with the data already in place.
{% endstep %}
{% endstepper %}

The copy runs once. If the pod is recreated later, its volume already holds the data and isn't overwritten.

New PersistentVolumeClaims are 3 GiB, `ReadWriteOnce`, on the target's default StorageClass. A volume holding more than 3 GiB needs a larger claim; see [What gets translated](reference/what-gets-translated.md).

### Before you copy

* **Plan for a short outage.** The source container is stopped while its data is archived. How long depends on the amount of data.
* **Stop other writers.** If another running container writes to the same volume or host path, the copy refuses to start. Portainer-Migrate can't see processes on the host or other machines writing to a bind-mounted path (for example on network storage), so stop those yourself.
* **Remember the snapshot is a point in time.** The source starts again after the snapshot, so anything written afterwards isn't on Kubernetes. When you switch users over, stop the source first, or plan a final copy for data that changed.
* **Use one replica.** The restore needs exactly one target pod per workload. Scale up after the data is restored.
* **Keep the page open** until every volume shows **restored**.

### Limits

| Limit             | Value                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Source            | Standalone Docker only. Swarm data can't be copied.                                                                           |
| Staging space     | 2 GiB in total, shared by all copies in progress.                                                                             |
| Snapshot lifetime | 30 minutes from staging to delivery.                                                                                          |
| Concurrent copies | One at a time.                                                                                                                |
| Mount types       | Regular files and directories. Sockets, devices and symbolic-link mounts can't be copied, nor can a bind mount of `/`.        |
| Contents          | Named pipes and device files inside a mount can't be restored. Mark the mount **Start empty** if it only holds runtime state. |

If the add-on is restarted during a copy, the staged snapshot is lost and you'll need to run the migration again. Check that the source container is running again, and start it in Portainer if it isn't.

## Start empty

Some mounts hold only runtime state that the application recreates: sockets, PID files, caches, temporary files. Copying them is unnecessary, and sometimes impossible. Tick **Start empty** for that mount on [Translate](/broken/pages/4ab8ab8cc1fdf17f427de6986218452226594c5e) and the pod gets an empty directory instead of a volume.

## Swarm

Swarm volumes live on whichever node ran the task, so Portainer-Migrate can't copy them. From a Swarm environment you can migrate:

* Stateless services.
* Services whose volumes are on NFS, with **Migrate NFS volumes in place** turned on.

Any other volume on a Swarm service shows **Not migrated — Swarm data copy unsupported**, and Swarm bind mounts can't be migrated at all. The migration stops before anything is deployed.
