# Docker Standalone

{% hint style="warning" %}
This article assumes that you used our recommended deployment scripts.
{% endhint %}

{% hint style="info" %}
Before you begin, copy the license key from the email we sent you.
{% endhint %}

The process for switching to Portainer Business Edition is straightforward but does depend on which version of Portainer you are currently running. Start from the instructions for your current version and work your way down.

* [Version 1.24.0 or older](docker.md#upgrading-from-versions-older-than-1.24.1)
* [Version 1.24.1 or 1.24.2](docker.md#upgrading-from-1.24.1-and-1.24.2)
* [Version 2.0.0 or newer](docker.md#upgrading-from-version-2.0.0-and-later)

## **Upgrading from versions older than 1.24.1**

If you are running a version prior to 1.24.1, you must first upgrade to `portainer/portainer:1.24.2`. Your other applications/containers will not be removed. Use the following commands to stop then remove the old version, then run Portainer release 1.24.2:

```
docker stop portainer

docker rm portainer

docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:1.24.2
```

Verify that you are running version 1.24.2 by logging into Portainer and reading the version number on the bottom-left of the UI. You should now proceed to [upgrade to version 2.0.0](docker.md#upgrading-from-1.24.1-and-1.24.2).

## Upgrading from 1.24.1 and 1.24.2

If you are running a version prior to 1.24.1 and want to upgrade to the latest Portainer release, you must first upgrade to `portainer/portainer-ce:2.0.0`, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
docker stop portainer
```

```
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, you must ensure that you have the latest version of the image locally. You can do this with a `docker pull` command:

```
docker pull portainer/portainer-ce:2.0.0
```

Finally, deploy the updated version of Portainer:

```
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.0.0
```

Portainer CE 2.0.0 will now be deployed on your system, using the persistent data from the previous version, and will also upgrade the Portainer database to the new version.

When the deployment is finished, go to `http://your-server-address:9000` and log in. Verify that you are running version 2.0.0 by logging into Portainer and reading the version number on the bottom-left of the UI. You can now [upgrade to the latest version](docker.md#upgrading-from-version-2.0.0-and-later) of Portainer Business Edition.

## Upgrading from version 2.0.0 and later

To upgrade to Portainer Business Edition for Docker Standalone, use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

```
docker stop portainer
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, run this command to deploy the most up to date version of Portainer Business:

```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name=portainer --restart=always --pull=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:lts
```

Log out of Portainer (if currently logged in) then log back in. When you log in for the first time, you'll be asked to enter your license key. Paste this in from the email we sent you.

<figure><img src="../../../.gitbook/assets/2.20-initial-setup-license.png" alt=""><figcaption></figcaption></figure>

'Business Edition' now appears in the bottom-left corner.
