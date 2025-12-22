# What does Portainer's backup include?

Portainer's backup includes the Portainer database as well as any stack files that were deployed using Portainer. The backup does **not** include your environment's containers or their data. The data stored is intended to bring Portainer's configuration back into a known-good state, not the containers that it manages.

The backup contains records which cover configuration, metadata, access control, and feature state. This includes:

**Core configuration and system state**

* Settings and version information
* License data
* SSL certificates
* Snapshot metadata
* S3 backup settings

**Users, teams, and access control**

* API keys
* Users and roles
* Teams and team memberships
* User endpoint authorizations
* Resource controls

**Environments and connectivity**

* Environments and environment groups
* Environment relationships
* Tunnel server configuration
* Edge infrastructure metadata

**Stacks and deployment metadata**

* Edge stack status, logs and update schedules
* Stack definitions created in Portainer
* Stack-related schedules and pending actions
* Webhooks associated with stacks

**Edge features**

* Edge groups and jobs
* Edge configurations and configuration state
* Edge async commands

**Policies and enforcement**

* Policies and policy chart statuses
* Enforcement configuration
* Pod security settings
* Alert rules and alert managers

**Integrations and credentials**

* Registry definitions
* Docker Hub configuration
* Git credentials
* Cloud credentials and cloud provisioning data
* Helm user repositories
* Custom templates

**Automation and scheduling**

* Auto update configuration
* Schedules
* Pending actions

#### What is not included in a Portainer backup?

Portainer backups do not include:

* Containers, images or volumes
* Application data stored in volumes or bind mounts
* Docker or Kubernetes configuration outside of Portainer’s own database
