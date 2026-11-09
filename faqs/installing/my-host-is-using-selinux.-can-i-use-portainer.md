# My host is using SELinux. Can I use Portainer?

If you want to manage a local Docker environment with SELinux enabled, you’ll need to pass the --privileged flag to the Docker run command when deploying Portainer:

#### Business Edition

```
docker run -d --privileged -p 9443:9443 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latestdocker run -d --privileged -p 9443:9443 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
```

#### Community Edition

```
docker run -d --privileged -p 9443:9443 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```

You can also take a look at this [helper](https://github.com/dpw/selinux-dockersock).
