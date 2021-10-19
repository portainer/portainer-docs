# Manage access to endpoint groups

{% hint style="info" %}
Endpoints can be [grouped](groups.md) for organizational purposes. If an endpoint and an individual user are in the same group, users will be tagged with `inherited` on the **Manage access** page. This means that the user is inheriting their access from the group, not the endpoint.

If you manually assign a user to an endpoint, and they are already assigned to it via a group, they will be tagged with `override` on the **Manage access** page, indicating that their individual access will override that of the group for this one endpoint. You can then modify their access in this special case.
{% endhint %}

From the menu select **Endpoints** then select** Groups**. Locate the endpoint group you want to give users access to then select **Manage access** at the end of the row.

![](../../.gitbook/assets/endpoints-access-groups-1.gif)

Next, select the users or teams you want to add using the dropdown. Once all have been selected, click **Create access**.
