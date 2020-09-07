# Deploy Portainer in Linux environments. 

## Deploy Portainer in Kubernetes

To deploy Portainer within a Kubernetes cluster, you can either use our HELM chart, or our provided manifests.

Note that Portainer CE 2.0 supports Kubernetes version 1.16, 1.17 and 1.18 only.

### Using Helm

First, add the Portainer helm repo running the following:

<pre><code>$ helm repo add portainer https://portainer.github.io/k8s/</code></pre>
<pre><code>$ helm repo update</code></pre>

Then, create the Portainer namespace in your cluster

<pre><code>$ kubectl create namespace portainer</code></pre>


