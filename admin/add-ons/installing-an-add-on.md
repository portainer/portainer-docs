# Installing an add-on

{% hint style="info" %}
Non-admin users cannot access the catalog, install wizard, or detail view for add-ons.
{% endhint %}

To install an add-on, navigate to **Add-ons** under Administration in the menu and click **Install** on the application you would like to install.&#x20;

Add-on configuration varies by application. Refer to that application's documentation, linked in the [add-ons catalog](./#add-ons-catalog), for help with installation.

#### Configuration

| Field/Option         | Overview                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Chart source         | A read-only field that shows the OCI Helm chart reference used to install this add-on.                                                                                                                                                                                                                                                                                                                 |
| Version              | Select which chart version to install. The most recent version is marked "(latest)" and selected by default.                                                                                                                                                                                                                                                                                           |
| Add-on configuration | <p>Appears once a version is selected. Contains the connection and configuration fields defined by the chart's values. The fields vary between add-ons - each one is generated from the chart's own schema.</p><p></p><p>Fields whose name includes <code>key</code>, <code>token</code>, <code>secret</code>, or <code>password</code> are masked by default - click the eye icon to reveal them.</p> |

<figure><img src="../../.gitbook/assets/2.45-addons-setup-configuration-deployment.png" alt=""><figcaption></figcaption></figure>

You can click Advanced configuration to further customize your deployment from the default values:

| Field/Option   | Overview                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image registry | Specify the registry that contains the add-on's container image. Its credentials are also what the add-on's pod pull with.                                                                  |
| Image          | Specify the image to use. Start typing in this field to search the registry's images. You can also manually enter a path here if the search does not give the option you are searching for. |
| Image tag      | Specify the image tag to use.                                                                                                                                                               |
| Storage class  | Specify the StorageClass to use for the add-on's volume. If not set, the cluster's default StorageClass will be used.                                                                       |

<figure><img src="../../.gitbook/assets/2.45-addons-setup-configuration-deployment-advanced.png" alt=""><figcaption></figcaption></figure>

Click **Next** when you have completed the initial configuration.

#### Assign teams

| Field/Option                  | Overview                                                                                                                                                                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Teams                         | Optionally select which Portainer teams can access this add-on. You can also type a new team name here to create one.                                                                                                                                |
| Restrict team to add-ons only | When enabled, members of the team are redirected directly into the add-on and cannot access the main Portainer UI. This makes the add-on their primary interface. If you have chosen multiple teams above, a toggle will be displayed for each team. |

<figure><img src="../../.gitbook/assets/2.45-addons-setup-teams.png" alt=""><figcaption></figcaption></figure>

Once you have complete both steps and click **Finish** to deploy the add-on.
