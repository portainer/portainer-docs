# Deprecated and removed features

This table lists deprecated and removed features and functionality that are no longer supported and should not be used. The **Deprecated** column shows the release in which the feature was tagged as deprecated. The **Remove** column shows the release in which the feature was or will be removed (TBD means 'to be decided').

| Feature                                                                                                                    | Deprecated | Remove |
| -------------------------------------------------------------------------------------------------------------------------- | ---------- | ------ |
| Experimental OpenAI integration                                                                                            | 2.32.0     | 2.33.0 |
| Published Portainer images being built using the Docker manifest list format in favor of the OCI image index format        | 2.31.0     | TBD    |
| [Provision KaaS Cluster](../admin/environments/add/kaas/) feature                                                          | 2.30.0     | TBD    |
| [Create a MicroK8s cluster](../admin/environments/add/kube-create/microk8s/) feature                                       | 2.30.0     | TBD    |
| `PUT /kubernetes/{id}/namespaces` API endpoint                                                                             | 2.25.0     | TBD    |
| Nomad support                                                                                                              | 2.20.0     | 2.20.0 |
| `POST /stacks` endpoint (use `/stacks/create/standalone`, `/stacks/create/swarm`, `/stacks/create/kubernetes` etc instead) | 2.20.0     | 2.27.0 |
| Enabling SSL via `--ssl` (now enabled by default)                                                                          | 2.9.0      | TBD    |
| Disabling analytics via `--no-analytics`                                                                                   | 2.0        | TBD    |
| Kompose deployments                                                                                                        | 2.15.0     | 2.17.0 |
| Specifying external environments in JSON via `--external-endpoints`                                                        |            | 2.0    |
| Setting time between environment synchronization requests via `--sync-interval`                                            |            | 2.0    |
| Disabling Portainer internal authentication via `--no-auth`                                                                |            | 2.0    |
| Specifying a templates file to load on first run via `--templates-file`                                                    |            | 2.0    |
| Preventing Portainer from running a snapshot of environments via `--no-snapshot`                                           |            | 2.0    |
