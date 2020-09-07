# Deploy Portainer in Linux environments. 

## Deploy Portainer in Kubernetes

To deploy Portainer within a Kubernetes cluster, you can either use our HELM chart, or our provided manifests.

Note that Portainer CE 2.0 supports Kubernetes version 1.16, 1.17 and 1.18 only.

### Using Helm

First, add the Portainer helm repo running the following:

<code>$ helm repo add portainer https://portainer.github.io/k8s/</code>
<code>$ helm repo update</code>

Then, create the Portainer namespace in your cluster

<code>$ kubectl create namespace portainer</code>


