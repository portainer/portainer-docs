# Add a new configuration

From the menu select **ConfigMaps & Secrets** then click **Add with form**. 

{% hint style="info" %}
Configurations can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

![](../../../.gitbook/assets/2.9.1-configurations-add-1.gif)

Define the configuration, using the table below as a guide.

| **Field/Option**   | **Overview**                                                                                                                                                                                                                                                            |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name               | Give the configuration a descriptive name.                                                                                                                                                                                                                              |
| Namespace          | Select the namespace where the configuration will be saved to.                                                                                                                                                                                                          |
| Configuration type | <p>Select one of the following options:</p><p></p><p><strong>ConfigMap:</strong> The configuration will not store any sensitive information. </p><p><strong>Secret:</strong> The configuration will store sensitive information such as passwords and certificates.</p> |

![](../../../.gitbook/assets/2.9.1-configurations-add-2.png)

In the **Data** section you can enter the details of your configuration, in either **Simple mode** or **Advanced mode**. Under Simple mode you can add entries in a key and value format, and in Advanced mode you can paste in multiple values in YAML format.

![Adding data in Simple mode](../../../.gitbook/assets/configurations-add-3.png)

![Adding data in Advanced mode](../../../.gitbook/assets/configurations-add-4.png)

When you have finished defining the configuration, click **Create ConfigMap** or **Create Secret** (depending on the configuration type chosen earlier).
