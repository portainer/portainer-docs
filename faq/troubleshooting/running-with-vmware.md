# Running with VMware

When running a containerized environment on a VMware system there are a few caveats to be aware of before you start. We've outlined those we've run into below. If you do find anything else or think we should expand on what we have below, please [let us know](../../contribute/contribute.md).

## Docker Swarm

### Overlay networking and NSX

If you are running NSX on your VMware environment you will likely run into issues with Docker's overlay networking. In particular, overlay networking uses UDP port `4789` by default which conflicts with VMware NSX's communication port for VXLAN. 

To resolve this, you can change the data path port for your Docker Swarm setup to a different value \(for example, `9789`\):

```text
docker swarm init --data-path-port=9789
```

Alternatively you can \(depending on your setup\) reconfigure NSX to use a different VXLAN port. You'll find instructions on how to do this [in the VMware documentation](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/com.vmware.nsx.admin.doc/GUID-3D18DE9B-79DE-418B-B87F-50342D372C86.html).

### VMware and RedHat/CentOS

When running Docker Swarm on RedHat VMs under VMware you may run into issues with communication over the swarm node routing mesh. We have traced this back to UDP packets being dropped by the source node. Disabling checksum offloading appears to resolve this issue.

Run the following on your VMs:

```text
ethtool -K [network] tx-checksum-ip-generic off
```

Replace `[network]` with the name of your network adapter.

### Large packets are being dropped

In certain configurations, packets being sent on overlay networks can be silently dropped, in particular when `vmw_conn_notifyd` is being used. There is an [open issue with VMware](https://github.com/vmware/guest-introspection-nsx/issues/25) discussing the behavior which we are following, and is worth reading for potential workarounds until this is patched.

