# How does Portainer secure connectivity to and from Agents and Edge Agents?

**Agent**

When an Agent is initially deployed, it listens for incoming connections and waits for a Portainer instance to claim it. To claim an Agent, a Portainer instance connects to the Agent, a handshake occurs, and keys are exchanged. A claimed Agent will allow only the Portainer instance that claimed it to manage it. Connections from any other Portainer instances will be rejected. If this claim process does not occur within 5 minutes of the Agent starting for the first time, the Agent will shut down and will need to be manually restarted in order to be claimed.There is also an optional AGENT\_SECRET environment variable. Using AGENT\_SECRET, the Agent will allow connections from any/all Portainer instances with matching AGENT\_SECRET environment variables. For this reason, AGENT\_SECRET needs to be set on the Portainer instance and the Agent instance at container run time.



**Edge Agent**

Because the Edge Agent is designed to run over insecure networks, there are two additional levels of protection. There is an mTLS implementation allowing the Edge Agent to present a client certificate to the Portainer instance. Portainer only allows Edge Agents to connect that have client certificates signed by the CA key installed in Portainer. Additionally, the Edge Agent has a unique key which is used to encode a revolving password that is changed every poll period.For an in-depth look at how the Edge Agent operates, see this in our [documentation](../../advanced/edge-agent.md).
