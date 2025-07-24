# Applications

In Kubernetes, an application is a collection of configuration settings and variables required to run your app. This may consist of a single container or multiple containers with complex interoperability.

<figure><img src="../../../.gitbook/assets/2.27-kubernetes-applications-list.png" alt=""><figcaption></figcaption></figure>

You can filter the list of applications by namespace using the **Namespace** dropdown.

Portainer lets you add applications either using a form or through code (for example a manifest or a Helm chart):

{% content-ref url="add.md" %}
[add.md](add.md)
{% endcontent-ref %}

{% content-ref url="manifest.md" %}
[manifest.md](manifest.md)
{% endcontent-ref %}

You can also inspect a running application:

{% content-ref url="inspect.md" %}
[inspect.md](inspect.md)
{% endcontent-ref %}

{% content-ref url="inspect-helm.md" %}
[inspect-helm.md](inspect-helm.md)
{% endcontent-ref %}

Applications can be edited, webhooks can be configured and volumes can be detached:

{% content-ref url="edit.md" %}
[edit.md](edit.md)
{% endcontent-ref %}

{% content-ref url="webhooks.md" %}
[webhooks.md](webhooks.md)
{% endcontent-ref %}

{% content-ref url="detach-volume.md" %}
[detach-volume.md](detach-volume.md)
{% endcontent-ref %}

If you no longer require an application, it can be removed:

{% content-ref url="remove.md" %}
[remove.md](remove.md)
{% endcontent-ref %}
