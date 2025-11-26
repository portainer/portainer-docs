# Webhooks

A webhook is a POST request sent to a URL that you define in Docker Hub or another registry. Use webhooks to trigger an action in response to an event such as a repository push.

{% hint style="info" %}
This functionality is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=stack-webhook).
{% endhint %}

{% hint style="info" %}
Webhooks are only available on non-Edge environments (environments running Portainer Server or Portainer Agent, not the Portainer Edge Agent). This is because the tunnel to the Portainer Edge Agent is only opened on-demand, and therefore would mean there is no way to expose a webhook permanently.
{% endhint %}

## Enabling a stack webhook

From the menu select **Stacks** then select the container that you want to configure the webhook for. Then select the **Edit** tab.

<figure><img src="../../../.gitbook/assets/2.20-stacks-webhooks.gif" alt=""><figcaption></figcaption></figure>

Scroll down to the **Webhooks** section and toggle the **Create a stack webhook** option on. When the URL appears, click **Copy link**. This URL will be used to configure the webhook in your chosen registry.

<figure><img src="../../../.gitbook/assets/2.15-docker_stack_create_webhook.png" alt=""><figcaption></figcaption></figure>

This example shows how to trigger the webhook using `redeploy`:

```
<form action="https://portainer:9443/api/stacks/webhooks/638e6967-ef77-4906-8af8-236800621360" method="post">
  Redeploy stack containers with latest image of same tag <input type="submit" />
</form>
```

This example shows how to trigger the webhook to update the stack to use a different image tag:

```
<form action="https://portainer:9443/api/stacks/webhooks/638e6967-ef77-4906-8af8-236800621360?tag=latest" method="post">
  Update stack container images with different tag <input type="submit" />
</form>
```

## Preventing a pull

In some cases you may want to override the pulling of images when using the webhook to do a redeploy. In that scenario, you can specify `pullimage=false` as a parameter on your webhook to disable pulling of images.&#x20;

{% hint style="info" %}
This option is only available in Portainer Business Edition.
{% endhint %}

```
<form action="https://portainer:9443/api/stacks/webhooks/638e6967-ef77-4906-8af8-236800621360?pullimage=false" method="post">
  Update stack without pulling images <input type="submit" />
</form>
```

## Using environment variables with webhooks

When triggering a webhook, environment variables can be passed through the endpoint and referenced within stacks' compose files.

To specify an environment variable on a webhook, add it as a variable to the URL. For example, to pass a `SERVICE_TAG` variable with the value `development`:

```
https://portainer:9443/api/stacks/webhooks/1d251d96-fb34-4172-a0a1-d0655467b897?SERVICE_TAG=development
```

To reference the `SERVICE_TAG` variable in your compose file with a fallback to the value `stable`:

```
services:
  my-service:
    image: repository/image:${SERVICE_TAG:-stable}
```

## Configuring the webhook in Docker Hub

To finish the configuration, refer to [Docker's own documentation](https://docs.docker.com/docker-hub/webhooks/).
