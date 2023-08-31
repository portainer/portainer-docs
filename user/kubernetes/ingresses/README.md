# Ingresses

An **Ingress** in Kubernetes is an API object that provides routing rules to manage external users' access to the services in a Kubernetes cluster, typically via HTTPS/HTTP. With Ingress, you can easily set up rules for routing traffic without creating a bunch of Load Balancers or exposing each service on the node.

To view, edit or create ingresses in your environment, select **Ingresses** from the left hand menu.

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

All the Ingresses that a user has access to are listed on this page.&#x20;

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

New Ingress objects can be created either manually or through a manifest:

{% content-ref url="add.md" %}
[add.md](add.md)
{% endcontent-ref %}

{% content-ref url="manifest.md" %}
[manifest.md](manifest.md)
{% endcontent-ref %}

If you no longer require an Ingress, it can be removed:

{% content-ref url="remove-an-ingress.md" %}
[remove-an-ingress.md](remove-an-ingress.md)
{% endcontent-ref %}
