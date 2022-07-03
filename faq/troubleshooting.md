# Troubleshooting

## My Portainer Extensions license has expired. What can I do?

In December 2020, Portainer stopped the extensions program as part of the release of Portainer 2.0. The RBAC, External Authentication and Registry Management capabilities offered with extensions was replaced with the dedicated Business Edition. The 1.24.x code reached the end of it’s End of Life process on December 31, 2021.&#x20;

#### **What does End of Life for 1.24.x and Extensions products mean?**

* The 1.24.x image will be permanently removed from Docker Hub therefore if the original image is required (ever), it will need to have been locally stored by the user prior to that date.
* Any and all effort to update or maintain the 1.24.x codebase by the Portainer Team will cease. This includes the addressing of any new security vulnerabilities identified by the community.
* The source code will be archived in GitHub.

As a Portainer Extensions user, you have two options:

### Option 1: 5 Nodes Free

If you have 5 nodes or less in your environment, we can send you a license for 5 Portainer Business nodes free. Please [complete the form](https://www.portainer.io/pb5-free-node-program-early-access-invite) and our team will be in touch.

### Option 2: Purchase a license for more than 5 nodes

If you have more than 5 nodes, please complete our [additional pricing request form](https://www.portainer.io/portainer-business-buy-more) and we'll get in touch as soon as possible with a quote.

### Upgrade Instructions

We have [complete guides](../start/upgrade/tobe/) on how to upgrade from 1.24.x to Portainer Business Edition for your platform.

For more on why you should transition to Portainer Business Edition, [we have a blog post](https://www.portainer.io/blog/why-transition-to-portainer-business-from-portainer-extensions) that goes into detail as to the benefits of doing so.

## Why can't my users see anything in the environment they have access to?

For security reasons, all resources inside an environment are assigned only to the administrator by default. To give non-admin users access, you can either:

* Use the [access control tool](../advanced/access-control.md) within each resource to assign ownership to users.
* Make the resource public, so all users get access to it.

## How do automatic updates for stacks/applications work?

When you configure automatic updates for a [stack](../user/docker/stacks/add.md#option-3-git-repository) or [application](../user/kubernetes/applications/manifest.md#option-1-git-repository) deployed from a Git repository, you can choose for Portainer to either poll the Git repository for updates on a defined interval, or use a webhook to trigger a check on-demand (generally as part of an automated process). Regardless of the method you choose, the following events occur when a check is performed:

* Portainer connects to the remote Git repository and retrieves the hash of the latest commit.
* If the latest commit hash matches the hash that Portainer has in its database for the stack/application, Portainer assumes that the stack/application is up to date, and no further action is taken.

{% hint style="info" %}
Portainer stores the commit hash of the latest deploy of a stack/application in its database. This is first populated on initial deployment and updated on each deployment.
{% endhint %}

* If the latest commit hash does **not** match the hash in the database, Portainer pulls the repository contents at the latest commit.
* Portainer then processes the file defined as the **Compose path** for the stack/application as well as any **additional paths** defined.
  *   For Docker Standalone, this involves running:

      `docker-compose up -f my-compose-file -f additional-compose-file -up d`

      in the working directory of the cloned repository (the directory containing the file defined as **Compose path**).
  *   For Docker Swarm, this involves running:

      `docker stack deploy --compose-file my-compose-file --compose-file compose-additional-file`

      using the file defined in the Compose path and any additional compose paths defined.
  *   For Kubernetes, this involves running:

      `kubectl apply -f my-compose-file -f additional-compose-file`

      using the file defined in the Compose path and any additional compose paths defined.

{% hint style="warning" %}
For all platforms, we do **not** force a redeployment if the image has not updated (the default behavior of each of the tools). Therefore, if Docker or Kubernetes determines the image hasn't changed for a container it will **not** redeploy that container.
{% endhint %}

* The commit hash in the Portainer database is updated to match the newly deployed commit hash.

Portainer doesn't otherwise reference any other files in the repository, unless those files are referenced by the compose files. This [can have consequences](troubleshooting.md#can-i-build-an-image-while-deploying-a-stack-application-from-git) if you are trying to build an image within your compose file. The exception to this is the `.env` file, which if it exists (and environment variables have not been previously defined) is processed as well.

{% hint style="info" %}
The above commit hash checks are not performed if a stack or application is manually updated (for example using the **Pull and redeploy** button). In this case, the stack or application would be force-redeployed.
{% endhint %}

## How does the new image update notification icon work?

In 2.14 we introduced a visual indicator next to containers, stacks and services so that users can quickly see whether images are up to date or whether a new version was available. This functionality works as follows:

* Portainer looks at the first local digest of the image and compares it to the remote digest of the image. If the digests differ, then we assume a new version is available. This check is done on page refresh (with a bit of caching to not hamper performance).
* The new version is based on the image _and_ tag, not just the image.
* If a local copy of the image and tag already exists but hasn't been deployed, the circle will display as grey and the image name will change to the hash. This is partially due to how Docker itself works (you'd see the same "hash as the image name" behavior when doing `docker ps`), but we're discussing ways that we might be able to make this more user-friendly in the future.

**Note:** Image update notifications are currently not supported for private registries and private images in DockerHub. This is due to be fixed in our next version.

## Can I build an image while deploying a stack/application from Git?

Our Git repository support is in its first version currently, so it is not fully-featured. One of the elements that are currently not fully implemented is building images via docker-compose, particularly around building from files that are included in the repository. We hope to expand the capability of this in the future.

If the image is [built separately](../user/docker/images/build.md) and referenced from docker-compose, it should install without an issue.

## Why don't custom standalone app templates show when using Docker Swarm?

One of Portainer's key principles is to enforce best practice across all functions — including Swarm. When you use Swarm, always use Swarm [services](../user/docker/services/), not containers.

## Why can't my agents communicate with Portainer on Swarm?



{% hint style="info" %}
If you are running on a VMware environment, have a look at [this FAQ entry](troubleshooting.md#known-issues-with-vmware) as well.
{% endhint %}

You have set up a multi-node Swarm cluster and have deployed the Portainer Agent across the cluster successfully, but the Agent is failing to communicate with the Portainer Server. You may see log messages similar to the following:

`[err: Cannot connect to the Docker daemon at tcp://tasks.portainer_agent:9001. Is the docker daemon running?]`

`[err: Error response from daemon: The agent was unable to contact any other agent located on a manager node]`

We have most commonly seen this on hosting providers such as Hetzner where the network used to communicate between Swarm nodes uses a MTU that is not `1500`. Hetzner's private networking, for example, uses a MTU of `1450`.

Docker Swarm's default network MTU is `1500`, and if the underlying network has a lower MTU than this the Swarm nodes may fail to communicate with each other. This would affect all Swarm services, not just Portainer.

The solution to this is to adjust Docker Swarm's MTU to match that of the underlying network. First, you'll want to determine what the MTU of your network is. On Linux, you can find this with the following command:

```
ip a
```

This will list the networks available on your server. Locate the network that your nodes communicate over and note the value after `mtu`. For example:

`5: ens10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc pfifo_fast state UP group default qlen 1000`

In the above, the MTU is set to `1450`.&#x20;

To use this new MTU, you will first need to remove and recreate the `ingress` network with the new value. You can use the following commands to achieve this:

```
docker network rm ingress
docker network create -d overlay --ingress --opt com.docker.network.driver.mtu=1450 ingress
```

Then, when you are creating new networks you will need to set the MTU to match. For example, in a compose file:

```
networks:
  default:
    driver: overlay
    driver_opts:
      com.docker.network.driver.mtu: 1450
```

## Known issues with VMware

When running a containerized environment on a VMware system there are a few caveats to be aware of before you start. We've outlined those we've run into below. If you do find anything else or think we should expand on what we have below, please [let us know](../contribute/contribute.md).

### Docker Swarm

#### Overlay networking and NSX

If you are running NSX on your VMware environment you will likely run into issues with Docker's overlay networking. In particular, overlay networking uses UDP port `4789` by default which conflicts with VMware NSX's communication port for VXLAN.&#x20;

To resolve this, you can change the data path port for your Docker Swarm setup to a different value (for example, `9789`):

```
docker swarm init --data-path-port=9789
```

Alternatively you can (depending on your setup) reconfigure NSX to use a different VXLAN port. You'll find instructions on how to do this [in the VMware documentation](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/com.vmware.nsx.admin.doc/GUID-3D18DE9B-79DE-418B-B87F-50342D372C86.html).

#### VMware and Swarm routing

When running Docker Swarm under VMware you may run into issues with communication over the swarm node routing mesh. We have traced this back to UDP packets being dropped by the source node. Disabling checksum offloading appears to resolve this issue.

Run the following on _all_ the VMs in your cluster:

```
ethtool -K [network] tx-checksum-ip-generic off
```

Replace `[network]` with the name of your network adapter. You will likely need to restart the services on your cluster that communicate with each other (such as the Portainer Agent) for this change to be picked up.

We have seen this issue occur on RedHat-based distributions including CentOS and Photon OS, but also occasionally on Ubuntu so it is worth checking if you are experiencing issues.

#### Large packets are being dropped

In certain configurations, packets being sent on overlay networks can be silently dropped, in particular when `vmw_conn_notifyd` is being used. There is an [open issue with VMware](https://github.com/vmware/guest-introspection-nsx/issues/25) discussing the behavior which we are following, and is worth reading for potential workarounds until this is patched.

## Can you view deleted container logs in Portainer?

No. Portainer does not keep a history of deleted containers or their logs.

## I enabled "Force HTTPS only" and now I'm locked out of Portainer. How do I get back in?

Enabling the **Force HTTPS only** option (either via the toggle in [Settings](../admin/settings/#force-https-only) or via the `--http-disabled` command line option) disables logging into Portainer via HTTP. If your HTTPS setup is misconfigured (for example a malformed or missing certificate chain) this can result in you being locked out of Portainer.

To resolve this, you can re-enable HTTP access by using the `--http-enabled` command line option in your docker run command, for example:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ee:latest \
    --http-enabled
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ce:latest \
    --http-enabled
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
Make sure to remove the `--http-disabled` option from your command if you are using it, as this will override the `--http-enabled` flag.
{% endhint %}

When started with the `--http-enabled flag`, you will be able to access Portainer over HTTP once more.

## Exposed ports in the container view redirect me to 0.0.0.0. What can I do?

There are two ways you can fix this.

### **Method 1: Via the Portainer UI (recommended)**

1. From the menu select **Environments**.
2. Select the environment.
3. In the **Public IP** field, enter the host IP.
4. Click **Update environment**.&#x20;

### **Method 2: Via the CLI**

So that Portainer can redirect to your Docker host IP address (not the 0.0.0.0 address), you'll need to:

1. Change the configuration of your Docker daemon by adding the `--ip` option.
2. Restart the Docker daemon so that the changes take effect.

## How can I get the logs for Portainer itself?

Portainer runs as a container, so you can view the Portainer logs in the same way you would do for any other container. You can view the logs [through the Portainer UI](../user/docker/containers/logs.md), or alternatively if you have access to the host you can use the Docker CLI:

Log into the command line of a Docker manager node (for Swarm) or the Docker host (for Standalone) and run the following command:

```
docker ps -a
```

This will list the containers on your environment, and will look something like this:

```
CONTAINER ID   IMAGE                          COMMAND                  CREATED      STATUS                  PORTS                                                                                            NAMES
2c9085c1d664   portainer/portainer-ee:latest  "/portainer"             3 days ago   Up 3 days               0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:9443->9443/tcp, :::9443->9443/tcp, 9000/tcp   portainer
be84ee30270e   mysql:8.0                      "docker-entrypoint.s…"   4 days ago   Exited (1) 4 days ago                                                                                                    mysql
4604a2f5108e   nginx:latest                   "/docker-entrypoint.…"   4 days ago   Up 4 days               0.0.0.0:80->80/tcp, :::80->80/tcp                                                                nginx
```

Note the `CONTAINER_ID` of the Portainer container. Next, run the following command to output the logs for the container, using the `CONTAINER_ID` from the previous command (in the above example, `2c9085c1d664`):

```
docker container logs 2c9085c1d664
```

The logs from the container will be displayed.

## How can I switch back to internal authentication?

If you are able to log into Portainer as an administrator you can change your authentication method under Settings, [Authentication](../admin/settings/authentication/) and selecting Internal.

If you are unable to log into Portainer (for example if you have been locked out due to a external authentication / SSO misconfiguration) you can force using internal authentication by going to:

```
https://localhost:9443/#!/internal-auth
```

Replace `https://localhost:9443` with the URL and port of your Portainer server. You can then log in as the initial administrator user you first set up when installing Portainer.

If you don't have the password for the initial administrator user, you can use our [password reset helper](../advanced/reset-admin.md).

## How do I reset my Portainer password?

If you know your current password and can log into Portainer, you can [set a new password](../user/account-settings.md#changing-your-password) via the Portainer UI.&#x20;

If you have forgotten your password or are unable to log in, either ask another Portainer admin to [reset the password](../admin/users/password.md) for you, or use our [password reset helper](../advanced/reset-admin.md) to reset the default admin account password (from when Portainer was initialized).

## Groups info issue with OAuth using Microsoft AD

If you have configured OAuth using Microsoft AD in Portainer and trying to use Automatic Team membership: You may run into an issue where group membership info is not returned correctly and users are not populated into correct Teams in Portainer.\
\
While we are working on a fix (due to be released soon), we have a workaround.\
\
In OAuth Config, use the following url for Resource URL (replace the existing graph.windows.net url)

```
https://login.microsoftonline.com/<tenant ID>/openid/userinfo
```

User Identifier: `unique_name`

Scopes: `openid profile`

``

You will also need to have following permissions on your App Registration in Azure\


![](<../.gitbook/assets/image (5).png>)
