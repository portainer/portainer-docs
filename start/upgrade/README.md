# Upgrading Portainer

Portainer releases contain new features and bug fixes so it's important to keep your installation up to date. We have [tested and validated](../requirements-and-prerequisites.md#validated-configurations) all Portainer version upgrades from 2.0.0 up to the latest release.

While it's possible that an untested unvalidated upgrade path might work, we recommend that all upgrade paths are tested and validated on a non-critical system before applying them to your production systems.

{% hint style="info" %}
We added a [backup and restore feature](../../admin/settings/#backup-portainer) to Portainer BE 2.7 and strongly recommend that you take a backup of your Portainer instance before upgrading.
{% endhint %}

{% hint style="info" %}
Starting with CE 2.9 and BE 2.10 Portainer is HTTPS enabled by default and uses port `9443` to serve the UI. HTTP can still be enabled on port `9000` if required.
{% endhint %}

### Upgrade order

In general, we recommend upgrading your Portainer Agent deployments _before_ you upgrade the Portainer Server instance. This ensures that your agents remain able to communicate with the Portainer Server as well as identify any configuration tweaks that need to be made to the Agent deployments. It also means if you do run into an issue with the communication between the agents and the server, it will only impact one of your agent deployments at a time, instead of all at once if the server is upgraded first.

### Upgrading Portainer

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

If you are using the Portainer Edge Agent, we have specific upgrade instructions for you:

{% content-ref url="edge.md" %}
[edge.md](edge.md)
{% endcontent-ref %}

If you are coming from Portainer CE or the 1.24.x branch, we have guides for you as well.

{% content-ref url="tobe/" %}
[tobe](tobe/)
{% endcontent-ref %}
