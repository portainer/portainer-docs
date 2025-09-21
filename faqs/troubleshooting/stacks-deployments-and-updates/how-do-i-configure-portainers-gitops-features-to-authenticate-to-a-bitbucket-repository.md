# How do I configure Portainer's GitOps features to authenticate to a Bitbucket repository?

{% hint style="info" %}
The following instructions acknowledge that Bitbucket has announced the [deprecation of app passwords in Bitbucket Cloud](https://www.atlassian.com/blog/bitbucket/bitbucket-cloud-transitions-to-api-tokens-enhancing-security-with-app-password-deprecation).
{% endhint %}

When deploying a stack from a private Bitbucket repository, the authentication method will differ depending on how your bitbucket is hosted.&#x20;

* **Bitbucket cloud:** Use an [**API token**](https://support.atlassian.com/bitbucket-cloud/docs/api-tokens/) or [**access token**](https://support.atlassian.com/bitbucket-cloud/docs/access-tokens/) with **basic authentication**.
* **Bitbucket Data Center:** Use a [**Personal Access Token**](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html) with **bearer token authentication.**
