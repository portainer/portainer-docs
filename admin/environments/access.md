# Manage access to environments

{% hint style="info" %}
Environments can be [grouped](groups.md) for organizational purposes. If an environment and an individual user are in the same group, users will be tagged with `inherited` on the **Manage access** page. This means that the user is inheriting their access from the group, not the environment.

If you manually assign a user to an environment, and they are already assigned to it via a group, they will be tagged with `override` on the **Manage access** page, indicating that their individual access will override that of the group for this one environment. You can then modify their access in this special case.
{% endhint %}

From the menu select **Environments**. Locate the environment you want to give users access to then select **Manage access** at the end of the row.

![](../../.gitbook/assets/2.9.1-environments-access-1.gif)

Next, select the users or teams you want to add using the dropdown.&#x20;

{% hint style="info" %}
Setting roles for users or teams is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=rbac-roles).
{% endhint %}

![](../../.gitbook/assets/2.9.1-environments-access-2.png)

Once all have been selected, click **Create access**.
