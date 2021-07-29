# Over Commitment of Resources (Kubernetes Only)

With Portainer you can use your resources to the fullest extent and where they are most needed. You can allocate more resources to namespaces than are physically available in the cluster.

!!! warning
    By <b>enabling</b> resource over-commit, you are able to assign more resources to namespaces than are physically available in the cluster. This may lead to unexpected deployment failures if there are insufficient resources to service demand. By <b>disabling</b> resource over-commit (highly recommended), you are only able to assign resources to namespaces that are less (in aggregate) than the cluster total minus any system resource reservation.

## Enabling Over Commitment of Resources

To enable resource over-commit, go to <b>Cluster</b> and then to <b>Setup</b>. Then enable the toggle <b>Allow resource over-commit</b>.

![namespace](assets/over.png)

Then scroll down and click <b>Save Configuration</b>.

![namespace](assets/save_conf.png)

## Disabling Over Commitment of Resources

When you disable the over commitment of resources, you can set a system resource reservation percentage. To do this, go to <b>Cluster</b> and then to <b>Setup</b>, then disable the toggle <b>Allow resource over-commit</b>. Once this is done you will be able to define a reservation of resources:

![namespace](assets/reserve.png)

Once you've made the necessary changes, scroll down and click <b>Save Configuration</b>.

![namespace](assets/save_conf.png)

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}