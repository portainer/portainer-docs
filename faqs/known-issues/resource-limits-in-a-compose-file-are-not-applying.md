# Resource limits in a compose file are not applying

{% hint style="info" %}
**Affected versions:** 2.14.0, 2.14.1, 2.14.2

**Fixed in:** 2.15.0 and above
{% endhint %}

#### Issue Description

When using a compose file to apply resource limits on a Docker Standalone environment, some values (such as cpus and cpu\_percent) are not applying:

```
version: "2" 

services: 
  mynginx: 
    container_name: mynginx
    image: nginx:latest
    cpus: 1
    cpu_percent: 50
```

#### Cause

This issue is [the result of a bug](https://github.com/docker/compose/issues/9268) in the version of the docker compose v2 plugin that is used in version 2.14 of Portainer.

#### Fix

Update Portainer to 2.15.0 or above.

#### Workaround

You can manually apply limits on a per-container basis after deployment [through the Portainer UI](../../user/docker/containers/edit.md).&#x20;
