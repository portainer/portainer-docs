# Why have my agents stopped working after upgrading Portainer?

If you have recently updated Portainer and have found your Agents or Edge Agents are no longer communicating, you may need to check to confirm whether you have set a custom `AGENT_SECRET` value. If this has been defined on the Portainer Server it will need to be set on the agents as well. This applies to both the standard Portainer Agent and the Portainer Edge Agent.

For information on how to define the `AGENT_SECRET` on each platform, please refer to the respective upgrade instructions:

## Docker Standalone

In your `docker run` command for your Agent or Edge Agent, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance:

```
-e AGENT_SECRET=yoursecret
```

For example, your Agent `docker run` command may look like this:

```
docker run -d -p 9001:9001 --name portainer_agent --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /var/lib/docker/volumes:/var/lib/docker/volumes \
    -e AGENT_SECRET=yoursecret
    portainer/agent:2.11.1
```

## Docker Swarm

In your stack file for your Docker Swarm Agent or Edge Agent deployment, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance:

```
environment:
  - AGENT_SECRET: yoursecret
```



## Kubernetes

In your YAML file for your Kubernetes Agent or Edge Agent deployment, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance within the agent deployment definition:

```
env:
  - name: AGENT_SECRET
    value: yoursecret
```
