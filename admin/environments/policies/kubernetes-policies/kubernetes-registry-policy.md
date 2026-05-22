---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/admin/environments/policies/kubernetes-policies/kubernetes-registry-policy
---

# Create a Kubernetes registry policy

Define a policy by managing registry access and configuration for Kubernetes clusters.

To create a Kubernetes registry policy, in the menu, under **Environment-related**, select **Policies** then select **Create policy**. From the policy type list, navigate to the **Kubernetes** > **Registry** section, select **Custom** then select **Continue** to begin configuring the policy.

{% hint style="info" %}
Currently, only custom registry policies can be created. Future improvements to the policies feature will introduce policy templates.
{% endhint %}

{% hint style="info" %}
When registry access is added to a namespace, Portainer creates a registry secret and adds it to the default [Service Account](../../../../user/kubernetes/more-resources/service-accounts.md) as an imagePullSecret, allowing Pods in the namespace to pull images from the private registry automatically. When registry access is removed, Portainer deletes the registry secret and removes it from the default Service Account while retaining any other existing imagePullSecrets.
{% endhint %}

| Field/Option       | Overview                                                                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name               | Define a name for this policy.                                                                                                                                                                                                       |
| Environment groups | <p>Select one or more Kubernetes environment <a href="../../groups.md">groups</a> from the dropdown menu.<br>If the selected group is already included in an existing policy, a warning icon will appear next to the group name.</p> |
| Select registry    | ​Select a [registry](../../../../user/kubernetes/cluster/registries.md) from the dropdown menu. ​                                                                                                                                    |
| Namespaces         | Select one or more [namespaces](../../../../user/kubernetes/namespaces/) that you want to have access to the selected registry.                                                                                                      |

<figure><img src="../../../../.gitbook/assets/2.37-kubernetes-registry.png" alt=""><figcaption></figcaption></figure>

Click **Add Access** to add the registry to the access list. You can add multiple entries, and each will appear in the **Registry access list** table. To remove a registry, select the checkbox next to the entry and click **Remove** in the top right corner of the table.

To ensure that only approved container images can be deployed, enable **Restrict to allowed sources** and specify the images that are permitted.

When adding an allowed image, you can choose the scope:

* **Global** - The image can be deployed across the entire cluster.
* **Specific namespaces** - The image can only be deployed within selected namespaces.

{% hint style="info" %}
Restricting container images requires Kubernetes 1.30 or later.
{% endhint %}

The **Allowed sources** list is pre-populated with common images, including those required for Portainer to operate.

| Field/Option        | Overview                                                                                                                                                                                                                                                                           |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Restrict sources    | When enabled, Portainer creates a Kubernetes `ValidatingAdmissionPolicy` to ensure only container images from approved registries can be deployed. Any Pod that references an image from an unapproved source will be rejected at admission time and will not be created.          |
| Registry URL prefix | <p>The container image or <a href="../../../../user/docker/host/registries.md">registry</a> that is permitted for deployment.</p><p>Enter the registry hostname and optional path prefix. Only images whose fully-qualified reference starts with this prefix will be allowed.</p> |
| Scope               | Specify whether the allowed access should apply cluster-wide (Global) or be restricted to selected [namespaces](../../../../user/kubernetes/namespaces/) only.                                                                                                                     |

<figure><img src="../../../../.gitbook/assets/2.40.0-kube-registry-policy.png" alt=""><figcaption></figcaption></figure>

Click **Add source** to add an image to the allowed sources list. You can add multiple entries, and each will appear in the **Allowed sources** table. To remove a source, select the checkbox next to the entry and click **Remove** in the top right corner of the table.

When you have finished adding access, click **Create policy**. A confirmation screen displays the changes being made and any existing policy that will be replaced. Click **Confirm** to acknowledge the changes and create the policy.
