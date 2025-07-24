# Add a Kubernetes environment

When connecting a Kubernetes environment to Portainer, there are a few different methods you can use depending on your particular requirements. You can install the Portainer Agent on the Kubernetes cluster and connect via the agent, you can deploy the Portainer Edge Agent in standard or async mode, or you can choose to import an existing Kubernetes environment with a kubeconfig file.

Regardless of the method you choose, there are some generic requirements you will need to meet. You will require:

* A working and up to date Kubernetes cluster.

The installation instructions also make the following assumptions about your environment:

* Your environment meets [our requirements](../../../../start/requirements-and-prerequisites.md). While Portainer may work with other configurations, it may require configuration changes or have limited functionality.
* You will be using the `portainer` namespace for Portainer.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Agent</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-agent-large.png">card-agent-large.png</a></td><td><a href="agent.md">agent.md</a></td></tr><tr><td><strong>Edge Agent Standard</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-edgestd-large.png">card-edgestd-large.png</a></td><td><a href="edge.md">edge.md</a></td></tr><tr><td><strong>Edge Agent Async</strong></td><td></td><td></td><td><a href="../../../../.gitbook/assets/card-edgeasync-large.png">card-edgeasync-large.png</a></td><td><a href="edge-async.md">edge-async.md</a></td></tr><tr><td><strong>Import</strong></td><td>Import an existing Kubernetes config</td><td></td><td><a href="../../../../.gitbook/assets/card-import-large.png">card-import-large.png</a></td><td><a href="import.md">import.md</a></td></tr></tbody></table>
