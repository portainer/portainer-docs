# Access a container's console

From the menu select **Containers**, select the container then select **Console**.

<figure><img src="../../../.gitbook/assets/2.15-docker_containers_container_console.gif" alt=""><figcaption></figcaption></figure>

Select the command and the user you want to give access to, then click **Connect**.

{% hint style="info" %}
For Alpine Linux containers, you must select the`/bin/ash` command.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-docker_containers_container_console_execute.png" alt=""><figcaption></figcaption></figure>

If you need to define a command other than those provided, toggle the **Use custom command** option on. Once connected, you can run commands in the console the same as any other Linux system.

<figure><img src="../../../.gitbook/assets/2.20-containers-console-connected.png" alt=""><figcaption></figcaption></figure>

To disconnect from the console session, click the **Disconnect** button.
