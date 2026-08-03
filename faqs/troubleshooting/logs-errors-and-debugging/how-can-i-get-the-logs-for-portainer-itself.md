# How can I get the logs for Portainer itself?

Portainer runs as a container, so you can view the Portainer logs in the same way you would do for any other container. You can view the logs [through the Portainer UI](../../../user/docker/containers/logs.md), or alternatively if you have access to the host you can use the Docker CLI:

Log into the command line of a Docker manager node (for Swarm) or the Docker host (for Standalone) and run the following command:

```
docker ps -a
```

This will list the containers on your environment, and will look something like this:

```
CONTAINER ID   IMAGE                          COMMAND                    REATED     STATUS    PORTS                                                                                          NAMES
2c9085c1d664   portainer/portainer-ee:latest  "/portainer"               3 days ago Up 3 days 0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:9443->9443/tcp, :::9443->9443/tcp, 9000/tcp portainer
be84ee30270e   mysql:8.0                      "docker-entrypoint.s…   "  4 days ago Exited (1) 4 days ago                                                                                    mysql
4604a2f5108e   nginx:latest                   "/docker-entrypoint.…"     4 days ago Up 4 days 0.0.0.0:80->80/tcp, :::80->80/tcp                                                              nginx
```

Note the CONTAINER\_ID of the Portainer container. Next, run the following command to output the logs for the container, using the CONTAINER\_ID from the previous command (in the above example, 2c9085c1d664):

```
docker container logs 2c9085c1d664
```

The logs from the container will be displayed.
