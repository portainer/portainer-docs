---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/admin/environments/groups
---

# Groups

Groups organize your environments in Portainer. As an example, you can create groups for development, staging and production to differentiate between environment roles. You can also use groups to define which environments are available to which users.

{% hint style="info" %}
Portainer Community Edition supports basic user and group assignments. For more complex user roles within groups, use Portainer Business Edition.
{% endhint %}

## Creating a group

From the menu expand **Environment-related**, select **Groups**, then click **Add group**.&#x20;

<figure><img src="../../.gitbook/assets/2.39-add-a-group.gif" alt=""><figcaption></figcaption></figure>

Define the properties of the group, using the table below as a guide.

| Field/Option            | Overview                                                |
| ----------------------- | ------------------------------------------------------- |
| Name                    | Give the group a descriptive name.                      |
| Description             | Optionally describe the group in more detail.           |
| Tags                    | Apply any tags to the group.                            |
| Associated environments | Select the environments to be categorized in the group. |

<figure><img src="../../.gitbook/assets/2.20-environments-groups-add-details.png" alt=""><figcaption></figcaption></figure>

When you're finished, click **Create the group**.

## Removing a group

When you no longer need a group, you can remove it by ticking the box next to the group then clicking **Remove**.

{% hint style="info" %}
Removing a group will not delete environments and users in that group. However, it may change the environments accessible to users who have their access assigned via a group.
{% endhint %}

## Manage policies of a group

[Policies](policies/) allow you to apply configuration, security rules, and cluster settings to groups of environments, rather than configuring each environment individually.

To manage the policies of a group, in the menu expand **Environment-related** then select **Groups**. Locate the environment group you want to manage the policies for, then select **Manage policies** under the **Actions** table header. This will direct you to the [Policies](policies/) page where you can manage existing polices or create new policies.&#x20;

<figure><img src="../../.gitbook/assets/2.39-group-to-policy-nav.gif" alt=""><figcaption></figcaption></figure>

## Manage access to an environment group

{% hint style="warning" %}
If a group's access is controlled by a [policy](policies/), you cannot add access at this level because the policy access takes precedence.
{% endhint %}

{% hint style="info" %}
If an environment and an individual user are in the same group, users will be tagged with `inherited` on the **Manage access** page. This means that the user is inheriting their access from the group, not the environment.

If you manually assign a user to an environment, and they are already assigned to it via a group, they will be tagged with `override` on the **Manage access** page, indicating that their individual access will override that of the group for this one environment. You can then modify their access in this special case.
{% endhint %}

To add or view access, from the menu expand **Environment-related** then select **Groups**. Locate the environment group you want to give users access to then select **Manage access** under the **Actions** table header.

To add access, select the users or teams you want to add using the dropdown. Then use the **Role** dropdown to select the role you want this user or team to have.

<figure><img src="../../.gitbook/assets/2.20-environments-access-groups-create.png" alt=""><figcaption></figcaption></figure>

Once all have been selected, click **Create access**.
