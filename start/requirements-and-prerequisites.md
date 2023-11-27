# Requirements and prerequisites

Requirements specific to your environment will be covered in the installation process.

## Valid configurations

Every Portainer release goes through functional, release and post-release testing to ensure it works as expected. Because we cannot test against every configuration variant out there, we test against a subset.

The following tables list all of the configurations that we have tested, validated and consider to be functional. If a variant is not listed, it doesn't mean it won't work, it just means it hasn't been tested.

{% hint style="info" %}
**A note on Podman support**

At present, Portainer does not fully support running on Podman environments. While some aspects of Portainer do function with Podman, it isn't a platform that we test on or build for, and there are [known issues](https://github.com/orgs/portainer/discussions/9723). We currently do not have an ETA on when full Podman support will be implemented in Portainer.
{% endhint %}

### Portainer Business Edition (BE)

| Portainer Version                                              | Release Date       | Docker Version            | Kubernetes Version       | Architectures                                                                                          |
| -------------------------------------------------------------- | ------------------ | ------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| [Business 2.19.3 (latest)](../release-notes.md#release-2.19.3) | November 22, 2023  | 23.0.6 24.0.4             | 1.23 1.24 1.26           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.19.2](../release-notes.md#release-2.19.2)          | November 13, 2023  | 23.0.6 24.0.4             | 1.23 1.24 1.26           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.19.1](../release-notes.md#release-2.19.1)          | September 20, 2023 | 23.0.6 24.0.4             | 1.23 1.24 1.26           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.19.0](../release-notes.md#release-2.19.0)          | August 31, 2023    | 23.0.6 24.0.4             | 1.23 1.24 1.26           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.18.4](../release-notes.md#release-2.18.4)          | July 7, 2023       | 23.0.6 24.0.4             | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.18.3](../release-notes.md#release-2.18.3)          | May 22, 2023       | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.18.2](../release-notes.md#release-2.18.2)          | May 1, 2023        | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.18.1](../release-notes.md#release-2.18.1)          | April 18, 2023     | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.17.1](../release-notes.md#release-2.17.1)          | February 22, 2023  | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.17.0](../release-notes.md#release-2.17.0)          | February 7, 2023   | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24           | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.16.2](../release-notes.md#release-2.16.2)          | November 21, 2022  | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.16.1](../release-notes.md#release-2.16.1)          | November 9, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.16.0](../release-notes.md#release-2.16.0)          | October 31, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.15.1](../release-notes.md#release-2.15.1)          | September 16, 2022 | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.15.0](../release-notes.md#release-2.15.0)          | September 6, 2022  | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.14.2](../release-notes.md#release-2.14.2)          | July 26, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.14.1](../release-notes.md#release-2.14.1)          | July 12, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.14.0](../release-notes.md#release-2.14.0)          | June 28, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.13.1](../release-notes.md#release-2.13.1)          | May 12, 2022       | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.13.0](../release-notes.md#release-2.13.0)          | May 9, 2022        | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.12.2](../release-notes.md#release-2.12.2)          | April 4, 2022      | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.12.1](../release-notes.md#release-2.12.1)          | March 9, 2022      | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.12.0](../release-notes.md#release-2.12.0)          | March 8, 2022      | 20.10.7 20.10.11 20.10.12 | 1.21.7 1.22 1.23         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.10.0](../release-notes.md#release-2.10.0)          | November 15, 2021  | 20.10.6 20.10.7 20.10.8   | 1.19.11 1.20.7 1.21 1.22 | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.7.0](../release-notes.md#release-2.7.0)            | July 29, 2021      | 20.10.6 20.10.7           | 1.19 1.20.2 1.21         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.4.0](../release-notes.md#release-2.4.0)            | May 4, 2021        | 20.10.5                   | 1.19 1.20.2 1.21         | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.0.1](../release-notes.md#release-2.0.1)            | February 22, 2021  | 19.03.13                  | 1.17.3 1.18.6 1.19.3     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| [Business 2.0.0](../release-notes.md#release-2.0.0)            | December 3, 2020   | 19.03.13                  | 1.17.3 1.18.6 1.19.3     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |

### Portainer Community Edition (CE)

| Portainer Version         | Release Date       | Docker Version            | Kubernetes Version           | Architectures                                                                                                                                                                                         |
| ------------------------- | ------------------ | ------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Community 2.19.3 (latest) | November 22, 2023  | 23.0.6 24.0.4             | 1.23 1.24 1.26               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.19.2          | November 13, 2023  | 23.0.6 24.0.4             | 1.23 1.24 1.26               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.19.1          | September 20, 2023 | 23.0.6 24.0.4             | 1.23 1.24 1.26               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.19.0          | August 31, 2023    | 23.0.6 24.0.4             | 1.23 1.24 1.26               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.18.4          | July 7, 2023       | 23.0.6 24.0.4             | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.18.3          | May 22, 2023       | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.18.2          | May 1, 2023        | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.18.1          | April 18, 2023     | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.17.1          | February 22, 2023  | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.17.0          | February 7, 2023   | 20.10.9 20.10.13 20.10.17 | 1.22 1.23 1.24               | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.16.2          | November 21, 2022  | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.16.1          | November 9, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.16.0          | October 31, 2022   | 20.10.9 20.10.13 20.10.17 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.15.1          | September 16, 2022 | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.15.0          | September 6, 2022  | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.2          | July 26, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.1          | July 12, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.14.0          | June 28, 2022      | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.13.1          | May 12, 2022       | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.13.0          | May 9, 2022        | 20.10.9 20.10.12 20.10.13 | 1.21.7 1.22 1.23             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.11.1          | February 8, 2022   | 20.10.8 20.10.11 20.10.12 | 1.20.13 1.21.7 1.22.4        | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.11.0          | December 9, 2021   | 20.10.6 20.10.8 20.10.11  | 1.19.11 1.20.7 1.21 1.22     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.3           | November 22, 2021  | 20.10.5 20.10.6           | 1.19.11 1.20.7 1.21 1.22     | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.2           | October 26, 2021   | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.1           | October 11, 2021   | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.9.0           | September 23, 2021 | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.3           | August 27, 2021    | 20.10.5 20.10.6           | 1.19 1.20 1.21 1.22          | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.2           | August 2, 2021     | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.1           | July 12, 2021      | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.6.0           | June 25, 2021      | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.5.1           | May 18, 2021       | 20.10.5 20.10.6           | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.5.0           | May 18, 2021       | 20.10.5                   | 1.19 1.20.2 1.21             | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.1.x           | February 2, 2021   | 20.10.2                   | 1.20.0                       | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.0.1           | January 7, 2021    | 20.10.0                   | 1.17.13 1.18.9 1.19.3 1.20.0 | [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64                                                                                                |
| Community 2.0             | August 31, 2020    | 19.03.12                  | 1.17.13 1.18.6 1.18.9 1.19.3 | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.24.1                    | July 23, 2020      | 19.03.12                  | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.24.0                    | June 2, 2020       | 19.03.10                  | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |
| 1.23.2                    | March 25, 2020     | 19.03.6                   | N/A                          | [ARM32](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), [ARM64](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support), x86\_64 |

{% hint style="info" %}
If you find an issue with an unlisted configuration, before reporting a bug, update your environment to a valid configuration and try to replicate the issue.
{% endhint %}

## Persistent storage

The Portainer Server requires persistent storage in order to maintain the database and configuration information it needs to function. The installation process provides a basic storage configuration for your platform. By default, both Docker and Kubernetes provide local (to the node) storage only, and if cluster-wide persistent storage is desired we recommend implementing it at the infrastructure level (for example, via NFS).

Additionally, you will want to ensure that your persistent storage for Portainer's data volume is right-sized for your needs. If you intend to use Portainer's Git deployment functionality for example, you will need to be aware that as part of the deployment from Git, Portainer will clone the remote repository locally to the Portainer data volume, which in the case of larger or multiple Git repos may consume significant amounts of disk space.

## Ports

In order to access the UI and API, and for the Portainer Server instance and the Portainer Agents to communicate, certain ports need to be accessible.

On the Portainer Server the following ports must be open:

* TCP port `9443` (or `30779` for Kubernetes with NodePort) for the UI and API
* TCP port `8000` (or `30776` for Kubernetes with NodePort) for the TCP tunnel server for Edge Agents. This port is optional and only required if using Edge Compute features with Edge Agents.

For the Portainer Agent:

* TCP port `9001` (or `30778` for Kubernetes with NodePort) must be accessible on the Agent from the Portainer Server instance.

The Portainer Edge Agent does not require any open ports.

{% hint style="info" %}
All ports can be changed during installation.
{% endhint %}

{% content-ref url="install/" %}
[install](install/)
{% endcontent-ref %}

{% content-ref url="install-ce/" %}
[install-ce](install-ce/)
{% endcontent-ref %}
