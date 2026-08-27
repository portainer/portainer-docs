---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/start/requirements-and-prerequisites
---

# Requirements and prerequisites

Requirements specific to your environment will be covered in the installation process.

## Valid configurations

Every Portainer release goes through functional, release and post-release testing to ensure it works as expected. Because we cannot test against every configuration variant out there, we test against a subset.

The following tables list all of the configurations that we have tested, validated and consider to be functional. If a variant is not listed, it doesn't mean it won't work, it just means it hasn't been tested.

### Portainer Business Edition (BE)

| Portainer Version                                               | Release Date       | Docker Version | Kubernetes Version | Podman Version | Architectures                                                                                                              |
| --------------------------------------------------------------- | ------------------ | -------------- | ------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [Business 2.39.7 LTS](../release-notes.md#release-2.39.6-lts)   | Aug 26, 2026       | 28.5.1 29.7.1  | 1.34 1.35 1.36     | 5.8.5          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.6 LTS](../release-notes.md#release-2.39.6-lts)   | Aug 13, 2026       | 28.5.1 29.7.1  | 1.34 1.35 1.36     | 5.8.5          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.44 STS](../release-notes.md#release-2.44.0-sts)     | Jul 30, 2026       | 28.5.1 29.6.1  | 1.34 1.35 1.36     | 5.8.3          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.5 LTS](../release-notes.md#release-2.39.5-lts)   | Jul 14, 2026       | 28.5.1 29.6.1  | 1.34 1.35 1.36     | 5.8.3          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.4 LTS](../release-notes.md#release-2.39.4-lts)   | Jun 25, 2026       | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.43 STS](../release-notes.md#release-2.43.0-sts)     | Jun 25, 2026       | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.3 LTS](../release-notes.md#release-2.39.3-lts)   | Jun 4, 2026        | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.42 STS](../release-notes.md#release-2.42.0-sts)     | May 21, 2026       | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.2 LTS](../release-notes.md#release-2.39.2-lts)   | May 7, 2026        | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.41 STS](../release-notes.md#release-2.41.0-sts)     | April 30, 2026     | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.40 STS](../release-notes.md#release-2.40.0-sts)     | March 26, 2026     | 28.5.1 29.2.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.1 LTS](../release-notes.md#release-2.39.1-sts)   | March 19, 2026     | 28.5.1 29.2.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.39.0 LTS](../release-notes.md#release-2.39.0-lts)   | February 26, 2026  | 28.5.1 29.2.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.38.1 STS](../release-notes.md#release-2.38.1-sts)   | February 13, 2026  | 28.5.1 29.2.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.38.0 STS](../release-notes.md#release-2.38.0-sts)   | January 29, 2026   | 28.5.1 29.1.2  | 1.32 1.33 1.34     | 5.6.0          | [A](https://portal.portainer.io/knowledge/which-arm-architectures-does-portainer-support)[ARM64](architecture.md), x86\_64 |
| [Business 2.37.0 STS](../release-notes.md)                      | December 11, 2025  | 28.5.1 29.1.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.5 LTS](../release-notes.md#release-2.33.4-lts)   | November 27, 2025  | 28.5.1 29.0.0  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.36.0 STS](../release-notes.md#release-2.36.0-sts)   | November 27, 2025  | 28.5.1 29.0.0  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.4 LTS](../release-notes.md#release-2.33.4-lts-1) | November 20, 2025  | 27.5.1 28.5.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.3 LTS](../release-notes.md#release-2.33.3-lts)   | October 30, 2025   | 27.5.1 28.5.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.35.0 STS](../release-notes.md#release-2.35.0-sts)   | October 16, 2025   | 27.5.1 28.4.0  | 1.31 1.32 1.33     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.2 LTS](../release-notes.md#release-2.33.2-lts)   | September 25, 2025 | 27.5.1 28.4.0  | 1.31 1.32 1.33     | 5.6.0          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.34.0 STS](../release-notes.md#release-2.34.0-sts)   | September 18, 2025 | 27.5.1 28.3.3  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.1 LTS](../release-notes.md#release-2.33.1-lts)   | August 27, 2025    | 27.5.1 28.3.2  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64                                                                                          |
| [Business 2.33.0 LTS](../release-notes.md#release-2.33.0-lts)   | August 20, 2025    | 27.5.1 28.3.2  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64                                                                                          |

### Portainer Community Edition (CE)

| Portainer Version    | Release Date       | Docker Version | Kubernetes Version | Podman Version | Architectures                     |
| -------------------- | ------------------ | -------------- | ------------------ | -------------- | --------------------------------- |
| Community 2.39.7 LTS | Aug 26, 2026       | 28.5.1 29.7.1  | 1.34 1.35 1.36     | 5.8.5          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.6 LTS | Aug 13, 2026       | 28.5.1 29.7.1  | 1.34 1.35 1.36     | 5.8.5          | [ARM64](architecture.md), x86\_64 |
| Community 2.44 STS   | Jul 30, 2026       | 28.5.1 29.6.1  | 1.34 1.35 1.36     | 5.8.3          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.5 LTS | Jul 14, 2026       | 28.5.1 29.6.1  | 1.34 1.35 1.36     | 5.8.3          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.4 LTS | Jun 25, 2026       | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64 |
| Community 2.43 STS   | Jun 25, 2026       | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.3 LTS | Jun 4, 2026        | 28.5.1 29.5.2  | 1.33 1.34 1.35     | 5.8.2          | [ARM64](architecture.md), x86\_64 |
| Community 2.42 STS   | May 21, 2026       | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.2 LTS | May 7, 2026        | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.41.0 STS | April 30, 2026     | 28.5.1 29.3.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.40.0 STS | March 26, 2026     | 28.5.1 29.2.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.1 LTS | March 19, 2026     | 28.5.1 29.2.1  | 1.33 1.34 1.35     | 5.8.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.39.0 LTS | February 26, 2026  | 28.5.1 29.2.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.38.1 STS | February 13, 2026  | 28.5.1 29.2.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.38.0 STS | January 29, 2026   | 28.5.1 29.1.2  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.37.0 STS | December 11, 2025  | 28.5.1 29.1.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.5 LTS | November 27, 2025  | 28.5.1 29.0.0  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.36.0 STS | November 27, 2025  | 28.5.1 29.0.0  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.4 LTS | November 20, 2025  | 28.5.1 29.0.0  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.3 LTS | October 30, 2025   | 27.5.1 28.5.1  | 1.32 1.33 1.34     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.35.0 STS | October 16, 2025   | 27.5.1 28.4.0  | 1.31 1.32 1.33     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.2 LTS | September 25, 2025 | 27.5.1 28.4.0  | 1.31 1.32 1.33     | 5.6.0          | [ARM64](architecture.md), x86\_64 |
| Community 2.34.0 STS | September 18, 2025 | 27.5.1 28.3.3  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.1 LTS | August 27, 2025    | 27.5.1 28.3.2  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64 |
| Community 2.33.0 LTS | August 20, 2025    | 27.5.1 28.3.2  | 1.31 1.32 1.33     | 5.5.1          | [ARM64](architecture.md), x86\_64 |

{% hint style="info" %}
If you find an issue with an unlisted configuration, before reporting a bug, update your environment to a valid configuration and try to replicate the issue.
{% endhint %}

## Persistent storage

The Portainer Server requires persistent storage in order to maintain the database and configuration information it needs to function. The installation process provides a basic storage configuration for your platform. By default, both Docker and Kubernetes provide local (to the node) storage only, and if cluster-wide persistent storage is desired we recommend implementing it at the infrastructure level.

Additionally, you will want to ensure that your persistent storage for Portainer's data volume is right-sized for your needs. If you intend to use Portainer's Git deployment functionality for example, you will need to be aware that as part of the deployment from Git, Portainer will clone the remote repository locally to the Portainer data volume, which in the case of larger or multiple Git repos may consume significant amounts of disk space.

For larger or performance-critical deployments, we suggest you look to provision persistent storage with the highest possible throughput and lowest available latency. SSD-level performance (\~3.5 MB/s, 30,000 IOPS or above, under 10ms write IO latency) is ideal. Be careful when using cloud provider storage both in terms of latency and "burstable" or noisy-neighbor performance characteristics.

If you would like more assistance with verifying your scaled deployment please [get in touch](https://www.portainer.io/contact-sales) with our team.

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
