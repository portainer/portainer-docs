# Add a Podman environment

When connecting a Podman host to Portainer, there are a few different methods you can use depending on your particular requirements. You can install the Portainer Agent on the Podman host and connect via the agent, you can connect directly to the Podman socket, or you can deploy the Portainer Edge Agent in standard or async mode.

Regardless of the method you choose, there are some generic requirements you will need to meet. You will require:

* CentOS 9 with the latest version of Podman 5.x installed and working on your Podman host. Other Podman versions and Linux distros may work but we currently only support the above. We recommend following the [official installation instructions](https://podman.io/docs/installation#installing-on-linux) for Podman.
* sudo or root access on your Podman host.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../../start/requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* Podman is running as root. Portainer with rootless Podman may work but is currently not officially supported.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-target data-type="content-ref"></th><th data-hidden data-card-cover data-type="files"></th></tr></thead><tbody><tr><td><strong>Agent</strong></td><td></td><td></td><td><a href="agent.md">agent.md</a></td><td><a href="../../../../.gitbook/assets/card-agent-large.png">card-agent-large.png</a></td></tr><tr><td><strong>Socket</strong></td><td></td><td></td><td><a href="socket.md">socket.md</a></td><td><a href="../../../../.gitbook/assets/card-socket-large.png">card-socket-large.png</a></td></tr><tr><td><strong>Edge Agent Standard</strong></td><td></td><td></td><td><a href="edge.md">edge.md</a></td><td><a href="../../../../.gitbook/assets/card-edgestd-large.png">card-edgestd-large.png</a></td></tr><tr><td><strong>Edge Agent Async</strong></td><td></td><td></td><td><a href="edge-async.md">edge-async.md</a></td><td><a href="../../../../.gitbook/assets/card-edgeasync-large.png">card-edgeasync-large.png</a></td></tr></tbody></table>
