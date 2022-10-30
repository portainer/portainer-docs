# Requirements and prerequisites

Requirements specific to your environment will be covered in the installation process.

## Valid configurations

Every Portainer release goes through functional, release and post-release testing to ensure it works as expected. Because we cannot test against every configuration variant out there, we test against a subset.

The following tables list all of the configurations that we have tested, validated and consider to be functional. If a variant is not listed, it doesn't mean it won't work, it just means it hasn't been tested.

### Portainer Business Edition (BE)

| Portainer Version        | Release Date       | Docker Version            | Kubernetes Version       | Architectures                                                                                          |
| ------------------------ | ------------------ | ------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| Business 2.16.0 (latest) | October 31, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.15.1          | September 16, 2022 | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.15.0          | September 6, 2022  | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.14.2          | July 26, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.14.1          | July 12, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.14.0          | June 28, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.13.1          | May 12, 2022       | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.13.0          | May 9, 2022        | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.12.2          | Apr 4, 2022        | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.12.1          | Mar 9, 2022        | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.12            | Mar 8, 2022        | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.10            | Nov 15, 2021       | 20.10.6 20.10.7 20.10.8   | 1.19.11 1.20.7 1.21 1.22 | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.7             | Jul 29, 2021       | 20.10.6 20.10.7           | 1.19 1.20.2 1.21         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.4             | May 4, 2021        | 20.10.5                   | 1.19 1.20.2 1.21         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| Business 2.0             | Dec 3, 2020        | 19.03.13                  | 1.17.3 1.18.6 1.19.3     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |

### Portainer Community Edition (CE)

| Portainer Version         | Release Date       | Docker Version            | Kubernetes Version           | Architectures                                                                                                                                                                                         |
| ------------------------- | ------------------ | ------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Community 2.16.0 (latest) | October 31, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.15.1          | September 16, 2022 | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.15.0          | September 6, 2022  | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.2          | July 26, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.1          | July 12, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.0          | June 28, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.13.1          | May 12, 2022       | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.13.0          | May 9, 2022        | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.11.1          | Feb 8, 2022        | 20.10.8 20.10.11 20.10.12 | 1.20.13 1.21.7 1.22.4        | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.11.0          | Dec 9, 2021        | 20.10.6 20.10.8 20.10.11  | 1.19.11 1.20.7 1.21 1.22     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.3           | Nov 22, 2021       | 20.10.5 20.10.6           | 1.19.11 1.20.7 1.21 1.22     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.2           | Oct 26, 2021       | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.1           | Oct 11, 2021       | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.0           | Sep 23, 2021       | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.3           | Aug 27, 2021       | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.2           | Aug 2, 2021        | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.1           | Jul 12, 2021       | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.0           | Jun 25, 2021       | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.5.1           | May 18, 2021       | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.5.0           | May 18, 2021       | 20.10.5                   | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.1.x           | Feb 2, 2021        | 20.10.2                   | 1.20.0                       | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.0.1           | Jan 7, 2021        | 20.10.0                   | 1.17.13 1.18.9 1.19.3 1.20.0 | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.0             | Aug 31, 2020       | 19.03.12                  | 1.17.13 1.18.6 1.18.9 1.19.3 | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.24.1                    | Jul 23, 2020       | 19.03.12                  | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.24.0                    | Jun 2, 2020        | 19.03.10                  | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.23.2                    | Mar 25, 2020       | 19.03.6                   | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |

{% hint style="info" %}
If you find an issue with an unlisted configuration, before reporting a bug, update your environment to a valid configuration and try to replicate the issue.
{% endhint %}

## Persistent storage

The Portainer Server requires persistent storage in order to maintain the database and configuration information it needs to function. The installation process provides a basic storage configuration for your platform. By default, both Docker and Kubernetes provide local (to the node) storage only, and if cluster-wide persistent storage is desired we recommend implementing it at the infrastructure level (for example, via NFS).

## Ports

In order to access the UI and API, and for the Portainer Server instance and the Portainer Agents to communicate, certain ports need to be accessible. The Portainer Server listens on port `9443` for the UI and API (or on `30779` for Kubernetes with NodePort) and exposes a TCP tunnel server on port `8000` (or on `30776` for Kubernetes with NodePort). This second port is optional and only required if using Edge Compute features with Edge Agents. The Portainer Agents listen on port `9001` (or `30778` for Kubernetes with NodePort).

{% hint style="info" %}
All ports can be changed during installation.
{% endhint %}

{% content-ref url="install/" %}
[install](install/)
{% endcontent-ref %}
