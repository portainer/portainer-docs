# Add a new configuration

From the menu select **Configurations** then click **Add configuration with form**. 

{% hint style="info" %}
Configurations can also be added [using a manifest](../applications/manifest.md) by clicking **Create from manifest**.
{% endhint %}

![](../../../.gitbook/assets/2.9-configurations-add-1.gif)

Define the configuration, using the table below as a guide.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field/Option</th>
      <th style="text-align:left">Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Name</td>
      <td style="text-align:left">Give the configuration a descriptive name.</td>
    </tr>
    <tr>
      <td style="text-align:left">Namespace</td>
      <td style="text-align:left">Select the namespace where the configuration will be saved to.</td>
    </tr>
    <tr>
      <td style="text-align:left">Configuration type</td>
      <td style="text-align:left">
        <p>Select one of the following options:</p>
        <p></p>
        <p><b>Non-sensitive</b>: The configuration will not store any sensitive information.</p>
        <p><b>Sensitive</b>: The configuration will store sensitive information such
          as passwords and certificates.</p>
      </td>
    </tr>
  </tbody>
</table>

![](../../../.gitbook/assets/configurations-add-2.png)

In the **Data** section you can enter the details of your configuration, in either **Simple mode** or **Advanced mode**. Under Simple mode you can add entries in a key and value format, and in Advanced mode you can paste in multiple values in YAML format.

![Adding data in Simple mode](../../../.gitbook/assets/configurations-add-3.png)

![Adding data in Advanced mode](../../../.gitbook/assets/configurations-add-4.png)

When you have finished defining the configuration, click **Create configuration**.

