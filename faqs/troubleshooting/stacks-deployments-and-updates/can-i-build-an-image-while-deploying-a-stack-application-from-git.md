# Can I build an image while deploying a stack/application from Git?

Our Git repository support is in its first version currently, so it is not fully-featured. One of the elements that are currently not fully implemented is building images via docker-compose, particularly around building from files that are included in the repository. We hope to expand the capability of this in the future.

If the image is [built separately](../../../user/docker/images/build.md) and referenced from docker-compose, it should install without an issue.
