# Can I downgrade from Portainer Business to Portainer CE?

Yes, you can downgrade from Portainer Business Edition (BE) to Portainer Community Edition (CE). However there are some important points to note.

You may want to downgrade from Portainer BE to Portainer CE for many reasons; including if you decide not to purchase a full license after your free Portainer Business Edition trial period has ended.&#x20;

{% hint style="info" %}
The downgrade process only works if you upgraded from CE to BE (the process points you back to the CE database which doesn't get deleted when BE is installed). If you did not come from a CE instance, you won't be able to downgrade. You will need to do a full install of CE.
{% endhint %}

While you shouldn't experience any data loss, we recommend [backing up your Portainer data](../../admin/settings/) before downgrading.

If you have a running instance of Portainer Business and want to downgrade to Portainer CE, follow the instructions below.

### On Docker

{% stepper %}
{% step %}
#### **Shut down the existing Portainer Business instance**

Make sure that the Portainer Business instance is stopped before attempting any of the other steps.

In Docker Standalone:

```
docker stop portainer
```

Inside a Swarm environment, we recommend scaling down the Portainer service to 0 replicas:

```
docker service scale portainer=0
```
{% endstep %}

{% step %}
#### **Back up your data**

First make sure to create a copy of the Portainer data volume.

{% hint style="info" %}
The commands below assume your Portainer data volume is the default of portainer\_data. If you have changed this (for example if you are using a bind mount), adjust the commands below to suit.
{% endhint %}

Next, use the following command to backup the Portainer Business instance data, remembering to update the command to match the name of your Portainer container. This will create a backup.tar file in your current folder containing the Portainer Business instance data backup:

```
docker run --rm --volumes-from portainer -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /data
```
{% endstep %}

{% step %}
#### Downgrade the Portainer Business database

Use the following command to downgrade the Portainer database (again, replacing portainer\_data with the correct volume/bind mount if necessary):

```
docker run -it --name portainer-database-rollback -v portainer_data:/data portainer/portainer-ee:latest --rollback-to-ce
```
{% endstep %}

{% step %}
#### Redeploy a Portainer CE instance

After downgrading the database, you can redeploy Portainer CE and re-use the existing Portainer Business data.
{% endstep %}
{% endstepper %}
