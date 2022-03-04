---
description: >-
  Slow network connectivity using Overlay Networks in your swarm clusters using
  VMs for node? GRO(Generic Receive Offload) or RSC (Receive Segment Coalescing)
  might be to blame.
---

# Slow Overlay Network?

If you are running Virtualised Linux with latest 5+ Kernel for your Swarm nodes you may run into this issue.&#x20;

You need to check [GRO](https://lwn.net/Articles/358910/) / [RSC](https://docs.microsoft.com/en-us/windows-server/networking/technologies/hpn/rsc-in-the-vswitch) settings on your Hypervisor's network interface or vSwitch.\
Relevant issues reported at moby/moby [here](https://github.com/moby/moby/issues/41902) and [here](https://github.com/moby/moby/issues/42714).

### Linux Based Hypervisor's

Run the following command to get the status of GRO for your network interface

```shell
ethtool -k <interface name> | grep generic-receive-offload
```

![](<../../.gitbook/assets/image (5).png>)

You can turn GRO off by running the following command

```
ethtool -K <interface name> gro off
```

Repeat for all required interfaces.\
\
This should improve the network speeds for for your overlay networks between swarm node VMs



### Hyper-V

Run the following command to get the status of RSC for your network interface

```powershell
Get-VMSwitch -Name <vSwitchName> | Select-Object *RSC*
```

![](<../../.gitbook/assets/image (4).png>)

You can turn RSC off by running the following command

```powershell
Set-VMSwitch -Name <vSwitchName> -EnableSoftwareRsc $false
```

Repeat for all required interfaces.\
\
This should improve the network speeds for for your overlay networks between swarm node VMs.
