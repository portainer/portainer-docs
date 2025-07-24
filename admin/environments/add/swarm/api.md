# Connect to the Docker API

Before you begin, you will need to ensure that your Docker instance is configured to admit remote connections. To learn how to do this, refer to Docker's own documentation. Once Docker is configured, you will be able to connect either with or without TLS.

From the menu expand **Environment-related**, click **Environments**, then click **Add environment**.

<figure><img src="../../../../.gitbook/assets/2.22-environments-add.gif" alt=""><figcaption></figcaption></figure>

Next, select **Docker Swarm** as the environment type then click **Start Wizard**. Select the **API** option and your platform, then enter the environment details using the table below as a guide:

<table><thead><tr><th width="280">Field/Option</th><th>Overview</th></tr></thead><tbody><tr><td>Name</td><td>Give the environment a descriptive name.</td></tr><tr><td>Docker API URL</td><td>Enter the DNS name or IP address to connect to the Docker host along with the port. When connecting without TLS, the default port is <code>2375</code>. When connecting with TLS, the default port is <code>2376</code>.</td></tr><tr><td>TLS</td><td>Toggle this option on if you wish to use TLS. Toggle it off if you don't want to use TLS.</td></tr><tr><td>Skip Certification Verification</td><td>Toggle this option on to skip the verification of the TLS certificate used by the Docker API. If this option is off, the below fields will not appear.</td></tr><tr><td>TLS CA certificate</td><td>Select your CA certificate.</td></tr><tr><td>TLS certificate</td><td>Select your certificate.</td></tr><tr><td>TLS key</td><td>Select the key that matches the certificate.</td></tr></tbody></table>

{% hint style="info" %}
Portainer expects TLS certificates and keys to be in PEM format.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-swarm-api-details.png" alt=""><figcaption></figcaption></figure>

As an optional step you can expand the **More settings** section to categorize the environment by adding it to a [group](../../groups.md) or [tagging](../../tags.md) it for better searchability.

<figure><img src="../../../../.gitbook/assets/2.18-environments-add-docker-moresettings.png" alt=""><figcaption></figcaption></figure>

When you're ready, click **Connect**. If you have other environments to configure click **Next** to proceed, otherwise click **Close** to return to the list of environments.
