# Enable use of an external load balancer (Kubernetes Only)

Enabling the load balancer feature will allow users to expose applications they deploy over an external IP address assigned by their cloud provider.

!!! note
    Ensure that your cloud provider allows you to create load balancers if you want to use this feature. Using this feature may incur costs from your cloud provider.

## Enabling usage of an external Load Balancer

Open Portainer, go to <b>Cluster</b> and then to <b>Setup</b>. Here, enable the toggle labeled <b>Allow users to use external load balancer</b>.

![namespace](assets/lb.png)

After you enabled the toggle, scroll down and click on <b>Save Configuration</b>.

![namespace](assets/save_conf.png)

With this enabled, when you create a resource pool you will be able to define an external load balancer quota. 

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}