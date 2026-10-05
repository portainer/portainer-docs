# Translate

The **Translate to Kubernetes** step shows exactly what will be deployed. Each workload you selected is converted to Kubernetes manifests, and every volume is classified so you can see how its data will be handled. Nothing has been changed yet.

The translation is deterministic: the same workloads always produce the same manifests. For the full rules, see [What gets translated](../reference/what-gets-translated.md).

## Storage

If any of the selected workloads have volumes or bind mounts, the **Storage** panel lists each one as `component · source → mount path`, with a badge showing how it will be migrated and an explanation underneath.

A summary at the top tells you whether you can go ahead:

| Summary                                 | Meaning                                                                                                                 |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **All volumes are handled**             | NFS volumes will mount in place, and everything else will be cold-copied on the Migrate step. No manual step is needed. |
| **N volume(s) need a manual data step** | The volumes will be created, but their data won't be moved. Copy it yourself before switching users over.               |
| **N volume(s) can't be migrated**       | Migrate will stop before deploying anything. Each blocked volume explains why and what to change.                       |

The badges are:

| Badge                                          | What happens                                                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **NFS — mounts in place**                      | The pod mounts the same NFS export. No data is copied.                                                        |
| **Local volume — cold copy**                   | The volume's data is copied into a new PersistentVolumeClaim.                                                 |
| **Bind mount — cold copy**                     | The host directory or file is copied into a new PersistentVolumeClaim. The target doesn't need the host path. |
| **Database — cold copy**                       | As for a local volume. The target must run the same major version of the database.                            |
| **External driver — cold copy**                | A volume from a non-local driver is copied into a new PersistentVolumeClaim.                                  |
| **Starts empty**                               | You chose not to copy this mount. The pod gets an empty directory.                                            |
| **NFS — not mounted in place**                 | Blocked. Turn on **Migrate NFS volumes in place** on Pre-flight.                                              |
| **Not migrated — Swarm data copy unsupported** | Blocked. Data can't be copied out of Swarm services. Use NFS in place, or migrate from standalone Docker.     |

See [Migrating data](../migrating-data.md) for how each path works.

### Start empty

Mounts that would be copied (other than single files and NFS volumes) have a **Start empty** checkbox. Tick it to skip copying that mount: the pod gets an empty directory (`emptyDir`) instead of a volume, and anything written there is lost when the pod is recreated.

Use it only for runtime state that the application recreates on start, such as sockets, PID files and caches. Paths under `/run`, `/var/run`, `/tmp` and `/var/tmp` are marked **looks like runtime state** to help you spot them. A mount containing named pipes or device files can't be copied, so **Start empty** is the way to migrate it.

{% hint style="danger" %}
Don't tick **Start empty** on a database volume or any mount that holds data you need. Its contents are not migrated.
{% endhint %}

## Manifests

Below the storage panel, a summary line shows how many components and manifests were generated and the namespace they go into, followed by the full YAML. This is the exact file that will be committed to your repository as `<namespace>.yaml`.

## Errors

| Message                                | What to do                                                                                                                                                                        |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nothing selected**                   | Go back to Discover and choose at least one workload.                                                                                                                             |
| **Couldn't read the source workloads** | The reason follows. It's usually a mount that can't be migrated, such as a Docker socket or a Swarm bind mount. See [Troubleshooting](../reference/troubleshooting.md#translate). |
