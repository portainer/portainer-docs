# Updating from Portainer 1.x

If you are updating a Portainer install that is currently running an image from the 1.x series, there are additional steps you must first take before updating to the most recent version. This document covers the steps depending on your current version - start from the instructions for your current version and work your way down.

* [Version 1.24.0 or older](from-1.x.md#updating-from-versions-older-than-1.24.1)
* [Version 1.24.1 or 1.24.2](from-1.x.md#updating-from-1.24.1-and-1.24.2)

{% hint style="info" %}
We only provide instructions for Docker Standalone and Docker Swarm environments here, as Portainer 1.x did not support Kubernetes environments.
{% endhint %}

## **Updating from versions older than 1.24.1** <a href="#updating-from-versions-older-than-1.24.1" id="updating-from-versions-older-than-1.24.1"></a>

If you are running a version prior to 1.24.1, you must first update to `portainer/portainer:1.24.2`. Your other applications/containers will not be removed.

### Docker Standalone <a href="#docker-standalone" id="docker-standalone"></a>

Use the following commands to stop then remove the old version, then run Portainer release 1.24.2.

```
docker stop portainer

docker rm portainer

docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer:1.24.2
```

### Docker Swarm <a href="#docker-swarm" id="docker-swarm"></a>

Run the following command to update the Portainer service to 1.24.2. This assumes your service is named `portainer_portainer` (you can confirm this by checking the output of `docker service ls`).

```
docker service update --image portainer/portainer:1.24.2 --force portainer_portainer
```

Verify that you are running version 1.24.2 by logging into Portainer and reading the version number on the bottom-left of the UI. You should now proceed to [update to version 2.0.0](from-1.x.md#updating-from-1.24.1-and-1.24.2).

## Updating from 1.24.1 and 1.24.2 <a href="#updating-from-1.24.1-and-1.24.2" id="updating-from-1.24.1-and-1.24.2"></a>

If you are running version 1.24.1 or 1.24.2 and want to update to the latest Portainer release, you must first update to `portainer/portainer-ce:2.0.0`. Use the following commands to stop then remove the old version. Your other applications/containers will not be removed.

### Docker Standalone <a href="#docker-standalone-1" id="docker-standalone-1"></a>

```
docker stop portainer
docker rm portainer
```

Now that you have stopped and removed the old version of Portainer, you must ensure that you have the latest version of the 2.0.0 image locally. You can do this with a `docker pull` command:

```
docker pull portainer/portainer-ce:2.0.0
```

Finally, deploy the updated version of Portainer:

```
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.0.0
```

### Docker Swarm <a href="#docker-swarm-1" id="docker-swarm-1"></a>

Run the following command to update the Portainer service to 2.0.0. This assumes your service is named `portainer_portainer` (you can confirm this by checking the output of `docker service ls`).

```
docker service update --image portainer/portainer-ce:2.0.0 --force portainer_portainer
```

Portainer CE 2.0.0 will now be deployed on your system, using the persistent data from the previous version, and will also update the Portainer database to the new version.

When the deployment is finished, go to `http://your-server-address:9000` and log in. Verify that you are running version 2.0.0 by logging into Portainer and reading the version number on the bottom-left of the UI.

## Updating from 2.0.0 <a href="#updating-from-2.0.0" id="updating-from-2.0.0"></a>

Once you have updated to 2.0.0 you can proceed with the [standard update instructions](./) for your platform, or if you are moving to Business Edition you can follow the [upgrade instructions](tobe/).
