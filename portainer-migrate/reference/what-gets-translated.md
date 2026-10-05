# What gets translated

Portainer-Migrate translates workloads with a fixed set of rules. The same workloads always produce the same manifests, and you see the full YAML on the [Translate](../running-a-migration/translate.md) step before anything is deployed. This page lists what those rules carry over, and what they don't.

## What is generated

For each migration, all manifests go into one namespace and one file, `<namespace>.yaml`:

| Kubernetes object     | Generated for                                                             |
| --------------------- | ------------------------------------------------------------------------- |
| Namespace             | The migration's namespace.                                                |
| Deployment            | Each component: a Compose service, Swarm service or standalone container. |
| Service (NodePort)    | Each component with at least one TCP port.                                |
| PersistentVolumeClaim | Each volume and bind mount, unless you marked it **Start empty**.         |
| PersistentVolume      | Each NFS volume, when **Migrate NFS volumes in place** is on.             |

## Names

* Components are named after the Compose service, the Swarm service (without its stack prefix) or the container.
* When you migrate more than one workload in a run, each component's name is prefixed with its stack's name, so components from different stacks can't collide.
* Names are converted to valid Kubernetes names: lowercase letters, numbers and hyphens, at most 63 characters. Longer names are shortened and given a short hash suffix.
* Each Deployment and its pods are labelled `app: <name>`.

## Containers

| Docker / Swarm                          | Kubernetes                                  |
| --------------------------------------- | ------------------------------------------- |
| Image                                   | `image`, unchanged.                         |
| Entrypoint                              | `command`                                   |
| Command                                 | `args`                                      |
| Environment variables                   | `env`, as plain values. `PATH` is left out. |
| Swarm replicated service replicas       | `replicas`, unchanged.                      |
| Swarm global service                    | `replicas: 1`                               |
| Standalone container or Compose service | `replicas: 1`                               |

### Environment variables

Every environment variable the container has is copied into the Deployment as a plain value. That includes variables set by the image itself, and any passwords, API keys or connection strings you passed in.

{% hint style="danger" %}
Environment variables are committed to your Git repository **in plain text**. Use a private repository, limit who can read it, and after migrating, move secrets into Kubernetes Secrets and rotate any that were exposed.
{% endhint %}

### Security settings

Each pod is hardened to the Kubernetes **baseline** pod-security profile:

* `allowPrivilegeEscalation: false`
* `seccompProfile: RuntimeDefault`
* `automountServiceAccountToken: false`, so pods don't get a Kubernetes API token.

Linux capabilities are left at the container runtime's defaults, because dropping them breaks common images such as databases.

## Ports

* Each component with at least one TCP port gets a **NodePort** Service. Each port is exposed with the same port and target port as the container, named `port-<number>`.
* On Docker, this covers every TCP port the container exposes, including ports declared by the image that you never published.
* On Swarm, it covers the service's published ports.
* The host port you published on Docker isn't kept. Kubernetes assigns a NodePort, shown on the [Migrate](../running-a-migration/migrate.md) step.

## Volumes

* Each volume and bind mount becomes a **3 GiB**, `ReadWriteOnce` PersistentVolumeClaim on the target's default StorageClass, named `<component>-<volume>`. The source volume's size isn't read.
* NFS volumes migrated in place become a static PersistentVolume and a claim bound to it. See [Migrating data](../migrating-data.md#nfs-volumes-in-place).
* Read-only mounts stay read-only.
* A bind-mounted single file is placed inside its claim and mounted at its original path with `subPath`.
* A mount marked **Start empty** becomes an `emptyDir`.

To change a claim's size or StorageClass, edit `<namespace>.yaml` in your repository after migrating and redeploy the stack. A claim that is already bound can only be enlarged, and only if its StorageClass allows expansion.

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
| UDP ports                                          | Not exposed.                                                                                                             |
| tmpfs mounts                                       | Not created.                                                                                                             |
| User, privileged mode, added capabilities, devices | Not set.                                                                                                                 |
| Labels                                             | Only `app: <name>` is set.                                                                                               |
| Placement constraints                              | Pods can be scheduled on any node.                                                                                       |
| The Docker socket                                  | Can't be migrated. A workload that mounts it fails to translate.                                                         |
| Ingress                                            | None. Apps are reached on their NodePort.                                                                                |
