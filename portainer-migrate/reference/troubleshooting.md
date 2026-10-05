# Troubleshooting

The messages you're most likely to see, by step, and what to do about each.

{% hint style="info" %}
If any step says "The request was redirected by Portainer — your session may have expired", reload the page, sign in to Portainer again and retry. You'll need to paste your Git token again on Connections.
{% endhint %}

## Connections

| Message                                                               | What to do                                                                                                                            |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Couldn't connect** with `list repositories failed (401)`            | The token is wrong, expired or revoked. Create a new one.                                                                             |
| **Couldn't connect** with `list repositories failed (403)` or `(404)` | The token lacks the scopes needed, or the server URL is wrong. See [Initial configuration](../initial-configuration.md).              |
| **Couldn't connect** with a network or certificate error              | The Portainer-Migrate pod can't reach the Git server, or doesn't trust its certificate. Check network policies and the server URL.    |
| The access token contains spaces, line breaks or invisible characters | Clear the field and paste the token again.                                                                                            |
| The repository I want isn't listed                                    | Only repositories you can write to are listed, most recently updated first. See [Connections](../running-a-migration/connections.md). |

## Discover

| Message                                   | What to do                                                                                                         |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **No Docker or Swarm environments found** | Check in Portainer that your account has access to the source environment and that it is connected.                |
| **Couldn't load workloads**               | Check that the environment is up. Edge environments must be connected.                                             |
| **No migratable workloads found**         | The environment has no workloads, or your account can't see them. Check the resource access settings in Portainer. |

## Pre-flight

| Message                                                                                         | What to do                                                                                    |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Automated data copy isn't available**: "The add-on backend could not reach the Portainer API" | Set the `portainerUrl` chart value. See [Initial configuration](../initial-configuration.md). |
| Cannot access target environment                                                                | Your account can't reach the target environment, or it is offline.                            |
| Target must be a Kubernetes environment                                                         | Choose a Kubernetes environment as the target.                                                |

## Translate

| Message                                                                       | What to do                                                                                                                                                        |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cannot migrate bind mount … Only regular files and directories can be copied  | The mount is a socket (such as `/var/run/docker.sock`), a device or a symbolic link. Remove the mount from the source workload, or migrate without that workload. |
| Swarm service … uses bind mounts                                              | Swarm bind mounts can't be migrated. Use an NFS volume, or run the workload on standalone Docker.                                                                 |
| **N volume(s) can't be migrated**: NFS — not mounted in place                 | Turn on **Migrate NFS volumes in place** on Pre-flight.                                                                                                           |
| **N volume(s) can't be migrated**: Not migrated — Swarm data copy unsupported | Swarm volumes can't be copied. See [Migrating data](../migrating-data.md).                                                                                        |

## Migrate

### Before anything is deployed

| Message                                                                        | What to do                                                                                                                                                              |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Storage … cannot mount in place. Enable NFS in-place migration                 | Turn on **Migrate NFS volumes in place** on Pre-flight, and check the volume's NFS server and path.                                                                     |
| Automatic cold copy requires standalone Docker containers                      | The selection includes a Swarm volume that needs copying. See [Migrating data](../migrating-data.md).                                                                   |
| Another cold copy is in progress; retry when it finishes                       | Only one copy runs at a time. Wait, then retry.                                                                                                                         |
| Another running container writes a source volume; stop it before migrating     | Stop the container named in the message, then retry.                                                                                                                    |
| Cannot stop source container; refusing a live copy                             | Your account can't stop the source container, or Docker refused. Check your access to the source environment.                                                           |
| These mounts contain named pipes or device files                               | If the mount only holds runtime state (for example `/run`), tick **Start empty** for it on Translate and migrate again. Nothing was deployed.                           |
| Copy exceeds the available 2 GiB staging capacity / Copy staging space is full | The data is larger than the add-on can stage, or other copies are using the space. Wait up to 30 minutes for staged copies to expire, or migrate fewer volumes at once. |
| Source restart failed …; restart … in Portainer before retrying                | The data was archived but the source didn't start again. Start the container in Portainer, then retry.                                                                  |

### After the commit

| Message                                                                                   | What to do                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Target restore incomplete** / Restore timed out                                         | Check the target pod in Portainer. It is usually still pulling an image or waiting for its volume to bind (check that a default StorageClass exists). Then click **Retry data delivery**. |
| Multiple restore pods found / Cold-copy receivers require exactly one target replica      | Restores need one pod per workload. Scale the Deployment to 1, retry delivery, then scale back up.                                                                                        |
| Cannot read target pods                                                                   | Your account can't list pods in the target namespace. See [Permissions](../architecture/permissions.md).                                                                                  |
| Target transfer failed; check Portainer pods/proxy permissions and cluster network policy | The data couldn't reach the restore container. Check that a NetworkPolicy isn't blocking the Kubernetes API server from reaching pods on port 8080.                                       |
| Restore refused by the target                                                             | The archive failed verification on the target. Run the migration again to take a fresh snapshot.                                                                                          |
| Copy expired; stage the source again                                                      | More than 30 minutes passed between staging and delivery. Run the migration again in a new namespace, or delete the stack and namespace first.                                            |

### Workloads that fail to start

When a workload shows **Failed** after migrating, the manifests were deployed but the pod isn't healthy. Look at the reason shown, then at the pod's logs and events in Portainer.

| Reason                             | Likely cause                                                                                                                                    |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `ImagePullBackOff`, `ErrImagePull` | The target cluster can't pull the image. Private registries need credentials on the target.                                                     |
| `CrashLoopBackOff`                 | The app starts and exits. Check its logs for a missing config file or secret, a dependency it can't reach, or a setting that wasn't translated. |
| `CreateContainerConfigError`       | A setting in the manifest is invalid for Kubernetes, for example an environment variable name.                                                  |
| Stuck in **Starting** with Pending | The pod can't be scheduled, usually because a PersistentVolumeClaim can't bind. Check the target has a default StorageClass.                    |
| Can't reach another component      | Components are only reachable by name if they have a Service, which requires a TCP port. See [What gets translated](what-gets-translated.md).   |
