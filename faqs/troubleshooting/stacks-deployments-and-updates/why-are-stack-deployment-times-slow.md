# Why are stack deployment times slow?

Slow stack deployments within Portainer, particularly when these delays are not present during command line deployments, are often due to the Portainer environment's authentication process with configured registries. There are two main factors contributing to this:

1. **Registry Configuration Checks**: When registries are configured in your Portainer environment, it attempts to verify access to these registries before proceeding with the stack deployment. Having numerous registries to check can lengthen this verification process, thereby delaying the deployment.
2. **Authentication Timeouts**: If your Portainer environment encounters issues authenticating with a registry, it will wait for a timeout period before bypassing that registry. This waiting period can significantly contribute to the overall delay in stack deployments.
   1. Ensure that the registry credentials are correct and up-to-date for each registry.
   2. Check the networking between the Portainer environment and each registry. Ensure that all necessary firewall ports are open for this connection.
