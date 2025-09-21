# How does the image update notification icon work?

In 2.14 we introduced a visual indicator next to containers, stacks and services so that users can quickly see whether images are up to date or whether a new version was available. This functionality works as follows:

* Portainer looks at the first local digest of the image and compares it to the remote digest of the image. If the digests differ, then we assume a new version is available. This check is done on page refresh (with a bit of caching to not hamper performance).
* The new version is based on the image _and_ tag, not just the image.
* If a local copy of the image and tag already exists but hasn't been deployed, the circle will display as grey and the image name will change to the hash. This is partially due to how Docker itself works (you'd see the same "hash as the image name" behavior when doing docker ps), but we're discussing ways that we might be able to make this more user-friendly in the future.
