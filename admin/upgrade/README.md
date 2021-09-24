# Upgrading Portainer

Portainer releases contain new features and bug fixes so it's important to keep your installation up to date. We have [tested and validated](../../start/requirements-and-prerequisites.md#validated-configurations) all Portainer CE version upgrades from 1.24.0 up to the latest release.

While it's possible that an untested unvalidated upgrade path might work, we recommend that all upgrade paths are tested and validated on a non-critical system before applying them to your production systems.

{% hint style="info" %}
We added a [backup and restore feature](../settings/#backup-portainer) to Portainer CE 2.5 and strongly recommend that you take a backup of your Portainer instance before upgrading.
{% endhint %}

To upgrade Portainer, choose your platform then follow the instructions:

{% page-ref page="docker.md" %}

{% page-ref page="swarm.md" %}

{% page-ref page="kubernetes.md" %}

If you want to upgrade from CE to Business Edition, we have instructions for that too:

{% page-ref page="tobe/" %}

