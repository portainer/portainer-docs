# Release Notes

## Release 2.10.0

### Known issues

* Both Portainer and the Agent need to be upgraded at the same time: [portainer/agent#187](https://github.com/portainer/agent/issues/187)
* Restarting Portainer will invalidate all downloaded Kubeconfig files: [portainer/portainer#5574](https://github.com/portainer/portainer/issues/5574)
* Access can not be assigned to registries when defining multiple registries with the same URL
* Browser cache causes UI abnormalities after upgrading from a prior version. Force a cache refresh (Ctrl-Shift-R) to remedy

### Breaking changes

*   Default HTTPS support has been added: [portainer/portainer#5462](https://github.com/portainer/portainer/issues/5462)

    As a consequence the `--ssl` flag has been deprecated. If you are using the `--sslcert` and `--sslkey` flags, then after the upgrade port `9000` will serve `http` and port `9443` will serve `https` with the provided certificate. To retain the old behavior consider using the port mapping `-p 9000:9443` instead.
* The `/stacks` API has renamed from `ComposeFilePathInRepository` to `ComposeFile`, and the non-mandatory fields `AdditionalFiles` and `AutoUpdate` were added: [portainer/portainer#5461](https://github.com/portainer/portainer/issues/5461)

### Security

* It is advisable to upgrade to this version, since some security improvements have been made with regards to embedding images: [portainer/portainer#5805](https://github.com/portainer/portainer/issues/5805)

### Kubernetes

* Introduced the ability to keep the deployments of stacks and applications in sync with the definitions in Git
* Introduced the ability to open a shell in Portainer to use kubectl: [portainer/portainer#5574](https://github.com/portainer/portainer/issues/5574)
* Introduced the ability to download a kubeconfig file and use Portainer as a proxy: [portainer/portainer#5574](https://github.com/portainer/portainer/issues/5574)
* Introduced the ability to install Helm charts: [portainer/portainer#5479](https://github.com/portainer/portainer/issues/5479)
* Introduced the ability to use any public Helm repository: [portainer/portainer#5480](https://github.com/portainer/portainer/issues/5480)
* Introduced the ability to automatically sync a manifest from a git repository: [portainer/portainer#5494](https://github.com/portainer/portainer/issues/5494)
* Introduced a visual indicator for applications to see if they're fully replicated: [portainer/portainer#5718](https://github.com/portainer/portainer/issues/5718)
* Introduced the ability to filter Kubernetes applications by type: [portainer/portainer#5726](https://github.com/portainer/portainer/issues/5726)
* Introduced the ability to remove all workloads of a manifest based deployment: [portainer/portainer#5715](https://github.com/portainer/portainer/issues/5715)
* Added the ability to display Helm chart deployments in the applications list: [portainer/portainer#5478](https://github.com/portainer/portainer/issues/5478)
* Added the ability to update and redeploy an application created from a git repository: [portainer/portainer#5486](https://github.com/portainer/portainer/issues/5486)
* Added support for deploying images stored on private registries for Docker and Kubernetes: [portainer/portainer#4393](https://github.com/portainer/portainer/issues/4393)&#x20;
* Introduced the ability to mark and unmark namespaces as system: [portainer/portainer#4389](https://github.com/portainer/portainer/issues/4389)
* Added functionality to define a manifest as custom template: [portainer/portainer#5489](https://github.com/portainer/portainer/issues/5489)
* Added the ability to deploy a manifest from a URL: [portainer/portainer#5556](https://github.com/portainer/portainer/issues/5556)
* Added memory and CPU usage indicators to the namespace and cluster details: [portainer/portainer#5460](https://github.com/portainer/portainer/issues/5460)
* Added status information to list of namespaces: [portainer/portainer#5555](https://github.com/portainer/portainer/issues/5555)
* Added Pod IP address information to the application details: [portainer/portainer#5713](https://github.com/portainer/portainer/issues/5713)
* Added input validation when adding an ingress: [portainer/portainer#5716](https://github.com/portainer/portainer/issues/5716)
* Improved the validation of resource allocation available on any of the nodes when adding an application: [portainer/portainer#5530](https://github.com/portainer/portainer/issues/5530)
* Improved UI so that accessing the advanced deployment functionality is similar to accessing the form: [portainer/portainer#5558](https://github.com/portainer/portainer/issues/5558)
* Renamed configuration and the networking area in the UI: [portainer/portainer#5804](https://github.com/portainer/portainer/issues/5804)
* Improved UI for the metrics API toggle in the cluster setup: [portainer/portainer#5508](https://github.com/portainer/portainer/issues/5508)
* Removed validation of any ingresses that are already in use in other namespaces: [portainer/portainer#5526](https://github.com/portainer/portainer/issues/5526)
* Introduced the ability to use Edge Stacks on Kubernetes via edge agents: [portainer/portainer#5472](https://github.com/portainer/portainer/issues/5472)
* Added warning that a secret will be created when adding registry access to a namespace: [portainer/portainer#5845](https://github.com/portainer/portainer/issues/5845)
* Fixed issue where the metrics server API was being queried when disabled: [portainer/portainer#5523](https://github.com/portainer/portainer/issues/5523)
* Fixed issue where the node events would not be showing: [portainer/portainer#5474](https://github.com/portainer/portainer/issues/5474)
* Fixed issue where applications deployed via Helm in Portainer were marked as external: [portainer/portainer#5727](https://github.com/portainer/portainer/issues/5727)
* Fixed issue where the kubectl shell would close when performing other actions: [portainer/portainer#5721](https://github.com/portainer/portainer/issues/5721)
* Fixed issue where the kubectl shell wasn't working when Portainer runs on ARM64: [portainer/portainer#5723](https://github.com/portainer/portainer/issues/5723)
* Fixed issue where the cluster status was incorrectly shown: [portainer/portainer#5293](https://github.com/portainer/portainer/issues/5293)
* Fixed issue where the application details incorrectly showed how it was deployed : [portainer/portainer#5728](https://github.com/portainer/portainer/issues/5728)
* Fixed issue where standard users were unable to access the pod and node stats view: [portainer/portainer#5898](https://github.com/portainer/portainer/issues/5898)
* Fixed issue where editing an application could not expose it via Ingress: [portainer/portainer#5915](https://github.com/portainer/portainer/issues/5915)
* Fixed issue when clearing Helm repo in global settings and added text notification in Helm charts page: [portainer/portainer#5996](https://github.com/portainer/portainer/issues/5996)
* Fixed issue where Helm charts fail to load in ARM cloud environments: [portainer/portainer#5937](https://github.com/portainer/portainer/issues/5937)
* Fixed issue where the namespace details page showed an object object error: [portainer/portainer#5802](https://github.com/portainer/portainer/issues/5802)
* Fixed issue where Environment variables with empty values are not showing when editing a Kubernetes application
* Fixed issue where standard users could not see the quota set in the namespace details page

### Docker

* Introduced the ability to keep the deployments of stacks and applications in sync with the definitions in Git
* Introduced the ability to automatically sync a stack from a git repository: [portainer/portainer#5461](https://github.com/portainer/portainer/issues/5461)
* Introduced the ability to use stacks on docker standalone on ARM64: [portainer/portainer#4776](https://github.com/portainer/portainer/issues/4776)
* Introduced the ability to use Edge Stacks on ARM64: [portainer/portainer#4776](https://github.com/portainer/portainer/issues/4776)
* Added support for deploying images stored on private registries for Docker and Kubernetes: [portainer/portainer#4393](https://github.com/portainer/portainer/issues/4393)
* Added the ability to edit a stopped stack: [portainer/portainer#4944](https://github.com/portainer/portainer/issues/4944)
* Added the ability to edit environment variables for stacks on docker standalone: [portainer/portainer#3441](https://github.com/portainer/portainer/issues/3441)
* Docker container stats graphs now support cgroups v2: [portainer/portainer#4818](https://github.com/portainer/portainer/issues/4818)
* Improved how to change the image when editing a Service by pre-populating the fields in the UI: [portainer/portainer#5150](https://github.com/portainer/portainer/issues/5150)
* Fixed issue where all images regardless of their tag would be pulled: [portainer/portainer#4870](https://github.com/portainer/portainer/issues/4870)
* Fixed issue where volumes would lose their access control settings: [portainer/portainer#4851](https://github.com/portainer/portainer/issues/4851)
* Fixed issue where standard users were unable to browse volumes created by stacks: [portainer/portainer#4929](https://github.com/portainer/portainer/issues/4929)
* Fixed issue where ports would show for IPv4 as well as IPv6: [portainer/portainer#5038](https://github.com/portainer/portainer/issues/5038)
* Fixed issue where `container_name` validation would not take stopped containers into account: [portainer/portainer#5522](https://github.com/portainer/portainer/issues/5522)
* Fixed issue where editing a stack would warn about the container name being in use: [portainer/portainer#5130](https://github.com/portainer/portainer/issues/5130)
* Fixed issue where navigating away incorrectly showed a changes not saved popup: [portainer/portainer#5512](https://github.com/portainer/portainer/issues/5512)
* Fixed issue where the stack name would contain spaces or upper case characters: [portainer/portainer#5153](https://github.com/portainer/portainer/issues/5153)
* Fixed issue where the UI would incorrectly report that an image was successfully pulled: [portainer/portainer#3123](https://github.com/portainer/portainer/issues/3123)
* Fixed issue where the Stack editor would not always load its content: [portainer/portainer#5102](https://github.com/portainer/portainer/issues/5102)
* Fixed issue where environment variables were incorrectly showing when the value contained an equals sign: [portainer/portainer#5395](https://github.com/portainer/portainer/issues/5395)
* Fixed issue where the browser console would show errors in the container and image details view: [portainer/portainer#5511](https://github.com/portainer/portainer/issues/5511)
* Fixed issue where dashes and underscores in stack names were being removed: [portainer/portainer#5759](https://github.com/portainer/portainer/issues/5759)
* Fixed UI issue where adding a Service with a mix of TCP and UDP was being prevented: [portainer/portainer#5521](https://github.com/portainer/portainer/issues/5521)
* Fixed issue where images could be used in custom templates notes: [portainer/portainer#5805](https://github.com/portainer/portainer/issues/5805)
* Fixed issue where automatic updates would keep polling when the user that created the stack is removed: [portainer/portainer#5719](https://github.com/portainer/portainer/issues/5719)
* Fixed issue where automatic updates of stacks fail after restarting Portainer: [portainer/portainer#5914](https://github.com/portainer/portainer/issues/5914)
* Fixed issue where stack names were not being validated when using custom templates: [portainer/portainer#5841](https://github.com/portainer/portainer/issues/5841)
* Fixed issue where stats were not working on windows containers: [portainer/portainer#5826](https://github.com/portainer/portainer/issues/5826)
* Fixed issue where the scale labels of the stats graph was showing multiple times: [portainer/portainer#5843](https://github.com/portainer/portainer/issues/5843)
* Fixed UI issue when using a personal access token to deploy from Git: [portainer/portainer#5847](https://github.com/portainer/portainer/issues/5847)
* Fixed UI issue with empty stack dropdown when deploying an application via the form: [portainer/portainer#5848](https://github.com/portainer/portainer/issues/5848)
* Fixed issue where migrating a stack shows up twice: [portainer/portainer#5159](https://github.com/portainer/portainer/issues/5159)
* Fixed issue where switching from docker standalone to swarm would show duplicate stacks

### Portainer

* Added automatic updates of stacks and applications to the activity logs
* Introduced the ability to define a time based change window in which automatic updates of stacks and applications can take place
* Introduced the ability to automatically set OAuth users as a Portainer Admin
* Introduced the ability to automatically set LDAP users as a Portainer Admin
* Added a Portainer and Agent Juju Charm to the Charmhub marketplace
* Introduced dark theme and high contrast mode: [portainer/portainer#5493](https://github.com/portainer/portainer/issues/5493)
* Introduced the ability to access Portainer via HTTPS: [portainer/portainer#5462](https://github.com/portainer/portainer/issues/5462)
* Renamed Endpoints to Environments in the UI: [portainer/portainer#5492](https://github.com/portainer/portainer/issues/5492)
* Improved the menu UI to indicate the existence of sub items: [portainer/portainer#5528](https://github.com/portainer/portainer/issues/5528)
* Improved UI how to add environments to Portainer when doing a new installation: [portainer/portainer#5477](https://github.com/portainer/portainer/issues/5477)
* Added functionality to copy error messages from toast notifications: [portainer/portainer#5720](https://github.com/portainer/portainer/issues/5720)
* Improved how a Portainer upgrade can be rolled back: [portainer/portainer#5482](https://github.com/portainer/portainer/issues/5482)
* Improved UI where the table background wasn't working very well in dark mode: [portainer/portainer#5714](https://github.com/portainer/portainer/issues/5714)
* Fixed issue where Git content could not be cloned when Portainer is behind a proxy: [portainer/portainer#3286](https://github.com/portainer/portainer/issues/3286)
* Fixed issue where the SSL certificates were not included in the Portainer backup: [portainer/portainer#5497](https://github.com/portainer/portainer/issues/5497)
* Fixed issue where editing an endpoint results in errors: [portainer/portainer#5318](https://github.com/portainer/portainer/issues/5318)
* Fixed upgrade issue where disconnected endpoints caused the upgrade to fail: [portainer/portainer#5764](https://github.com/portainer/portainer/issues/5764)
* Fixed issue with the layout of the add Environment Wizard: [portainer/portainer#5801](https://github.com/portainer/portainer/issues/5801)
* Fixed issue where the custom logo was not used in all places: [portainer/portainer#5447](https://github.com/portainer/portainer/issues/5447)
* Fixed issue where the DockerHub anonymous registry was being used instead of one with an account: [portainer/portainer#5896](https://github.com/portainer/portainer/issues/5896)
* Fixed issue where upgrade fails: [portainer/portainer#5969](https://github.com/portainer/portainer/issues/5969)
* Fixed issue where the Quick Setup wizard wasn't showing correctly when using the dark theme: [portainer/portainer#5842](https://github.com/portainer/portainer/issues/5842)
* Fixed issue where uploading a backup file could not select a file on Mac: [portainer/portainer#5357](https://github.com/portainer/portainer/issues/5357)
* Fixed issue where the URL of an Environment would change to localhost: [portainer/portainer#5803](https://github.com/portainer/portainer/issues/5803)
* Fixed issue where RBAC settings would be retained after removing an Environment from Portainer
* Fixed issue where certificates would end up in the activity logs
* Fixed issue when exporting activity logs as CSV without a data range set
* Added a build for Windows Server 20H2: [portainer/portainer#4971](https://github.com/portainer/portainer/issues/4971)
* Added a build for Windows Server 21H2: [portainer/portainer#5763](https://github.com/portainer/portainer/issues/5763)

### Registries

* Improved UI to provide information for correctly using a ProGet registry: [portainer/portainer#5510](https://github.com/portainer/portainer/issues/5510)
* Fixed UI issue where the registry list incorrectly showed that there's no registry available: [portainer/portainer#5731](https://github.com/portainer/portainer/issues/5731)

### ACI

* Fixed issue where ACI stopped working when the number of exposed ports and container ports were different: [portainer/portainer#5335](https://github.com/portainer/portainer/issues/5335)
* Fixed issue where ACI would show errors when a resource group had multiple containers: [portainer/portainer#5335](https://github.com/portainer/portainer/issues/5335)

### Edge

* Introduced the ability to use Edge Stacks on Kubernetes via Edge Agents: [portainer/portainer#5472](https://github.com/portainer/portainer/issues/5472)
* Introduced the ability to re-associate an edge endpoint to a new Edge Agent: [portainer/portainer#5473](https://github.com/portainer/portainer/issues/5473)
* Improved the REST API access of the Edge Agent in Docker standalone: [portainer/agent#187](https://github.com/portainer/agent/issues/187)
* Fixed issue where the heartbeat indicator was not reliable: [portainer/portainer#5569](https://github.com/portainer/portainer/issues/5569)
* Fixed issues with the Edge Agent reverse tunnel timing out: [portainer/portainer#5725](https://github.com/portainer/portainer/issues/5725)

### Development

* Added the ability to query the endpoints by type through the Portainer API: [portainer/portainer#4786](https://github.com/portainer/portainer/issues/4786)
* Integrated with Logrus for the internal logging mechanism: [portainer/portainer#5509](https://github.com/portainer/portainer/issues/5509)
* Updated the Golang version to 1.16: [portainer/portainer#5463](https://github.com/portainer/portainer/issues/5463)
* Improved the Portainer API documentation for adding users: [portainer/portainer#5136](https://github.com/portainer/portainer/issues/5136)
* Fixed inconsistencies in the Portainer API documentation: [portainer/portainer#5527](https://github.com/portainer/portainer/issues/5527)
* Updated the Swagger documentation: [portainer/portainer#5338](https://github.com/portainer/portainer/issues/5338)

## Release 2.7

### **Docker**

* Added the ability to update and redeploy a stack created from a git repository
* Added I/O usage to the container statistics
* Enhanced environment variables UI/UX for Docker
* sysctl options are available when creating a container
* Show the number of Swarm nodes for the endpoint on the Home page
* Show how many Docker pulls are remaining for DockerHub to avoid exceeding the quota
* Introduced support for compose version 3.8 on docker swarm environments
* Display the container IP address(es) in the list of containers
* Improved layout of the toggles on the create container setting tab
* For Docker Standalone, prevent a stack from being created if the Compose has a container\_name that already exists
* Creating a container from a DockerHub image will show a search button in the UI
* Fixed issue where deploying a stack from Git did not work for Azure DevOps
* Fixed issue where stacks with a status of 0 are hidden in the UI
* Fixed issue where pulling a large image is failing when using an Agent due to a timeout
* Fixed issue where listing the services with Auto-refresh on collapses all services after refresh
* Fixed issue where dash characters got removed from the stack name on Docker Standalone
* Fixed issue where access control management via labels was not fault tolerant
* Fixed issue where the label showing the default location of secrets was incorrect for Windows
* Fixed typo in the error message "Unable to start stack"

### **Registries**

* Added ProGet as a specific registry type when adding a registry
* Fixed issue where pushing to a quay.io registry failed due to not including the username in the quay registry URL

### **Templates**

* Fixed issue where creating a custom template from uploading a compose file failed
* Fixed issue where switching custom template in the template tab of stack create view doesn't update editor
* Fixed issue with an invalid template documentation URL in the Settings

### **Volumes**

* Added validation to prevent adding empty mount to an existing service
* Fixed issue with the MountType and nfsvers when creating NFS4 volumes
* Fixed issue where editing the properties of volumes on a service did not enable the apply button

### **Kubernetes**

* Introduced the ability to deploy a manifest from a git repository when using advanced deployment
* The advanced deployment feature has been made available to standard users
* Introduced a summary of Kubernetes actions when deploying a Kubernetes resource
* Added the ability to display realtime node metrics in Kubernetes
* Added functionality to allow multiple ingress networks per kubernetes namespace, with a differing config per ingress
* Added the ability to redeploy an externally deployed application
* Added the ability to expand the YAML tab of a Kubernetes application to full size
* Added the ability to cordon/uncordon/drain nodes
* Added a warning in the placement tab when an application can't be scheduled on the cluster
* Renamed Resource Pools to Namespaces in the UI
* Improved UI for the placement policies when creating an application
* Improved how application image names are shown
* Form validation has been added for Configuration keys
* Environment variable are sorted alphabetically to improve the readability
* Display the ImagePull policy in the details of an application
* Default to the kube-system namespace in the advanced deployment view on ARM
* Fixed minor UI inconsistency when creating an application with an ingress
* Fixed issue with the UI layout when creating an application with ingress
* Fixed issue where updating the Kubernetes endpoint URL did not get persisted
* Fixed issue where the endpoint url is not updated when updating a kubernetes local endpoint
* Fixed issue where renaming the endpoint of a kubernetes agent breaks the endpoint
* Fixed issue where environment variables with empty values are not showing when editing a kubernetes application
* Fixed issue where environment variable validation when creating an application was too restrictive
* Fixed issue where creating an application with two different ingresses incorrectly populates the hostname UI fields
* Fixed issue where an application with persisted data can't update, after the storage option is disabled in the cluster settings
* Fixed issue where adding an ingress route is not prevented when editing an application with existing ingress route and ingress is disabled
* Fixed issue where adding an application does not allow Global to be set

### **ACI**

* Fixed issue where ACI stops working after persistence or networking gets added

### **Edge**

* Added the ability to deploy Edge stacks on Docker standalone Edge endpoints
* Show the status of the edge agent check-in on the home page dashboard
* Hide the webhook UI in the service creation view of an edge endpoint, since it's not applicable
* Fixed issue where accessing a down Kubernetes Edge endpoint should redirect the user to the home view

### **Portainer**

* Added the ability to sync Portainer teams with group memberships provided via OAuth
* Added SSO support for OAuth and do not enforce a login prompt. Use `<portainer_url>/#!/internal-auth` to login with internal admin.
* Added the ability to manage orphaned stacks when Portainer has the compose file
* Added the option to specify the local socket location when adding a docker endpoint
* Search filters are retained within the browser session
* Properly expose backend error when using image management features
* Prevent web editor related views from being accidentally closed
* Improved descriptions for Portainer initialization errors
* Disable sysctl settings for non-administrators incorrectly defaults to being on
* Fixed issue where the File select windows gets shown when pressing enter in text fields
* Fixed issue where restoring Portainer from a backup file fails in certain circumstances related to the activity logs
* Fixed issue where a custom snapshot interval cannot be changed
* Fixed issue with incorrect Windows agent deployment command in the agent endpoint creation tab

### **Podman**

* Introduced initial experimental support for Podman. Known limitations are listed in https://github.com/portainer/portainer/issues/5188

### **Development**

* Introduce buildx to support Windows 1903+ Base Images
* Added the ability to debug through VSCode
* Added check for missing angularJS inject annotation
* Removed grunt-karma ang grunt-html2js dependencies
* Fixed issue where webpack complains about charset source maps
* Fixed issue where babel complains about missing core-js dependency

### **Known Issues**

* Logging into Portainer as a Standard User fails to load home page when using 'microk8s v1.21.3-3+6343a564e351b0'
* Host Management features do not work on Windows Hosts [#4450](https://github.com/portainer/portainer/issues/4450)
* Host Browser function does not work for Non-Admin users.

## Release 2.4

### **Kubernetes​**

* Pods without workloads are now displayed as applications
* Improved UI/UX of configurations for creation / edition
* Introduced request of confirmation upon volume removal
* Introduced the advanced deployment panel to each resource list view
* Updated validation to prevent a user from exposing an application over an external load balancer with mixed protocols
* Introduced the ability to display the access policy associated to the storage of a volume
* Clarified advanced deployment feature
* Clarified sensitive configuration creation
* Clarified ingress controller configuration in the cluster setup view
* Renamed the create entry from file button when creating a configuration
* Improved validation warnings in the application creation / edition views
* Removed extra whitespace in stacks and storage datatables
* Fixed issue with access management feature on resource pools
* Fixed issue with ability to retrieve configs when a config is a binary file
* Fixed issue with advanced deployment feature on agent and Edge agent endpoints
* Fixed an issue that would mark a sensitive configuration as external without owner after an update
* Fixed issue with access to configuration details view for a configuration containing binary data
* Fixed labels to display system labels first in the node details view
* Fixed refresh issue on the view with the YAML panel selected
* Fixed invalid display issue when accessing the load balancer panel from the application panel
* Fixed issue when accessing the cluster setup incorrectly expanding the Endpoint sidebar
* Fixed issue with exposed configuration keys over filesystem inside an application not being applied
* Fixed issue when Adding a key to existing used configuration that would throw an error when editing an application using that configuration
* Fixed an issue with the form validation in the configuration creation view
* Fixed issue with resource pool “created” attribute not showing actual creation time
* Fixed issue with ability to apply a note to a Pod type application
* Fixed issue with creating Kubernetes resources with a username longer than 63 characters
* Fixed issue with special characters in usernames when creating Kubernetes resources
* Fixed issue with ability to retrieve config map error when trying to manager newly create resource pool​

### **Activity Logging ​**

* Introduced user authentication activity logging
* Introduced user activity logging​

### **RBAC ​**

* Introduced new RBAC “Operator” Role
* Fixed issue with user in 2 team with mix of helpdesk & endpoint admin resulting in the user having permissions of endpoint admin​

### **Registries ​**

* Fixed issue causing Portainer to forget the password associated to a registry after an update
* Fixed issue preventing the registry manager feature to work properly with a ProGet registry
* Improved description for advanced mode usage with private registries​

### **Swarm ​**

* Introduced validation to prevent adding a mount with nothing filled to and exiting service
* Fixed issue in service creation, switching to bind mode from volume mode with a volume selected fills the host field with {object Object}​

### **Stacks ​**

* Introduced support for creating stacks with the same name across different endpoints
* Introduced extra stack information: creation, last update time and user who created the stack
* Minor UX change for the start/stop stack action
* Fixed issue with ability to use private registries with Standalone stacks
* Fixed issue showing editor tab on limited stacks when it should not
* Fixed issue when editing a stack, hitting backspace or delete keys with contents of web editor selected hides the entire editor UI element
* Fixed issue with stack create via API with a regular user account are incorrectly marked as administrator only
* Fixed issue of error being displayed when creating a stack on docker standalone despite the stack is created
* Fixed issue of stacks being created via API incorrectly marked private with no owner​

### **Docker ​**

* Introduced support for Compose > v2 when deploying a stack on a Docker standalone environment
* Introduced the ability to download log file from Docker container/service views
* Display labels in Image Details
* Clarify the description of the restrict external access to the network property when creating a network​

### **User Management ​**

* Automatically lowercase username when authenticating users
* Update the authentication UX to put an emphasis on OAuth when OAuth is enabled​

### **Portainer**

* Introduced the ability to backup / restore Portainer
* Fixed issue of version not being shown correctly after update
* Support starting Portainer without having to specify any endpoint​

### **ACI**

* Introduced RBAC to ACI
* Introduced UAC to ACI​

### **Minor Changes​**

* Removed the new version check
* Changed the license server errors to be a silent fail for offline environments
* Added JS source map for Portainer UI

## Release 2.0.1

### **Fixes**

* **Fix an issue preventing a user from creating Kubernetes resources if they have a `@` character in their username**\
  Users with a `@` character in their username were not able to create the following Kubernetes resources:
  * Resource pool
  * Application
  * Configuration
* **Fix platform issues with the Docker image for Portainer Business**\
  The Docker image can now be successfully deployed on the following platforms:
  * Linux ARM64
  * Linux ARM
* **Minor update to the license server mechanism**\
  The license server mechanism has been updated.

## Release 2.0.0

Initial release of Portainer Business
