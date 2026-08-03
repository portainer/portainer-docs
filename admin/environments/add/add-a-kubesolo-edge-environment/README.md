# Add a KubeSolo (Edge) environment

{% hint style="info" %}
This feature is only available in [Portainer Business Edition](https://www.portainer.io/business-upsell?from=k8s-create-from-kubeconfig).
{% endhint %}

[KubeSolo](https://kubesolo.io/) provides a lightweight, single-node Kubernetes distribution designed for edge deployments. With Portainer Business Edition you can deploy a single-node Kubernetes edge environment with KubeSolo on your existing infrastructure directly from the Portainer UI.

The KubeSolo environment can be deployed as a Standard or Async Edge Agent.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Edge Agent Standard</strong></td><td>The remote environment will initiate connections to the Portainer server, <strong>with</strong> the ability to open a secure on-demand tunnel for real-time interaction. The Portainer server must be accessible from the Edge Agent environment.</td><td><a href="../../../../.gitbook/assets/card-edgestd-large.png">card-edgestd-large.png</a></td><td><a href="../kubernetes/edge.md">edge.md</a></td></tr><tr><td><strong>Edge Agent Async</strong></td><td>The remote environment will initiate connections to the Portainer server, <strong>without</strong> the ability to open a real-time tunnel. The Portainer server must be accessible from the Edge Agent environment.</td><td><a href="../../../../.gitbook/assets/card-edgeasync-large.png">card-edgeasync-large.png</a></td><td><a href="../kubernetes/edge-async.md">edge-async.md</a></td></tr></tbody></table>
