# Create a Kubernetes cluster

With Portainer Business Edition you can create a Kubernetes cluster on your existing infrastructure directly from the Portainer UI.&#x20;

{% hint style="info" %}
Portainer uses SSH to connect to your infrastructure and deploy Kubernetes and the Portainer Agent. You can provide your SSH credentials during the deployment or [set them up ahead of time](../../../settings/credentials/ssh.md) in [Shared credentials](../../../settings/credentials/).
{% endhint %}

At present, we support deploying MicroK8s:

{% content-ref url="microk8s/" %}
[microk8s](microk8s/)
{% endcontent-ref %}
