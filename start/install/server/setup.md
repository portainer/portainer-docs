# Initial setup

Once the Portainer Server has been deployed, and you have navigated to the instance's URL, you are ready for the initial setup.

## Creating the first user

Your first user will be an administrator. The username defaults to `admin` but you can change it if you prefer. The password must be at least 12 characters long and meet the listed password requirements.

<figure><img src="../../../.gitbook/assets/2.15-install-server-setup-user.png" alt=""><figcaption></figcaption></figure>

## Enabling or disabling the collection of statistics

We use a tool called [Matomo](https://matomo.org/) to collect anonymous information about how Portainer is used. We recommend enabling this option so we can make improvements based on usage. For more about what we do with the information we collect, read our [privacy policy](https://www.portainer.io/privacy-policy).

During installation, you can enable or disable connection statistics using the checkbox. If you change your mind later, you can easily update this option under [Settings](../../../admin/settings/) in the Portainer UI.

<figure><img src="../../../.gitbook/assets/2.15-install-server-setup-matomo.png" alt=""><figcaption></figcaption></figure>

## Add your license key

You will now be asked to provide your license key. You will have been provided this when signing up for Business Edition or the free trial. If you don't have a license key, you can either click the **Don't have a license?** link or [get in touch with our team](mailto:success@portainer.io).

Paste the license key you were provided into the box and click **Submit**.

<figure><img src="../../../.gitbook/assets/2.15-install-server-setup-license.png" alt=""><figcaption></figcaption></figure>

## Connecting Portainer to your environments

Once the admin user has been created, the **Environment Wizard** will automatically launch. The wizard will help get you started with Portainer.

<figure><img src="../../../.gitbook/assets/2.15-install-server-setup-wizard.png" alt=""><figcaption></figcaption></figure>

The installation process automatically detects your local environment and sets it up for you. If you want to add additional environments to manage with this Portainer instance, click **Add Environments**. Otherwise, click **Get Started** to start using Portainer!
