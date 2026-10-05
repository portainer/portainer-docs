# Roles

Two things decide what you can do in Portainer-IDP, and you need both:

* **Your role** limits the kinds of actions you can take anywhere. It comes from Portainer.
* **Access lists** decide which objects you can take those actions on. They're kept by Portainer-IDP, on each application, secret, namespace and deploy target.

## Authentication

There's no separate Portainer-IDP account. You open Portainer-IDP from inside Portainer, and it identifies you from your Portainer session, re-checked on every request. Users, teams and sign-in, including LDAP and OAuth, are all managed in Portainer.

## Roles

Each user has one of four roles in Portainer-IDP, shown as a badge in the account menu. The role comes from the environment roles an administrator assigns in Portainer, to the user or one of their teams, on each Kubernetes environment or its environment group.

| Portainer-IDP role   | Comes from (Portainer)                                          | Can do                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Admin**            | Portainer administrator                                         | Everything, including Cluster Readiness, Helm Charts, Audit log and Settings. Bypasses every access list.                                                                                  |
| **Standard**         | Environment Administrator or Standard User, or no role assigned | Deploy, edit and delete applications, including any Helm chart from an allowed host; create and change secrets, Git targets and deploy targets; plus everything a Limited Operator can do. |
| **Limited Operator** | Operator or Namespace Operator                                  | Scale, restart and roll back applications.                                                                                                                                                 |
| **Read Only**        | Helpdesk or Read-only User                                      | View only.                                                                                                                                                                                 |

When a user has different roles on different environments, the **most restrictive** one applies everywhere. Buttons your role doesn't allow are disabled, with a tooltip saying why, and the backend checks the same role before it writes to Git.

{% hint style="info" %}
Users with Portainer's Edge Administrator role are treated like any other user in Portainer-IDP: they see only what they have been granted. Only Portainer administrators bypass access lists.
{% endhint %}

## Access lists

Applications, secrets and namespaces each have an **Access** list of users and teams, with three rights:

| Right      | Allows                                                                                  |
| ---------- | --------------------------------------------------------------------------------------- |
| **View**   | See it in lists, and read its status, logs, revisions and activity.                     |
| **Change** | Edit, restart, redeploy, scale, roll back and retarget it.                              |
| **Delete** | Remove it. Someone with both **Change** and **Delete** can also change the access list. |

Whoever creates something gets all three rights on it. Something with no access list is visible to administrators only.

Deploy targets use **View**, **Deploy** and **Manage** instead. See [Deploy Targets](../using-portainer-idp/deploy-targets.md#access).

Git targets have no access list of their own: Portainer's sharing setting on the GitOps source applies. See [Git Targets](../using-portainer-idp/git-targets.md#sharing).

## How role and access combine

To take an action on an object, your role must allow that kind of action, **and** the object's access list must give you the right. For example:

* A **Standard** user with **View** on an application can see it but not edit it.
* A **Limited Operator** with **Change** on an application can scale, restart and roll it back, but not edit its manifest.
* A **Read Only** user with every right on an application can still only view it.

To deploy, you need a role that allows deploying, **Deploy** on the deploy target, and access to the namespace. Being added to a namespace under **Who may use it** gives the last two at once.

## Why it works this way

Portainer's Edge Administrator role is all or nothing. Portainer-IDP keeps the Edge Admin credential to itself and adds per-object access lists in front of it, so developers can deploy across a whole fleet without being able to see or touch each other's work, and without anyone holding broader rights than they need. Who is who, and what role they have, stays where your platform team already manages it: in Portainer.
