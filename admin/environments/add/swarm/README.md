# Add a Docker Swarm environment

When connecting a Docker Swarm environment to Portainer, there are a few different methods you can use depending on your particular requirements. You can install the Portainer Agent on the Docker Swarm cluster and connect via the agent, you can connect directly to the Docker API or the Docker socket, or you can deploy the Portainer Edge Agent in standard or async mode.

Regardless of the method you choose, there are some generic requirements you will need to meet. You will require:

* The latest version of Docker installed and working on your Docker Swarm nodes.
* Swarm mode enabled and working, including the overlay network for the swarm service communication.
* `sudo`, `root` or Administrator access on the manager node of your swarm cluster.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../../start/requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* Docker is running as root (for Linux) or an Administrator (for Windows). Portainer with rootless Docker has some limitations, and requires additional configuration.
* If your nodes are using DNS records to communicate, that all records are resolvable across the cluster.

<table data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Agent</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-agent-large.png">card-agent-large.png</a></td><td><a href="agent.md">agent.md</a></td></tr><tr><td><strong>API</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-api-large.png">card-api-large.png</a></td><td><a href="api.md">api.md</a></td></tr><tr><td><strong>Socket</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-socket-large.png">card-socket-large.png</a></td><td><a href="socket.md">socket.md</a></td></tr><tr><td><strong>Edge Agent Standard</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-edgestd-large.png">card-edgestd-large.png</a></td><td><a href="edge.md">edge.md</a></td></tr><tr><td><strong>Edge Agent Async</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-edgeasync-large.png">card-edgeasync-large.png</a></td><td><a href="edge-async.md">edge-async.md</a></td></tr></tbody></table>
