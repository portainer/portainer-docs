# Deploy Portainer in Windows Server

To run Portainer in a Windows Server Environment, you need to create exceptions in the firewall. These, can be easy added trough PowerShell, running the following commands:

<pre><code>netsh advfirewall firewall add rule name="cluster_management" dir=in action=allow protocol=TCP localport=2377</code></pre>

<pre><code>netsh advfirewall firewall add rule name="node_communication_tcp" dir=in action=allow protocol=TCP localport=7946</code></pre>

<pre><code>netsh advfirewall firewall add rule name="node_communication_udp" dir=in action=allow protocol=UDP localport=7946</code></pre>

<pre><code>netsh advfirewall firewall add rule name="overlay_network" dir=in action=allow protocol=UDP localport=4789</code></pre>

<pre><code>netsh advfirewall firewall add rule name="swarm_dns_tcp" dir=in action=allow protocol=TCP localport=53</code></pre>

<pre><code>netsh advfirewall firewall add rule name="swarm_dns_udp" dir=in action=allow protocol=UDP localport=53</code></pre>

You also need to install Windows Container Host Service and Install Docker.

<pre><code>Enable-WindowsOptionalFeature -Online -FeatureName containers -All</code></pre>
<pre><code>Install-Module -Name DockerMsftProvider -Repository PSGallery -Force</code></pre>
<pre><code>Install-Package -Name docker -ProviderName DockerMsftProvider</code></pre>

Lastly, you need to restart your Windows Server. After it has restarted, you're ready to deploy Portainer.

## Deploy Portainer

### Docker Standalone

<pre><code> docker volume create portainer_data</code></pre>
<pre><code> docker run -d -p 9000:9000 --name portainer --restart always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine -v portainer_data:C:\data portainer/portainer-ee:latest</code></pre>

Now, you can navigate to http://localhost:9000 or the IP of the server and start using Portainer.

### Docker Swarm using Windows Containers

You can use our YML manifest to run Portainer in Windows using Windows Containers. In Powershell, run:

<pre><code> curl https://downloads.portainer.io/portainer_ee_windows_stack.yml -o portainer_windows_stack.yml</code></pre>
<pre><code> docker stack deploy --compose-file=portainer_windows_stack.yml portainer</code></pre>

Now, you can navigate to http://localhost:9000 or the IP of the server and start using Portainer.

## Deploy Portainer Agent Only

### Docker standalone

To run Portainer Agent in a Windows Container scenario, you need to execute the following commands:

<pre><code>docker run -d -p 9001:9001 --name portainer_agent --restart=always -v \\.\pipe\docker_engine:\\.\pipe\docker_engine portainer/agent:2.0.0</code></pre>

### Docker Swarm

```curl -L https://downloads.portainer.io/agent-ee-stack-windows.yml -o agent-stack-windows.yml && docker stack deploy --compose-file=agent-stack-windows.yml portainer-agent```

Then you just connect to one IP of the remote cluster on port 9001.

## Notes

These deployments were tested in Windows Server 2019 2004 edition. To use Windows Containers, you need to run Windows Server 2019 ver 1803 or newest.

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).
