---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/faqs/troubleshooting/registry-and-image-management/i-am-unable-to-push-an-image-to-an-aws-elastic-container-registry
---

# I am unable to push an image to an AWS Elastic Container Registry

AWS Elastic Container Registry [requires users to pre-create all repositories](https://www.portainer.io/blog/using-portainer-with-aws-elastic-container-registry?hsLang=en) before they can be pushed to.

If the AWS Elastic Container Registry does not have a repository created, the user will receive the following error message while attempting to push an image in Portainer:

<figure><img src="../../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>
