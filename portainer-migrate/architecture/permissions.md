# Permissions

Portainer-Migrate has no permissions model of its own. It acts with your Portainer session, so what you can migrate is governed by your Portainer role and your access to each environment.

{% hint style="warning" %}
Today, migrations must be run by a **Portainer administrator**. Portainer-Migrate saves a Git credential in Portainer during every migration, and only administrators can do that. See [Known issues and limitations](../reference/known-issues-and-limitations.md#migrations-need-a-portainer-administrator).
{% endhint %}

## In Portainer

| To                                    | You need                                                                                                          |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Open Portainer-Migrate                | Access to the add-on in Portainer.                                                                                |
| Discover workloads                    | Access to the source Docker or Swarm environment, and to the containers, services and stacks you want to migrate. |
| Copy volume data                      | Permission to inspect, stop and start the source containers, and to read files from them.                         |
| Choose a target                       | Access to the target Kubernetes environment, and permission to list its namespaces.                               |
| Deploy                                | Permission to create Git credentials and Kubernetes stacks on the target environment.                             |
| Deliver copied data and report health | Permission to list pods, services and nodes in the target namespace, and to use Portainer's Kubernetes pod proxy. |

## On the target cluster

The GitOps stack is deployed by Portainer, so the identity Portainer uses on the target must be able to create everything in the manifest:

* The Namespace, if it doesn't exist yet.
* Deployments, Services and PersistentVolumeClaims in that namespace.
* **Cluster-scoped PersistentVolumes**, if you migrate NFS volumes in place.

If the target enforces pod security admission:

* Migrated workloads are generated to meet the **baseline** profile.
* When data is copied, each pod also runs a restore container as root, to keep file ownership. Namespaces enforcing the **restricted** profile reject it.

The target's network policies must allow the Kubernetes API server to reach pods in the namespace on port 8080 while data is being restored.

## In your Git provider

The access token needs write access to the repository:

| Provider | Access                                                                             |
| -------- | ---------------------------------------------------------------------------------- |
| GitHub   | Push access. Contents read and write for fine-grained tokens, or the `repo` scope. |
| GitLab   | The Developer role or higher, and a token with the `api` scope.                    |
| Gitea    | Write access to the repository.                                                    |

Portainer pulls with the same token, so it needs read access for as long as you deploy from the repository.
