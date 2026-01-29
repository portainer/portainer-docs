---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/udjBY77rL45c6FTs07xf/admin/environments/policies/kubernetes-rbac-policy
---

# Create a Kubernetes RBAC policy

Define a policy based on access permissions and role-based access control for Kubernetes clusters.

To create a Kubernetes RBAC policy, in the menu, under **Additional Functionality**, select **Policy Based Management** and then select **Create policy**. From the policy type list, navigate to the **Kubernetes** > **RBAC** section, select **Custom** then select **Continue** to begin configuring the policy.

{% hint style="info" %}
Currently, only custom RBAC policies can be created. Future improvements to the policies feature will introduce policy templates.
{% endhint %}

| Field/Option       | Overview                                                                                                                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | Define a name for this policy.                                                                                                                                                                                                                                                                             |
| Environment groups | <p>Select one or more Kubernetes environment <a href="../../../../admin/environments/groups.md">groups</a> from the dropdown menu.<br>If the selected group is already included in an existing policy, a warning icon will appear next to the group name.</p>                                              |
| Users/teams        | Select one or more [users](../../../../admin/user/users.md) or [teams](../../../../admin/user/teams/) from the dropdown menu.                                                                                                                                                                              |
| Role               | <p>Select the role you want to assign to the users or teams. <br>If you select a <a href="../../../kubernetes/namespaces/">namespace-scoped role</a>, a <strong>Namespaces</strong> field will appear, allowing you to pick one or more existing namespaces, or to type a name to add a new namespace.</p> |

<figure><img src="../../../../.gitbook/assets/2.37.0-Kube-RBAC-example.png" alt=""><figcaption></figcaption></figure>

Click **Add Access** to add a user or team to the policy. You can add multiple users or teams, and each entry appears in the **Access list**. When you have finished adding access, click **Create policy**. A confirmation screen displays the changes being made and any existing policy that will be replaced. Click **Confirm** to acknowledge the changes and create the policy.
