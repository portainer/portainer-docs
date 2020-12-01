# Enable Host Management features

From Portainer, you can enable Host Management Features. The benefit of enabling this setting is to do Host system browsing, understand what PCI devices, and physical disk are present in the node.

To get access to this data from Portainer, you need to run the agent with the following environment variable <code>CAP_HOST_MANAGEMENT: 1</code>.

The following features are disabled by default for security reasons:

* Ability to manage the filesystem of the host where the agent is running
* Ability to retrieve hardware information about the host where the agent is running (PCI devices/disks)

In order to enable these features, the agent must be configured properly by:

* Enabling the host management features via the CAP_HOST_MANAGEMENT environment variable
* Bind-mounting the root of the host in the agent container (must be bind-mounted in /host)

## Deploy Portainer Agent

### Docker Swarm

To deploy a new agent with this setting enable, you must run the following:

<pre><code>docker service create --name portainer_agent --network portainer_agent_network --publish mode=host,target=9001,published=9001 -e AGENT_CLUSTER_ADDR=tasks.portainer_agent -e CAP_HOST_MANAGEMENT=1 --mode global --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes --mount type=bind,src=/,dst=/host portainer/agent</code></pre>

### Deploying via stack file:

<pre><code>
version: '3.2'

services:
  agent:
    image: portainer/agent
    environment:
      CAP_HOST_MANAGEMENT: 1
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/docker/volumes:/var/lib/docker/volumes
      - /:/host
    ports:
      - target: 9001
        published: 9001
        protocol: tcp
        mode: host
    networks:
      - portainer_agent
    deploy:
      mode: global
      placement:
        constraints: [node.platform.os == linux]

networks:
  portainer_agent:
    driver: overlay
    attachable: true
</code></pre>.

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).