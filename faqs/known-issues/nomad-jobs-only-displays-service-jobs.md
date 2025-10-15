# Nomad Jobs only displays Service Jobs

{% hint style="info" %}
**Affected Versions:**  2.14.0 to 2.19.4 (Nomad support was removed in 2.20.0)
{% endhint %}

#### Issue Description

Nomad Jobs are only displaying Service Jobs. &#x20;

#### Cause

This issue is the result of a bug where System, Batch and Sysbatch Jobs are causing the Portainer UI to break. To avoid this bug we currently only display Service Jobs in the Portainer UI.&#x20;
