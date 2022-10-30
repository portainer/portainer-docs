# Edge Devices

The Edge Devices feature lets you add, deploy and manage your Edge devices directly from within Portainer.

{% hint style="info" %}
This functionality requires you to [enable Edge Compute](../../../admin/settings/edge.md) features.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-edge-devices-list.png" alt=""><figcaption></figcaption></figure>

To add a new Edge device, click the **Add Device** button. If you have [enabled FDO](../../../admin/settings/edge.md#fdo) you will be given the option to [provision a bare-metal device using Intel FDO](fdo.md) or to deploy the Edge Agent manually. If FDO is not enabled you will be taken directly to the [manual Edge Agent provision](../../../admin/environments/add/edge.md#adding-an-edge-environment-to-portainer).

If you have [enabled and configured OpenAMT](../../../admin/settings/edge.md#intel-openamt), you will also see an option to [Associate with OpenAMT](openamt.md).

{% content-ref url="fdo.md" %}
[fdo.md](fdo.md)
{% endcontent-ref %}

{% content-ref url="openamt.md" %}
[openamt.md](openamt.md)
{% endcontent-ref %}

If you have pre-deployed Edge devices with a [deployment script](../../../admin/settings/edge.md#automatic-edge-environment-creation), you can click the **Waiting room** button to check on any pending device connections.

{% content-ref url="waiting-room.md" %}
[waiting-room.md](waiting-room.md)
{% endcontent-ref %}

## Browsing your Edge device

Snapshot browsing allows the ability to run remote commands on your Edge devices that are in Async mode. You can browse your device as well as run commands like start, stop, restart, and delete on your containers, stacks and volumes.

{% hint style="info" %}
To enable snapshot browsing, async mode by default must be enabled. You can refer to the Edge Compute [instructions](../../../admin/settings/edge.md#deployment-sync-options) for more details on how to do this.
{% endhint %}

To browse your Edge device, click the three dots next to the device in the **Actions** column and select **Browse Snapshot**.

<figure><img src="../../../.gitbook/assets/2.16-edge_devices_browse_snap_action_button.png" alt=""><figcaption></figcaption></figure>

You will be directed to the dashboard for the Edge device, with a **Browsing snapshot** drop down that details the last updated and next updated date, how often the snapshots are taken and the environment status.  You can refer to the [deployment sync options ](../../../admin/settings/edge.md#deployment-sync-options)for more details.&#x20;

{% hint style="warning" %}
The information displayed in Portainer for your Edge device is up to date as of the time the latest snapshot (as indicated in the dropdown) was taken. Depending on the age of the snapshot and the environment, this may not be an up to date representation of the current state of the device, so bear this in mind when taking actions on the device.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.16-edge_devices_browse_snaps_dashboard.png" alt=""><figcaption></figcaption></figure>

From here, you can browse the device as you would a regular environment.

<figure><img src="../../../.gitbook/assets/2.16-edge_devices_browse_snaps.gif" alt=""><figcaption></figcaption></figure>
