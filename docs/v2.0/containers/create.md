# New Containers

Portainer allows you to deploy a new container direct from the UI with no code required. 

## Deploying a New Container


First select the <b>Endpoint</b> you want to add a container to, then select <b>Containers</b> from the side menu before clicking <b>Add Container</b>.

![container](assets/create_1.png)

Add details to your container:

* <b>Name</b>: Friendly name for your container

* <b>Registry</b>: Where your image is hosted  
  Note: when using DockerHub you can use the Search button to search for the image you have entered to ensure you have the correct name and tag. Portainer also displays the number of pulls remaining for your DockerHub account when using an anonymous account.

* <b>Image</b>: The name of the image you want to deploy

* <b>Ports</b>: Expose the desired ports

* <b>Advanced Settings</b>: Many options available here to customise the deployment from volume and environment configuration to capabilities

Once complete, click <b>Deploy the Container<b/>. 
![container](assets/create_2.png)

![container](assets/create_3.png)


If successful your container will be shown in the Container List. 

![contaier](assets/create_4.png)

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}