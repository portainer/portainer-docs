---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/MdgxA76kWxcRmwybM8Ft/admin/environments/policies
---

# Policies

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=ca-file).
{% endhint %}

{% hint style="warning" %}
Policies can only be applied to Edge (Standard) Agent environments that are of version 2.37.0 or greater.
{% endhint %}

Policies introduces a centralized configuration and policy inheritance as part of the Fleet Governance Policies feature set. This allows you to apply configuration, security rules, and cluster settings to groups of environments, rather than configuring each environment individually. By defining settings once at the group level, all child environments inherit those values, helping you keep access consistent and reduce configuration drift. Any created policies will override existing environment level access.

## Create a new policy

From the menu, under **Environment-related**, select **Policies** then select **Create policy**.

<figure><img src="../../../.gitbook/assets/2.39-Create-policy.gif" alt=""><figcaption></figcaption></figure>

There are multiple policy types available, depending on the environment type you are managing and the kind of access you want to enforce. You can use the search function or filter by environment type or policy category to narrow down the list.

After selecting a policy type, select **Continue** at the bottom of the page to open the configuration form. The fields shown will vary depending on the policy you are creating, each form guides you through creation of that specific policy. Select an environment type below for more details on creating the policy.&#x20;

{% content-ref url="kubernetes-policies/" %}
[kubernetes-policies](kubernetes-policies/)
{% endcontent-ref %}

{% content-ref url="docker-policies/" %}
[docker-policies](docker-policies/)
{% endcontent-ref %}

{% content-ref url="any-environment-type-policies/" %}
[any-environment-type-policies](any-environment-type-policies/)
{% endcontent-ref %}

## View policy details

From the menu, under **Environment-related**, select **Policies**. The policies page lists all existing policies. To see the details of an existing policy, click on the policy name.&#x20;

<figure><img src="../../../.gitbook/assets/2.39-policy-details.gif" alt=""><figcaption></figcaption></figure>

Three tabs display the policy details: **Info**, **Attachments**, and **Settings**.

### Info

The **Info** tab displays general information about the policy setup.

| Field/Option        | Overview                                                                                                                                                                                                                                                          |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy name         | <p>The name of the policy and how it appears in the Policies list on the dashboard.<br>To update the policy name, click the pencil icon next to the name, then click the tick to save the change.</p>                                                             |
| Type                | The type of policy: RBAC, Security, Setup, or Registry.                                                                                                                                                                                                           |
| Policy Requirements | The policy requirements define the conditions an environment must meet to be added to this policy, such as the environment type and agent version. Currently, policies can only be applied to Edge (Standard) Agent environments running version 2.37.0 or later. |
| Last updated        | The date and time that the policy was last updated.                                                                                                                                                                                                               |

<figure><img src="../../../.gitbook/assets/2.39-policy-info.png" alt=""><figcaption></figcaption></figure>

### Attachments&#x20;

The attachment tab displays details about the environments attached to the policy. Within this view, you can filter on status, or use the search bar to find specific environments.&#x20;

{% hint style="info" %}
If a policy attachment fails, it is automatically retried every 15 minutes. If the **Message** field shows “Failed to install/upgrade Helm chart”, the issue is at the environment level and must be resolved before the policy can be applied.
{% endhint %}

| Field/Option       | Overview                                                                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment groups | <p>The environments applied to this policy.<br>Add environments to the policy by selecting groups from the dropdown menu.</p>                                  |
| Environment name   | The name of the environment within the attached group. Click the environment name to open the environment dashboard.                                           |
| Status             | A status indicating whether the policy is successfully applied to the environment. If the status is not Active, the policy will not apply to the environment.  |
| Message            | If the status is not Active, the displayed message explains why the policy could not be applied to the environment.                                            |
| Last Attempt       | The date and time the policy was last applied or attempted to be applied to the environment.                                                                   |

<figure><img src="../../../.gitbook/assets/2.39-policy-attachments-1.png" alt=""><figcaption></figcaption></figure>

### Settings&#x20;

The Settings tab shows the policy configuration. Settings vary by policy type. Details for each policy type are covered in the [Kubernetes policies](kubernetes-policies/) and [Docker policies](docker-policies/) sections of this documentation.

## Remove a policy

To remove a policy, from the menu, under **Environment-related**, select **Policies**. Tick the checkbox next to the policy you want to remove then click **Remove**.

<figure><img src="../../../.gitbook/assets/2.39-remove-policy.gif" alt=""><figcaption></figcaption></figure>
