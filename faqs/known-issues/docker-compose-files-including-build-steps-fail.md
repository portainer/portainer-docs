---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/xdTQRpMuktD2l0URtOJO/faqs/known-issues/docker-compose-files-including-build-steps-fail
---

# Docker Compose files including build steps fail

### Issue <a href="#issue" id="issue"></a>

In Portainer versions 2.29.2 and greater, deploying a stack that includes a build directive to a remote Docker environment fails with the error:

`Unable to upgrade to tcp, received 200`

This limitation is under review internally, for now external builds are the most stable option.

### **Workaround**

Currently Portainer does not support executing build steps inside a compose file for remote environments.

To deploy successfully:

1. Build the image outside Portainer using Docker or a CI pipeline
2. Push the image to a registry or load it onto the remote host
3. Update your compose file to reference the built image, removing any build directives
