# Downgrade from Portainer Business to Portainer CE

If you have a running instance of Portainer Business and want to downgrade to Portainer CE, follow the instructions below.

1. Shutdown the Portainer Business instance
2. Backup Portainer Business data
3. Downgrade the Portainer Business database
4. Re-deploy a Portainer CE instance

# On Docker

## Shutdown the existing Portainer Business instance

Make sure that the Portainer Business instance is stopped before attempting any of the other steps.

Inside a Docker standalone environment it is as simple as:

<pre><code> docker stop portainer</code></pre>

Inside a Swarm environment, you can simply scale down the Portainer service to 0 replicas:

<pre><code> docker service scale portainer=0</code></pre>

## Backup your data

First make sure to create a copy of the Portainer data volume.

You can use the following command to backup the data of the Portainer Business instance, you might need to update this command to match the name of your Portainer container:

<pre><code> docker run --rm --volumes-from portainer -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /data</code></pre>

This will create a backup.tar file in your current folder containing the Portainer Business instance data backup.

## Downgrade the Portainer Business database

Use the following command to downgrade the Portainer database:

<pre><code> docker run -it --name portainer-database-rollback -v portainer_data:/data portainer/portainer-ee:latest --rollback-to-ce</code></pre>

## Redeploy a Portainer CE instance

After downgrading the database, you can now redeploy Portainer CE and re-use the existing Portainer Business data by following our instructions in [Deploying Portainer](/v2.0/deploy/linux).

# On Kubernetes

Work-in-progress.
