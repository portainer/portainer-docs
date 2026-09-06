# Registries

A registry is a repository of container images or OCI-format Helm charts that can be pulled and deployed on a containerized infrastructure. Portainer supports connecting registries to the Portainer Server instance, allowing you to use those registries when deploying containers.

{% hint style="info" %}
OCI registries are only supported in Portainer Business Edition.
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-admin-registries.png" alt=""><figcaption></figcaption></figure>

{% content-ref url="add/" %}
[add](add/)
{% endcontent-ref %}

{% content-ref url="add/custom.md" %}
[custom.md](add/custom.md)
{% endcontent-ref %}

With Portainer Business Edition you can also browse and manage your registries within Portainer itself.

{% content-ref url="browse.md" %}
[browse.md](browse.md)
{% endcontent-ref %}

{% content-ref url="manage.md" %}
[manage.md](manage.md)
{% endcontent-ref %}

## Hiding anonymous Docker Hub

By default the **Docker Hub (anonymous)** registry is available to all users. If you would prefer to hide this from the registry selection, you can click **Hide for all users**.

<figure><img src="../../.gitbook/assets/2.15-admin-registries-dockerhub-hide.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
As the anonymous Docker Hub access is built into Docker itself this does not fully disable access to this registry, but it does hide it from the dropdown list of registries in the Portainer UI. In addition, if no other registries are available to a user the Docker Hub (anonymous) option will be displayed regardless of this setting.
{% endhint %}
