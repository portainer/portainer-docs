---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/faqs/troubleshooting/agents-and-environment-management/how-can-i-move-existing-edge-agent-deployments-to-a-new-portainer-server-instance
---

# How can I move existing Edge Agent deployments to a new Portainer Server instance?

In order to change the Portainer server URL for an Edge Agent, a redeployment of the Edge Agent is necessary. A redeployment involves removing the existing Edge Agent from Portainer, stopping and removing the portainer\_edge\_agent container on the edge device, recreating the Edge Agent in Portainer, and redeploying it on the edge device.

When deploying an Edge Agent, the Portainer server URL is encrypted into the Edge key. This tells the Edge Agent where to look for the Portainer server.

<figure><img src="../../../.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

The most typical scenarios that require a change to the Portainer server URL are:

* Edge Agent was originally configured with an IP address (e.g., https://172.16.1.1:9443) and the Portainer instance is being moved to new location with a different IP address.
* Edge Agent was originally configured with an IP address (e.g., https://172.16.1.1:9443) and will now be using a DNS name (e.g., https://portainer.mydomain.tld:9443)
* Edge Agent was originally configured with a DNS name (e.g., https://portainer.mydomain.tld:9443) and now that name needs to change.
* Edge Agent was originally configured with a DNS name (e.g., https://portainer.mydomain.tld:9443) and now will be accessed via its IP address.
