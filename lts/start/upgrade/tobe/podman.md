# Podman

{% hint style="warning" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

{% hint style="info" %}
Before you begin, copy the license key from the email we sent you.
{% endhint %}

To upgrade to Portainer Business Edition for Podman, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
podman stop portainer
podman rm portainer
```

Now that you have stopped and removed the old version of Portainer, run this command to deploy the most up to date version of Portainer Business:

```
podman run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name=portainer --restart=always --pull=always --privileged -v /run/podman/podman.sock:/run/podman/podman.sock -v portainer_data:/data portainer/portainer-ee:lts
```

Log out of Portainer (if currently logged in) then log back in. When you log in for the first time, you'll be asked to enter your license key. Paste this in from the email we sent you.

<figure><img src="../../../.gitbook/assets/2.20-initial-setup-license.png" alt=""><figcaption></figcaption></figure>

'Business Edition' now appears in the bottom-left corner.
