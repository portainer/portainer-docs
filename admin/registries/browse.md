# Browse a registry

The registry manager extends your container management experience by giving you the ability to browse defined registries and manipulate their content. By using this feature, container users enjoy the benefit of having a single interface to manage any Docker registry deployment, providing a consistent look and feel across any provider.

{% hint style="info" %}
Your registry must support Docker Registry API v2 in order to integrate with Portainer.
{% endhint %}

From the menu select **Registries** then select **Browse** next to the registry that you want to browse.

![](../../.gitbook/assets/be-registries-browse-1.gif)

A list of the repositories within a registry, along with the number of tags for each repository appears. Select a repository to view its details.

![](../../.gitbook/assets/be-registries-browse-2.png)

The **Repository information** page provides the repository name, tag and image count, as well as a list of all tags. You can retag an image in order to promote it through the deployment lifecycle, or simply add or remove tags to annotate changes or usage.

This page also provides an option to clean up unused legacy images by safely deleting them. You can also remove the entire repository.

![](../../.gitbook/assets/be-registries-browse-3.png)



