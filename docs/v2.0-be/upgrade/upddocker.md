# :fontawesome-brands-docker: Upgrade a Standalone Docker Deployment

!!! Warning "Agent Versions"
    Always match the agent version to Portainer Server version. i.e., while installing or upgrading to Portainer 2.7 make sure all the agents are also version 2.7. 

### Docker Standalone

Assuming you've used our recommended deployment scripts: when upgrading to the latest version of Portainer, use the following commands:

```shell
docker stop portainer
```

```shell
docker rm portainer
```

Those 2 commands will stop and remove the container respectively. Doing this will NOT remove your other applications/containers/etc.

Now that you have stopped and removed the old version of Portainer, you will want to ensure you have the latest version of the image locally. You can do this with a `docker pull` command:

```shell
docker pull portainer/portainer-ee
```
Finally, deploy the updated version of Portainer:

```shell
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee
```

The newest version of Portainer will now be deployed on your system, using the persistent data from the previous version, and will upgrade the Portainer database for the new version.

Now you can go to http://your-server-address:9000 and login. You should notice that the update notification has disappared and the version number has updated.
### Agent Only Upgrade

When upgrading to the latest version of Portainer Agent, use the following commands:

```shell
docker stop portainer_agent
```

```shell
docker rm portainer_agent
```

Those 2 commands will stop and remove the container respectively. Doing this will NOT remove your other applications/containers/etc.

Next, pull the updated version of the image:

```shell
docker pull portainer/agent
```

Finally, start the agent with the updated image:

```shell
docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent
```

## :material-note-text: Notes
[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}

