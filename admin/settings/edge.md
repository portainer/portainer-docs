# Edge Compute

To enable and configure Edge Compute functionality in Portainer, select **Settings** from the menu then select **Edge Compute**.&#x20;

{% hint style="info" %}
To learn how to use our Edge Compute functionality, please refer to the [Edge Compute](../../user/edge/) section of this documentation.
{% endhint %}

<figure><img src="../../.gitbook/assets/2.15-settings-edgecompute.gif" alt=""><figcaption></figcaption></figure>

## Edge Compute settings

In this section you can use the following options to enable and configure Edge Compute functionality within Portainer.

| Field/Option                               | Overview                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enable Edge Compute features               | Toggle this on to enable Edge Compute functionality including Edge Device features.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Portainer API server URL                   | <p>Enter the default URL and port of your Portainer Server instance as it will be seen from your Edge environment. If using a FQDN, ensure that DNS is properly configured to provide this.<br>This value can be overridden when manually deploying an Edge Agent.<br>This feature is only available in Portainer Business Edition.</p>                                                                                                                                                                                                                                                                                        |
| Portainer tunnel server address            | <p>Enter the default address and port of your Portainer Server instance's tunnel server as it will be seen from your Edge environment. If using a FQDN, ensure that DNS is properly configured to provide this.<br>In most cases, this will be the same address as the Portainer API server URL, but without the protocol and on port <code>8000</code>.<br>This value can be overridden when manually deploying an Edge Agent.<br>This feature is only available in Portainer Business Edition. For Community Edition users, refer to <a href="https://github.com/portainer/portainer/issues/6251">this GitHub issue</a>.</p> |
| Enforce use of Portainer generated Edge ID | Enable this option to require that the Edge ID used by an Edge Agent deployment exist within Portainer's database (in other words, have an environment with the matching ID already created) in order to connect.                                                                                                                                                                                                                                                                                                                                                                                                              |

<figure><img src="../../.gitbook/assets/2.18-settings-edge-settings.png" alt=""><figcaption></figcaption></figure>

When you are done, click **Save Settings**.

## Deployment sync options

This section defines options that apply how Edge Agents sync with the Portainer Server instance.

### Check-in intervals

| Field/Option                      | Overview                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------ |
| Edge agent default poll frequency | Select how often Edge Agents in standard mode check in with the Portainer Server instance. |

<figure><img src="../../.gitbook/assets/2.18-settings-edge-checkin.png" alt=""><figcaption></figcaption></figure>

### Async Check-in intervals

The following options apply to Edge Agents deployed in async mode.

| Field/Option                          | Overview                                                                                                  |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Edge agent default ping frequency     | Select how often Edge Agents in async mode ping back to the Portainer Server instance.                    |
| Edge agent default snapshot frequency | Select how often Edge Agents in async mode update their snapshot with the Portainer Server instance.      |
| Edge agent default command frequency  | Select how often Edge Agents in async mode check with the Portainer Server instance for pending commands. |

<figure><img src="../../.gitbook/assets/2.17-settings-edge-asynccheckin.png" alt=""><figcaption></figcaption></figure>

### mTLS Certificate

This section allows you to enable the use of a separate certificate for mTLS and to upload that certificate and CA.

{% hint style="info" %}
For more information on mTLS read our advanced documentation.
{% endhint %}

| Field/Option           | Overview                                                                                                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use separate mTLS cert | Enable this toggle to use a separate mTLS certificate for Edge Agent communication. With this option disabled, Edge Agents will use the same TLS certificate as the Portainer UI. |
| TLS CA Certificate     | Select and upload the CA certificate for use with mTLS.                                                                                                                           |
| TLS certificate        | Select and upload the server certificate for use with mTLS.                                                                                                                       |
| TLS key                | Select and upload the key corresponding to the server certificate.                                                                                                                |

<figure><img src="../../.gitbook/assets/2.18-settings-edge-mtls.png" alt=""><figcaption></figcaption></figure>

When you are done, click **Save Settings**.

## Automatic Edge Environment Creation

In this section you can configure how automatic Edge environment configuration functions as well as customize and retrieve your Edge agent deployment script, for use when preloading Edge Devices with a Portainer Edge Agent container and configuration.

| Field/Option                          | Overview                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Disable Edge Environment Waiting Room | Toggle this on to disable the [waiting room](../../user/edge/waiting-room.md) feature for Edge devices. This will allow any Edge Device that connects to the Portainer instance to automatically associate with Portainer. We recommend leaving this off (the waiting room enabled). |

<figure><img src="../../.gitbook/assets/2.17-settings-edge-aeec-waitingroom.png" alt=""><figcaption></figcaption></figure>

Configure the options and select the platform (Linux or Windows) to generate your Edge agent deployment scripts.

| Field/Option                 | Overview                                                                                                                                               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Edge ID Generator            | Provide a one-line script that will be used to generate a unique ID for your Edge devices. For Linux, an example would be using the `uuidgen` command. |
| Nomad Authentication Enabled | If you have selected a Nomad environment, toggle this to enable authentication.                                                                        |
| Nomad Token                  | If Nomad authentication is enabled, define the Nomad token to use.                                                                                     |
| TLS                          | Toggle this on if your Nomad installation uses TLS.                                                                                                    |
| Environment variables        | Define a comma separated list of environment variables that will be sourced from the Edge device for use in Portainer.                                 |
| Allow self-signed certs      | Toggle this to permit the use of self-signed certificates for the communication between the Edge Agent and the Portainer server.                       |

<figure><img src="../../.gitbook/assets/2.15-settings-edgecompute-aeec-config-2.png" alt=""><figcaption></figcaption></figure>

Select the environment of your deployment and click **Copy** to copy the script to your clipboard.

## Intel OpenAMT

This section controls the configuration of the [Intel OpenAMT](../../user/home/openamt.md) functionality in Portainer.

| Field/Option                         | Overview                                                                                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable OpenAMT                       | Toggle this option on to enable Portainer's OpenAMT functionality. This can only be enabled when **Enable Edge Compute features** is toggled on, and when on will reveal the below fields.                                                        |
| MPS Server                           | Enter the FQDN or IP address of your MPS server.                                                                                                                                                                                                  |
| MPS User                             | Enter the username used to connect to your MPS server.                                                                                                                                                                                            |
| MPS Password                         | Enter the password for the MPS User defined above. The password must be between 8 and 32 characters and include at least one upper case letter, at least one lower case letter, at least one base-10 digit and at least one special character.    |
| Domain Name                          | Enter the fully-qualified domain name associated with the provisioning certificate.                                                                                                                                                               |
| Provisioning Certificate File (.pfx) | <p>Click <strong>Upload file</strong> to upload your PFX-format certificate. The PFX must contain the private key. On AMT 15 based devices you must use SHA2.</p><p></p><p>Currently supported CAs are Comodo, DigiCert, Entrust and GoDaddy.</p> |
| Provisioning Certificate Password    | Enter the password for the provisioning certificate. The password must be between 8 and 32 characters and include at least one upper case letter, at least one lower case letter, at least one base-10 digit and at least one special character.  |

<figure><img src="../../.gitbook/assets/2.15-settings-edgecompute-openamt.png" alt=""><figcaption></figcaption></figure>

When you have finished making changes, click **Save Settings**.
