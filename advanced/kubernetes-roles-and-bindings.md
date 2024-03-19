# Kubernetes roles and bindings

{% hint style="info" %}
Role-Based Access Control is only available in Portainer Business Edition.
{% endhint %}

When managing a Kubernetes environment with Portainer, the Role-Based Access Control (RBAC) configuration is based on two components:

* Kubernetes' cluster roles and namespace roles (which restrict access to Kubernetes itself)
* Portainer's authorization flags (which [restrict access](kubernetes-roles-and-bindings.md#portainer-access-restrictions) to Portainer's functionality)

The following tables provide a reference for how our Portainer roles map to capabilities within Kubernetes.

## Role Allocations <a href="#role-allocations" id="role-allocations"></a>

| Portainer Role            | Cluster Role Binding                                                                                                                                 | Namespace Role Binding                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Environment Administrator | cluster-admin (k8s system)                                                                                                                           | N/A                                                                                                                                                             |
| Operator                  | [portainer-operator](kubernetes-roles-and-bindings.md#portainer-operator), [portainer-helpdesk](kubernetes-roles-and-bindings.md#portainer-helpdesk) | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) (all non-system namespaces)                                                                   |
| User                      | [portainer-basic](kubernetes-roles-and-bindings.md#portainer-basic)                                                                                  | [portainer-edit](kubernetes-roles-and-bindings.md#portainer-edit), [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) (only assigned namespaces) |
| Helpdesk                  | [portainer-helpdesk](kubernetes-roles-and-bindings.md#portainer-helpdesk)                                                                            | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) (all non-system namespaces)                                                                   |
| Read-Only                 | [portainer-basic](kubernetes-roles-and-bindings.md#portainer-basic)                                                                                  | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) (only assigned namespaces)                                                                    |

## Cluster Roles <a href="#cluster-roles" id="cluster-roles"></a>

### portainer-basic <a href="#portainer-basic" id="portainer-basic"></a>

| API Group         | Resources               | Verbs     |
| ----------------- | ----------------------- | --------- |
| (Empty)           | namespaces, nodes       | get, list |
| storage.k8s.io    | storageclasses          | list      |
| metrics.k8s.io    | namespaces, pods, nodes | get, list |
| networking.k8s.io | ingressclasses          | list      |

### portainer-helpdesk <a href="#portainer-helpdesk" id="portainer-helpdesk"></a>

| API Group         | Resources                                               | Verbs            |
| ----------------- | ------------------------------------------------------- | ---------------- |
| (Empty)           | componentstatuses, endpoints, events, namespaces, nodes | get, list, watch |
| storage.k8s.io    | storageclasses                                          | get, list, watch |
| networking.k8s.io | ingresses                                               | get, watch       |
| networking.k8s.io | ingressclasses                                          | list             |
| metrics.k8s.io    | pods, nodes, nodes/stats, namespace                     | get, list, watch |

### portainer-operator <a href="#portainer-operator" id="portainer-operator"></a>

| API Group      | Resources                             | Verbs            |
| -------------- | ------------------------------------- | ---------------- |
| (Empty)        | configmaps                            | update           |
| (Empty)        | pods                                  | delete           |
| apps           | daemonsets, deployments, statefulsets | patch            |
| metrics.k8s.io | pods, nodes, nodes/stats, namespaces  | get, list, watch |

## Namespace Roles <a href="#namespace-roles" id="namespace-roles"></a>

### portainer-edit <a href="#portainer-edit" id="portainer-edit"></a>

| API Group         | Resources                                                                                                                                                                                                           | Verbs                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| (Empty)           | configmaps, endpoints, persistentvolumeclaims, pods, pods/attach, pods/exec, pods/portforward, pods/proxy, replicationcontrollers, replicationcontrollers/scale, secrets, serviceaccounts, services, services/proxy | create, delete, deletecollection, patch, update |
| (Empty)           | pods/attach, pods/exec, pods/portforward, pods/proxy, secrets, services/proxy                                                                                                                                       | get, list, watch                                |
| apps              | daemonsets, deployments, deployments/rollback, deployments/scale, replicasets, replicasets/scale, statefulsets, statefulsets/scale                                                                                  | create, delete, deletecollection, patch, update |
| autoscaling       | horizontalpodautoscalers                                                                                                                                                                                            | create, delete, deletecollection, patch, update |
| batch             | cronjobs, jobs                                                                                                                                                                                                      | create, delete, deletecollection, patch, update |
| extensions        | daemonsets, deployments, deployments/rollback, deployments/scale, ingresses, networkpolicies, replicasets, replicasets/scale, replicationcontrollers/scale                                                          | create, delete, deletecollection, patch, update |
| networking.k8s.io | ingresses, networkpolicies                                                                                                                                                                                          | create, delete, deletecollection, patch, update |
| policy            | poddisruptionbudgets                                                                                                                                                                                                | create, delete, deletecollection, patch, update |

### portainer-view <a href="#portainer-view" id="portainer-view"></a>

| API Group         | Resources                                                                                                                                                                                                                                                                                                                                                                   | Verbs            |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| (Empty)           | bindings, componentstatuses, configmaps, endpoints, events, limitranges, namespaces, namespaces/status, persistentvolumeclaims, persistentvolumeclaims/status, pods, pods/log, pods/status, replicationcontrollers, replicationcontrollers/scale, replicationcontrollers/status, resourcequotas, resourcequotas/status, secrets, serviceaccounts, services, services/status | get, list, watch |
| apps              | controllerrevisions, daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, replicasets, replicasets/scale, replicasets/status, statefulsets, statefulsets/scale, statefulsets/status                                                                                                                                                           | get, list, watch |
| autoscaling       | horizontalpodautoscalers, horizontalpodautoscalers/status                                                                                                                                                                                                                                                                                                                   | get, list, watch |
| batch             | cronjobs, cronjobs/status, jobs, jobs/status                                                                                                                                                                                                                                                                                                                                | get, list, watch |
| extensions        | daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, ingresses, ingresses/status, networkpolicies, replicasets, replicasets/scale, replicasets/status, replicationcontrollers/scale                                                                                                                                                           | get, list, watch |
| networking.k8s.io | ingresses, ingresses/status, networkpolicies                                                                                                                                                                                                                                                                                                                                | get, list, watch |
| policy            | poddisruptionbudgets, poddisruptionbudgets/status                                                                                                                                                                                                                                                                                                                           | get, list, watch |

## Portainer Access Restrictions <a href="#portainer-access-restrictions" id="portainer-access-restrictions"></a>

| Function                    | Endpoint admin | Operator           | Helpdesk           | Standard User      | Read-only User     |
| --------------------------- | -------------- | ------------------ | ------------------ | ------------------ | ------------------ |
| Namespace Scope             | All            | All, EXCEPT System | All, EXCEPT System | Default + Assigned | Default + Assigned |
| Namespaces                  | RW             | R                  | R                  | R                  | R                  |
| Namespace Details           | RW             | R                  | R                  | R                  | R                  |
| Namespace Access Management | RW             |                    |                    |                    |                    |
| Applications                | RW             | R                  | R                  | RW                 | R                  |
| Application Details         | RW             | R                  | R                  | RW                 | R                  |
| Pod Delete                  | Yes            | Yes                |                    |                    |                    |
| Application Console         | RW             | RW                 |                    |                    |                    |
| Advanced Deployment         | RW             |                    |                    | RW                 |                    |
| ConfigMaps & Secrets        | RW             | R                  | R                  | RW                 | R                  |
| ConfigMap & Secret Details  | RW             | RW                 | R                  | RW                 | R                  |
| Volumes                     | RW             | R                  | R                  | RW                 | R                  |
| Volume Details              | RW             | R                  | R                  | RW                 | R                  |
| Cluster                     | RW             | R                  | R                  |                    |                    |
| Cluster Node View           | RW             | R                  | R                  |                    |                    |
| Cluster Setup               | RW             |                    |                    |                    |                    |
| Application Error Details   | R              | R                  | R                  |                    |                    |
| Storage Class Disabled      | R              | R                  | R                  |                    |                    |

## Community Edition

The following tables cover the two roles available in Portainer Community Edition (CE). Note there is no Portainer access restriction in Portainer CE.

| Portainer Role | Cluster Role Binding                                                    | Namespace Role Binding                            |
| -------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| Admin          | (no restriction)                                                        | (no restriction)                                  |
| User           | [portainer-cr-user](kubernetes-roles-and-bindings.md#portainer-cr-user) | edit (default k8s role, only assigned namespaces) |

### portainer-cr-user

| API Group         | Resources         | Verbs |
| ----------------- | ----------------- | ----- |
| (Empty)           | namespaces, nodes | list  |
| storage.k8s.io    | storageclasses    | list  |
| networking.k8s.io | ingresses         | list  |
