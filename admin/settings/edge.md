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
| Use separate mTLS cert                     | <p>Enable this toggle to use a separate mTLS certificate for Edge Agent communication. With this option disabled, Edge Agents will use the same TLS certificate as the Portainer UI.<br>For more information on mTLS read our <a href="../../advanced/mtls.md">advanced documentation</a>.</p>                                                                                                                                                                                                                                                                                                                                 |
| TLS CA certificate                         | When **Use separate mTLS cert** is enabled, select and upload the CA certificate for use with mTLS. When a CA certificate is added, the **Show Certificate** button can be clicked to display the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| TLS certificate                            | When **Use separate mTLS cert** is enabled, select and upload the server certificate for use with mTLS. When a TLS certificate is added, the **Show Certificate** button can be clicked to display the certificate.                                                                                                                                                                                                                                                                                                                                                                                                            |
| TLS key                                    | When **Use separate mTLS cert** is enabled, select and upload the key corresponding to the server certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Enforce use of Portainer generated Edge ID | Enable this option to require that the Edge ID used by an Edge Agent deployment exist within Portainer's database (in other words, have an environment with the matching ID already created) in order to connect.                                                                                                                                                                                                                                                                                                                                                                                                              |

<figure><img src="../../.gitbook/assets/2.29-admin-settings-edge-settings.png" alt=""><figcaption></figcaption></figure>

When you are done, click **Save Settings**.

{% hint style="warning" %}
If you add or change the mTLS CA certificate you will need to restart the Portainer Server in order for the change to apply. You should also ensure any Edge Agents that are using mTLS are also updated to use the new CA certificate.
{% endhint %}

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

## Edge Compute access

This section lets you configure access to your Edge Compute environments through the use of the **Edge Administrator** role. The Edge Administrator role gives a user comprehensive control over Edge resources within all Edge environments, but does not provide full administrative access to the rest of Portainer.

<figure><img src="../../.gitbook/assets/2.20-settings-edge-access.png" alt=""><figcaption></figcaption></figure>

To add a user as an Edge Administrator, select the username from the **Select user(s)** dropdown and click **Create access**.&#x20;

To remove a user from the Edge Administrator role, check the box next to their username in the Edge administrators list and click **Remove**.

## Automatic Edge Environment Creation

In this section you can configure how automatic Edge environment configuration functions.

| Field/Option                         | Overview                                                                                                                                                                                                                                                                           |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable Edge Environment Waiting Room | Toggle this on to enable the [waiting room](../../user/edge/waiting-room.md) feature for Edge devices. This will allow any Edge Device that connects to the Portainer instance to automatically associate with Portainer. We recommend leaving this on (the waiting room enabled). |

<figure><img src="../../.gitbook/assets/2.20-settings-edge-aeec.png" alt=""><figcaption></figcaption></figure>

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
