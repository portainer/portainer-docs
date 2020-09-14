# Add Edge Endpoint.

The edge agent was created as a way to manage an edge compute environment where devices typically lack the networking capability to run the traditional Portainer agent.

### Portainer must now expose port 8000.

This scenario only apply when Portainer is running in a Docker or Docker Swarm environment.

Portainer communicates with the edge agent over port 8000; through this port the edge agent can poll the Portainer instance, connect to Portainer, see when it is needed & initiate a tunnel or receive config updates Without port 8000 exposed on Portainer, you cannot access the edge endpoint. If you already have Portainer deployed, you need to redeploy with port 8000 exposed alongside the port used to access Portainer.

## Recommended Portainer deployment methods.

* Portainer with TLS: If your Portainer instance is deployed with TLS, the agent will use HTTPS for the connection it makes back to Portainer. This is the recommended approach.
* Portainer with self-signed certs: If you are using a self signed Portainer instance, the edge agent must be deployed with the flag: <code>-e EDGE_INSECURE_POLL=1</code>. If you do not deploy Portainer with this flag, then the agent will not be able to communicate with Portainer. This option is less secure than TLS.
* Portainer fallback to HTTP: If Portainer is not configured with either of the above options, it will fallback to using HTTP for the agent polling. This option is no longer recommended, as it is insecure.

## Deploying Edge agent in Docker Standalone environment.

To add an Edge Endpoint to Portainer, you need to click in <b>Endpoints</b> and then in <b>Add Endpoint</b> button.

![edge](assets/edge_1.png)

Click in Edge Adgent, assign a name to the endpoint to easy remember and identify in the future. Set the value <b>Portainer Server URL</b> indicating the Public IP of your Portainer and the Port. Choose the <b>Pull Frecuency</b>, by default is each five seconds and then, do a click in the <b>Add Endpoint</b> button.

![edge](assets/edge_2.png)

In the next screen, click in Docker Standalone tab and then in the <b>Copy Command</b> button.

![edge](assets/edge_3.png)

You needs to run this command in the Docker Standalone host and the expected results looks when you run a <code>docker ps</code> command is:

<pre><code>CONTAINER ID        IMAGE                            COMMAND             CREATED             STATUS              PORTS                    NAMES
b9e27f356de8        portainer/agent                  "./agent"           12 seconds ago      Up 12 seconds                                portainer_edge_agent</code></pre>

The next step, is doing a scroll down to <b>Configuration</b> section and define the IP address of the Edge node you want to manage. Is everything is sect, click in <b>Update Endpoint</b> button.

![edge](assets/edge_4.png)

If everything works as expected, you will see the following pop up. 

![edge](assets/edge_5.png)

## Deploying Edge agent in Docker Swarm environment.

Add a Docker Swarm environment with Edge Agent is very similar to the scenario with Docker Standalone.

First, click in <b>Endpoints</b> and then, do a click in <b>Add Endpoints</b> button.

![swarm_edge](assets/edge_swarm_1.png)

Click in Edge Adgent, assign a name to the endpoint to easy remember and identify in the future. Set the value <b>Portainer Server URL</b> indicating the Public IP of your Portainer and the Port. Choose the <b>Pull Frecuency</b>, by default is each five seconds and then, do a click in the <b>Add Endpoint</b> button.

![edge](assets/edge_swarm_2.png)

In the next screen, click in Docker Swarm tab and then in the <b>Copy Command</b> button.

![edge](assets/edge_swarm_3.png)

You needs to run this command in the Docker Swarm node and the expected results is the following:

<pre><code>cp2v1mqzkjpcroo3ama8wsve1
overall progress: 1 out of 1 tasks
okei8p76rf6k: running   [==================================================>]
verify: Service converged</code></pre>

When you run <code>docker service ls</code> you will see a output like this:

<pre><code>ID                  NAME                   MODE                REPLICAS            IMAGE                    PORTS
cp2v1mqzkjpc        portainer_edge_agent   global              1/1                 portainer/agent:latest</code></pre>

The next step, is doing a scroll down to <b>Configuration</b> section and define the IP address of the Edge node you want to manage. Is everything is sect, click in <b>Update Endpoint</b> button.

![edge](assets/edge_swarm_4.png)

If everything works as expected, you will see the following pop up. 

![edge](assets/edge_swarm_5.png)

## Deploying Edge agent in Kubernetes environment.

To add an Edge Endpoint to Portainer, you need to click in <b>Endpoints</b> and then in <b>Add Endpoint</b> button.

![edge_kubernetes](assets/edge_kubernetes_1.png)

Click in Edge Adgent, assign a name to the endpoint to easy remember and identify in the future. Set the value <b>Portainer Server URL</b> indicating the Public IP of your Portainer and the Port. Choose the <b>Pull Frecuency</b>, by default is each five seconds and then, do a click in the <b>Add Endpoint</b> button.

![edge_kubernetes](assets/edge_kubernetes_2.png)

In the next screen, click in Kubernetes tab and then in the <b>Copy Command</b> button.

You need to run this command in the Kubernetes host and the expected results is the following:

<pre><code>  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3190  100  3190    0     0   1249      0  0:00:02  0:00:02 --:--:--  1248
Downloading agent manifest...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  2070  100  2070    0     0   1582      0  0:00:01  0:00:01 --:--:--  1582
Creating Portainer namespace...
namespace/portainer created
Creating agent configuration...
configmap/portainer-agent-edge-id created
Creating agent secret...
secret/portainer-agent-edge-key created
Deploying agent...
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
namespace/portainer configured
serviceaccount/portainer-sa-clusteradmin created
clusterrolebinding.rbac.authorization.k8s.io/portainer-crb-clusteradmin unchanged
service/portainer-agent created
deployment.apps/portainer-agent created
Portainer Edge agent successfully deployed</code></pre>

You can validate if the Edge Agent is running in your host executing the following command:

<pre><code>$ kubectl get pods --namespace=portainer</code></pre>

After run the command, you can enter the IP address of the host and click in <b>\Update Endpoint</b> button.

![edge_kubernetes](assets/edge_kubernetes_3.png)

If everything works as expected. You will see the following pop up.

||||| SPACE FOR POP UP |||||

## Notes

Do you think that is missing something here? Contribute with this admin guide forking the repo [Portainer-Docs](https://github.com/portainer/portainer-docs) and propose changes.