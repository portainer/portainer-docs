# Known issues with VMware

{% hint style="info" %}
**Affected versions:** All

**Fixed in:** n/a
{% endhint %}

When running a containerized environment on a VMware system there are a few caveats to be aware of before you start. We've outlined those we've run into below. If you do find anything else or think we should expand on what we have below, please let us know.

### Docker Swarm

#### Overlay networking and NSX

If you are running NSX on your VMware environment you will likely run into issues with Docker's overlay networking. In particular, overlay networking uses UDP port 4789 by default which conflicts with VMware NSX's communication port for VXLAN.

To resolve this, you can change the data path port for your Docker Swarm setup to a different value (for example, 9789):

```
docker swarm init --data-path-port=9789
```

Alternatively you can (depending on your setup) reconfigure NSX to use a different VXLAN port. You'll find instructions on how to do this in the VMware documentation.

#### VMware and Swarm routing

When running Docker Swarm under VMware you may run into issues with communication over the swarm node routing mesh. We have traced this back to UDP packets being dropped by the source node. Disabling checksum offloading appears to resolve this issue.

Run the following on **all** the VMs in your cluster:&#x20;

```
ethtool -K [network] tx-checksum-ip-generic off
```

Replace \[network] with the name of your network adapter. You will likely need to restart the services on your cluster that communicate with each other (such as the Portainer Agent) for this change to be picked up.

We have seen this issue occur on RedHat-based distributions including CentOS and Photon OS, but also occasionally on Ubuntu so it is worth checking if you are experiencing issues.

{% hint style="info" %}
Note: Changes made via ethtool only apply until your server is rebooted, at which point they will be lost. If you find this change is required, we recommend adding it to your network startup scripts.
{% endhint %}

#### Large packets are being dropped

In certain configurations, packets being sent on overlay networks can be silently dropped, in particular when vmw\_conn\_notifyd is being used. There is an open issue with VMware discussing the behavior which we are following, and is worth reading for potential workarounds until this is patched.

#### Fault Tolerance&#x20;

The "Failed Loading Environment - Unable to find an agent on any Manager Node" error can occur when the VMware "Fault Tolerance" feature is enabled on the virtual machine (VM) of the swarm manager node. This feature can disrupt communication. To resolve the communication issue, follow these steps:

1. Disable the Fault Tolerance feature for the virtual machine.
2. Restart/update the portainer\_agent service.

By disabling Fault Tolerance and restarting/updating the portainer\_agent service, communication can be restored.
