# Create a Kubernetes registry policy

Define a policy by managing registry access and configuration for Kubernetes clusters.

To create a Kubernetes registry policy, in the menu, expand **Environment related**, select **Policies**, and then choose **Create policy**. From the list, select **Kubernetes Registry** and select **Continue** to begin configuring the policy.

| Field/Option       | Overview                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Name               | Define a name for this policy.                                                                                               |
| Environment groups | Select one or more Kubernetes environment [groups](../groups.md) from the dropdown menu.                                     |
| Select registry    | ​Select a [registry](../../../user/kubernetes/cluster/registries.md) from the dropdown menu. ​                               |
| Namespaces         | Select one or more [namespaces](../../../user/kubernetes/namespaces/) that you want to have access to the selected registry. |

<figure><img src="../../../.gitbook/assets/2.37-kubernetes-registry.png" alt=""><figcaption></figcaption></figure>

Click **Add Access** to add the registry to the access list, multiple entries can be added. Each access added will show in the **Registry access list**. When you have finished adding access, click **Create policy**.
