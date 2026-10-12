# Known issues and limitations

Portainer-Migrate is in beta. This page lists the issues and limitations that most affect how you use it today, with workarounds where there are any.

## Known issues

### Removing a migrated stack on Portainer 2.45 deletes its volumes

Each app has its own stack, and Portainer-Migrate creates a missing namespace itself outside the stacks. Removing a stack removes only that app. It never deletes the namespace or the other apps in it, and an empty namespace Portainer-Migrate made stays until you delete it.

PersistentVolumeClaims and static NFS PersistentVolumes carry the label `io.portainer.kubernetes.application.prune: disabled`. Portainer 3.0 keeps them when a stack is removed or pruned, so the volume data survives. Portainer 2.45 ignores the label and deletes them with the stack.

**Workaround:** back up any data you need before removing a migrated stack on Portainer 2.45.

### Migrating an app again

Portainer-Migrate refuses to restore into a volume that already holds an earlier migration. A retained NFS PersistentVolume goes `Released` and still names the removed claim, so Portainer-Migrate refuses to commit while one has the name it would use.

**Workaround:** delete the leftover PersistentVolumeClaim before migrating the same app again. Free a released PersistentVolume with `kubectl patch pv <name> --type merge -p '{"spec":{"claimRef":null}}'`.

### Stacks created by version 0.1.x

Version 0.1.x wrote one file per namespace, `<folder>/portainer-migrate/<namespace>.yaml`, and one stack named `<namespace>` that also created the namespace. Upgrading changes nothing for those stacks, and Portainer-Migrate never edits or overwrites them.

* Removing a 0.1.x stack in Portainer still deletes its namespace, and every app migrated into it since. Portainer-Migrate warns on the Migrate step when a stack named after the namespace exists. Don't remove that stack while other apps share the namespace.
* Migrating an app that a 0.1.x stack already owns creates a new stack `<namespace>-<app>` on the same Deployment names. Portainer-Migrate can't see this clash, so check the namespace's stacks in Portainer first.

### Creating a new namespace needs wide access

A new namespace needs access to all namespaces (Environment Administrator or an administrator). Other roles can migrate only into an existing namespace they have write access to. Portainer-Migrate checks this before it commits or stops anything.

### Later changes in Git aren't deployed automatically

Portainer deploys the commit once. From Portainer 2.44 the stack doesn't poll Git, so new commits to the manifest file aren't picked up.

**Workaround:** after you change an app's manifest file, use **Pull and redeploy** on its stack in Portainer.

### First migration fails on Portainer builds after 2.45.1

Newer Portainer builds require Git credentials to have a URL pattern, which Portainer-Migrate doesn't set. The first migration into each repository fails with `at least one URL pattern is required`, after the commit.

**Workaround:** use Portainer 2.45.0 or 2.45.1.

### GitHub commits can overwrite concurrent pushes

On GitHub, Portainer-Migrate updates the branch directly. A commit someone else pushes to the same branch while a migration is running can be lost.

**Workaround:** use a repository or branch that only Portainer-Migrate writes to.

### MySQL volumes can't be cold-copied

MySQL keeps a link to its socket in its data directory, and the restore refuses it.

**Workaround:** migrate MySQL data with a dump and restore, or keep it on NFS and migrate it in place.

### Components without ports can't be reached by name

A Service is only created for a component with a port. Other components can't reach one without a port by its Docker service name.

**Workaround:** add a Service for it in Git after migrating.

### Stacks migrated together can get new hostnames

When stacks in one run share a service name, the components get a stack prefix. Portainer-Migrate rewrites hosts that name the old name in that stack's own environment variables and lists each one in a note, but other places that store the name aren't changed.

**Workaround:** check the notes on Translate, and migrate one stack per run if an app connects to a name you can't change.

### One-shot containers

Translate leaves out a one-shot service (one that exited with code 0 and has no restart policy) and says so in a note. Any other container that ran once and exited becomes a Deployment that restarts it over and over, so don't select it, or delete its Deployment after migrating.

### Databases on NFS can run twice

With NFS in place, the Docker and Kubernetes copies of a database use the same files. Most databases refuse to start, or corrupt data, if two copies run at once.

**Workaround:** Portainer-Migrate asks you to acknowledge a cutover and stops the source database itself before committing. See [Migrate](../running-a-migration/migrate.md#cutover-for-databases-on-nfs). Stop any other writer of the same files yourself.

## Limitations

### Data

* Automatic data copy works only from **standalone Docker**. From Swarm, only stateless services and NFS volumes migrate.
* Up to 512 MiB of data can be staged at once, one copy runs at a time, and a staged snapshot expires after 30 minutes.
* The snapshot is a point in time. The source keeps running, and anything written after the snapshot isn't copied.
* Writers outside Docker, such as host processes or other machines writing to a bind-mounted path, aren't detected.
* The target needs to pull `python:3.13-alpine` for the restore, and it runs as root. The image can't be changed.
* Disconnected or asynchronous Edge Kubernetes environments can't receive copied data.
* Each restored volume contains a `.portainer-migrate-done` marker file.
* A named volume shared by two services becomes two separate claims, so the services no longer share their writes.
* If the add-on restarts while a copy is in progress, the snapshot is lost, and a source it stopped may not be started again. Check your source containers if that happens.

### Translation

* Healthchecks, `depends_on`, resource limits, restart policies, Docker secrets and configs, networks, tmpfs mounts, privileged mode and added capabilities aren't translated. See [What gets translated](what-gets-translated.md).
* Environment variables, including passwords, are committed to Git in plain text.
* Published host ports get new NodePort numbers. Turn on Ingress on Pre-flight to expose web workloads at `<deployment>.<domain>`. Apps that store their own URL may redirect to the old address.
* New claims are always 3 GiB on the default StorageClass.

### GitOps

* Portainer verifies the Git server's TLS certificate when it clones. For a self-hosted server with a self-signed certificate, tick the checkbox under **Server URL** on Connections. It is off by default and absent for hosted providers.
* Each stack keeps its own copy of the Git token. If you rotate the token, update it on each stack.
* On GitLab and Gitea, the branch must already exist.

### History

* History is stored in your browser, per Portainer user. It isn't shared between users or devices, and holds the last 50 runs. Failed migrations aren't recorded.
