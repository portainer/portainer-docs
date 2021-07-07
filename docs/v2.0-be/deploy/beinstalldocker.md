---
hide: toc
---

# :fontawesome-brands-docker: Deploying Portainer Business in Docker
Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine. Due to the nature of Docker, there are many possible deployment scenarios, however, we have detailed the most common below. Please use the scenario that matches your configuration.

If you are using Docker Swarm, please refer to the Swarm-specific installation [instructions](/v2.0/deploy/beinstallswarm/).

Regardless of your configuration, you will need:

* The latest version of Docker installed and working. You can refer to [the Docker documentation](https://docs.docker.com/get-docker/) for platform-specific instructions.
* Administrator or sudo access on the machine that will host your Portainer instance.
* If you are using Docker Desktop on Windows you need to enable WSL2 if you need to run Linux containers.

By default, Portainer will expose the UI over port `#!Ruby 9000` and expose a TCP tunnel server over port `#!Ruby 8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.

To learn more about the requirements please visit the [requirements](/v2.0-be/deploy/requirements/) page.

!!! Warning "Agent Versions"
    Always match the agent version to Portainer Server version. i.e., while installing or upgrading to Portainer 2.6 make sure all the agents are also version 2.6. 


## :fontawesome-solid-paper-plane: Portainer Deployment

Use the following Docker commands to deploy the Portainer Server; note the agent is not needed on standalone hosts, however it does provide additional functionality if used:

=== "Docker on Linux"
    !!! Abstract ""    
        ### Portainer Server Deployment
        ```shell
        docker volume create portainer_data
        ```
        ```shell
         docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
        ```
        
        ### Portainer Agent Only Deployment
        Run the following command to deploy the Agent in your Docker host.
        ```shell
        docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent:2.0.0
        ```

=== "Docker on Windows WSL / Docker Desktop"
    !!! Abstract ""    
        Before you can deploy Portainer in Docker Standalone running in Windows, you need to install WSL. [Read this guide to know more about WSL/WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10){target=_blank}

        Use the following Docker commands to deploy the Portainer Server; note the agent is not needed on standalone hosts, however it does provide additional functionality if used:
        
        ### Portainer Server Deployment
        ```shell
        docker volume create portainer_data
        ```

        ```shell
         docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
        ```

        ### Portainer Agent Only Deployment
        Run the following command to deploy the Agent in your Docker host.

        ```shell
        docker run -d -p 9001:9001 --name portainer_agent --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/volumes:/var/lib/docker/volumes portainer/agent:2.0.0
        ```

=== "Docker on Windows Container Service"
    !!! Abstract ""
        To run Portainer in a Windows Server/Desktop Environment you need to create exceptions in the firewall. These can easily be added through PowerShell by running the following commands:

        ```PowerShell
        netsh advfirewall firewall add rule name="cluster_management" dir=in action=allow protocol=TCP localport=2377
        ```

        ```PowerShell
        netsh advfirewall firewall add rule name="node_communication_tcp" dir=in action=allow protocol=TCP localport=7946
        ```

        ```PowerShell
        netsh advfirewall firewall add rule name="node_communication_udp" dir=in action=allow protocol=UDP localport=7946
        ```

        ```PowerShell
        netsh advfirewall firewall add rule name="overlay_network" dir=in action=allow protocol=UDP localport=4789
        ```

        ```PowerShell
        netsh advfirewall firewall add rule name="swarm_dns_tcp" dir=in action=allow protocol=TCP localport=53
        ```

        ```PowerShell
        netsh advfirewall firewall add rule name="swarm_dns_udp" dir=in action=allow protocol=UDP localport=53
        ```

        You also need to install Windows Container Host Service and Install Docker.

        ```PowerShell
        Enable-WindowsOptionalFeature -Online -FeatureName containers -All
        ```
        ```PowerShell
        Install-Module -Name DockerMsftProvider -Repository PSGallery -Force
        ```
        ```PowerShell
        Install-Package -Name docker -ProviderName DockerMsftProvider
        ```

        Lastly, you need to restart your Windows Server. Once it has restarted you're ready to deploy Portainer.

        ### Portainer Server Deployment

        ```PowerShell
        docker volume create portainer_data
        ```
        ```PowerShell
         docker run -d -p 9000:9000 --name portainer --restart always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine -v portainer_data:C:\data portainer/portainer-ee:latest
        ```

        Now you can navigate to http://localhost:9000 or the IP of the server and start using Portainer.

        
        ### Portainer Agent Only Deployment

        To run Portainer Agent in a Windows Container scenario, you need to execute the following commands:

        ```PowerShell
        docker run -d -p 9001:9001 --name portainer_agent --restart=always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine portainer/agent:2.0.0
        ```


??? Tip "Advanced Options"
    # CLI Configuration Options
    Portainer can be easily tuned using CLI flags.

    ## Admin password
    ### From the command line
    Portainer allows you to specify a bcrypt encrypted password from the command line for the admin account. You need to generate the bcrypt encrypted password first.

    You can generate the encrypted password with the following command if you have installed apache2-utils package:

    ```shell
    htpasswd -nb -B admin "your-password" | cut -d ":" -f 2
    ```
    If your system does not have the mentioned command, you can run a container to run the command:
    ```shell
    docker run --rm httpd:2.4-alpine htpasswd -nbB admin "your-password" | cut -d ":" -f 2
    ``` 

    To specify the admin password from the command line, start Portainer with the <code>--admin-password</code> flag:

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce --admin-password='$2y$05$8oz75U8m5tI/xT4P0NbSHeE7WyRzOWKRBprfGotwDkhBOGP/u802u'
    ```

    ### Inside a file
    You can also store the plaintext password inside a file and use the <code>--admin-password-file</code> flag:

    Add your password to a file, for example with the following command: 

    ```shell
    echo -n mypassword > /tmp/portainer_password
    ```

    Now you can start the Portainer container by running:

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer-ce --admin-password-file /tmp/portainer_password
    ```

    This works well with Docker Swarm and Docker secrets too:

    ```shell
    echo -n mypassword | docker secret create portainer-pass -
    ```

    ```shell
    docker service create \
        --name portainer \
        --secret portainer-pass \
        --publish 9000:9000 \
        --publish 8000:8000 \
        --replicas=1 \
        --constraint 'node.role == manager' \
        --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
        portainer/portainer-ce \
        --admin-password-file '/run/secrets/portainer-pass' \
        -H unix:///var/run/docker.sock
    ```

    Note: This will automatically create an administrator account called admin with the specified password.

    ## Hiding specific containers

    Portainer allows you to hide containers with a specific label by using the -l flag.

    For example, take a container started with the label owner=acme (note that this is an example label, you can define your own labels):

    ```shell
    docker run -d --label owner=acme nginx
    ```

    To hide this container, simply add the <code>-l owner=acme</code> option on the CLI when starting Portainer:

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce -l owner=acme
    ```

    Note that the -l flag can be repeated multiple times to specify multiple labels:

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce -l owner=acme -l service=secret
    ```

    ## Use your own logo

    If you wish to replace our logo with your own, you can specify an external logo (it must be exactly 155px by 55px) using the <code>--logo flag</code>:

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"
    ```
    This can also be updated via the GUI in the Portainer Settings menu.

    ## Use your own templates

    Portainer allows you to rapidly deploy containers using App Templates.

    By default Portainer templates will be used but you can also define your own templates.

    Note: at the moment, templates are only loaded once at first Portainer startup. If you already deployed a Portainer instance and want to use your own templates after this, you’ll need to clear any existing templates (default templates) via the user interface or the HTTP API.

    Using the <code>--templates</code> flag you can specify an URL where the template file can be accessed via HTTP.

    ```shell
    docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce --templates http://my-host.my-domain/templates.json
    ```

    The template file must be accessible from Portainer without authentication. We suggest hosting the template files on [Github](https://www.github.com).

    ## Available flags

    The following CLI flags are available:

    * <code>--admin-password</code>: Specify a bcrypt hashed password for the admin user
    * <code>--admin-password-file</code>: Path to the file containing the password for the admin user
    * <code>--bind, -p</code>: Address and port to serve Portainer (default: :9000)
    * <code>--data, -d</code>: Directory where Portainer data will be stored (default: /data on Linux, C:\data on Windows)
    * <code>--edge-compute</code>: Automatically enable edge-compute features
    * <code>--hide-label, -l</code>: Hide containers with a specific label in the UI
    * <code>--host, -H</code>: Docker daemon endpoint
    * <code>--logo</code>: URL to an image to be displayed as a logo in the UI. Uses the Portainer logo if not specified
    * <code>--snapshot-interval</code>: Time interval between two endpoint snapshot jobs expressed as a string, e.g. 30s, 5m, 1h… as supported by the time.ParseDuration method (default: 5m)
    * <code>--ssl</code>: Secure Portainer instance using SSL (default: false)
    * <code>--sslcert</code>: Path to the SSL certificate used to secure the Portainer instance (default: /certs/portainer.crt, C:\certs\portainer.crt on Windows)
    * <code>--sslkey</code>: Path to the SSL key used to secure the Portainer instance (default: /certs/portainer.key, C:\certs\portainer.key on Windows)
    * <code>--templates, -t</code>: URL to templates (apps) definitions
    * <code>--tlscacert</code>: Path to the CA (default: /certs/ca.pem on Linux, C:\certs\ca.pem on Windows)
    * <code>--tlscert</code>: Path to the TLS certificate file (default: /certs/cert.pem, C:\certs\cert.pem on Windows)
    * <code>--tlskey</code>: Path to the TLS key (default: /certs/key.pem, C:\certs\key.pem on Windows)
    * <code>--tlsverify</code>: TLS support (default: false)
    * <code>--tunnel-port</code>: Specify an alternate tunnel port to use with the Edge agent. Use --tunnel-port 8001 with -p 8001:8001 to make the Edge agent communicate on port 8001


<br>
## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}