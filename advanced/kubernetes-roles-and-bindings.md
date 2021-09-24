# Kubernetes roles and bindings

When managing a Kubernetes environment with Portainer, the Role-Based Access Control \(RBAC\) configuration is based on two components:

* Kubernetes' cluster roles and namespace roles \(which restrict access to Kubernetes itself\)
* Portainer's authorization flags \(which [restrict access](kubernetes-roles-and-bindings.md#portainer-access-restrictions) to Portainer's functionality\)

The following tables provide a reference for how our Portainer roles map to capabilities within Kubernetes.

## Role Allocations

| Portainer Role | Cluster Role Binding | Namespace Role Binding |
| :--- | :--- | :--- |
| Endpoint Admin | cluster-admin \(k8s system\) | N/A |
| Operator | [portainer-operator](kubernetes-roles-and-bindings.md#portainer-operator), [portainer-helpdesk](kubernetes-roles-and-bindings.md#portainer-helpdesk) | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) \(all non-system namespaces\) |
| User | [portainer-basic](kubernetes-roles-and-bindings.md#portainer-basic) | [portainer-edit](kubernetes-roles-and-bindings.md#portainer-edit), [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) \(only assigned namespaces\) |
| Help desk | [portainer-helpdesk](kubernetes-roles-and-bindings.md#portainer-helpdesk) | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) \(all non-system namespaces\) |
| Read-Only | [portainer-basic](kubernetes-roles-and-bindings.md#portainer-basic) | [portainer-view](kubernetes-roles-and-bindings.md#portainer-view) \(only assigned namespaces\) |

## Cluster Roles

### portainer-basic

| API Group | Resources | Verbs |
| :--- | :--- | :--- |
| \(Empty\) | namespaces, nodes | list |
| storage.k8s.io | storageclasses | list |
| networking.k8s.io | ingresses | list |

### portainer-helpdesk

| API Group | Resources | Verbs |
| :--- | :--- | :--- |
| \(Empty\) | componentstatuses, endpoints, events, namespaces, nodes | get, list, watch |
| storage.k8s.io | storageclasses | get, list, watch |
| networking.k8s.io | ingresses | get, list, watch |

### portainer-operator

| API Group | Resources | Verbs |
| :--- | :--- | :--- |
| \(Empty\) | configmaps, secrets | update |
| \(Empty\) | pods | delete |
| apps | deployments | patch |

## Namespace Roles

### portainer-edit

| API Group | Resources | Verbs |
| :--- | :--- | :--- |
| \(Empty\) | configmaps, endpoints, persistentvolumeclaims, pods, pods/attach, pods/exec, pods/portforward, pods/proxy, replicationcontrollers, replicationcontrollers/scale, secrets, serviceaccounts, services, services/proxy | create, delete, deletecollection, patch, update |
| \(Empty\) | pods/attach, pods/exec, pods/portforward, pods/proxy, secrets, services/proxy | get, list, watch |
| apps | daemonsets, deployments, deployments/rollback, deployments/scale, replicasets, replicasets/scale, statefulsets, statefulsets/scale | create, delete, deletecollection, patch, update |
| autoscaling | horizontalpodautoscalers | create, delete, deletecollection, patch, update |
| batch | cronjobs, jobs | create, delete, deletecollection, patch, update |
| extensions | daemonsets, deployments, deployments/rollback, deployments/scale, ingresses, networkpolicies, replicasets, replicasets/scale, replicationcontrollers/scale | create, delete, deletecollection, patch, update |
| networking.k8s.io | ingresses, networkpolicies | create, delete, deletecollection, patch, update |
| policy | poddisruptionbudgets | create, delete, deletecollection, patch, update |

### portainer-view

| API Group | Resources | Verbs |
| :--- | :--- | :--- |
| \(Empty\) | bindings, componentstatuses, configmaps, endpoints, events, limitranges, namespaces, namespaces/status, persistentvolumeclaims, persistentvolumeclaims/status, pods, pods/log, pods/status, replicationcontrollers, replicationcontrollers/scale, replicationcontrollers/status, resourcequotas, resourcequotas/status, secrets, serviceaccounts, services, services/status | get, list, watch |
| apps | controllerrevisions, daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, replicasets, replicasets/scale, replicasets/status, statefulsets, statefulsets/scale, statefulsets/status | get, list, watch |
| autoscaling | horizontalpodautoscalers, horizontalpodautoscalers/status | get, list, watch |
| batch | cronjobs, cronjobs/status, jobs, jobs/status | get, list, watch |
| extensions | daemonsets, daemonsets/status, deployments, deployments/scale, deployments/status, ingresses, ingresses/status, networkpolicies, replicasets, replicasets/scale, replicasets/status, replicationcontrollers/scale | get, list, watch |
| networking.k8s.io | ingresses, ingresses/status, networkpolicies | get, list, watch |
| policy | poddisruptionbudgets, poddisruptionbudgets/status | get, list, watch |

## Portainer Access Restrictions

|  | Endpoint admin | Operator | Helpdesk | Standard User | Read-only User |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Namespace Scope | All | All, EXCEPT System | All, EXCEPT System | Default + Assigned | Default + Assigned |
| Resource Pools | RW | R | R | R | R |
| Resource Pool Details | RW | R | R | R | R |
| Resource Pool Access Management | RW |  |  |  |  |
| Applications | RW | R | R | RW | R |
| Application Details | RW | R | R | RW | R |
| Pod Delete | Yes | Yes |  |  |  |
| Application Console | RW | RW |  |  |  |
| Advanced Deployment | RW |  |  | RW |  |
| Configurations | RW | R | R | RW | R |
| Configuration Details | RW | RW | R | RW | R |
| Volumes | RW | R | R | RW | R |
| Volume Details | RW | R | R | RW | R |
| Cluster | RW | R | R |  |  |
| Cluster Node View | RW | R | R |  |  |
| Cluster Setup | RW |  |  |  |  |
| Application Error Details | R | R | R |  |  |
| Storage Class Disabled | R | R | R |  |  |

