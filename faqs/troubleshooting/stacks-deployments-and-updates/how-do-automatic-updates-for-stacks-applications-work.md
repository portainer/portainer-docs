# How do automatic updates for stacks/applications work?

When you configure automatic updates for a [stack](../../../user/docker/stacks/) or [application](../../../user/kubernetes/applications/manifest.md) deployed from a Git repository, you can choose for Portainer to either poll the Git repository for updates on a defined interval, or use a webhook to trigger a check on-demand (generally as part of an automated process). Regardless of the method you choose, the following events occur when a check is performed:

* Portainer connects to the remote Git repository and retrieves the hash of the latest commit.
* If the latest commit hash matches the hash that Portainer has in its database for the stack/application, Portainer assumes that the stack/application is up to date, and no further action is taken.&#x20;

{% hint style="info" %}
Portainer stores the commit hash of the latest deploy of a stack/application in its database. This is first populated on initial deployment and updated on each deployment.
{% endhint %}

If the latest commit hash does **not** match the hash in the database, Portainer pulls the repository contents at the latest commit.

Portainer then processes the file defined as the **Compose path** for the stack/application as well as any **additional paths** defined.

For **Docker Standalone**, this involves running:

```
docker-compose up -f my-compose-file -f additional-compose-file -up d
```

in the working directory of the cloned repository (the directory containing the file defined as **Compose path**).

For **Docker Swarm**, this involves running:

```
docker stack deploy --compose-file my-compose-file --compose-file compose-additional-file
```

using the file defined in the Compose path and any additional compose paths defined.

For **Kubernetes**, this involves running:

```
kubectl apply -f my-compose-file -f additional-compose-file
```

using the file defined in the Compose path and any additional compose paths defined.

{% hint style="info" %}
For all platforms, we do **not** force a redeployment if the image has not updated (the default behavior of each of the tools). Therefore, if Docker or Kubernetes determines the image hasn't changed for a container it will **not** redeploy that container.
{% endhint %}

The commit hash in the Portainer database is updated to match the newly deployed commit hash.

Portainer doesn't otherwise reference any other files in the repository, unless those files are referenced by the compose files. This [can have consequences](can-i-build-an-image-while-deploying-a-stack-application-from-git.md) if you are trying to build an image within your compose file. The exception to this is the .env file, which if it exists (and environment variables have not been previously defined) is processed as well.

{% hint style="info" %}
The above commit hash checks are not performed if a stack or application is manually updated (for example using the **Pull and redeploy** button). In this case, the stack or application would be force-redeployed.
{% endhint %}
