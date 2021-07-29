# Limit usage of "default" Kubernetes Namespace (Kubernetes Only)

By default, a Kubernetes cluster will instantiate a default namespace when provisioning the cluster to hold the default set of Pods, Services, and Deployments used by the cluster. If you would like to limit the usage of that namespace, you can do so with Portainer. 

## Limiting the usage of "default" namespace

To do this, go to <b>Cluster</b> and then to <b>Setup</b>, then enable the toggle <b>Restrict access to the default namespace</b>.

![namespace](assets/namespaces.png)

Then scroll down and click <b>Save Configuration</b>.

![namespace](assets/save_conf.png)

With this enabled, the only users with the power to run applications in the default namespace are Portainer Administrator users. 

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}