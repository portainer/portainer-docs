# :fontawesome-brands-docker: Upgrade a Standalone Docker Deployment

!!! Warning "Agent Versions"
    Always match the agent version to Portainer Server version. i.e., while installing or upgrading to Portainer 2.6 make sure all the agents are also version 2.6. 

### Docker Standalone

Assuming you've used our recommended deployment scripts: when upgrading to the latest version of Portainer, use the following commands:

 

```shell

docker stop portainer

```

 

```shell

docker rm portainer

```

 

Those 2 commands will stop and remove the container respectively. Doing this will NOT remove your other applications/containers/etc.

 

Now that you have stopped and removed the old version of Portainer, you can run this command

 

```shell

docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee

```

 

That will deploy the newest version of Portainer on your system, using the persistent data and upgrade the DB

 

Now you can go to http://your-server-address:9000 and login. You should notice that the bottom left corner looks different than it did before. There is no more update nag and the version is no longer shown next to the Portainer logo.

 


### Agent Only Upgrade

 

When upgrading to the latest version of Portainer Agent, use the following commands:

 

```shell

docker stop portainer_agent

```

 

```shell

docker rm portainer_agent

```

Those 2 commands will stop and remove the container respectively. Doing this will NOT remove your other applications/containers/etc.

 

Now that you have stopped and removed the old version of Portainer Agent, you can run this command

 

```shell

docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent

```

## :material-note-text: Notes
[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}

