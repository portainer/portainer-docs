# Add a new registry

From the menu select **Registries** then click **Add registry**.

![](../../../.gitbook/assets/2.11-registries-add-1.gif)

From the **Registry provider** section select the type of registry you want to add.

{% hint style="warning" %}
Simply adding a registry will not make that registry available to non-administrator users. Once you have added the registry to Portainer, you will need to add access to the registry within [Host](../../../user/docker/host/registries.md) / [Swarm](../../../user/docker/swarm/registries.md) / [Cluster](../../../user/kubernetes/cluster/registries.md) for each environment that needs access.
{% endhint %}

Portainer provides configuration support for a number of popular registry providers:

{% content-ref url="dockerhub.md" %}
[dockerhub.md](dockerhub.md)
{% endcontent-ref %}

{% content-ref url="aws-ecr.md" %}
[aws-ecr.md](aws-ecr.md)
{% endcontent-ref %}

{% content-ref url="quay.md" %}
[quay.md](quay.md)
{% endcontent-ref %}

{% content-ref url="proget.md" %}
[proget.md](proget.md)
{% endcontent-ref %}

{% content-ref url="azure.md" %}
[azure.md](azure.md)
{% endcontent-ref %}

{% content-ref url="gitlab.md" %}
[gitlab.md](gitlab.md)
{% endcontent-ref %}

You can also add your own custom registry:

{% content-ref url="custom.md" %}
[custom.md](custom.md)
{% endcontent-ref %}
