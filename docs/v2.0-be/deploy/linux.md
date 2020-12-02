# Deploy Portainer in Linux environments

## Deploy Portainer in Kubernetes

To deploy Portainer within a Kubernetes cluster, you can either use our HELM chart, or our provided manifests.

### Pre-Req Note:
Portainer requires data persistence, and as a result needs at least one storage-class available to use. Portainer will attempt to use the "default" storage class during deployment. If you do NOT have a storage class tagged as "default" the deployment will likely fail.

You can check if you have a default storage class by running:

<pre><code> > kubectl get sc </code></pre>

and looking for a storage class with (default) after its name:

![defaultsc](assets/defaultsc.png)

If you want to make a storage class the default, you can type the command:

<pre><code> >kubectl patch storageclass <storage-class-name> -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}' </code></pre>

and replace <storage-class-name> with the name of your storage class (eg: kubectl patch storageclass local-path -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'

Alternatively, if you are using HELM you can use:
<pre><code> --set persistence.storageClass=<storage-class-name> </code></pre>

### Using Helm

First, add the Portainer helm repo running the following:

<pre><code> helm repo add portainer https://portainer.github.io/k8s/</code></pre>
<pre><code> helm repo update</code></pre>

Then, create the Portainer namespace in your cluster

<pre><code> kubectl create namespace portainer</code></pre>

#### For NodePort

Using the following command, Portainer will run at port 30777.

<pre><code> helm install --set enterpriseEdition.enabled=true -n portainer portainer portainer/portainer</code></pre>

#### For Load Balancer

Using the following command, Portainer will run at port 9000.

<pre><code> helm install  --set enterpriseEdition.enabled=true -n portainer portainer portainer/portainer --set service.type=LoadBalancer</code></pre>

#### For Ingress

<pre><code> helm install  --set enterpriseEdition.enabled=true -n portainer portainer portainer/portainer --set service.type=ClusterIP</code></pre>

### Using YAML Manifest

First create the Portainer namespace in your cluster

<pre><code> kubectl create namespace portainer</code></pre>

#### For NodePort

Using the following command, Portainer will run at port 30777.

<pre><code> kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer-ee.yaml</code></pre>

#### For Load Balancer

<pre><code>kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer-lb-ee.yaml</code></pre>

## Deploy Portainer in Docker

Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine or within a Swarm cluster. Due to the nature of Docker, there are many possible deployment scenarios, however, we have detailed the most common below. Please use the scenario that matches your configuration.

Note that the recommended deployment mode when using Swarm is using the Portainer Agent.

To see the requeriments, please, visit the page of [requirements](/v2.0-be/deploy/requeriments.md)

### Docker Standalone

Use the following Docker commands to deploy the Portainer Server; note the agent is not needed on standalone hosts, however it does provide additional functionality if used (see Portainer and agent scenario below):

<pre><code> docker volume create portainer_data</code></pre>

<pre><code> docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest</code></pre>

### Docker Swarm

Deploying Portainer and the Portainer Agent to manage a Swarm cluster is easy! You can directly deploy Portainer as a service in your Docker cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

<pre><code> curl -L https://downloads.portainer.io/portainer-ee-agent-stack.yml -o portainer-agent-stack.yml</code></pre>
<pre><code> docker stack deploy -c portainer-agent-stack.yml portainer</code></pre>

<b>Note</b>: By default this stack doesn't enable Host Management Features, you need to enable from the UI of Portainer.

## Portainer Agent Deployments Only

### Docker Standalone
Run the following command to deploy the Agent in your Docker host.

<pre><code>docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent:2.0.0</code></pre>

Note: <code>--tlsskipverify</code> has to be present when deploy an agent and the certs in the agent is not a supported scenario at this moment.

### Docker Swarm
Deploy Portainer Agent on a remote LINUX Swarm Cluster as a Swarm Service, run this command on a manager node in the remote cluster.

<pre><code>docker network create portainer_agent_network</code></pre>

<pre><code> docker service create --name portainer_agent --network portainer_agent_network --publish mode=host,target=9001,published=9001 -e AGENT_CLUSTER_ADDR=tasks.portainer_agent --mode global --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes --mount type=bind,src=/,dst=/host portainer/agent:2.0.0</code></pre>

Note: <code>--tlsskipverify</code> has to be present when deploy an agent and the certs in the agent is not a supported scenario at this moment.

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).
