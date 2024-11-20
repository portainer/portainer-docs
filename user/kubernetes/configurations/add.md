# Add a ConfigMap

From the menu select **ConfigMaps & Secrets**, ensure the **ConfigMaps** tab is selected, then click **Add with form**.&#x20;

{% hint style="info" %}
ConfigMaps can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-configurations-configmaps-add.gif" alt=""><figcaption></figcaption></figure>

Define the ConfigMap, using the table below as a guide.

| Field/Option | Overview                                                                                                                               |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Namespace    | Select the namespace where the ConfigMap will be saved.                                                                                |
| Name         | Give the ConfigMap a descriptive name.                                                                                                 |
| Annotations  | You can add annotations to your ConfigMap as required by clicking **Add annotation** and filling in the **Key** and **Value** fields.  |

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-configurations-configmaps-add.png" alt=""><figcaption></figcaption></figure>

In the **Data** section you can enter the details of your ConfgMap, in either **Simple mode** or **Advanced mode**. Under Simple mode you can add entries in a key and value format, and in Advanced mode you can paste in multiple values in YAML format.

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_configmap_add_form_config_data.png" alt=""><figcaption><p>Adding data in Simple mode</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.15-kubernetes_configmap_add_from_config_data_simple.png" alt=""><figcaption><p>Adding data in Advanced mode</p></figcaption></figure>

When you have finished defining the ConfigMap, click **Create ConfigMap.**
