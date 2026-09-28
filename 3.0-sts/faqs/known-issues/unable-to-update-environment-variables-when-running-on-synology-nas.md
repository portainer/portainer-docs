# Unable to update environment variables when running on Synology NAS

{% hint style="info" %}
**Affected versions:** All

**Fixed in:** n/a
{% endhint %}

#### Issue Description

When using Portainer on a Synology NAS device running Synology DSM, changes made to environment variables for containers and stacks in the Portainer interface are not applied to the respective container or stack.

#### Cause

Our team has narrowed this down to Synology's custom implementation of Docker. Unfortunately without cooperation from Synology we have been unable to find a reliable solution to this and recommend the workarounds below.

#### Workaround

Some users have reported success when editing environment variables through Synology's interface instead of Portainer's interface. You can also export the container settings to JSON through Synology's interface, edit the JSON directly, then reimport the updated JSON. This lets you specify environment variables with blank values, which you cannot do through the Synology interface.

You can find more detail on this issue [in the Github report](https://github.com/portainer/portainer/issues/5813).
