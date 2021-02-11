# :fontawesome-brands-docker: Upgrade a Docker Swarm Deployment
### Docker Swarm
Steps to upgrade Portainer and or Portainer agent deployed into Dcoker Swarm as a service.

Run the following on manager node of your docker swarm cluster

<pre><code>docker service ls </code></pre>
![alt dcokerservice](assets/docker service ls.png "Docker Service List")

Make note of the service names for Portainer

To upgrade Portainer to the latest version, run the command below (You may need to replace Service Name portainer_portainer to match your setup)

<pre><code>docker service update --image portainer/portainer-ce --force portainer_portainer </code></pre>

To upgrade Portainer Agent to the latest version, run the command below (You may need to replace Service Name portainer_agent to match your setup)

<pre><code>docker service update --image portainer/agent --force portainer_agent </code></pre>

That will deploy the newest version of Portainer on your system, using the persistent data and upgrade the DB

Now you can go to http://your-server-address:9000 and login. You should notice that the bottom left corner looks different than it did before. There is no more update nag and the version is no longer shown next to the Portainer logo.

## :material-note-text: Notes
[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
