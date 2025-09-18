# Environment Variable Management in Docker: .env vs. stack.env

### **Overview**

When deploying containerized applications, managing environment variables is crucial for configuration flexibility. Docker provides two common approaches:

* **`.env` File**: Used with Docker Compose for standalone deployments.
* **`stack.env` File**: Used with Docker Swarm for orchestrated, multi-host deployments.

Understanding the differences between these files will help you choose the right method for your deployment environment.

***

### **Docker Compose and the `.env` File**

#### Key Features

*   **Variable Substitution:**\
    The `.env` file supports variable substitution, allowing you to define placeholders in your `docker-compose.yml`file.

    **Example:**

    ```
    image: nginx:${VERSION}
    ```

    Here, `${VERSION}` is replaced with the value defined in the `.env` file.
* **Dynamic Configuration:**\
  You can easily update port numbers, image versions, and other configuration settings by modifying the `.env` file without changing the main Compose file.

#### Use Cases

* **Local Development:**\
  Simplifies the configuration process by decoupling variable values from the compose file.
* **Standalone Deployments:**\
  Docker Compose automatically detects and loads the `.env` file when running commands like `docker-compose up`.

***

### **Docker Swarm and the `stack.env` File**

#### Key Features

* **Limited to Environment Variables:**\
  The `stack.env` file is only used to set environment variables under the `environment` field in your stack configuration. It does **not** support variable substitution for other settings such as port numbers or image versions.
*   **No Variable Substitution:**\
    Unlike the `.env` file, the `stack.env` file cannot dynamically replace placeholders in the configuration file.

    **Implication:**\
    Values like image versions and port numbers must be hard-coded, set as defaults, or managed by an external process.

#### Use Cases

* **Production Deployments:**\
  Ideal for multi-host environments managed by Docker Swarm, where consistency across nodes is critical.
* **Limited Dynamic Updates:**\
  For configurations that require updating after the initial deployment, you need alternative methods such as the Portainer UI or webhooks.

***

### **Updating Environment Variables in Docker Swarm**

Since `stack.env` does not support variable substitution, you can use webhooks or the Portainer UI for dynamic updates:

#### Using Webhooks

1. **Initial Deployment:**\
   Set a default value in your `docker-compose.yml` or via the Portainer UI for the first deployment.
2.  **Updating Values:**\
    Use a webhook call to update the environment variable later.

    **Example Webhook URL:**

    ```
    https://localhost:9471/api/stacks/webhooks/1fefe43c-9373-46bf-8cfa-3bf687a294c0?FRESHRSS_TAG=latest
    ```

    This URL updates the `FRESHRSS_TAG` variable to `latest`. Integrate this process into your CI/CD pipelines for seamless updates.

***

### **Additional Resources**

* [**Portainer Webhook Documentation**](../../user/docker/stacks/webhooks.md): For more detailed instructions on using webhooks with Docker Swarm, refer to the official documentation.

***

### **Summary**

* **`.env` in Docker Compose:** Supports variable substitution, ideal for dynamic configurations in local or standalone environments.
* **`stack.env` in Docker Swarm:** Limited to setting environment variables without substitution; use defaults or external tools (like Portainer webhooks) for updates.
* **Dynamic Updates:** In Docker Swarm, update configuration values through the Portainer UI or webhooks when direct substitution is not available.

By choosing the appropriate method based on your deployment environment, you can effectively manage configuration changes and maintain consistency across your Docker applications.
