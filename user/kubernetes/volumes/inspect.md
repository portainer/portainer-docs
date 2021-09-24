# Inspect a volume

From the menu select **Volumes** then select the volume you want to inspect.

![](../../../.gitbook/assets/be-k8s-volumes-inspect-1.gif)

When you select a volume, the screen will divide into three sections, each described below.

## Volume section

Summarizes key information about the volume.

| Attribute | Overview |
| :--- | :--- |
| Name | The name of the volume. |
| Namespace | The namespace that the volume belongs to. |
| Storage | The storage object that the volume uses. |
| Shared Access Policy | The access policy configured for the volume. |
| Provisioner | The storage provisioner that provisions the volume. |
| Creation date | When the volume was created. |
| Size | The size of the volume. You can grow a volume by clicking the **Increase size** button and adjusting the value. Shrinking a volume is not supported. |

![](../../../.gitbook/assets/volumes-k8s-inspect-2.png)

## Events section

Shows information about volume-related events.

![](../../../.gitbook/assets/volumes-k8s-inspect-3.png)

## YAML section

This displays the YAML generated from the volume deployment. Use it to create backups of the configuration.

![](../../../.gitbook/assets/volumes-k8s-inspect-4.png)

