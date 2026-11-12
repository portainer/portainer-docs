# KubeSolo

For an environment running [KubeSolo](https://kubesolo.io/) - whether Portainer installed it or it was detected after being installed by hand - a **KubeSolo** page shows its running version and configuration, read-only.

{% hint style="info" %}
This page is only available to environment administrators and edge administrators, and is hidden when Portainer is running in FIPS mode.
{% endhint %}

To open it, expand **Cluster** from the menu then select **KubeSolo**. You can also get there from the **This environment runs KubeSolo** panel on the environment's dashboard, by selecting **View its version and configuration**.

The page shows a single **Configuration** card, labelled with the date of the snapshot it was read from:

* If the environment hasn't reported a snapshot yet, the page shows a waiting message until one arrives.
* If KubeSolo's API isn't enabled on the machine, Portainer can't read its configuration. The page shows the commands to enable it:

```
sudo kubesoloctl config set api.enabled true
```

then restart KubeSolo:

```
sudo systemctl restart kubesolo
```

* If KubeSolo's API doesn't answer - usually because KubeSolo is restarting - the page asks you to try again in a minute.
* Otherwise, the page shows the installed **KubeSolo version** and a read-only view of its full configuration.

{% hint style="info" %}
Portainer doesn't change KubeSolo's configuration. To change a setting, run `sudo kubesoloctl config set <key> <value>` on the machine, then restart KubeSolo.
{% endhint %}
