# Services

{% hint style="info" %}
The **Services** menu is only available to Docker Swarm endpoints.
{% endhint %}

A service consists of an image definition and container configuration as well as instructions on how those containers will be deployed across a Swarm cluster.

<figure><img src="../../../.gitbook/assets/2.15-docker_services_list (1).png" alt=""><figcaption></figcaption></figure>

When the [new image notification](../swarm/setup.md#other) feature is enabled, the circle next to the image name indicates whether the local image is up to date, with a green circle indicating it is up to date and a red circle indicating that there is a newer version of the image available at the remote registry. A grey circle indicates Portainer was unable to determine whether there is an update available for the image.

For more on how this works, have a look at [this knowledge base article](https://portal.portainer.io/knowledge/how-does-the-image-update-notification-icon-work).

{% content-ref url="add.md" %}
[add.md](add.md)
{% endcontent-ref %}

{% content-ref url="configure.md" %}
[configure.md](configure.md)
{% endcontent-ref %}

Once a service has been created you can scale it to meet your needs, as well as view individual task status and logs.

{% content-ref url="scale.md" %}
[scale.md](scale.md)
{% endcontent-ref %}

{% content-ref url="tasks.md" %}
[tasks.md](tasks.md)
{% endcontent-ref %}

{% content-ref url="logs.md" %}
[logs.md](logs.md)
{% endcontent-ref %}

If you need to undo some changes to a service, you can roll it back.

{% content-ref url="rollback.md" %}
[rollback.md](rollback.md)
{% endcontent-ref %}

You can also configure webhooks for your services.

{% content-ref url="webhooks.md" %}
[webhooks.md](webhooks.md)
{% endcontent-ref %}

