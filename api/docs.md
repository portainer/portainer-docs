---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/udjBY77rL45c6FTs07xf/api/docs
---

# API documentation

{% hint style="success" %}
We are looking at replacing our current API documentation with the following:&#x20;

* [Business Edition (BE) 2.38.1 API Documentation](https://api-docs.portainer.io/?edition=ee\&version=2.38.1)&#x20;
* [Community Edition (CE) 2.38.1 API Documentation](https://api-docs.portainer.io/?edition=ce\&version=2.38.1)

These sites are work in progress, and we would appreciate you trying them out and [letting us know of any issues](../contribute/contribute.md#reporting-bugs) that you find.
{% endhint %}

Portainer exposes an HTTP API that you can use to automate everything you do via the Portainer UI. You can also use Portainer as a gateway (HTTP queries against the Portainer API) to the underlying Docker/Kubernetes API.

{% hint style="info" %}
You will need an access token in order to use the Portainer API. If you have not already set up an access token for the API, we have [instructions on how to do so](access.md).
{% endhint %}

You can find our API documentation at SwaggerHub:

* [Business Edition (BE) 2.38.1 API Documentation](https://app.swaggerhub.com/apis/portainer/portainer-ee/2.38.1)
* [Community Edition (CE) 2.38.1 API Documentation](https://app.swaggerhub.com/apis/portainer/portainer-ce/2.38.1)

We have also provided some examples of API usage.

{% content-ref url="examples.md" %}
[examples.md](examples.md)
{% endcontent-ref %}
