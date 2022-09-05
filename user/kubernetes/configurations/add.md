# Add a new configuration

From the menu select **ConfigMaps & Secrets** then click **Add with form**.&#x20;

{% hint style="info" %}
Configurations can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.15-k8s_kubernetes_configmap_create_form.gif" alt=""><figcaption></figcaption></figure>

Define the configuration, using the table below as a guide.

| Field/Option       | Overview                                                                                                                                                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | Give the configuration a descriptive name.                                                                                                                                                                                                                              |
| Namespace          | Select the namespace where the configuration will be saved to.                                                                                                                                                                                                          |
| Configuration type | <p>Select one of the following options:</p><p></p><p><strong>ConfigMap:</strong> The configuration will not store any sensitive information. </p><p><strong>Secret:</strong> The configuration will store sensitive information such as passwords and certificates.</p> |

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_configmap_add_form_config.png" alt=""><figcaption></figcaption></figure>

In the **Data** section you can enter the details of your configuration, in either **Simple mode** or **Advanced mode**. Under Simple mode you can add entries in a key and value format, and in Advanced mode you can paste in multiple values in YAML format.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_configmap_add_form_config_data.png" alt=""><figcaption><p>Adding data in Simple mode</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_configmap_add_from_config_data_simple.png" alt=""><figcaption><p>Adding data in Advanced mode</p></figcaption></figure>

When you have finished defining the configuration, click **Create ConfigMap** or **Create Secret** (depending on the configuration type chosen earlier).
