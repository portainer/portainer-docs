# Edge stacks do not support authenticating to deploy applications from private registries.

{% hint style="info" %}
**Affected versions:** 2.14.2 and previous

**Fixed in:** 2.15.0 and above
{% endhint %}

#### Issue Description

When using Edge Stacks to deploy services from a private repository, images are not able to be pulled.

#### Fix

Update Portainer to 2.15.0 or above.

#### Workaround&#x20;

Deploy a [Docker registry container](https://hub.docker.com/_/registry), put it in ["cache" mode](https://docs.docker.com/registry/recipes/mirror/), and configure it to authenticate using your Docker Hub credentials. Locally to the edge device, it pulls from the cache locally as anonymous, but the cache knows how to retrieve from a secure repository.

This workaround only applies for Docker Hub, and does not work for other registries such as AWS ECR.
