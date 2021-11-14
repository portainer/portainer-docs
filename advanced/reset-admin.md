# Reset the admin user's password

If your Portainer admin forgets their password, follow these steps to reset it. There are two methods depending on your Portainer environment.

## Method 1: Resetting the admin password if Portainer runs as a container

{% hint style="info" %}
You would typically use this method if you run the Portainer Server on Docker Standalone.
{% endhint %}

First, go to our [reset password container helper](https://github.com/portainer/helper-reset-password) in GitHub, then stop the Portainer container by running this command:

```
 docker stop "id-portainer-container"
```

Next, run the helper using the following command (you'll need to mount the Portainer data volume):

```
 docker run --rm -v portainer_data:/data portainer/helper-reset-password
```

If successful, the output should look like this:

```
2020/06/04 00:13:58 Password successfully updated for user: admin
2020/06/04 00:13:58 Use the following password to login: &_4#\3^5V8vLTd)E"NWiJBs26G*9HPl1
```

Finally, use this command to start the Portainer container then try logging in with the new password:

```
docker start "id-portainer-container"
```

## Method 2: Resetting the admin password if Portainer runs as a stack/service

{% hint style="info" %}
You would typically use this method if you run the Portainer Server on Docker Swarm.
{% endhint %}

First, scale the Portainer service to zero using this command:

```
docker service scale portainer_portainer=0
```

Next, run the [reset password container helper](https://github.com/portainer/helper-reset-password) using the same bind-mount/volume as the data volume:

```
docker run --rm -v portainer_portainer_data:/data portainer/helper-reset-password
```

If successful, the output should look like this:

```
2020/06/04 00:13:58 Password successfully updated for user: admin
2020/06/04 00:13:58 Use the following password to login: &_4#\3^5V8vLTd)E"NWiJBs26G*9HPl1
```

Finally, start up the Portainer service scaling using this command then try logging in with the new password:

```
docker service scale portainer_portainer=1
```
