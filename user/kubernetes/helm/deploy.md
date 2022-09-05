# Deploy a new application from a Helm chart

From the menu, select **Helm** then select the chart you want to deploy.

<figure><img src="../../../.gitbook/assets/2.15-k8s_kubernetes_helm_deploy_chart.gif" alt=""><figcaption></figcaption></figure>

Complete the required information, using the table below as a guide.

| Field/Option       | Overview                                                                                                                                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Namespace          | Select the namespace you want to deploy your application into.                                                                                                                                             |
| Name               | Give your application a descriptive name.                                                                                                                                                                  |
| Show custom values | Click to expand the **Web editor** so you can configure any parameters required by your application. This is pulled from the `values.yaml` file provided by the chart and will differ from chart to chart. |

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_helm_helm_chart_web_editor.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
You can search within the web editor at any time by pressing `Ctrl-F` (or `Cmd-F` on Mac).
{% endhint %}

When you have finished, click **Install** to deploy the application.
