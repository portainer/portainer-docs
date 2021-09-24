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

Based on how you would like expose the Portainer Service, select an option below:

{% tabs %}
{% tab title="NodePort" %}
Using the following command, Portainer will be available on port `30777`.

```text
kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer.yaml
```
{% endtab %}

{% tab title="Load Balancer" %}
Using the following command, Portainer will be available at an assigned Load Balancer IP at port `9000`.

```text
kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer-lb.yaml
```
{% endtab %}
{% endtabs %}

## Logging In

Now that the installation is complete, you can log into your Portainer Server instance. Depending on how you chose to expose your Portainer installation, open a web browser and navigate to the following URL:

{% tabs %}
{% tab title="NodePort" %}
```bash
http://localhost:30777/
```
{% endtab %}

{% tab title="Load Balancer" %}
```bash
http://localhost:9000/
```
{% endtab %}
{% endtabs %}

Replace `localhost` with the relevant IP address or FQDN if needed, and adjust the port if you changed it earlier.

You will be presented with the initial setup page for Portainer Server.

{% page-ref page="../setup.md" %}

