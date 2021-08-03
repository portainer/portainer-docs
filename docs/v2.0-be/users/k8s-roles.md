
# Kubernetes: Roles and Bindings

## Portainer and Kubernetes

When managing a Kubernetes environment with Portainer, the Role-Based Access Control (RBAC) configuration is based on two components:

* Kubernetes' cluster roles and namespace roles (which restrict access to Kubernetes itself)
* Portainer's authorization flags (which [restrict access](#portainer-access-restrictions) to Portainer's functionality)

The following tables provide a reference for how our Portainer roles map to capabilities within Kubernetes.

## Role Allocations

| Portainer Role | Cluster Role Binding                                                                 | Namespace Role Binding                                                                          |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Endpoint Admin | cluster-admin (k8s system)                                                           | N/A                                                                                             |
| Operator       | [portainer-operator](#portainer-operator), [portainer-helpdesk](#portainer-helpdesk) | [portainer-view](#portainer-view) (all non-system namespaces)                                   |
| User           | [portainer-basic](#portainer-basic)                                                  | [portainer-edit](#portainer-edit), [portainer-view](#portainer-view) (only assigned namespaces) |
| Help desk      | [portainer-helpdesk](#portainer-helpdesk)                                            | [portainer-view](#portainer-view) (all non-system namespaces)                                   |
| Read-Only      | [portainer-basic](#portainer-basic)                                                  | [portainer-view](#portainer-view) (only assigned namespaces)                                    |


## Cluster Roles

<a name="portainer-basic"></a>
### portainer-basic

| API Group         | Resources         | Verbs |
| ----------------- | ----------------- | ----- |
| (Empty)           | namespaces, nodes | list  |
| storage.k8s.io    | storageclasses    | list  |
| networking.k8s.io | ingresses         | list  |

<a name="portainer-helpdesk"></a>
### portainer-helpdesk

| API Group         | Resources                                               | Verbs             |
| ----------------- | ------------------------------------------------------- | ----------------- |
| (Empty)           | componentstatuses, endpoints, events, namespaces, nodes | get, list, watch  |
| storage.k8s.io    | storageclasses                                          | get, list, watch  |
| networking.k8s.io | ingresses                                               | get, list, watch  |

<a name="portainer-operator"></a>
### portainer-operator

| API Group | Resources           | Verbs  |
| --------- | ------------------- | ------ |
| (Empty)   | configmaps, secrets | update |
| (Empty)   | pods                | delete |
| apps      | deployments         | patch  |


## Namespace Roles

<a name="portainer-edit"></a>
### portainer-edit

| API Group         | Resources                                               | Verbs             |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| (Empty)           | configmaps, endpoints, persistentvolumeclaims, pods, pods/attach, pods/exec, pods/portforward, pods/proxy, replicationcontrollers, replicationcontrollers/scale, secrets, serviceaccounts, services, services/proxy | create, delete, deletecollection, patch, update |
| (Empty)           | pods/attach, pods/exec, pods/portforward, pods/proxy, secrets, services/proxy                                                                                                                                       | get, list, watch                                |
| apps              | daemonsets, deployments, deployments/rollback, deployments/scale, replicasets, replicasets/scale, statefulsets, statefulsets/scale                                                                                  | create, delete, deletecollection, patch, update |
| autoscaling       | horizontalpodautoscalers                                                                                                                                                                                            | create, delete, deletecollection, patch, update |
| batch             | cronjobs, jobs                                                                                                                                                                                                      | create, delete, deletecollection, patch, update |
| extensions        | daemonsets, deployments, deployments/rollback, deployments/scale, ingresses, networkpolicies, replicasets, replicasets/scale, replicationcontrollers/scale                                                          | create, delete, deletecollection, patch, update |
| networking.k8s.io | ingresses, networkpolicies                                                                                                                                                                                          | create, delete, deletecollection, patch, update |
| policy            | poddisruptionbudgets                                                                                                                                                                                                | create, delete, deletecollection, patch, update |

<a name="portainer-view"></a>
### portainer-view

| API Group         | Resources                                               | Verbs             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| (Empty)           | bindings, componentstatuses, configmaps, endpoints, events, limitranges, namespaces, namespaces/status, persistentvolumeclaims, persistentvolumeclaims/status, pods, pods/log, pods/status, replicationcontrollers, replicationcontrollers/scale, replicationcontrollers/status, resourcequotas, resourcequotas/status, secrets, serviceaccounts, services, services/status | get, list, watch |
| apps              | controllerrevisions, daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, replicasets, replicasets/scale, replicasets/status, statefulsets, statefulsets/scale, statefulsets/status                                                                                                                                                           | get, list, watch |
| autoscaling       | horizontalpodautoscalers, horizontalpodautoscalers/status                                                                                                                                                                                                                                                                                                                   | get, list, watch |
| batch             | cronjobs, cronjobs/status, jobs, jobs/status                                                                                                                                                                                                                                                                                                                                | get, list, watch |
| extensions        | daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, ingresses, ingresses/status, networkpolicies, replicasets, replicasets/scale, replicasets/status, replicationcontrollers/scale                                                                                                                                                           | get, list, watch |
| networking.k8s.io | ingresses, ingresses/status, networkpolicies                                                                                                                                                                                                                                                                                                                                | get, list, watch |
| policy            | poddisruptionbudgets, poddisruptionbudgets/status                                                                                                                                                                                                                                                                                                                           | get, list, watch |

<a name="portainer-access-restrictions"></a>
## Portainer Access Restrictions

|                                  | Endpoint admin | Operator           | Helpdesk           | Standard User      | Read-only User     |
| -------------------------------- | -------------- | ------------------ | ------------------ | ------------------ | ------------------ |
| Namespace Scope                  | All            | All, EXCEPT System | All, EXCEPT System | Default + Assigned | Default + Assigned |
| Resource Pools                   | RW             | R                  | R                  | R                  | R                  |
| Resource Pool Details            | RW             | R                  | R                  | R                  | R                  |
| Resource Pool Access Management  | RW             |                    |                    |                    |                    |
| Applications                     | RW             | R                  | R                  | RW                 | R                  |
| Application Details              | RW             | R                  | R                  | RW                 | R                  |
| Pod Delete                       | Yes            | Yes                |                    |                    |                    |
| Application Console              | RW             | RW                 |                    |                    |                    |
| Advanced Deployment              | RW             |                    |                    | RW                 |                    |
| Configurations                   | RW             | R                  | R                  | RW                 | R                  |
| Configuration Details            | RW             | RW                 | R                  | RW                 | R                  |
| Volumes                          | RW             | R                  | R                  | RW                 | R                  |
| Volume Details                   | RW             | R                  | R                  | RW                 | R                  |
| Cluster                          | RW             | R                  | R                  |                    |                    |
| Cluster Node View                | RW             | R                  | R                  |                    |                    |
| Cluster Setup                    | RW             |                    |                    |                    |                    |
| Application Error Details        | R              | R                  | R                  |                    |                    |
| Storage Class Disabled           | R              | R                  | R                  |                    |                    |


<br>
## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}