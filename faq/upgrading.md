# Upgrading

## How do I upgrade Portainer to the latest version?

We recommend keeping your Portainer installation up to date to ensure that you have the latest features and bug fixes. The upgrade process changes depending on the environment and platform you're using. See [Upgrading Portainer](../start/upgrade/) for information about the supported platforms.

## Can I upgrade Portainer CE to Portainer Business?

Yes, you can! The upgrade process will carry your existing configuration over to Portainer Business. See our [platform-specific upgrade instructions](../start/upgrade/tobe/) for more information.

## After an update, why doesn’t my version number match the latest version?

This is common after updating Portainer versions, and is usually caused by a cached page in your browser.

**Step 1 - Find out if caching is the problem:** Load Portainer in private/incognito mode. If it works then it means that your browser has cached the page.

**Step 2 - Fix it:** Clear your cache through the browser settings. If that doesn't work, check that the latest Portainer version installed successfully. If that doesn't work, [log a bug report](https://github.com/portainer/portainer/issues/new?assignees=\&labels=bug%2Fneed-confirmation%2C+kind%2Fbug\&template=Bug\_report.md\&title=).

## Why does Portainer keep prompting me to upgrade?

This is a broadcast message, and is designed to be read and dismissed. While most commonly used for notifications of new versions, it is also used for other notifications and isn't tied to the version you are running. It is generated at the browser level and stored in the cache. If you use private/incognito mode or clear the cache on restart, the message will keep coming back.

To put an end to it, don't run Portainer in private/incognito mode.

## Why have my agents stopped working after upgrading Portainer?

If you have recently updated Portainer and have found your Agents or Edge Agents are no longer communicating, you may need to check to confirm whether you have set a custom `AGENT_SECRET` value. If this has been defined on the Portainer Server it will need to be set on the agents as well. This applies to both the standard Portainer Agent and the Portainer Edge Agent from BE 2.10 onwards.

{% hint style="info" %}
The default installation methods for Portainer Server do not set a custom AGENT\_SECRET value. If you are not sure whether you have a custom value set, [please get in touch](https://www.portainer.io/portainer-business-support) and our team can help you confirm.
{% endhint %}

For information on how to define the `AGENT_SECRET` on each platform, please refer to the respective upgrade instructions:

### Docker Standalone



In your `docker run` command for your Agent or Edge Agent, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance:

```
-e AGENT_SECRET=yoursecret
```

For example, your Agent `docker run` command may look like this:

```
docker run -d -p 9001:9001 --name portainer_agent --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /var/lib/docker/volumes:/var/lib/docker/volumes \
    -e AGENT_SECRET=yoursecret
    portainer/agent:latest
```

### Docker Swarm

In your stack file for your Docker Swarm Agent or Edge Agent deployment, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance:

```
environment:
  - AGENT_SECRET: yoursecret
```

### Kubernetes

In your YAML file for your Kubernetes Agent or Edge Agent deployment, set the `AGENT_SECRET` environment variable to the value set on your Portainer Server instance within the agent deployment definition:

```
env:
  - name: AGENT_SECRET
    value: yoursecret
```

## Can I upgrade an environment from Docker Standalone to Docker Swarm?

We do not recommend upgrading existing Docker Standalone environments to Docker Swarm because you will lose your stacks. We do support migrating a stack from one environment to another, so our recommended approach is to:

1. [Add the Docker Swarm endpoint](../admin/environments/add/swarm.md) to your Portainer installation.
2. [Migrate your stacks](../user/docker/stacks/migrate.md) over to the new environment.

## How do I upgrade my license?

Licensing in Portainer Business Edition is based on the [number of nodes](concepts.md#what-is-a-node-for-licensing-purposes) you are managing. If you want to manage additional clusters or nodes and your license doesn't cover the additional nodes, you will need to upgrade your license.

To upgrade your license, please get in touch with [our success team](mailto:success@portainer.io).

## Can I downgrade from Portainer Business to Portainer CE?

Yes, you can downgrade from Portainer Business Edition (BE) to Portainer Community Edition (CE). This can be for any reason — including if you decide not to purchase a full license after your free Portainer Business Edition trial period has ended.

{% hint style="warning" %}
The downgrade process only works if you upgraded from CE to BE (the process points you back to the CE database which doesn't get deleted when BE is installed). If you did not come from a CE instance, you won't be able to downgrade. You will need to do a full install of CE.
{% endhint %}

While you shouldn't experience any data loss, we recommend [backing up your Portainer data](../admin/settings/#backup-portainer) before downgrading.

If you have a running instance of Portainer Business and want to downgrade to Portainer CE, follow the instructions below.

### On Docker

#### Step 1: Shut down the existing Portainer Business instance <a href="#shutdown-the-existing-portainer-business-instance" id="shutdown-the-existing-portainer-business-instance"></a>

Make sure that the Portainer Business instance is stopped before attempting any of the other steps.

In Docker Standalone:

```
 docker stop portainer
```

Inside a Swarm environment, we recommend scaling down the Portainer service to 0 replicas:

```
 docker service scale portainer=0
```

#### Step 2: Backup your data <a href="#backup-your-data" id="backup-your-data"></a>

First make sure to create a copy of the Portainer data volume.

Next, use the following command to backup the Portainer Business instance data, remembering to update the command to match the name of your Portainer container. This will create a `backup.tar` file in your current folder containing the Portainer Business instance data backup:

```
 docker run --rm --volumes-from portainer -v $(pwd):/backup ubuntu tar cvf /backup/backup.tar /data
```

#### Step 3: Downgrade the Portainer Business database <a href="#downgrade-the-portainer-business-database" id="downgrade-the-portainer-business-database"></a>

Use the following command to downgrade the Portainer database:

```
 docker run -it --name portainer-database-rollback -v portainer_data:/data portainer/portainer-ee:latest --rollback-to-ce
```

#### Step 4: Redeploy a Portainer CE instance <a href="#redeploy-a-portainer-ce-instance" id="redeploy-a-portainer-ce-instance"></a>

After downgrading the database, you can redeploy Portainer CE and re-use the existing Portainer Business data.
