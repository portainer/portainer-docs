# Reset password for the Admin user

It can happen to anyone, admin passwords get forgoteen and lost all the time. If this ever happens to your Portainer admin, you can follow these steps to reset it.

## Resetting Admin password in Portainer running as container

Reset the password for the Admin user can be accomplished using our reset [password container helper](https://github.com/portainer/helper-reset-password).

First, stop the Portainer container by running:

<pre><code> docker stop "id-portainer-container"</code></pre>

Run the helper with the following command. Be advised that you need to mount the Portainer data volume.

<pre><code> docker run --rm -v portainer_data:/data portainer/helper-reset-password</code></pre>

If successful, your output should look like this:

<pre><code>2020/06/04 00:13:58 Password successfully updated for user: admin
2020/06/04 00:13:58 Use the following password to login: &_4#\3^5V8vLTd)E"NWiJBs26G*9HPl1</code></pre>

Start the Portainer container running and try login with the password generated:

<pre><code>docker start "id-portainer-container"</code></pre>

## Resetting Admin password in Portainer running as a stack/service

To reset the password of the Admin user in Portainer running as Stack or Service, we need to scale the Portainer service to zero. To do this, you can run the following:

<pre><code>docker service scale portainer_portainer=0</code></pre>

Run the helper using the same bind-mount/volume for the data volume:

<pre><code>docker run --rm -v portainer_portainer_data:/data portainer/helper-reset-password</code></pre>

If successful, your output should look like this:

<pre><code>2020/06/04 00:13:58 Password successfully updated for user: admin
2020/06/04 00:13:58 Use the following password to login: &_4#\3^5V8vLTd)E"NWiJBs26G*9HPl1</code></pre>

Start the Portainer service scaling up and try login with the password generated:

<pre><code>docker service scale portainer_portainer=1</code></pre>

# Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).