# Containers

Put simply, a container is a runnable instance of an image. Containers do not hold any persistent data and therefore can be destroyed and recreated as needed.

<figure><img src="../../../.gitbook/assets/2.15-docker_containers_containers.png" alt=""><figcaption></figcaption></figure>

The circle next to the image name indicates whether the local image is up to date, with a green circle indicating it is up to date and a red circle indicating that there is a newer version of the image available at the remote registry. A grey circle indicates Portainer was unable to determine whether there is an update available for the image.

For more on how this works, have a look at [this knowledge base article](https://portal.portainer.io/knowledge/how-does-the-image-update-notification-icon-work).

{% content-ref url="add.md" %}
[add.md](add.md)
{% endcontent-ref %}

Once a container has been created you can inspect it, edit or duplicate it, toggle a container webhook, attach volumes, view logs and statistics, edit ownership, and access its console.

{% content-ref url="view.md" %}
[view.md](view.md)
{% endcontent-ref %}

{% content-ref url="inspect.md" %}
[inspect.md](inspect.md)
{% endcontent-ref %}

{% content-ref url="edit.md" %}
[edit.md](edit.md)
{% endcontent-ref %}

{% content-ref url="advanced.md" %}
[advanced.md](advanced.md)
{% endcontent-ref %}

{% content-ref url="webhooks.md" %}
[webhooks.md](webhooks.md)
{% endcontent-ref %}

{% content-ref url="attach-volume.md" %}
[attach-volume.md](attach-volume.md)
{% endcontent-ref %}

{% content-ref url="logs.md" %}
[logs.md](logs.md)
{% endcontent-ref %}

{% content-ref url="ownership.md" %}
[ownership.md](ownership.md)
{% endcontent-ref %}

{% content-ref url="stats.md" %}
[stats.md](stats.md)
{% endcontent-ref %}

{% content-ref url="console.md" %}
[console.md](console.md)
{% endcontent-ref %}

If you no longer need a container, you can remove it.

{% content-ref url="remove.md" %}
[remove.md](remove.md)
{% endcontent-ref %}



