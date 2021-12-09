# Upgrading Portainer

Portainer releases contain new features and bug fixes so it's important to keep your installation up to date. We have [tested and validated](../requirements-and-prerequisites.md#validated-configurations) all Portainer CE version upgrades from 1.24.0 up to the latest release.

While it's possible that an untested unvalidated upgrade path might work, we recommend that all upgrade paths are tested and validated on a non-critical system before applying them to your production systems.

{% hint style="info" %}
Starting with 2.9 Portainer is HTTPS enabled by default and uses port `9443` to serve the UI. HTTP can still be enabled on port `9000` if required.
{% endhint %}

To upgrade Portainer, choose your platform then follow the instructions:

{% content-ref url="docker.md" %}
[docker.md](docker.md)
{% endcontent-ref %}

{% content-ref url="swarm.md" %}
[swarm.md](swarm.md)
{% endcontent-ref %}

{% content-ref url="kubernetes.md" %}
[kubernetes.md](kubernetes.md)
{% endcontent-ref %}

If you want to upgrade from CE to Business Edition, we have instructions for that too:

{% content-ref url="tobe/" %}
[tobe](tobe/)
{% endcontent-ref %}
