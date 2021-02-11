# Attach an existing Volume to a Container

Portainer can attach a new volume to a running container.
<b>Be advised that this operation destroys the running container and starts a new one with the volume attached. Backup your data before doing this.</b>

## Attaching a volume

Go to <b>Containers</b> and select the <b>container</b> that you want to attach a volume to.

![volumes](assets/attach_1.png)

Click <b>Duplicate/Edit.</b>

![volumes](assets/attach_2.png)

Scroll down to see the options for this container. Select <b>Volumes</b> and click <b>Map an Additional Volume.</b>

![volumes](assets/attach_3.png)

Next, type the path in the container, in the example below, for an NGINX container, the path to persist is "/usr/share/nginx/html". We also need to specify the volume created.

Finally, click <b>Deploy The Container</b>. You will receive the following warning:

![volumes](assets/attach_5.png)

If successful you will see the confirmation pop up at the top right of screen.

![volumes](assets/attach_6.png)

To confirm the configuration of your container, select it and scroll to the volume configuration, you should see a similar screen to the below:

![volumes](assets/attach_7.png)

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}