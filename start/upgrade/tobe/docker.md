# Docker Standalone

{% hint style="warning" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

{% hint style="info" %}
Before you begin, copy the license key from the email we sent you.
{% endhint %}

To upgrade to Portainer Business Edition for Docker Standalone, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```text
docker stop portainer
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, run this command to deploy the latest version of Portainer Business:

```text
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always --pull=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
```

Log out of Portainer \(if currently logged in\) then log back in. When you log in for the first time, you'll be asked to enter your license key. Paste this in from the email we sent you.

![](../../../.gitbook/assets/upgrade-license.png)

'Business Edition' now appears in the bottom-left corner.

