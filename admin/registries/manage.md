# Manage a registry

The registry manager extends your container management experience by giving you the ability to browse defined registries and manipulate their content. By using this feature, container users enjoy the benefit of having a single interface to manage any Docker registry deployment, providing a consistent look and feel across any provider.

## Adding a tag

From the menu select **Registries**, select the registry you want to manage then click **browse**. From the list, select the repository you want to manage.

<figure><img src="../../.gitbook/assets/2.15-registries-manage.gif" alt=""><figcaption></figcaption></figure>

In the **Add tag** section at the top-right of the page, enter the name of your tag, select the image from the dropdown, then click the **Add tag** button.

<figure><img src="../../.gitbook/assets/2.15-registries-manage-addtag.png" alt=""><figcaption></figcaption></figure>

## Retagging

{% hint style="info" %}
If you host your own Docker registry, and you want the ability to retag images, you will need to add the following to your Docker registry's environment variables:

`REGISTRY_STORAGE_DELETE_ENABLED=TRUE`
{% endhint %}

From the menu select **Registries**, choose the registry you want to manage and click **browse**. From the list of repositories, select the repository you want to manage.

<figure><img src="../../.gitbook/assets/2.15-registries-manage.gif" alt=""><figcaption></figcaption></figure>

In the **Tags** section, locate the image you want to retag then click **Retag** to its right. Enter the new tag for the image then click the tick icon.

<figure><img src="../../.gitbook/assets/2.15-registries-manage-retag.png" alt=""><figcaption></figcaption></figure>

## Removing a tag

{% hint style="info" %}
If you host your own Docker registry, and want the ability to remove tags, you will need to add the following to your Docker registry's environment variables:

`REGISTRY_STORAGE_DELETE_ENABLED=TRUE`
{% endhint %}

From the menu select **Registries**, select the registry you want to manage then click **Browse**. From the list, select the repository you want to manage.

<figure><img src="../../.gitbook/assets/2.15-registries-manage.gif" alt=""><figcaption></figcaption></figure>

Tick the checkbox next to the tag you want to remove then click **Remove**.

<figure><img src="../../.gitbook/assets/2.15-registries-manage-removetag.gif" alt=""><figcaption></figcaption></figure>

When the confirmation message appears, if you're sure, click **Remove**.
