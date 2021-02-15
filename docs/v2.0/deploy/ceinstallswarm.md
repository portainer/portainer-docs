---
hide: toc
---

# :fontawesome-brands-docker: Deploying Portainer CE in Docker Swarm
Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine or within a Swarm cluster. Due to the nature of Docker, there are many possible deployment scenarios, however, we have detailed the most common below. Please use the scenario that matches your configuration.

Note that the recommended deployment mode when using Swarm is using the Portainer Agent.

By default, Portainer will expose the UI over the port `#!Ruby 9000` and expose a TCP tunnel server over the port `#!Ruby 8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.

To see the requirements, please, visit the page of [requirements](/v2.0/deploy/requirements).

## :fontawesome-solid-paper-plane: Portainer Deployment

Use the following Docker commands to deploy the Portainer Server; note the agent is not needed on standalone hosts, however it does provide additional functionality if used (see Portainer and agent scenario below):

=== "Docker Swarm on Linux"
    !!! Abstract ""
        ### :fontawesome-solid-server: Portainer Server Deployment
        Deploying Portainer and the Portainer Agent to manage a Swarm cluster is easy! You can directly deploy Portainer as a service in your Docker cluster. Note that this method will automatically deploy a single instance of the Portainer Server, and deploy the Portainer Agent as a global service on every node in your cluster.

        ```shell
        curl -L https://downloads.portainer.io/portainer-agent-stack.yml -o portainer-agent-stack.yml
        ```
        ```shell
        docker stack deploy -c portainer-agent-stack.yml portainer
        ```

        <b>Note</b>: By default this stack doesn't enable Host Management Features, you need to enable from the UI of Portainer.
        
        ### :fontawesome-solid-laptop: Portainer Agent Only Deployment
        Deploy Portainer Agent on a remote LINUX Swarm Cluster as a Swarm Service, run this command on a manager node in the remote cluster.

        First create the network:

        ```shell
        docker network create portainer_agent_network
        ```

        The following step is deploy the Agent:

        ```shell
        docker service create --name portainer_agent --network portainer_agent_network --publish mode=host,target=9001,published=9001 -e AGENT_CLUSTER_ADDR=tasks.portainer_agent --mode global --mount type=bind,src=//var/run/docker.sock,dst=/var/run/docker.sock --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes --mount type=bind,src=/,dst=/host portainer/agent
        ```


=== "Docker Swarm on Windows WSL"
    !!! Abstract ""    
        Before you can deploy Portainer in Docker Swarm running in Windows, you need to install WSL. [Read this guide to know more about WSL/WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10){target=_blank}

        Use the following Docker Swarmcommands to deploy the Portainer Server; note the agent is not needed on standalone hosts, however it does provide additional functionality if used (see portainer and agent scenario below):
        
        ### :fontawesome-solid-server: Portainer Server Deployment
        Deploying Portainer and the Portainer Agent to manage a Swarm cluster is easy! You can directly deploy Portainer as a service in your Docker cluster. Note that this method will automatically deploy a single instance 
        of the Portainer Server, and deploys the Portainer Agent as a global service on every node in your cluster.

        Remember to initiate the Docker Swarm mode when you use Docker Desktop. You can do this running the following command:

        ```shell
        docker swarm init
        ```

        The terminal will reply with this:

        ```shell
        Swarm initialized: current node (15gbf4d66mvzk3die00sgirpf) is now a manager.

        To add a worker to this swarm, run the following command:

            docker swarm join --token SWMTKN-1-096qbnf2b9yywagu5ht3731zlpkeqazgctffolntsiljfp0m34-c4snnxplgwq2bd1ohta8k48b9 192.168.65.3:2377

        To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
        ```

        Once this is done, you can continue with the installation running the following command:

        ```shell
        curl -L https://downloads.portainer.io/portainer-agent-stack.yml -o portainer-agent-stack.yml
        ```
        ```shell
        docker stack deploy -c portainer-agent-stack.yml portainer
        ```

        ### :fontawesome-solid-laptop: Portainer Agent Only Deployment
        Deploy Portainer Agent on a Swarm Cluster as a Swarm Service, run this command in a manager node in the cluster.

        ```shell
        docker service create --name portainer_agent --network portainer_agent_network --publish mode=host,target=9001,published=9001 -e AGENT_CLUSTER_ADDR=tasks.portainer_agent --mode global --mount type=bind
        src=//var/run/docker.sock,dst=/var/run/docker.sock --mount type=bind,src=//var/lib/docker/volumes,dst=/var/lib/docker/volumes –-mount type=bind,src=/,dst=/host portainer/agent
        ```

=== "Docker Swarm on Windows Container Service"
    !!! Abstract ""
        To run Portainer in a Windows Server/Desktop Environment, you need to create exceptions in the firewall. These, can be easy added through PowerShell, running the following commands:

        ```shell
        netsh advfirewall firewall add rule name="cluster_management" dir=in action=allow protocol=TCP localport=2377
        ```

        ```shell
        netsh advfirewall firewall add rule name="node_communication_tcp" dir=in action=allow protocol=TCP localport=7946
        ```

        ```shell
        netsh advfirewall firewall add rule name="node_communication_udp" dir=in action=allow protocol=UDP localport=7946
        ```

        ```shell
        netsh advfirewall firewall add rule name="overlay_network" dir=in action=allow protocol=UDP localport=4789
        ```

        ```shell
        netsh advfirewall firewall add rule name="swarm_dns_tcp" dir=in action=allow protocol=TCP localport=53
        ```

        ```shell
        netsh advfirewall firewall add rule name="swarm_dns_udp" dir=in action=allow protocol=UDP localport=53
        ```

        You also need to install Windows Container Host Service and Install Docker.

        ```shell
        Enable-WindowsOptionalFeature -Online -FeatureName containers -All
        ```
        ```shell
        Install-Module -Name DockerMsftProvider -Repository PSGallery -Force
        ```
        ```shell
        Install-Package -Name docker -ProviderName DockerMsftProvider
        ```

        Lastly, you need to restart your Windows Server. After it has restarted, you're ready to deploy Portainer.

        ### :fontawesome-solid-server: Portainer Server Deployment

        You can use our YML manifest to run Portainer in Windows using Windows Containers. In Powershell, run:

        ```PowerShell
        curl https://downloads.portainer.io/portainer_windows_stack.yml -o portainer_windows_stack.yml
        ```
        ```PowerShell
        docker stack deploy --compose-file=portainer_windows_stack.yml portainer
        ```
        Now, you can navigate to http://localhost:9000 or the IP of the server and start using Portainer.

        
        ### :fontawesome-solid-laptop: Portainer Agent Only Deployment

        To run Portainer Agent in a Windows Container scenario, you need to execute the following commands:

        ```PowerShell
        curl -L https://downloads.portainer.io/agent-stack-windows.yml -o agent-stack-windows.yml && docker stack deploy --compose-file=agent-stack-windows.yml portainer-agent
        ```

<br>
## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}