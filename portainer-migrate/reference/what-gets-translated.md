# What gets translated

Portainer-Migrate translates workloads with a fixed set of rules. The same workloads always produce the same manifests, and you see the full YAML on the [Translate](../running-a-migration/translate.md) step before anything is deployed. This page lists what those rules carry over, and what they don't.

## What is generated

For each migration, all manifests go into one namespace. Each app gets its own file, `<namespace>/<app>.yaml`, and its own stack:

| Kubernetes object     | Generated for                                                             |
| --------------------- | ------------------------------------------------------------------------- |
| Namespace             | The migration's namespace, created outside the stacks if it's missing.    |
| Deployment            | Each component: a Compose service, Swarm service or standalone container. |
| Service (ClusterIP)   | Each component's unpublished ports.                                       |
| Service (NodePort)    | Only ports the source published on the host.                              |
| Ingress               | Each component that publishes a port, when you turn on Ingress.          |
| PersistentVolumeClaim | Each volume and bind mount, unless you marked it **Start empty**.         |
| PersistentVolume      | Each NFS volume, when **Migrate NFS volumes in place** is on.             |

## Names

* Components are named after the Compose service, the Swarm service (without its stack prefix) or the container.
* Stacks that share a service name get a stack prefix on that name only, and a note says which. In the environment of that stack's own components, a value that names a host by the old name is rewritten to the new name, and the note lists each variable. Swarm names such as `stack_db` and `tasks.stack_db` are rewritten to the Service name too. Other stacks' environment is not touched.
* Names are converted to valid Kubernetes names: lowercase letters, numbers and hyphens, at most 63 characters. Longer names are shortened and given a short hash suffix.
* Each Deployment and its pods are labelled `app: <name>`.

## Containers

| Docker / Swarm                          | Kubernetes                                  |
| --------------------------------------- | ------------------------------------------- |
| Image                                   | `image`, unchanged.                         |
| Entrypoint                              | `command`                                   |
| Command                                 | `args`                                      |
| Environment variables                   | `env`, as plain values. `PATH` is left out, as are names Kubernetes rejects and values the image already sets. |
| Swarm replicated service replicas       | `replicas`, unchanged.                      |
| Swarm global service                    | `replicas: 1`                               |
| Standalone container or Compose service | `replicas: 1`                               |

### Environment variables

Environment variables you set are copied into the Deployment as plain values, including any passwords, API keys or connection strings you passed in. Variables the image already sets with the same name and value aren't copied.

{% hint style="danger" %}
Environment variables are committed to your Git repository **in plain text**. Use a private repository, limit who can read it, and after migrating, move secrets into Kubernetes Secrets and rotate any that were exposed.
{% endhint %}

### Security settings

Each pod is hardened to the Kubernetes **baseline** pod-security profile:

* `allowPrivilegeEscalation: false`, unless you turn off **Block privilege escalation** on Pre-flight
* `seccompProfile: RuntimeDefault`
* `automountServiceAccountToken: false`, so pods don't get a Kubernetes API token.

Linux capabilities are left at the container runtime's defaults, because dropping them breaks common images such as databases.

## Ports

* Each port the source published on the host gets a **NodePort** Service. The host port isn't kept: Kubernetes picks the node port, a note says so, and it's shown on the [Migrate](../running-a-migration/migrate.md) step.
* Unpublished ports get a **ClusterIP** Service, so other components can reach them by name.
* UDP ports stay UDP.
* For a Swarm service, the image's `EXPOSE` ports (or a well-known port for common databases) become internal ports, so its clients can reach it.
* With **Expose web workloads through an Ingress** on, each component that publishes a port also gets an Ingress at `<deployment>.<domain>`, routed to its HTTP-looking port. Databases are skipped.

## Volumes

* Each volume and bind mount becomes a **3 GiB**, `ReadWriteOnce` PersistentVolumeClaim on the target's default StorageClass, named `<component>-<volume>`. The source volume's size isn't read.
* NFS volumes migrated in place become a static PersistentVolume and a claim bound to it. See [Migrating data](../migrating-data.md#nfs-volumes-in-place).
* Read-only mounts stay read-only.
* A bind-mounted single file is placed inside its claim and mounted at its original path with `subPath`.
* A scaled Compose service becomes one Deployment with that many replicas (one when it has storage).
* A mount marked **Start empty** becomes an `emptyDir`.

To change a claim's size or StorageClass, edit the app's `<namespace>/<app>.yaml` in your repository after migrating and redeploy the stack. A claim that is already bound can only be enlarged, and only if its StorageClass allows expansion.

## Not translated

These settings aren't carried over. If your workload depends on one, add it to the manifests in Git after migrating, or expect to see the effect on the Migrate step.

| Setting                                            | What to expect                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Healthchecks                                       | No liveness or readiness probes. Kubernetes considers a pod ready as soon as it starts.                                  |
| `depends_on`                                       | All components start together. Apps that can't wait for a dependency may restart a few times.                            |
| Resource limits and reservations                   | No requests or limits.                                                                                                   |
| Restart policies                                   | Deployments always restart their pods.                                                                                   |
| Docker secrets and configs                         | Not migrated. Recreate them as Kubernetes Secrets or ConfigMaps.                                                         |
| Networks and aliases                               | All components share the namespace's network. Components are reachable by their Service name, and only if they have one. |
| tmpfs mounts                                       | Not created.                                                                                                             |
| User, privileged mode, added capabilities, devices | Not set.                                                                                                                 |
| Labels                                             | Only `app: <name>` is set.                                                                                               |
| Placement constraints                              | Pods can be scheduled on any node.                                                                                       |
| The Docker socket                                  | Can't be migrated. A workload that mounts it fails to translate.                                                         |
| Ingress                                            | Only if you turn on **Expose web workloads through an Ingress** on Pre-flight. Otherwise apps are reached on their NodePort. |
