# Known issues and limitations

Portainer-Migrate is in beta. This page lists the issues and limitations that most affect how you use it today, with workarounds where there are any.

## Known issues

### Removing a migrated stack deletes its whole namespace

Every migration's manifests include its Namespace. When you remove the stack in Portainer, Portainer deletes everything in the manifest, including the Namespace, and with it every other app in that namespace and their volumes. On Portainer 2.45, removing a stack also deletes its PersistentVolumeClaims, so volume data is lost unless its reclaim policy is `Retain`.

**Workaround:** use a new namespace for every migration, and don't deploy anything else into a namespace Portainer-Migrate created. Back up any data you need before removing a migrated stack.

### A second migration into the same namespace replaces the first

Manifests are committed to `<namespace>.yaml`, and the stack is named after the namespace. Migrating again into the same namespace overwrites the first migration's file in Git.

**Workaround:** use a new namespace for every migration. To migrate an app again, remove its stack, namespace and PersistentVolumeClaims first.

### Migrations need a Portainer administrator

Portainer-Migrate saves a Git credential in Portainer, which only administrators can do. A non-administrator's migration fails with a 403 error after the manifests have been committed to Git, and after the source was stopped if data was being copied.

**Workaround:** run migrations as a Portainer administrator.

### Later changes in Git aren't deployed automatically

The stack is created with a 5-minute Git polling interval, but on Portainer 2.44 and later, stacks created this way don't poll. New commits to the manifest file aren't picked up.

**Workaround:** after you change `<namespace>.yaml`, redeploy the stack from Git in Portainer.

### First migration fails on Portainer builds after 2.45.1

Newer Portainer builds require Git credentials to have a URL pattern, which Portainer-Migrate doesn't set. The first migration into each repository fails with `at least one URL pattern is required`, after the commit.

**Workaround:** use Portainer 2.45.0 or 2.45.1.

### GitHub commits can overwrite concurrent pushes

On GitHub, Portainer-Migrate updates the branch directly. A commit someone else pushes to the same branch while a migration is running can be lost.

**Workaround:** use a repository or branch that only Portainer-Migrate writes to.

### MySQL volumes can't be cold-copied

MySQL keeps a link to its socket in its data directory, and the restore refuses it.

**Workaround:** migrate MySQL data with a dump and restore, or keep it on NFS and migrate it in place.

### Unpublished ports are exposed

On Docker, every TCP port a container exposes gets a NodePort, including ports such as 3306 or 5432 that you never published. They become reachable on every node of the target cluster.

**Workaround:** review the Services on Translate. After migrating, change internal Services to `ClusterIP` in Git and redeploy, or restrict access with a NetworkPolicy.

### Components without ports can't be reached by name

A Service is only created for a component with a TCP port. Other components can't reach one without a port by its Docker service name.

**Workaround:** add a Service for it in Git after migrating.

### Migrating stacks together changes their hostnames

When you migrate more than one stack in a run, every component gets its stack's name as a prefix. An app that connects to `db` will no longer find it, because the Service is now `<stack>-db`.

**Workaround:** migrate one stack per run.

### Scaled Compose services and one-shot containers

* A Compose service scaled to several containers is discovered as several containers, and they end up as one Deployment with one replica. Set `replicas` in Git after migrating.
* A container that ran once and exited, such as a database migration or seed job, becomes a Deployment that restarts it over and over. Don't select one-shot containers, or delete their Deployment after migrating.

### Databases on NFS can run twice

With NFS in place, the Docker and Kubernetes copies of a database use the same files. Most databases refuse to start, or corrupt data, if two copies run at once.

**Workaround:** stop the source database before migrating it with NFS in place.

## Limitations

### Data

* Automatic data copy works only from **standalone Docker**. From Swarm, only stateless services and NFS volumes migrate.
* Up to 2 GiB of data can be staged at once, one copy runs at a time, and a staged snapshot expires after 30 minutes.
* The snapshot is a point in time. The source keeps running, and anything written after the snapshot isn't copied.
* Writers outside Docker, such as host processes or other machines writing to a bind-mounted path, aren't detected.
* The target needs to pull `python:3.13-alpine` for the restore, and it runs as root. The image can't be changed.
* Disconnected or asynchronous Edge Kubernetes environments can't receive copied data.
* Each restored volume contains a `.portainer-migrate-done` marker file.
* A named volume shared by two services becomes two separate claims, so the services no longer share their writes.
* If the add-on restarts while a copy is in progress, the snapshot is lost, and a source it stopped may not be started again. Check your source containers if that happens.

### Translation

* Healthchecks, `depends_on`, resource limits, restart policies, Docker secrets and configs, networks, UDP ports, tmpfs mounts, privileged mode and added capabilities aren't translated. See [What gets translated](what-gets-translated.md).
* Environment variables, including passwords, are committed to Git in plain text.
* Services are always NodePort. There is no Ingress, so published host ports get new NodePort numbers. Apps that store their own URL, such as WordPress, may redirect to the old address.
* New claims are always 3 GiB on the default StorageClass.

### GitOps

* Stacks are created with TLS verification turned off for the Git repository.
* Each stack keeps its own copy of the Git token. If you rotate the token, update it on each stack.
* On GitLab and Gitea, the branch must already exist.

### History

* History is stored in your browser. It isn't shared between users or devices, and holds the last 50 runs. Failed migrations aren't recorded.
