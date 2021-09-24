# Install Portainer with Kubernetes on WSL / Docker Desktop

## Introduction

The following instructions will guide you in setting up _Portainer Server_ with Kubernetes running on Docker Desktop with WSL.

{% hint style="info" %}
This scenario is for testing purposes only.
{% endhint %}

## Preparation

Before you start, you must make sure that Kubernetes is enabled and running within your Docker Desktop installation. To enable Kubernetes in Docker Desktop, you need to open the dashboard of Docker Desktop. Right click the Docker icon in the system tray and click **Dashboard**:

![](../../../../.gitbook/assets/kube-wsl-1.png)

Click **Settings**, then select **Kubernetes**, tick **Enable Kubernetes**, then click **Apply and Restart** \(clicking **Install** in the dialog to install Kubernetes\):

![](../../../../.gitbook/assets/kube-wsl-2.gif)

After a few minutes, you will see that Kubernetes is running in the bottom left status bar of Docker Desktop:

![Docker is on the left, Kubernetes is on the right](../../../../.gitbook/assets/kube-wsl-4.png)

## Deployment

To deploy Portainer within a Kubernetes cluster you can use our provided YAML manifests.

Our YAML manifests support exposing Portainer via either NodePort or Load Balancer.

{% tabs %}
{% tab title="Expose via NodePort" %}
To expose via NodePort, you can use the following command \(Portainer will be available on port `30777`  for HTTP and `30779` for  HTTPS\):

```text
kubectl apply -n portainer -f https://downloads.portainer.io/CE2.9/portainer-2.9.yaml
```

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `30779`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#kubernetes) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}
{% endtab %}

{% tab title="Expose via Load Balancer" %}
To expose via Load Balancer, this command will provision Portainer at an assigned Load Balancer IP on port `9000` for HTTP and `9443` for HTTPS:

```text
kubectl apply -n portainer -f https://downloads.portainer.io/CE2.9/portainer-lb-2.9.yaml
```

{% hint style="info" %}
By default, Portainer generates and uses a self-signed SSL certificate to secure port `9443`. Alternatively you can provide your own SSL certificate [during installation](../../../../advanced/ssl.md#kubernetes) or [via the Portainer UI](../../../../admin/settings/#ssl-certificate) after installation is complete.
{% endhint %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
To explicitly set the target node when deploying using YAML manifests, run the following one-liner to "patch" the deployment, forcing the pod to always be scheduled on the node it's currently running on:
{% endhint %}

```text
kubectl patch deployments -n portainer portainer -p '{"spec": {"template": {"spec": {"nodeSelector": {"kubernetes.io/hostname": "'$(kubectl get pods -n portainer -o jsonpath='{ ..nodeName }')'"}}}}}' || (echo Failed to identify current node of portainer pod; exit 1)
```

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance. Depending on how you chose to expose your Portainer installation, open a web browser and navigate to the following URL:

{% tabs %}
{% tab title="NodePort" %}
```bash
https://localhost:30779/ or http://localhost:30777/
```

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it earlier.
{% endtab %}

{% tab title="Ingress" %}
```bash
https://<FQDN>/
```

Replace `<FQDN>` with the FQDN of your Portainer instance.
{% endtab %}

{% tab title="Load Balancer" %}
```bash
https://<loadbalancer IP>:9443/ or http://<loadbalancer IP>:9000/
```

Replace `<loadbalancer IP>` with the IP address or FQDN of the load balancer, and adjust the port if you changed it earlier.
{% endtab %}
{% endtabs %}

You will be presented with the initial setup page for Portainer Server.

## 

{% page-ref page="../setup.md" %}

