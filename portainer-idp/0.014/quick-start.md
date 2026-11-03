# Quick Start

Portainer-IDP is installed as an add-on from within Portainer Business. Installation takes a few minutes and asks for no configuration values. The one thing an administrator must do afterwards is give Portainer-IDP its Edge Admin credential, which takes a single click.

{% hint style="warning" %}
Ensure you meet the [requirements](requirements.md) before you install, in particular that Edge Compute is enabled in Portainer.
{% endhint %}

{% stepper %}
{% step %}
## Install the add-on

As a Portainer administrator, open Portainer's add-on catalog and install **Portainer-IDP**. You can learn more about managing add-ons [in the Portainer documentation](https://docs.portainer.io/admin/add-ons).

Portainer installs the add-on's Helm chart into the `portainer-addon-portainer-idp` namespace. The chart runs a single replica with a small persistent volume for its database, so the cluster needs a default storage class.

{% hint style="info" %}
Install Portainer-IDP through Portainer's add-on flow rather than with a plain `helm install`. Portainer gives the add-on a machine credential when it installs, upgrades or repairs it, and the add-on uses that credential to store its settings. A chart installed by hand still works, but keeps its settings in memory and is unconfigured again after every restart until an administrator opens it.
{% endhint %}
{% endstep %}

{% step %}
## Open Portainer-IDP

Once the install completes, open Portainer-IDP from the product switcher in the top left of Portainer. It shows a dropdown of the products available to you, including Portainer-IDP.
{% endstep %}

{% step %}
## Set up the Edge Admin credential

Until it has an Edge Admin credential, every page in Portainer-IDP shows **Finish setting up**. As an administrator, choose **Go to settings**, then on the **Edge Admin credential** card choose **Set up the Edge Admin account**.

Portainer-IDP creates a Portainer user named `portainer-idp-edge-admin` with the Edge Administrator role, creates an access token for it, checks that the token works, and stores it. This is the account Portainer-IDP deploys with on everyone's behalf. See [Architecture](/broken/pages/CeDpBMXTmOdO8V4idbrl) for why.

{% hint style="info" %}
If Portainer signs users in with LDAP or OAuth, the one-click setup isn't available, because Portainer can't issue a token to a user created through its API. Create an account with the Edge Administrator role and an access token in Portainer yourself, paste the token into **Edge Admin API key**, and choose **Save pasted key**.
{% endhint %}
{% endstep %}

{% step %}
## You're done!

Portainer-IDP is installed. There's no encryption key to set: the chart generates one on install and keeps it across upgrades.

Before you invite developers, work through [Initial configuration](initial-configuration.md) to connect a Git repository, check your clusters and create the first deploy target.
{% endstep %}
{% endstepper %}

## What's next

* [Initial configuration](initial-configuration.md): get Portainer and Portainer-IDP set up for your teams.
* [Using Portainer-IDP](using-portainer-idp/overview.md): a full tour of the interface.
