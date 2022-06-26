# Applications

In Kubernetes, an application is a collection of configuration settings and variables required to run your app. This may consist of a single container or multiple containers with complex interoperability.

![](../../../.gitbook/assets/2.9.1-applications-splash.png)

Portainer lets you add applications either manually or through a manifest:

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

Version 2.9 has added support for deploying applications via [Helm](../helm/) charts:

{% content-ref url="../helm/deploy.md" %}
[deploy.md](../helm/deploy.md)
{% endcontent-ref %}

If you no longer require an application, it can be removed:

{% content-ref url="remove.md" %}
[remove.md](remove.md)
{% endcontent-ref %}
