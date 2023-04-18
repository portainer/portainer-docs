# Connect to the Docker Socket

Connecting to the Docker socket directly can only be done from the local environment. Before you begin, ensure the user running the Portainer Server container has permissions to access the Docker socket.

From the menu select **Environments** then click **Add environment**.

<figure><img src="../../../../.gitbook/assets/2.18-environments-add.gif" alt=""><figcaption></figcaption></figure>

Next, select **Docker Standalone** as the environment type then click **Start Wizard**. Select the **Socket** option and your platform. You will be shown the required parameter to pass to the Portainer container as part of your `docker run` command.

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-docker-socket-command.png" alt=""><figcaption></figcaption></figure>

Fill out the fields based on the table below.

| Field/Option                 | Overview                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Name                         | Give the environment a descriptive name.                                             |
| Override default socket path | Toggle this option on to override the default `/var/run/docker.sock` socket path.    |
| Socket Path                  | If **Override default socket path** is enabled, enter the path to the Docker socket. |

{% hint style="info" %}
Ensure that if you change the Socket Path, that you update the required bind mount parameter above to suit.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-docker-socket-details.png" alt=""><figcaption></figcaption></figure>

As an optional step you can expand the **More settings** section to categorize the environment by adding it to a [group](../../groups.md) or [tagging](../../tags.md) it for better searchability.

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-docker-moresettings.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Connect**. If you have other environments to configure click **Next** to proceed, otherwise click **Close** to return to the list of environments.
