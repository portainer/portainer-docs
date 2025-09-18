# Troubleshooting Edge Agent Connection Issues

#### **Before you begin network troubleshooting:**

Check your **Portainer Edge Compute Settings** by navigating to **Settings** > **Edge Compute** > **Edge Compute Settings**. \
&#x20;  \- Confirm that the **Portainer API Server URL** and the **Portainer Tunnel Address** are correct.\
&#x20;  \- Ensure that ports **9443** and **8000** are open in your firewall.\
&#x20;  \- Refer to the official Portainer documentation for detailed agent setup [requirements](../../advanced/edge-agent.md)

***

**What should I do if my Edge agent is unable to associate with the Portainer server?**

If your Edge agent fails to connect to the Portainer server, the first step is to verify if the issue is isolated to one agent or affects multiple agents. If only one agent is experiencing connectivity issues, it suggests that the problem may be specific to that environment or configuration.

***

**How can I verify if my Edge agent is properly connected to the Portainer server?**

You can test the connection between the Edge agent host and the Portainer server by using \`telnet\` to check port 9443:

```
telnet <Portainer IP> 9443
```

If this test succeeds, it confirms that the network traffic is not being blocked, meaning the issue may lie elsewhere.

***

**How can I further troubleshoot connection problems between the Edge agent and the Portainer server?**

Run a `curl` command from the Edge agent to the Portainer server to verify connectivity and check for TLS handshake errors. Use the following command:

```
curl -v https://<PortainerServerURL>:9443
```

If you receive an error such as "Connection reset by peer," it indicates that the connection attempt is being blocked, likely due to a network or firewall issue.

***

**What does the "Connection reset by peer" error mean, and how can I fix it?**

The "Connection reset by peer" error usually occurs when the connection between the Edge agent and the Portainer server is prematurely closed. This may happen due to a firewall, incorrect SSL/TLS configuration, or other network issues. Make sure that the firewall allows traffic on the correct ports (9443 and 8000), and verify that your TLS certificates are properly configured.

***

**How do I confirm that the Portainer server's configuration is not causing the issue?**

If other Edge agents are able to connect without issues, this suggests that the Portainer server configuration is correct. The problem is likely isolated to the network or configuration of the specific agent that is failing to connect.

***

**What should I do if my Edge agent still can't connect after verifying the network settings?**

If network settings and firewall rules appear correct but the issue persists, it may be necessary to consult with your network team or vendor. In some cases, subtle network misconfigurations, such as incorrect VLAN settings or firewall rules, can cause the Edge agent to fail to connect to the Portainer server. Once the underlying network issues are resolved, the agent should reconnect and show a healthy heartbeat.
