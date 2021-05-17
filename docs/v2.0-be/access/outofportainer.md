# :fontawesome-solid-users-cog: Access Control

Any resources deployed to docker or docker swarm outside of Portainer will be marked as external and you will have limited control over these resources. You can still enable Access Control on these using Labels.


By default any resources deployed outside of Portainer has Administrator Only access. You can control access using Labels:

| Label | Description | Notes |
|-------|-------------|-------|
| io.portainer.accesscontrol.public | All portainers users have access to the resource(s) | Takes precedence over team/user assignments |
| io.portainer.accesscontrol.teams=dev,prod | Access restricted to Teams dev and prod only | Can be used in conjunction with io.portainer.accesscontrol.users |
| io.portainer.accesscontrol.users=bob,adam | Access restricted to users bob and adam only | Can be used in conjunction with io.portainer.accesscontrol.teams |

## Examples

1. Deploy a stack using docker-compose and restrict access to Teams `dev` and `prod`

    ```yaml
    version: '3.2'
    services:
        ltest:
            image: busybox:latest
            command: "ping localhost"
            labels:
                io.portainer.accesscontrol.teams: dev,prod
    ```

2. Deploy a stack using docker cli and restrict access to Team `testers` and Users `bob` and `adam`

    ```yaml
    version: '3.2'
    services:
        ltest:
            image: busybox:latest
            command: "ping localhost"
            labels:
                io.portainer.accesscontrol.teams: testers
                io.portainer.accesscontrol.users: bob,adam
    ```

3. Deploy a container using docker cli and make it accessible to all Portainer Users
    ```shell 
    docker run -d --label io.portainer.accesscontrol.public nginx:latest
    ```

4. Deploy a container using docker cli and restrict access to Teams `dev` and `prod` and Users `bob`
    ```shell 
    docker run -d --label io.portainer.accesscontrol.teams=dev,prod --label io.portainer.accesscontrol.users=bob nginx:latest
    ```

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=\_blank}