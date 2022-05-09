# Edge Compute

To enable and configure Edge Compute functionality in Portainer, select **Settings** from the menu then select **Edge Compute**.&#x20;

{% hint style="info" %}
To learn how to use our Edge Compute functionality, please refer to the [Edge Compute](../../user/edge/) section of this documentation.
{% endhint %}

![](../../.gitbook/assets/2.12-settings-edgecompute-1.gif)

## Edge Compute settings

Use the following options to configure and enable Edge Compute functionality within Portainer.

| Field/Option                               | Overview                                                                                                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Edge agent default poll frequency          | Select the interval used by default by each Edge Agent to check in with the Portainer Server instance. The default value is to check in every 5 seconds.                                                           |
| Enable Edge Compute features               | Toggle this on to enable Edge Compute functionality including Edge Device features.                                                                                                                                |
| Enforce use of Portainer generated Edge ID | Enable this option to require that the Edge ID used by an Edge Agent deployment exist within Portainer's database (in other words, have an environment with the matching ID already created) in order to connect.  |

![](../../.gitbook/assets/2.13-settings-edge-compute.png)

When you are done, click **Save Settings**.

## Automatic Edge Environment Creation

In this section you can configure how automatic Edge environment configuration functions as well as customize and retrieve your Edge agent deployment script, for use when preloading Edge Devices with a Portainer Edge Agent container and configuration.

| Field/Option                          | Overview                                                                                                                                                                                                                                                               |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Portainer URL                         | The URL that Portainer will be accessible on from the Edge devices.                                                                                                                                                                                                    |
| Disable Edge Environment Waiting Room | Toggle this on to disable the [waiting room](../../user/edge/devices/waiting-room.md) feature for Edge devices. This will allow any Edge Device that connects to the Portainer instance to automatically associate with Portainer. We recommend leaving this disabled. |

![](../../.gitbook/assets/2.13-settings-edge-auto-configuration.png)

### Edge agent deployment script

Select the platform (Linux or Windows) and configure the options to generate your Edge agent deployment scripts.

| Field/Option                   | Overview                                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Edge ID Generator              | Provide a one-line script that will be used to generate a unique ID for your Edge devices. For Linux, an example would be using the `uuidgen` command. |
| Allow self-signed certificates | Toggle this to permit the use of self-signed certificates for the communication between the Edge Agent and the Portainer server.                       |
| Environment variables          | Define a comma separated list of environment variables that will be sourced from the Edge device for use in Portainer.                                 |
| Nomad Authentication Enabled   | If you have selected a Nomad environment, toggle this to enable authentication.                                                                        |
| Nomad Token                    | If Nomad authentication is enabled, define the Nomad token to use.                                                                                     |

![](../../.gitbook/assets/2.13-settings-edge-auto-deploy.png)

Select the environment of your deployment and click **Copy** to copy the script to your clipboard.

## Intel OpenAMT

This section controls the configuration of the [Intel OpenAMT](../../user/edge/devices/openamt.md) functionality in Portainer.

| Field/Option                         | Overview                                                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable OpenAMT                       | Toggle this option on to enable Portainer's OpenAMT functionality. This can only be enabled when **Enable Edge Compute features** is toggled on, and when on will reveal the below fields.                                                        |
| MPS Server                           | Enter the FQDN or IP address of your MPS server.                                                                                                                                                                                                  |
| MPS User                             | Enter the username used to connect to your MPS server.                                                                                                                                                                                            |
| MPS Password                         | Enter the password for the MPS User defined above. The password must be between 8 and 32 characters and include at least one upper case letter, at least one lower case letter, at least one base-10 digit and at least one special character.    |
| Domain Name                          | Enter the fully-qualified domain name associated with the provisioning certificate.                                                                                                                                                               |
| Provisioning Certificate File (.pfx) | <p>Click <strong>Upload file</strong> to upload your PFX-format certificate. The PFX must contain the private key. On AMT 15 based devices you must use SHA2.</p><p></p><p>Currently supported CAs are Comodo, DigiCert, Entrust and GoDaddy.</p> |
| Provisioning Certificate Password    | Enter the password for the provisioning certificate. The password must be between 8 and 32 characters and include at least one upper case letter, at least one lower case letter, at least one base-10 digit and at least one special character.  |

![](../../.gitbook/assets/2.11.1-settings-edgecompute-openamt.png)

When you have finished making changes, click **Save Settings**.

## FDO

This section controls the configuration of the [FDO functionality](../../user/edge/devices/fdo.md) in Portainer.

| Field/Option                  | Overview                                                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable FDO Management Service | Toggle this option on to enable Portainer's FDO functionality. This can only be enabled when **Enable Edge Compute features** is toggled on, and when on will reveal the below fields. |
| Owner Service Server          | Enter the address and port of your Owner Service Server.                                                                                                                               |
| Owner Service Username        | Enter the username used to connect to your Owner Service Server.                                                                                                                       |
| Owner Service Password        | Enter the password associated with the username above.                                                                                                                                 |

![](../../.gitbook/assets/2.11.1-settings-edgecompute-fdo.png)

When you have finished configuring your FDO setup, click **Save Settings**.

### Device Profiles

Here you can add, edit and manage the device profiles available for use during FDO device setup. A device profile consists of a script that is run on the device when first provisioned by the FDO system, and can be used for initial installation and configuration of the device, for example installing Docker and deploying the Portainer Edge Agent.

![](../../.gitbook/assets/2.11.1-settings-edgecompute-deviceprofiles.png)

To create a new profile, click **Add Profile**. To edit an existing profile, click the name of the profile you want to edit. You can also check the box next to a profile and click **Duplicate** to create a copy of it, and **Remove** to delete the profile.

Device profiles consist of a unique name and the contents of the script. Use the **Web editor** to create or edit your script.

![](../../.gitbook/assets/2.11.1-settings-edgecompute-deviceprofiles-edit.png)

Once you've finished with your script, click **Save Profile**.
