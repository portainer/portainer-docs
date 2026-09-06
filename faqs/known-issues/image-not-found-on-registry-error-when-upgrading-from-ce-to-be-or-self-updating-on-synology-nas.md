# "Image not found on registry" error when upgrading from CE to BE or self-updating on Synology NAS

{% hint style="info" %}
**Affected versions:** 2.17.0 and above
{% endhint %}

#### Issue Description

When running an in-app upgrade within Portainer that is running on a Synology NAS, users may receive an error "Image not found on registry".

#### Cause

Our team is currently investigating the cause of this issue, but we suspect this is a consequence of Synology's custom Docker build.

#### Workaround

The workaround for this is to follow the legacy upgrade steps found in the [Portainer documentation](../../start/upgrade/) and follow the manual steps option for your environment. This will guide you through the steps to update your Portainer install.

Some users have also reported success with [manually pulling](../../user/docker/images/pull.md) the missing image first, then attempting the in-app upgrade.

You can find more details on this issue in the [GitHub Issue](https://github.com/portainer/portainer/issues/8590).
