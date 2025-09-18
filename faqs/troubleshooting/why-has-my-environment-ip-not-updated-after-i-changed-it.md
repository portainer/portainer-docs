# Why has my Environment IP not updated after I changed it?

If you have updated your Portainer Agent environment's IP address, you may not see the update apply correctly in your Portainer Server instance. To resolve this, restart your Portainer Server container.

Assuming you have followed our [install instructions](../../start/install/server/), you can do this from the command line:

On Docker Standalone:

```
docker restart portainer
```

On Docker Swarm:

```
docker service update --force portainer_portainer
```

On Kubernetes:

```
kubectl -n portainer rollout restart deployment.apps/portainer
```
