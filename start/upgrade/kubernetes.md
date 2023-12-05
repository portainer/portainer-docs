# Updating on Kubernetes

{% hint style="info" %}
Always match the agent version to the Portainer Server version. In other words, when you're installing or updating to Portainer 2.19.4 make sure all of the agents are also on version 2.19.4.
{% endhint %}

{% hint style="warning" %}
Starting from Portainer CE 2.9 and BE 2.10, HTTPS is enabled by default on port `9443.` These instructions will configure Portainer to use both `9443` for HTTPS and `9000` for HTTP. You can choose to [completely disable HTTP](../../admin/settings/#force-https-only) after the update.&#x20;

Before you make Portainer HTTPS only, make sure you have all your Agents and Edge Agents already communicating with Portainer using HTTPS.&#x20;
{% endhint %}

{% hint style="danger" %}
Before beginning any update, we highly recommend [taking a backup](../../admin/settings/#backup-portainer) of your current Portainer configuration.
{% endhint %}

Select the Portainer update method which matches the original installation method used.

## Method 1: Updating using Helm

Add the Portainer Helm repository by running the following commands. Ignore any warnings about the repo already being there:

```
helm repo add portainer https://portainer.github.io/k8s/
helm repo update
```

Next, run the following command to update to the latest version of Portainer:

```
helm upgrade -n portainer portainer portainer/portainer
```

## Method 2: Upgrading using YAML Manifest

### Option 1: Via the Portainer UI

The easiest way to upgrade is to use the Portainer UI along with our manifest files. Copy the contents of the manifest file that matches the method you used to deploy Portainer:

{% tabs %}
{% tab title="NodePort" %}
Copy the contents of the relevant NodePort manifest file:

**Business Edition:**

```
https://downloads.portainer.io/ee2-19/portainer.yaml
```

**Community Edition:**

```
https://downloads.portainer.io/ce2-19/portainer.yaml
```

For an agent-only deployment, use one of the following manifests instead:

**Business Edition:**

```
https://downloads.portainer.io/ee2-19/portainer-agent-k8s-nodeport.yaml
```

**Community Edition:**

```
https://downloads.portainer.io/ce2-19/portainer-agent-k8s-nodeport.yaml
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance you must remember to explicitly provide this in the YAML when updating your agent:

`environment:`

&#x20; `- AGENT_SECRET: yoursecret`
{% endhint %}
{% endtab %}

{% tab title="Load Balancer" %}
Copy the contents of the relevant Load Balancer manifest file:

**Business Edition:**

```
https://downloads.portainer.io/ee2-19/portainer-lb.yaml
```

**Community Edition:**

```
https://downloads.portainer.io/ce2-19/portainer-lb.yaml
```

For an agent-only deployment, use one of the following manifests instead:

**Business Edition:**

```
https://downloads.portainer.io/ee2-19/portainer-agent-k8s-lb.yaml
```

**Community Edition:**

```
https://downloads.portainer.io/ce2-19/portainer-agent-k8s-lb.yaml
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance you must remember to explicitly provide this in the YAML when updating your agent:

`environment:`

&#x20; `- AGENT_SECRET: yoursecret`
{% endhint %}
{% endtab %}
{% endtabs %}

Log into Portainer and connect to the Kubernetes environment where Portainer is installed. From the menu select **Applications** then select **Create from manifest**. Toggle **Use namespace(s) specified from manifest** to on, then enter `portainer` in the **Name** field.&#x20;

{% hint style="warning" %}
If you used a different name for your Portainer deployment, use that instead.
{% endhint %}

From the **Build method** selection choose **Web Editor** and ensure **Kubernetes** is selected as the **Deploy type**. Paste the contents of the YAML file then click **Deploy**. Portainer will process the manifest and should return you to the login page once the update is complete.

### Option 2: Via the command line

If you prefer to use the command line to update, you can do so using `kubectl` commands:

{% tabs %}
{% tab title="NodePort" %}
Log into the control node of your Kubernetes cluster and run one of the following commands:

**Business Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ee2-19/portainer.yaml
```

**Community Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ce2-19/portainer.yaml
```

For an agent-only deployment, use one of the following commands instead:

**Business Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ee2-19/portainer-agent-k8s-nodeport.yaml
```

**Community Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ce2-19/portainer-agent-k8s-nodeport.yaml
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance you must remember to explicitly provide this in the YAML when updating your agent:

`environment:`

&#x20; `- AGENT_SECRET: yoursecret`
{% endhint %}
{% endtab %}

{% tab title="Load Balancer" %}
Log into the control node of your Kubernetes cluster and run one of the following commands:

**Business Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ee2-19/portainer-lb.yaml
```

**Community Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ce2-19/portainer.yaml
```

For an agent-only deployment, use one of the following commands instead:

**Business Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ee2-19/portainer-agent-k8s-lb.yaml
```

**Community Edition:**

```
kubectl apply -n portainer -f https://downloads.portainer.io/ce2-19/portainer-agent-k8s-lb.yaml
```

{% hint style="warning" %}
If you have set a custom `AGENT_SECRET` on your Portainer Server instance you must remember to explicitly provide this in the YAML when updating your agent:

`environment:`

&#x20; `- AGENT_SECRET: yoursecret`
{% endhint %}
{% endtab %}
{% endtabs %}

When the deployment is finished you will be able to log into Portainer. You should notice the new version number at the bottom-left of the Portainer UI.

## Method 3: Force an update

If Portainer does not update after running the above commands, you can force a download of the latest image by running the following command:

```
kubectl -n portainer rollout restart deployment.apps/portainer
```

Or, for an agent-only deployment, use this command instead:

```
kubectl -n portainer rollout restart deployment.apps/portainer-agent
```
