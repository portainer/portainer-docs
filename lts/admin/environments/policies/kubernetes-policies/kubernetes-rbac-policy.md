# Create a Kubernetes RBAC policy

Define a policy based on access permissions and role-based access control for Kubernetes clusters.&#x20;

When choosing an RBAC solution, choose from permission models that match native Kubernetes or legacy Portainer privileges:

**Native Kubernetes RBAC:** Permissions granted across cluster, team, and namespace roles accumulate, so users receive the combined access of all their assigned roles. This matches standard Kubernetes behavior and is the recommended option.

**Legacy Portainer privileges:** Where roles overlap, the most restrictive role takes precedence, limiting access to the lowest level granted across all assigned roles. This preserves the behavior of older Portainer versions.

To create a Kubernetes RBAC policy, select **Policies** under **Environment-related** in the menu, then select **Create policy**. Under **Kubernetes > RBAC**, select **Custom** then select **Continue** to begin configuring the policy.

{% hint style="info" %}
Currently, only custom RBAC policies can be created. Future improvements to the policies feature will introduce policy templates.
{% endhint %}

| Field/Option       | Overview                                                                                                                                                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | Define a name for this policy.                                                                                                                                                                                                                                                                                    |
| Environment groups | <p>Select one or more Kubernetes environment <a href="../../groups.md">groups</a> from the dropdown menu.<br>If the selected group is already included in an existing policy, a warning icon will appear next to the group name.</p>                                                                              |
| Permission model   | Choose between native Kubernetes RBAC or legacy Portainer privileges as the basis for this policy.                                                                                                                                                                                                                |
| Users/teams        | Select one or more [users](../../../user/users.md) or [teams](../../../user/teams/) from the dropdown menu.                                                                                                                                                                                                       |
| Role               | <p>Select the role you want to assign to the users or teams.<br>If you select a <a href="../../../../user/kubernetes/namespaces/">namespace-scoped role</a>, a <strong>Namespaces</strong> field will appear, allowing you to pick one or more existing namespaces, or to type a name to add a new namespace.</p> |

<figure><img src="../../../../.gitbook/assets/2.43-RBAC-policy-configuration.png" alt=""><figcaption></figcaption></figure>

Click **Add Access** to add the user or team to the policy. You can add multiple users or teams, and each entry appears in the **Access list**. You can **Edit** or **Remove** any entries in the Access list using the buttons in the **Actions** menu.&#x20;

When you have finished adding access, click **Create policy**. A confirmation screen displays the changes being made and any existing policy that will be replaced. Click **Confirm** to acknowledge the changes and create the policy.
