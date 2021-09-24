# Applications

In Kubernetes, an application is a collection of configuration settings and variables required to run your app. This may consist of a single container or multiple containers with complex interoperability.

![The Applications interface](../../../.gitbook/assets/2.9-applications-splash.png)

Portainer lets you add applications either manually or through a manifest:

{% page-ref page="add.md" %}

{% page-ref page="manifest.md" %}

You can also inspect a running application:

{% page-ref page="inspect.md" %}

Version 2.9 has added support for deploying applications via [Helm](../helm/) charts:

{% page-ref page="../helm/deploy.md" %}

If you no longer require an application, it can be removed:

{% page-ref page="remove.md" %}

