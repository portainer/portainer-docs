# Why have my agents stopped working after upgrading Portainer?

#### If you have recently updated Portainer and have found your Agents or Edge Agents are no longer communicating, you may need to check to confirm whether you have set a custom AGENT\_SECRET value. <a href="#hs_cos_wrapper_kb-article-module-4" id="hs_cos_wrapper_kb-article-module-4"></a>

If this has been defined on the Portainer Server it will need to be set on the agents as well. This applies to both the standard Portainer Agent and the Portainer Edge Agent from BE 2.10 onwards.

{% hint style="info" %}
The default installation methods for Portainer Server do not set a custom AGENT\_SECRET value. If you are not sure whether you have a custom value set, please get in touch and our team can help you confirm.
{% endhint %}

For information on how to define the AGENT\_SECRET on each platform, please refer to the respective upgrade instructions:

### Docker Standalone

In your docker run command for your Agent or Edge Agent, set the AGENT\_SECRET environment variable to the value set on your Portainer Server instance:

```
-e AGENT_SECRET=yoursecret
```

\
For example, your Agent docker run command may look like this:

```
1 docker run -d -p 9001:9001 --name portainer_agent --restart=always \

2 -v /var/run/docker.sock:/var/run/docker.sock \

3 -v /var/lib/docker/volumes:/var/lib/docker/volumes \

4 -e AGENT_SECRET=yoursecret

5 portainer/agent:latest
```

### Docker Swarm

In your stack file for your Docker Swarm Agent or Edge Agent deployment, set the AGENT\_SECRET environment variable to the value set on your Portainer Server instance:

```
1 environment:

2 - AGENT_SECRET: yoursecret
```

### Kubernetes

In your YAML file for your Kubernetes Agent or Edge Agent deployment, set the AGENT\_SECRET environment variable to the value set on your Portainer Server instance within the agent deployment definition:

```
1 env:

2 - name: AGENT_SECRET

3 value: yoursecret
```
