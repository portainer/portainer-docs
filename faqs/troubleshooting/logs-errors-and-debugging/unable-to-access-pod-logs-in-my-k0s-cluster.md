# Unable to Access Pod Logs in My k0s Cluster

You have set up a multi-control-plane node Kubernetes cluster using k0s and have successfully deployed the Portainer agent to the cluster. Portainer can connect to the Kubernetes cluster; however, you may encounter errors when accessing logs—sometimes intermittently. You might see an error message toast similar to the following when attempting to view the logs.\
`Unable to get pod logs: Get “https://<IP>:10250/… : No agent available`

<figure><img src="../../../.gitbook/assets/image (19).png" alt=""><figcaption></figcaption></figure>

Based on our testing, the likely cause of this issue is the absence of node-local load balancing in a k0s-based Kubernetes cluster with multiple control-plane nodes. For more details, refer to the [Configuration file reference](https://docs.k0sproject.io/stable/k0sctl-install/) in the Mirantis, Inc. Configuration Options documentation.

If you manage the cluster configuration manually by modifying the k0s.yaml file on the nodes, update the configuration accordingly and restart the services.​

If you use k0sctl to manage the cluster configuration, simply add the _**nodeLocalLoadBalancing**_ section to your k0sctl.yaml ClusterConfig object. Ensure the correct indentation is maintained. Additional configuration options for node-local load balancing are available in their documentation.

<pre><code>apiVersion: k0sctl.k0sproject.io/v1beta1
kind: Cluster
metadata:
  name: k0s-cluster
spec:
  k0s:
    version: 1.30.3+k0s.0
    config:
      apiVersion: k0s.k0sproject.io/v1beta1
      kind: ClusterConfig
      metadata:
        name: k0s-cluster
      spec:
        network:
          podCIDR: 10.244.0.0/16
          provider: calico
          serviceCIDR: 10.96.0.0/12
<strong>          nodeLocalLoadBalancing:
</strong><strong>            enabled: true
</strong><strong>            type: EnvoyProxy
</strong>  hosts:
    - role: controller
</code></pre>

Note that **k0sctl** is the recommended tool for bootstrapping and managing multi-node environments with high-availability requirements.
