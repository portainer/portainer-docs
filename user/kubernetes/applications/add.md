# Add a new application manually

There are two ways to add a new application: manually by using a form or automatically by [using a manifest](manifest.md). This article explains how to add an application manually.

From the menu select **Applications** then click **Add application with form**.

![](../../../.gitbook/assets/2.9-applications-add-manual-1.gif)

Complete the required information, using the table below as a guide.

| Field/Option | Overview |
| :--- | :--- |
| Namespace | Select the namespace where the application will reside. |
| Name | Give the application a descriptive name. |
| Registry | Select the registry to pull the image from. If you want to pull from a registry that is not configured with Portainer, click **Advanced mode** then enter the URL and image manually. |
| Image | Enter the name \(and optionally the tag\) of the image that will be used to deploy the application. |
| Stack | Portainer can automatically bundle multiple applications inside a stack. You can either enter the name of a new stack, select an existing stack from the list, or leave empty to use the application name. |

![](../../../.gitbook/assets/2.9-applications-add-manual-2.png)

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field/Option</th>
      <th style="text-align:left">Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Environment variables</td>
      <td style="text-align:left">Define any environment variables for the application.</td>
    </tr>
    <tr>
      <td style="text-align:left">Configurations</td>
      <td style="text-align:left">Select any configuration files you have previously created to make them
        available to the application.</td>
    </tr>
    <tr>
      <td style="text-align:left">Persisting data</td>
      <td style="text-align:left">Define any persistent folders within the application and whether these
        are new or existing volumes, as well as the size of the volume and storage
        location.</td>
    </tr>
    <tr>
      <td style="text-align:left">Data access policy</td>
      <td style="text-align:left">You have two options when specifying how data will be used across instances:</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p><b>Isolated:</b> Each instance of the application will use its own data.</p>
        <p><b>Shared</b>: All application instances will use the same data.</p>
      </td>
    </tr>
  </tbody>
</table>

![](../../../.gitbook/assets/applications-add-3.png)

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field/Option</th>
      <th style="text-align:left">Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Resource reservations</td>
      <td style="text-align:left">Define the amount of memory and CPU available to the application.</td>
    </tr>
    <tr>
      <td style="text-align:left">Deployment</td>
      <td style="text-align:left">Choose how you want to deploy the application inside the cluster. Options
        are:</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p><b>Replicated</b>: Run one or multiple instances on this container.</p>
        <p><b>Global</b>: Deploy an instance of this container on each cluster node.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Instance count</td>
      <td style="text-align:left">Define the number of instances of the application to run.</td>
    </tr>
  </tbody>
</table>

![](../../../.gitbook/assets/applications-add-4.png)

| Field/Option | Overview |
| :--- | :--- |
| Enable auto scaling for this application | Toggle this to enable auto-scaling for the application you are deploying. This requires that the Kubernetes metrics server is installed and [enabled in the cluster setup](../cluster/setup.md#resources-and-metrics). |
| Minimum instances | Enter the minimum number of instances that you want running for this application. |
| Maximum instances | Enter the maximum number of instances that you want running for this application. |
| Target CPU usage | Enter the target CPU percentage for your application. The autoscaler will ensure that enough instances are running to maintain an average CPU usage of this value across all instances. |

![](../../../.gitbook/assets/2.9-applications-add-manual-5.png)

<table>
  <thead>
    <tr>
      <th style="text-align:left">Field/Option</th>
      <th style="text-align:left">Overview</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Placement rules</td>
      <td style="text-align:left">Define which placement rules must be followed by the nodes where the application
        is deployed to. Placement rules are based on node labels.</td>
    </tr>
    <tr>
      <td style="text-align:left">Placement policy</td>
      <td style="text-align:left">Select which policy to associate with the placement rules. Options are:</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p><b>Mandatory:</b> The application will only be scheduled on nodes that
          follow all rules.</p>
        <p><b>Preferred</b>: If possible, the application will be scheduled on nodes
          that follow all rules.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Publishing the application</td>
      <td style="text-align:left">Select how you want to publish the application. Options are:</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p><b>Internal</b>: Internal communications inside the cluster only.</p>
        <p><b>Cluster</b>: Publish via a port on all cluster nodes.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Published ports</td>
      <td style="text-align:left">Define the published ports for the application. Only applicable if you
        selected the <b>Cluster</b> publishing method.</td>
    </tr>
  </tbody>
</table>

![](../../../.gitbook/assets/applications-add-5.png)

When you have finished, click **Deploy application**.

