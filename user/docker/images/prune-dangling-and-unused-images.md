# Prune dangling and unused images

To remove dangling or unused images from an environment, navigate to **Images** in your environment menu and click **Prune** from the **Images** list.

<figure><img src="../../../.gitbook/assets/2.41-image-prune.gif" alt=""><figcaption></figcaption></figure>

You can identify dangling images by the **dangling** tag, and unused images by the **unused** label displayed next to the image ID.

<figure><img src="../../../.gitbook/assets/2.41-dangling-unused-images.png" alt=""><figcaption></figcaption></figure>

On selecting **Prune**, Portainer will by default delete all untagged (dangling) images, equivalent to running `docker image prune`. To also remove tagged images that are not in use by any container, select **Delete all unused images** in the confirmation dialog - this is the equivalent to running `docker image prune -a`.

<figure><img src="../../../.gitbook/assets/2.41-image-prune-confirm.png" alt=""><figcaption></figcaption></figure>

Press **Continue** to complete the prune. On success, a confirmation dialog will show how much disk space was reclaimed.

{% hint style="info" %}
If a prune operation reports 0B reclaimed, this is likely because the image layers are still referenced by existing images, or are being retained in the Docker build cache. See this [Docker forum discussion](https://forums.docker.com/t/cant-delete-images-with-docker-prune-but-with-docker-system-prune-and-docker-builder-prune/139267/8) for more detail on this behaviour.
{% endhint %}
