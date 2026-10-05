# Applications

Applications is the main operational view in Portainer-IDP, and the page you land on after opening it. It lists every application you have access to, with its status across every environment it's deployed to.

{% hint style="info" %}
Portainer-IDP only lists applications it deployed, or manifests that were adopted with [Source Deploy](deploy.md#source-deploy). Workloads deployed through Portainer's own UI or `kubectl` don't appear here.
{% endhint %}

## Application groups

Applications deployed together from one Application Builder session (with **Add pod**) form a group. A group shows as one expandable row in the list, and its page offers:

* **Add a pod**, to add another application to the group.
* **Restart all**.
* **Delete group**.
* Access for every member at once.
* A **Secrets** card listing the secrets the group's members use.

Each member is still its own application, with its own manifest file, Edge Stack and access list. Someone who can see only some members sees only those.

## Application detail

Open an application to see its detail page. The header shows its name and the actions you can take, and the tabs below show its state.

### Tabs

| Tab              | What it shows                                                                                                                                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Environments** | The application's status on each environment it's deployed to, and its address there. When a deployment fails, the row explains the error in plain language, with Portainer's original message under **Details**.                               |
| **Chart**        | Helm applications only. The chart, version, catalog item, release name and digest, and the values in effect: **Your values**, **Locked by an administrator** and **Catalog defaults**. Shows a banner when a newer pinned version is available. |
| **Metrics**      | CPU and memory per pod, with a **Live** mode. Needs metrics-server on the cluster.                                                                                                                                                              |
| **Logs**         | Logs per pod and container, with live streaming.                                                                                                                                                                                                |
| **Revisions**    | The application's Git history: every commit to its manifest, who made it and when, with a rollback button on each.                                                                                                                              |
| **Access**       | Who can view, change and delete this application. See [Roles and access control](../architecture/roles.md#access-lists).                                                                                                                        |
| **Activity**     | Every change made to this application through Portainer-IDP, and by whom.                                                                                                                                                                       |

### Actions

* **Open** opens the application's address. When it has several, for example one per environment, you choose which.
* **Edit** reopens the application in the form it was built with and commits the change. Helm applications open the Helm editor, where you can change values, move to another pinned version and change deploy targets; other applications open the Application Builder.
* **Scale** sets the number of replicas, and commits the change to Git. Scaling to 0 stops the application. Helm applications have no **Scale**: set their replicas in their values with **Edit**.
* **Restart** restarts the pods without changing the manifest.
* **Rollback**, on a row of the **Revisions** tab, restores that version in Git and redeploys it. For a Helm application, Portainer-IDP first checks the older version against the current Helm policy and shows what will change, including a diff of the values.
* **Redeploy** appears on the **Environments** tab when Portainer has lost its copy of the file. It pulls the file from Git and applies it again.
* **Delete** removes the application from Portainer and from every environment. **Also delete the manifest file from Git** is ticked by default. If you untick it, the file stays in the repository until someone removes it there.

Which of these you can use depends on your [role](../architecture/roles.md) and your rights on the application.

## Changing manifests in Git directly

You can. Portainer checks the manifest file for changes (every 5 minutes by default) and deploys them. Changes made in Portainer-IDP are commits to the same file, so the two stay in step, and the **Revisions** tab shows commits made either way.

## System applications

Administrators also see system applications in the list, such as the **Sealed Secrets controller**. These are installed and managed from [Cluster Readiness](admin/cluster-readiness.md), have no **Access** tab, and are hidden from everyone else.
