# Inspect or edit a stack

See what's running on a stack, or get access to logs and stats.

## Inspecting a stack

From the menu select **Stacks** then select the stack you want to inspect.

![](../../../.gitbook/assets/2.9-stacks-edit-1.gif)

From here you can stop, delete or [create a template from the stack](template.md).

![](../../../.gitbook/assets/2.9-stacks-edit-stackdetails.png)

If the stack was deployed from a Git repository, you can:

* Configure [automatic updates](add.md#automatic-updates) or manually pull and redeploy the stack.
* View and edit the stack's environment variables.

![](../../../.gitbook/assets/2.9-stacks-edit-git-1.png)

If the stack was deployed using the [Web Editor](add.md#option-1-web-editor) or [uploaded](add.md#option-2-upload), you will have the option to [edit your compose file manually](edit.md#editing-a-stack).

Regardless of the deployment method used, you can also [migrate or duplicate](migrate.md) the stack.

### Docker Standalone

When using Docker Standalone, you can:

* View the containers that make up the stack.
* Check to see if they are running or stopped.
* Get access to logs.
* Inspect individual containers.
* View container statistics.
* Get access to the container's console.

![](../../../.gitbook/assets/stacks-edit-3.png)

### Docker Swarm

When using Docker Swarm, you can:

* View the services that make up the stack.
* Check to see if they are running or stopped.
* See how many replicas are running on each host.
* Get access to logs.
* Inspect individual services.
* View service statistics.
* Get access to the service's console.

![](../../../.gitbook/assets/stacks-edit-4.png)

## Editing a stack

Editing a stack allows you to make changes to the configuration and redeploy those changes. To edit a stack, from the menu select **Stacks**, select the stack you want to edit, then select the **Editor** tab.

{% hint style="info" %}
The Editor tab is only available for stacks that were deployed using the [Web Editor](add.md#option-1-web-editor). For stacks deployed from a Git repository, the docker-compose file must be edited in the repository itself.
{% endhint %}

![](../../../.gitbook/assets/stacks-edit-5.png)

Here, you can edit the Compose file for the stack to suit your needs. With Docker Swarm, you can also make changes to environment variables for the stack, as well as prune services if you have made changes that remove some services from the stack.

When you have finished making changes, click **Update the stack**.

