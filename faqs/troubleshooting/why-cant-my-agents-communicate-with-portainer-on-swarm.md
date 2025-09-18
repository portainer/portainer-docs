# Why can't my agents communicate with Portainer on Swarm?

{% hint style="info" %}
If you are running on a VMware environment, have a look at this article as well.
{% endhint %}

You have set up a multi-node Swarm cluster and have deployed the Portainer Agent across the cluster successfully, but the Agent is failing to communicate with the Portainer Server. You may see log messages similar to the following:

`[err: Cannot connect to the Docker daemon at tcp://tasks.portainer_agent:9001. Is the docker daemon running?]`

`[err: Error response from daemon: The agent was unable to contact any other agent located on a manager node]`&#x20;

We have most commonly seen this on hosting providers such as Hetzner where the network used to communicate between Swarm nodes uses a MTU that is not 1500. Hetzner's private networking, for example, uses a MTU of 1450.

Docker Swarm's default network MTU is 1500, and if the underlying network has a lower MTU than this the Swarm nodes may fail to communicate with each other. This would affect all Swarm services, not just Portainer.

The solution to this is to adjust Docker Swarm's MTU to match that of the underlying network. First, you'll want to determine what the MTU of your network is. On Linux, you can find this with the following command:

```
ip a
```

This will list the networks available on your server. Locate the network that your nodes communicate over and note the value after mtu. For example:

```
5: ens10: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1450 qdisc pfifo_fast state UP group default qlen 1000
```

In the above, the MTU is set to 1450.

To use this new MTU, you will first need to remove and recreate the ingress network with the new value. You can use the following commands to achieve this:

```
docker network rm ingress
docker network create -d overlay --ingress --opt com.docker.network.driver.mtu=1450 ingress
```

Then, when you are creating new networks you will need to set the MTU to match. For example, in a compose file:

```
networks:
  default:
    driver: overlay
    driver_opts:
      com.docker.network.driver.mtu: 1450
```
