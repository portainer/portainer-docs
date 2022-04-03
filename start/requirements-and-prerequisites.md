# Requirements and prerequisites

{% hint style="info" %}
Requirements specific to your environment will be covered in the installation process.
{% endhint %}

## Valid configurations

Every Portainer release goes through functional, release and post-release testing to ensure it works as expected. Because we cannot test against every configuration variant out there, we test against a subset.

The following table lists all of the configurations that we have tested, validated and consider to be functional. If a variant is not listed, it doesn't mean it won't work, it just means it hasn't been tested.

### Portainer Business Edition (BE)

| Portainer Version        | Release Date | Docker Version            | Kubernetes Version       | Architectures                                                                         |
| ------------------------ | ------------ | ------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| Business 2.12.2 (latest) | Apr 4, 2022  | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.12.1          | Mar 9, 2022  | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.12            | Mar 8, 2022  | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.10            | Nov 15, 2021 | 20.10.6 20.10.7 20.10.8   | 1.19.11 1.20.7 1.21 1.22 | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.7             | Jul 29, 2021 | 20.10.6 20.10.7           | 1.19 1.20.2 1.21         | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.4             | May 4, 2021  | 20.10.5                   | 1.19 1.20.2 1.21         | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |
| Business 2.0             | Dec 3, 2020  | 19.03.13                  | 1.17.3 1.18.6 1.19.3     | [ARM64](../faq/installing/which-arm-architectures-does-portainer-support.md), x86\_64 |

{% hint style="info" %}
If you find an issue with an unlisted configuration, before reporting a bug, update your environment to a valid configuration and try to replicate the issue.
{% endhint %}

## Persistent storage

The Portainer Server requires persistent storage in order to maintain the database and configuration information it needs to function. The installation process provides a basic storage configuration for your platform. By default, both Docker and Kubernetes provide local (to the node) storage only, and if cluster-wide persistent storage is desired we recommend implementing it at the infrastructure level (for example, via NFS).

## Ports

In order to access the UI and API, and for the Portainer Server instance and the Portainer Agents to communicate, certain ports need to be accessible. The Portainer Server listens on port `9443` for the UI and API (or on `30779` for Kubernetes with NodePort) and exposes a TCP tunnel server on port `8000` (this second port is optional and only required if using Edge Compute features with Edge Agents). The Portainer Agents listen on port `9001` (or `30778` for Kubernetes with NodePort).

{% hint style="info" %}
All ports can be changed during installation.
{% endhint %}

{% content-ref url="install/" %}
[install](install/)
{% endcontent-ref %}
