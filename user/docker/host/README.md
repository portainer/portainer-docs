# Host

{% hint style="info" %}
The **Host** menu is only available to Docker Standalone environments.
{% endhint %}

The **Host** section provides an overview of your environment. You can view information about your environment as well as configure environment-specific settings.

{% content-ref url="setup.md" %}
[setup.md](setup.md)
{% endcontent-ref %}

## Host Details

This section describes the host's basic configuration, including the hostname, OS information, kernel version, total CPU and memory. If the environment has the Portainer Agent installed, [host management features](setup.md#enable-host-management-features) are enabled, and a `/host` mount has been configured, you can also browse the host file system from here.&#x20;

<figure><img src="../../../.gitbook/assets/2.15-docker-host-details.png" alt=""><figcaption></figcaption></figure>

## Engine Details

Learn more about the Docker engine running on your environment, including the Docker version, the root directory, storage and logging drivers and available volume and network plugins.

<figure><img src="../../../.gitbook/assets/2.15-docker-host-engine.png" alt=""><figcaption></figcaption></figure>

## PCI Devices and Physical Disks

These sections list the available PCI devices and physical disks on the host.

{% hint style="info" %}
These sections are only visible when [host management features](setup.md#enable-host-management-features) are enabled for the environment.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-docker-host-pci.png" alt=""><figcaption></figcaption></figure>
