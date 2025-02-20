# Setup

{% hint style="info" %}
The **Swarm Setup** section is only available to Docker Swarm environments.
{% endhint %}

Under **Setup**, you can make changes to your environment, enabling and disabling features and security settings.

## Host and Filesystem

This section is where you configure how Portainer interacts with elements of the host.

{% hint style="danger" %}
For security, these features are disabled by default. Be sure that you understand their impact before enabling them.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-docker_hosts_features_config.png" alt=""><figcaption></figcaption></figure>

| Option                                          | Overview                                                                                                                                                                         |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable host management features                 | Enabling host management features allows you to see the available devices and storage on the physical nodes across your cluster as well as browse the nodes' filesystems.        |
| Enable volume management for non-administrators | Enabling this feature allows non-administrator users to manage volumes on an environment. If this is disabled, users below administrator level have read-only access to volumes. |

## Change Window Settings

This setting allows you to specify a window within which [GitOps updates](../stacks/add.md#gitops-updates) to your applications can be applied.

{% hint style="warning" %}
If this setting is enabled and an update is made to an application outside of this window, it will not be applied.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-cluster-setup-changewindow.png" alt=""><figcaption></figcaption></figure>

## Docker Security Settings

This section allows you to toggle assorted Docker-related security settings for an environment.

<figure><img src="../../../.gitbook/assets/2.15-docker_hosts_security_settings.png" alt=""><figcaption></figcaption></figure>



| Option                                                | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Disable bind mounts for non-administrators            | Prevents non-admin users within Portainer from using bind mounts when creating containers and/or services/stacks. When toggled on, the option to attach to a host file system path is removed.                                                                                                                                                                                                                                                                                                                                                              |
| Disable privileged mode for non-administrators        | Prevents non-admin users from elevating the privilege of a container to bypass SELinux/AppArmor. When toggled on, the option to select **Privileged** mode when [adding a container](../containers/add.md) is removed.                                                                                                                                                                                                                                                                                                                                      |
| Disable the use of host PID 1 for non-administrators  | Prevents non-admin users from requesting that a deployed container operates as the host PID. This is a security risk if used by a non-trustworthy authorized user because when they operate as PID1, they are in effect able to run any command in the container console as root on the host.                                                                                                                                                                                                                                                               |
| Disable the use of Stacks for non-administrators      | This is a 'sledgehammer' approach to removing any possibility for non-admin users within Portainer to find and use weaknesses in the Docker architecture. Whilst Portainer has the ability to disable some of the more common exploits, we cannot possibly block them all because there are any number of capabilities that could be added to a container to attempt to gain access to the host. This feature simply allows an admin to disable all possible entry points.                                                                                  |
| Disable device mappings for non-administrators        | Blocks users from mapping host devices into containers. Whilst the ability to map devices is generally used for good (e.g. mapping a GPU into a container), it can equally be used by non-trustworthy authorized users to map a physical storage device into a container. It is possible to mount `/dev/sda1` into a container, and then from a console of that container, the user would have complete access to the sda1 device without restriction. By toggling this on, Portainer blocks the ability for non-admins to map ANY devices into containers. |
| Disable container capabilities for non-administrators | Toggle on to hide the **Container capabilities** tab for non-administrators when they are [adding a container](../containers/add.md).                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Disable sysctl settings for non-administrators        | Toggle on to stop non-admin users from using sysctl options, preventing them from recreating, duplicating or editing containers.                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Other

This section contains other assorted environment-specific settings.

<figure><img src="../../../.gitbook/assets/2.18-swarm-setup-other.png" alt=""><figcaption></figcaption></figure>

| Option                                                                    | Overview                                                                                                                                                                                                               |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show GPU in the UI                                                        | GPU functionality is currently not available in Docker Swarm environments so this toggle is disabled.                                                                                                                  |
| Show an image(s) up to date indicator for Stacks, Services and Containers | <p>Toggle on to enable the <a href="../services/">new image notification</a> feature for this environment. Toggle off to disable the feature.<br><br>This feature is only available in Portainer Business Edition.</p> |
