# Add a Secret

From the menu select **ConfigMaps & Secrets**, ensure the **Secrets** tab is selected, then click **Add with form**.&#x20;

{% hint style="info" %}
Secrets can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-configurations-secrets-add.gif" alt=""><figcaption></figcaption></figure>

Define the secret, using the table below as a guide.

| Field/Option | Overview                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Namespace    | Select the namespace where the secret will be saved.                                                                                |
| Name         | Give the secret a descriptive name.                                                                                                 |
| Annotations  | You can add annotations to your secret as required by clicking **Add annotation** and filling in the **Key** and **Value** fields.  |
| Secret Type  | Select from the list of available secret types or select **Custom** to define your own type.                                        |

<figure><img src="../../../.gitbook/assets/2.19-kubernetes-configurations-secrets-add.png" alt=""><figcaption></figcaption></figure>

Data fields change to reflect the type of Data to be entered based on the secret type selection above. In the **Data** section you can enter the details of your secret, in either **Simple mode** or **Advanced mode**. Under simple mode you can add entries in a key and value format, and in advanced mode you can paste in multiple values in YAML format.

<figure><img src="../../../.gitbook/assets/2.16-k8s-secret-data.png" alt=""><figcaption><p>Adding data in Simple mode</p></figcaption></figure>

<figure><img src="../../../.gitbook/assets/2.16-k8s-secret-data-adv.png" alt=""><figcaption><p>Adding data in Advanced mode</p></figcaption></figure>

When you have finished defining the secret, click **Create Secret.**
