# Export Images

Portainer allows you to export any Docker image that is stored in any node. This is useful when you need to move a container from a one host to another or simply make backup of the images. 

<b>Note</b>: Be advised that when you export a container to a tar file, the volumes are not exported with it. You need to save the data from those volumes in a another way.

## Exporting Images

To export images, click <b>Images</b>, select the <b>image</b> you want to export and click <b>Export</b>.

![export](assets/export-1.png)

You will see a pop up warning you about that the export may take several minutes, this time depends of the size of your image. Click <b>Continue</b>.

![export](assets/export-2.png)

When the process is ready you will see a pop up at the top right corner and you will see that your image is downloading:

![export](assets/export-3.png)

![export](assets/export-4.png)

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).