---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/MdgxA76kWxcRmwybM8Ft/user/edge/stacks/add
---

# Add a new Edge Stack

From the menu select **Edge Stacks** then click **Add stack**.

<figure><img src="../../../../.gitbook/assets/2.41-edge-stack.gif" alt=""><figcaption></figcaption></figure>

Give the stack a descriptive name then select one or more [Edge Groups](../../groups.md).

<figure><img src="../../../../.gitbook/assets/2.19-edge-stacks-add-name.png" alt=""><figcaption></figcaption></figure>

In **Deployment type**, select the type of deployment you are performing.

{% hint style="info" %}
This may be auto-selected based on the environments in your choice of [Edge Groups](../../groups.md).
{% endhint %}

<figure><img src="../../../../.gitbook/assets/2.41-deployment-type.png" alt=""><figcaption></figcaption></figure>

Next, define how to deploy your app from one of the **Build Method** options. These options will differ based on your selected development type.

{% content-ref url="compose-deployment.md" %}
[compose-deployment.md](compose-deployment.md)
{% endcontent-ref %}

{% content-ref url="kubernetes-deployment.md" %}
[kubernetes-deployment.md](kubernetes-deployment.md)
{% endcontent-ref %}

{% content-ref url="helm-chart-deployment.md" %}
[helm-chart-deployment.md](helm-chart-deployment.md)
{% endcontent-ref %}
