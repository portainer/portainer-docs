Troubleshooting
===============

Portainer is built to run on Docker. If Docker is not configured
correctly, then this can cause issues that appear to be coming from
Portainer.

Ensuring Docker is configured correctly
---------------------------------------

The first thing to look at whether Docker is actually functioning
correctly on your system.

    $ docker version

The above command should have returned information about Docker running
on your system. Below is a snippet of what this may look like.

<pre><code>
$ Client: Docker Engine - Community
    Version:           19.03.3
    API version:       1.40
    Go version:        go1.12.10
    Git commit:        a872fc2f86
    Built:             Tue Oct  8 00:59:59 2019
    OS/Arch:           linux/amd64
    Experimental:      false
</code></pre>

Ensuring Docker Swarm is configured correctly
---------------------------------------------

All nodes will require the following ports to be open:

-   7946/tcp
-   7946/udp
-   4789/udp

For the manager node:

-   2377/tcp

Next, make sure you are using the `--advertise-addr` option.

-   When creating the cluster via `docker swarm init`, use
    `--advertise-addr` with either the private IP address or NIC name
    directly (`--advertise-addr eth1` for example)
-   When joining a cluster on worker nodes via `docker swarm join`, use
    `--advertise-addr` the same as above with either private IP address
    or NIC name directly

