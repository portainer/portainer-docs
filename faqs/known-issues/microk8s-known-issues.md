---
description: >-
  This article details some of the known issues we have discovered when working
  with the MicroK8s functionality in Portainer. This list may change over time
  as we find more issues and fix existing issue
---

# MicroK8s Known Issues

### Installing

#### **Metrics server**

For single-node clusters, if you have the metrics server addon selected when provisioning, you will most likely still need to enable the metrics API toggle manually in the Cluster Setup screen. This may be because the cluster creation finishes while the metrics server is still starting up, meaning it gets missed by the detection logic that sets the Cluster Setup defaults. For multi-node clusters the toggle defaults to on as expected.

#### **MicroK8s status command showing Portainer Server as enabled**

On versions of MicroK8s previous to 1.29, if a `microk8s status` command is run on the cluster, Portainer Server is incorrectly shown as enabled when only the Agent is running on the cluster. This is an issue with MicroK8s rather than Portainer, and is fixed in 1.29. For those users that are on previous versions of MicroK8s and want to upgrade to 1.29, to resolve this issue you can uninstall the Portainer Agent (`sudo microk8s kubectl delete namespace portainer`), upgrade MicroK8s to 1.29, then re-install the Portainer Agent.

### Upgrading and downgrading

#### **Upgrading the MicroK8s version**

When an upgrade of MicroK8s is performed on a multi-node cluster, Portainer performs the following steps on every node in the cluster:

1. Drain the node
2. Update the MicroK8s version (using the snap refresh command)
3. Uncordon the node to allow workloads to be redistributed onto it.

For single-node clusters, as there is nowhere to drain to we don’t do this and instead just perform step 2.

If upgrading a node fails, we try to revert MicroK8s to the previous version on the node and any others that have already been upgraded.

To drain a node, there should be enough resources available on the other nodes, otherwise it may fail.

If a node is stuck in SchedulingDisabled status, you can always uncordon it using the CLI or by clicking on the node and choosing the Active option in the dropdown on the Node Details screen.

There may be a chance that a cluster could have nodes not upgraded and left with an older version. It is better to SSH into the node and refresh the version manually.

#### **Hetzner 1.25 to 1.26 upgrade issues**

When attempting to upgrade from 1.25 to 1.26 on Hetzner environments, the upgrade reports successful but the cluster remains at 1.25. The upgrade logs show errors similar to the following:

<figure><img src="../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

We recommend either remaining at 1.25 or upgrading manually.

#### **Upgrading with node-specific addons**

If you have manually disabled an addon on a particular node (for those addons where it's possible to have them enabled on only certain nodes), on upgrading the cluster, Portainer currently re-enables the addon on all nodes (even those where you had manually disabled them via the CLI). We are looking at fixing this behavior in an upcoming release. In the meantime, we recommend taking note of any node-specific addon configurations and manually disabling addons on specific nodes after the upgrade is complete.

#### **Cilium and adding worker nodes**

If you have Cilium enabled, when you attempt to add a worker node, the node fails to be added and the following error is shown:

```
 Scaling error: failed to get cluster join information Process exited with status 1
```

We recommend disabling Cilium before adding/removing nodes or upgrading your cluster.

#### **Multi-node cluster upgrade issues**

Upgrading of a multi-node cluster fails on some nodes when:

1. The hostpath-storage addon is enabled
2. A persistent volume claim (PVC) is using hostpath-storage
3. A pod is using the PVC as a volume

To avoid this, we recommend removing the PVC before upgrading MicroK8s.

### Addons

#### **Resource limitations**

If you attempt to enable addons but do not have enough resources (CPU, RAM, disk) on your nodes, you will likely have them silently fail to enable (and so, not show as enabled). We recommend checking your resource availability and the requirements of your addons to ensure you can support them.

#### **Removing addons**

In some cases when attempting to remove an addon, the removal may fail with errors similar to the following:

```
failure to disable microk8s addon gopaddle-lite on node, error: | error="Process exited with status 1"
```

```
failure to disable microk8s addon argocd on node, error: | error="Process exited with status 127"
```

If this occurs we recommend attempting to remove the addon manually from the CLI.

### **Specific addon issues**

#### **openfaas and gopaddle-lite**

When you enable the openfaas addon, Portainer will also show that the gopaddle-lite addon is enabled, which is not the case. This is because openfaas creates a gateway deployment which gopaddle-lite uses to check whether it is enabled. The same situation occurs in reverse; if gopaddle-lite is enabled, openfaas will report as enabled as well.

#### **knative**

When performing an update, the knative addon can sometimes fail to re-enable after the update completes. If this happens you can manually re-enable the addon.

#### **hostpath-storage**

If you have the hostpath-storage addon enabled for your cluster and store some data in that storage, that data will be deleted if you disable the hostpath-storage addon. We recommend either leaving the addon enabled or ensuring you back up any data before disabling it.

#### **kube-ovn**

The Kube-OVN (all core) addon has certain prerequisites that must be set up before enabling. This addon has not been included in the list of those that can be enabled/disabled via the Portainer UI. We hope to add support for it in a future Portainer release.
