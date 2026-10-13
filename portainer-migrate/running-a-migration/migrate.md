# Migrate

The **Migrate — GitOps** step does the migration. It commits the generated manifests to your repository and creates a Portainer GitOps stack that deploys them to the target environment. Portainer deploys from Git; nothing is applied to Kubernetes directly.

## Before you click

The step summarizes what will happen: how many workloads will be committed, to which repository and branch, and which namespace they'll be deployed into. Check that it's right, then click **Commit & deploy via GitOps**.

If something is missing, you'll see a warning instead:

* **No target selected**: go back to Pre-flight and choose an environment and namespace.
* **No git target configured**: go back to Connections. You need a provider, repository, branch and token. If you've reloaded the page, paste the token again.
* **Cannot translate source workload**: a workload can't be translated. The reason is shown.

## What happens

The button shows the current stage while the migration runs.

{% stepper %}
{% step %}
### Checks

Every volume must either mount NFS in place or be copied. If any volume can't be migrated, or a Swarm workload has data that needs copying, the migration stops here and nothing is changed.

**Commit** also stays disabled, and nothing is written or stopped, until all of these pass:

* The namespace and repository folder are valid, and the token can write to the repository and branch.
* Your role can create stacks on the target and write to the namespace. A new namespace needs access to all namespaces (Environment Administrator or an administrator). Other roles need write access to an existing namespace.
* No stack on the environment already has a name Portainer-Migrate would create, and no other app in the namespace owns a Deployment, Service, PersistentVolumeClaim or Ingress it would create. The message names the stack or object. Remove it in Portainer or pick another namespace.
* The selected volumes fit the 512 MiB staging limit together.
{% endstep %}

{% step %}
### Staging volume data

Only if data is being copied. For each source container, Portainer-Migrate stops the container, takes an archive of every mount being copied, starts the container again if it was running, and checks the archive. See [Migrating data](../migrating-data.md).
{% endstep %}

{% step %}
### Committing & creating stack

Each app's manifests are committed to `<folder>/portainer-migrate/<namespace>/<app>.yaml`. Portainer-Migrate then creates one Kubernetes GitOps stack per app on the target environment, named `<namespace>-<app>`, that deploys that file. A missing namespace is created first, outside the stacks, so removing a stack never deletes the namespace or the other apps in it.

Each stack pulls from Git with the token from Connections. To rotate the token, edit the stack's Git settings in Portainer.
{% endstep %}

{% step %}
### Restoring data on target

Only if data is being copied. Each new pod starts with a small restore container that waits for its data. Portainer-Migrate sends the staged archive to it through Portainer, the restore container unpacks it into the new volume, and only then does your application start.

{% hint style="warning" %}
Keep this page open while you see **Restoring target volumes**. If you navigate away, the data isn't delivered and the pod waits in its init stage.
{% endhint %}
{% endstep %}
{% endstepper %}

## When it succeeds

You'll see **Committed and GitOps stack created** with the path of the committed file and the ID of each new stack. The stacks also appear in Portainer under the target environment.

Below that:

* **Badges** count the workloads that are migrated, still starting, and failed.
* **Local-volume data** lists each copied volume as **restored**, **staged** or **not staged**.
* **Running on Kubernetes** lists each deployed app with its pod name, a link to open it (on its Ingress address if you enabled one, otherwise on its NodePort), and its live status, refreshed every few seconds.

| Status       | Meaning                                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Running**  | The pod is ready.                                                                                                                                                                                          |
| **Starting** | The pod is being scheduled, pulling its image, waiting for its data, or not ready yet.                                                                                                                     |
| **Failed**   | The container is crash-looping, can't pull or create its image, exited with an error, or has restarted three or more times without becoming ready. The reason is shown, for example `CrashLoopBackOff ×6`. |

If any workload fails, you'll see **N workload(s) failed to start**. The manifests were deployed, but some pods aren't healthy. Common causes are a missing config file or secret, a dependency on something Docker-specific such as the Docker socket, or a setting that wasn't translated. Check the pod's logs in Portainer, and see [What gets translated](../reference/what-gets-translated.md).

Each run can be committed once. The button stays disabled after a successful migration. The run is recorded in [History](../history.md).

{% hint style="info" %}
Your source workload is still running on Docker. Test the Kubernetes deployment, then switch your users over and remove the original when you're ready. Anything written to the source after its data was copied is not on Kubernetes.
{% endhint %}

### Cutover for databases on NFS

The exception is a database on a writable NFS volume that is mounted in place, because two servers would write the same files. Portainer-Migrate asks you to acknowledge the **cutover**. After staging, and before anything is committed, it stops the source (a container stop, or a Swarm service scaled to 0), waits until it has stopped and leaves it stopped. A global Swarm service can't be scaled to 0 and is refused. Other components that write the same NFS files get a warning to stop them when you cut over.

Until the commit succeeds, leaving the page, **Cancel** and **Finish** ask first and name the stopped source. If the commit fails, click **Start the source again**. It is never automatic, because a stack create that timed out may still deploy. Before it starts the source, it scales to 0 any Deployment the migration created in the target namespace and waits for its pods to stop. If it can't, the source stays stopped and the page names the Deployment to delete.

## When it fails

* **Migration preparation failed**: something went wrong before the commit, such as staging data. Nothing has been committed or deployed. Fix the cause and click the button again.
* **Migration failed**: something went wrong after the commit. Check your repository and Portainer's stacks for what was created before you retry.
* **Target restore incomplete**: the stack was created but the data didn't reach the target. Click **Retry data delivery**. It reuses the same snapshot and stack, so the source isn't stopped again and no second stack is created. Retry within 30 minutes, before the snapshot expires.

For specific messages, see [Troubleshooting](../reference/troubleshooting.md).

## After the migration

Each migrated app is an ordinary Portainer GitOps stack. To change it, edit `<namespace>/<app>.yaml` in your repository, then redeploy the stack from Git in Portainer. Don't rely on automatic polling to pick up changes; see [Known issues and limitations](../reference/known-issues-and-limitations.md).
