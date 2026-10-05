# Cluster readiness

Cluster Readiness is an admin-only page that checks each Kubernetes environment for what Portainer-IDP deployments depend on, installs and manages Sealed Secrets, and lets you take an environment out of self-service.

## What it checks

For each environment, Cluster Readiness reports on:

* **Ingress controller** availability
* **Load balancer** support
* **Default storage class**
* **Node health**
* **GPU nodes**
* **Sealed Secrets**, which encrypted secrets need

Each check gives a plain-language result, so you don't need to interpret raw cluster state to know whether an environment is ready for developers. Use the search box to find an environment in a large fleet.

It also warns you if any [secrets are still stored unencrypted in Git](../secrets.md#secrets-created-before-sealed-secrets), with a link to each.

## Sealed Secrets

[Secrets](../secrets.md) are stored in Git as Sealed Secrets, so each environment a secret is deployed to needs the Sealed Secrets controller and the installation's shared sealing key. Each environment card has a **Sealed Secrets** panel showing its status:

| Status                                             | Meaning                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Ready**                                          | The controller is running with the shared key.                                 |
| **Not installed**                                  | Choose **Install**.                                                            |
| **Unhealthy**                                      | The controller is installed but not running properly.                          |
| **Key missing**, **Wrong key**, **Restart needed** | The environment can't decrypt secrets sealed for the fleet. Choose **Repair**. |
| **Unreachable**                                    | Portainer can't reach the environment right now.                               |
| **Not Kubernetes**                                 | The environment isn't a Kubernetes environment.                                |

If a controller was installed outside Portainer-IDP, choose **Manage with GitOps** to bring it under Portainer-IDP's management. **Remove** uninstalls a controller Portainer-IDP deployed; it's refused while any secret is deployed to that environment.

### Where system applications live in Git

The Sealed Secrets controller is a **system application**: it's committed to Git and deployed as an Edge Stack like any other application, but only administrators can see or change it. The first time you choose **Install**, Portainer-IDP asks where system applications live in Git: a **Git Target**, **Branch** and **Path in repository**. Choose a folder only administrators write to.

The controller is committed to `<path>/sealed-secrets/controller.yml` and deployed through an automatically managed deploy target called `idp-system`. You can change the location later on the **System applications in Git** card, here or on [Settings](settings.md).

{% hint style="warning" %}
All environments share one sealing key, stored as the Secret `portainer-idp-sealing-key` in the `kube-system` namespace. Removing the controller leaves the key and the SealedSecret custom resource definition in place, so existing secrets are not lost. Back the key up somewhere safe; without it, secrets in Git can't be decrypted.
{% endhint %}

## Disabling an environment

Use **Disable** on an environment to stop it being added to deploy targets, for example while it's being repaired, or because it shouldn't be self-service. **Re-enable** undoes it.

Disabling doesn't remove an environment from deploy targets that already include it. Applications on those targets keep deploying and running there. To stop deploying to it, remove it from those targets.
