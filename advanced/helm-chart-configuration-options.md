# Helm chart configuration options

The following table lists the configurable parameters of the Portainer Helm chart and their default values. Find the values file under `deploy/helm/portainer/values.yaml`.

| Parameter                    | Description                                                                                               | Default                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------- |
| `replicaCount`               | Number of Portainer service replicas (always set to 1).                                                   | `1`                         |
| `image.repository`           | Portainer Docker Hub repository.                                                                          | `portainer/portainer-ce`    |
| `image.tag`                  | Tag for the Portainer image.                                                                              | `latest`                    |
| `image.pullPolicy`           | Portainer image-pulling policy.                                                                           | `IfNotPresent`              |
| `imagePullSecrets`           | If the Portainer image needs to be in a private repository.                                               | `nil`                       |
| `nodeSelector`               | Used to apply a nodeSelector to the deployment.                                                           | `{}`                        |
| `serviceAccount.annotations` | Annotations to add to the service account.                                                                | `null`                      |
| `serviceAccount.name`        | The name of the service account to use.                                                                   | `portainer-sa-clusteradmin` |
| `service.type`               | Service type for the main Portainer Service. Valid values: `ClusterIP`, `NodePort`, `LoadBalancer`.       | `LoadBalancer`              |
| `service.httpPort`           | HTTP port for accessing the Portainer web interface.                                                      | `9000`                      |
| `service.httpNodePort`       | Static NodePort for accessing the Portainer web interface. Specify only if the type is `NodePort`.        | `30777`                     |
| `service.edgePort`           | TCP port for accessing Portainer Edge.                                                                    | `8000`                      |
| `service.edgeNodePort`       | Static NodePort for accessing Portainer Edge. Specify only if the type is `NodePort`.                     | `30776`                     |
| `service.annotations`        | Annotations to add to the service.                                                                        | `{}`                        |
| `ingress.enabled`            | Creates an ingress for Portainer.                                                                         | `false`                     |
| `ingress.annotations`        | <p>Annotations to add to the ingress. For example:<br><code>kubernetes.io/ingress.class: nginx</code></p> | `{}`                        |
| `ingress.hosts.host`         | URL for Portainer Web. For example, `portainer.example.io`.                                               | `nil`                       |
| `ingress.hosts.paths.path`   | Path for the Portainer web interface.                                                                     | `/`                         |
| `ingress.hosts.paths.port`   | Port for the Portainer web interface.                                                                     | `9000`                      |
| `ingress.tls`                | TLS support on ingress. Must create a secret with TLS certificates in advance.                            | `[]`                        |
| `resources`                  | Portainer resource requests and limits.                                                                   | `{}`                        |
| `persistence.enabled`        | Whether or not to enable data persistence.                                                                | `true`                      |
| `persistence.existingClaim`  | Name of an existing PVC to use for data persistence.                                                      | `nil`                       |
| `persistence.size`           | Size of the PVC used for persistence.                                                                     | `10Gi`                      |
| `persistence.annotations`    | Annotations to apply to PVC used for persistence.                                                         | `{}`                        |
| `persistence.storageClass`   | StorageClass to apply to PVC used for persistence.                                                        | `default`                   |
| `persistence.accessMode`     | AccessMode for persistence.                                                                               | `ReadWriteOnce`             |
| `persistence.selector`       | Selector for persistence.                                                                                 | `nil`                       |
