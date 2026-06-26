# Why do we recommend using the Edge Agent instead of the traditional Agent?

We recommend using the Edge Agent for most modern deployments, especially remote or distributed environments, because it’s built for scalability, security, and edge-centric use cases in ways the traditional Agent cannot match.

### Built-in support for edge-specific features

The Edge Agent unlocks Portainer’s full Edge Compute feature set, including:

* [Edge Stacks](../../user/edge/stacks/) - deploy and manage stacks across distributed systems from one place.
* [Edge Jobs](../../user/edge/jobs.md) - schedule scripts or tasks on edge hosts.
* [Edge Configurations](../../user/edge/configurations.md) - pre-deploy config sets to environments.
* [Agent updates](../../admin/environments/update.md) and [policy management](../../admin/environments/policies/) - centrally manage agent versions and policies across fleets.

These capabilities don’t exist with the traditional Agent, which is focused on basic connectivity rather than edge orchestration.

### Reverse communication model improves security and firewall friendliness

The traditional Agent requires the Portainer Server to initiate connections to each agent, meaning each agent must expose a listening port reachable by the server. This often forces you to open additional network ports on remote nodes.

In contrast, the Edge Agent connects outbound to the Portainer Server, requiring only that the agents can reach the server, not the other way around. This greatly reduces the number of open ports needed across your environments.

### Resilient to spotty or limited connectivity

The Edge Agent was designed for environments where networking may be unreliable or intermittent. It polls the Portainer Server on a regular interval for any pending work it needs to carry out, meaning it handles intermittent connectivity more gracefully than the traditional Agent, which assumes a constantly reachable network.

### Better surface for centralized, secure management

Because all edge connections originate from the agents to the server, you can focus hardening efforts on the server’s exposed endpoints instead of securing numerous agent endpoints. Many standard Agent setups require exposing ports on every host if they are remote, increasing the attack surface.

### Scales better for large fleets

The Edge Agent architecture, with polling and TLS tunnels, has been load-tested at very large scale (thousands of connected environments) and can more efficiently manage network overhead and orchestration, making it a better choice for enterprise or IoT/edge fleet use cases.
