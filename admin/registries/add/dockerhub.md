# Add a DockerHub account

Portainer provides built-in support for anonymous Docker Hub access, but in some cases you may need to log into Docker Hub (for example, private images or to support pulling a large number of images).

From the menu select **Registries** then click **Add registry** and select **DockerHub** as the registry provider.

![](../../../.gitbook/assets/2.9-registries-add-dockerhub-1.gif)

Complete the form, using the table below as a guide.

| Field/Option       | Overview                                                                                                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | Enter a name for the registry. This is how it will appear in the list of registries and when selecting a registry to pull from.                                                                                                          |
| DockerHub username | Enter the username you use to connect to Docker Hub.                                                                                                                                                                                     |
| DockerHub password | Enter a Docker Hub personal access token that corresponds to the username above. You can create an access token by logging into Docker Hub, clicking your username in the top right and going to Account Settings then the Security tab. |

![](../../../.gitbook/assets/2.9-registries-add-dockerhub-2.png)

When the form is complete, click **Add registry**.

{% hint style="warning" %}
Simply adding a registry will not make that registry available to non-administrator users. Once you have added the registry to Portainer, you will need to add access to the registry within [Host](../../../user/docker/host/registries.md) / [Swarm](../../../user/docker/swarm/registries.md) / [Cluster](../../../user/kubernetes/cluster/registries.md) for each environment that needs access.
{% endhint %}

