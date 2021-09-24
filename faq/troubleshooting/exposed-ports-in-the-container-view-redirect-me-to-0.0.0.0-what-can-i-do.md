# Exposed ports in the container view redirect me to 0.0.0.0. What can I do?

There are two ways you can fix this.

### **Method 1: Via the Portainer UI \(recommended\)**

1. From the menu select **Environments**.
2. Select the environment.
3. In the **Public IP** field, enter the host IP.
4. Click **Update environment**. 

### **Method 2: Via the CLI**

So that Portainer can redirect to your Docker host IP address \(not the 0.0.0.0 address\), you'll need to:

1. Change the configuration of your Docker daemon by adding the `--ip` option.
2. Restart the Docker daemon so that the changes take effect.

