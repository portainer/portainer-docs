# Duplicated and or Edit Containers

In Portainer you have the capability to duplicate and / or edit yours containers. In this help article, you will learn how to create a duplicate container and how to edit a running container. 

## Duplicate a running container

When you have the need to duplicate your container for any reason, you can do this from Portainer UI. Do a click in <b>Containers</b> and then selected the container you want to duplicate.

![duplicate](assets/ownership-1.png)

Then, do a click in <b>Duplicate/Edit</b>.

![duplicate](assets/duplicate-1.png)

Change the settings you need, in this example I changed the name of the container and publish in a random port, the port exposed by the container by default. When all the changes needed are done, do a click in <b>Deploy the Container</b>

![duplicate](assets/duplicate-2.png)

If everything work as expected, you will see your duplicate container in the containers list. 

![duplicate](assets/duplicate-3.png)

## Edit a container

Another option is edit the container. You can change the command & loggin options, volumes, Networks, Environment Variables, Labels, Restart Policy, Runtime & Resources and Capabilites. 

To change a running container, you need to do a click in <b>Containers</b>, Choose the container you want to change and then do a click in <b>Duplicate/edit</b>.

![duplicate](assets/ownership-1.png)

![duplicate](assets/duplicate-1.png)

Scrolldown to the bottom of the page and you will see the options to configure to this container. 

![duplicate](assets/duplicate-4.png)

When the changes were made, you must click in <b>Deploy Container</b>. You will see a warning about the remove and re-creating the current container with that new settings. 

![duplicate](assets/duplicate-5.png)

If everything work as expected, you will a pop up confirmed the creating of the new container with the new settings and the remove of the older one. 

![duplicate](assets/duplicate-6.png)

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).