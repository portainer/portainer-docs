# Release Notes

## Release 2.14.0

### Kubernetes

* Introduced ability to set up a new Kubernetes environment in Portainer via upload of a kubeconfig file for an existing on premises or on-cloud cluster.
* Fixed issue around Git clone working with Main (in addition to existing Master) branch type. [portainer/portainer#6002](https://github.com/portainer/portainer/issues/6002)
* Updated packaged components to recent stable release versions: Docker 20.10.9, Docker Compose plugin 2.5.1, kubectl 1.24.1, Helm 3.9.0. [portainer/portainer#6074](https://github.com/portainer/portainer/issues/6074)
* Administrators can now set up cloud provider settings via a list page and separate add page in a similar way to other records in Portainer.
* Introduced support for provisioning of a Kubernetes cluster on the Amazon (AWS) EKS platform from within Portainer, alleviating the need to do so in the cloud provider's portal. The AWS eksctl binary is auto downloaded when first using this functionality.
* Introduced support for provisioning of a Kubernetes cluster on the Microsoft Azure AKS platform from within Portainer, alleviating the need to do so in the cloud provider's portal.
* Introduced support for provisioning of a Kubernetes cluster on the Google Cloud GKE platform from within Portainer, alleviating the need to do so in the cloud provider's portal.
* Fixed a typo in the Kubernetes -> Namespaces -> Create from manifest (advanced deployment) page. [portainer/portainer#6968](https://github.com/portainer/portainer/issues/6968)
* Fixed an issue with cluster provisioning via Civo KaaS, where if the Civo account has an issue with its defined networks, the environment was stuck waiting to complete provisioning and never ultimately errored.
* Introduced the ability to set the group and tags against the environment in Portainer when an admin provisions a Kubernetes as a Service cluster.
* Introduced slight improvements to editing of sensitive cloud credentials values.
* Fixed an issue in the Settings -> Environments page, where an environment that was disabled or still being provisioned could be selected for removal and then removed.
* Added the ability to manually refresh pulling of Kubernetes as a Service cluster provisioning options from cloud providers.
* Improved error handling around KaaS provisioning in the environment wizard.
* Kubernetes as a Service (cloud) provisioned environments will now appear in the 'new environments' side panel in the environments wizard.

### Docker

* Introduced a visual indication of stacks, services and containers that are running with an out-of-date image. [portainer/portainer#1304](https://github.com/portainer/portainer/issues/1304)
* Fixed issue around Git clone working with Main (in addition to existing Master) branch type. [portainer/portainer#6002](https://github.com/portainer/portainer/issues/6002)
* Updated packaged components to recent stable release versions: Docker 20.10.9, Docker Compose plugin 2.5.1, kubectl 1.24.1, Helm 3.9.0. [portainer/portainer#6074](https://github.com/portainer/portainer/issues/6074)
* Fixed issue for standard user having an empty network as default when creating containers on Windows environments [portainer/portainer#6959](https://github.com/portainer/portainer/issues/6959)
* Introduced ability to pass environment variables on the webhooks in Docker stack deployment.
* Provide a stack template for dokku deployment within portainer. [portainer/portainer#7011](https://github.com/portainer/portainer/issues/7011)
* Resolved an issue when updating an application and changing its service from replicated to global, where an error occurs and the deployed application is deleted. [portainer/portainer#7056](https://github.com/portainer/portainer/issues/7056)
* Third-party developer Inedo has fixed their ProGet registry software to resolve an intermittent error admins were experiencing in Portainer on retag or delete of a tagged image. This is planned to ship 10 June 2022 in ProGet 6.0.16, before Portainer 2.14.
* Introduced support in the container webhook for pull/recreate of containers from images residing in private registries.
* Fixed an issue in the Containers page, where choosing 'Recreate' enabled the webhook for the container, even though it was not currently turned on.
* Fixed an issue where, when calling Swarm update API through Portainer, incorrect overriding of the registry authentication header occurred, preventing pull of an image. [portainer/portainer#7095](https://github.com/portainer/portainer/issues/7095)

### Portainer

* Redesigned team leader feature. [portainer/portainer#7093](https://github.com/portainer/portainer/issues/7093)
* Fixed an issue where the delete environment confirmation dialog was positioned too low on-screen. [portainer/portainer#6983](https://github.com/portainer/portainer/issues/6983)
* Fixed an issue where agent and edge agent install command instructions do not list the agent\_secret option. [portainer/portainer#6801](https://github.com/portainer/portainer/issues/6801)
* Fixed an issue where the home (environments) page no longer showed the words 'No tags' for environments without tags. [portainer/portainer#6967](https://github.com/portainer/portainer/issues/6967)
* Introduced support for provisioning of a Kubernetes cluster on the Amazon (AWS) EKS platform from within Portainer, alleviating the need to do so in the cloud provider's portal. The AWS eksctl binary is auto downloaded when first using this functionality.
* The Add environment page and Environment wizard are now consolidated into a single consistent, improved wizard-style experience. [portainer/portainer#7022](https://github.com/portainer/portainer/issues/7022)
* Introduced support for provisioning of a Kubernetes cluster on the Microsoft Azure AKS platform from within Portainer, alleviating the need to do so in the cloud provider's portal.
* Introduced support for provisioning of a Kubernetes cluster on the Google Cloud GKE platform from within Portainer, alleviating the need to do so in the cloud provider's portal.
* Fixed Go panic state for the environments list handler [portainer/portainer#7047](https://github.com/portainer/portainer/issues/7047)
* Introduced ability for admin to set required password length. [portainer/portainer#7055](https://github.com/portainer/portainer/issues/7055)
* Fixed an issue recently introduced in the environments page where the name of an environment that was down no longer linked through to its details page.
* Resolved an issue preventing migration from EE 2.12 to 2.13 (or now 2.14) for Portainer instances that had previously migrated to EE from a CE instance with Allow Volume Browser for Regular Users toggled on for an environment.
* Increased the click/touch area in expandable panels so it's easier to open/close them. [portainer/portainer#7036](https://github.com/portainer/portainer/issues/7036)
* Fixed propagation of Portainer agent polling frequency when changed before deploying via automatic edge environment creation
* Introduced the ability to paste in an existing license, revalidate with the license server and replace it in the database. This can be used to fix a corrupted license.

### Edge

* Fixed issue with status indicator on Edge Stacks not updating when removing tags from edge environments/groups [portainer/portainer#6950](https://github.com/portainer/portainer/issues/6950)
* Introduced the ability to define the 3 polling intervals for Async
* For edge agents, the URL shown in the Environment summary page (access from the Home page) has now been removed, as it caused confusion since it simply showed the Portainer Server URL. [portainer/portainer#6978](https://github.com/portainer/portainer/issues/6978)
* Fixed Data race in the operations of the edge key in the Edge Agent [portainer/portainer#7024](https://github.com/portainer/portainer/issues/7024)
* Added "goto page" to the Edge devices page view [portainer/portainer#6982](https://github.com/portainer/portainer/issues/6982)
* Added the ability to add edge agents in the environment wizard [portainer/portainer#7023](https://github.com/portainer/portainer/issues/7023)

### Nomad

* Added HTTPS support for Nomad Edge Agent.
* Added display of BE feature highlights in CE for new Nomad, KaaS provisioning and kubeconfig import functionality. [portainer/portainer#7051](https://github.com/portainer/portainer/issues/7051)

## Release 2.13.1

### Portainer:

* Changed the minimum TLS version of Portainer from 1.3 to 1.2 to avoid issues with nginx reverse proxies: [portainer/portainer#6902](https://github.com/portainer/portainer/issues/6902)
* Fixed issue with the Portainer authentication settings page not being able to save: [portainer/portainer#6899](https://github.com/portainer/portainer/issues/6899)
* Changed the password policy to require 12 characters for all Portainer internal users: [portainer/portainer#6904](https://github.com/portainer/portainer/issues/6904)

## Release 2.13

### Known issues

* When provisioning a Civo cluster while there are multiple default networks defined on the Civo account, the environment will fail to provision and Portainer will end up waiting for the environment to be ready indefinitely. This can be resolved from the Civo console by deleting the cluster and using a non-default network for the provision.

### Breaking changes

* The minimum TLS version of Portainer was changed from 1.2 to 1.3. If you are running a proxy in front of Portainer with HTTPS you will need to ensure it is configured to support TLS 1.3.
* Standard users can browse registries including edit and delete
* Introduced the ability for non admin users to browse image registries
* Added strong password policy for all Portainer internal users. When using a weak password and logging in you will be required to update your password.

### Kubernetes

* Improve how Portainer helps you set up ingresses (especially Nginx ones), including support of regular expressions in paths - by assisting with required annotations and correcting a rewrite issue: [portainer/portainer#6854](https://github.com/portainer/portainer/issues/6854)
* Introduce support for provisioning of a Kubernetes cluster on a cloud provider's KaaS offering from within Portainer, alleviating the need to do so in the provider's own portal. Initial supported providers are Civo, DigitalOcean and Linode.
* Fixed an issue where, on setting up (on a namespace) an ingress controller for a k8s cluster and I create an app with two ingress routes on the controller, app details show only the second of the paths: [portainer/portainer#6856](https://github.com/portainer/portainer/issues/6856)
* Fixed an issue where Portainer's validation of a K8s namespace's hostnames was disallowing wildcards (e.g. \*abc.com): [portainer/portainer#6855](https://github.com/portainer/portainer/issues/6855)
* Fixed issue with default helm repo not populating in settings page: [portainer/portainer#6849](https://github.com/portainer/portainer/issues/6849)
* Created documentation around using GKE ingress with Portainer: [portainer/portainer#6848](https://github.com/portainer/portainer/issues/6848)
* Added input validation for kubernetes workload names: [portainer/portainer#5363](https://github.com/portainer/portainer/issues/5363)
* Fixed issue where changing Portainer to HTTPS crashed Portainer: portainer/portainer#6836
* Fixed issue where Helm Charts could not be deployed when using SSL certs with Portainer: [portainer/portainer#6742](https://github.com/portainer/portainer/issues/6742)
* Fixed issue of not being able to use a name previously used for kubernetes resources: [portainer/portainer#6830](https://github.com/portainer/portainer/issues/6830)
* Fixed issue where the Kube cluster resource stats had a rounding issue: [portainer/portainer#6472](https://github.com/portainer/portainer/issues/6472)
* Fixed an issue when deploying Portainer client with AGENT\_SECRET without configuring Kubernetes agent with AGENT\_SECRET where an "Failure unknown" error shows rather than "agent already paired" : [portainer/portainer#6791](https://github.com/portainer/portainer/issues/6791)

### Docker

* Standard users can browse registries including edit and delete
* Introduced the ability for non admin users to browse image registries
* Fixed issue where the Disable bind mounts for non-administrators setting would prevent existing volumes from being used: [portainer/portainer#6387](https://github.com/portainer/portainer/issues/6387)
* Fixed issue with creating a CIFS volume that uses a hostname: [portainer/portainer#6338](https://github.com/portainer/portainer/issues/6338)
* Fixed issue where webhooks for services were accepting invalid tags: [portainer/portainer#6493](https://github.com/portainer/portainer/issues/6493)
* Fixed issue with libcompose logging where error output is attempted to be included when an error did not occur: [portainer/portainer#6857](https://github.com/portainer/portainer/issues/6857)
* Fixed an issue where 'Pull and Redeploy' and 'Force redeploy' don't work on ARM: [portainer/portainer#6788](https://github.com/portainer/portainer/issues/6788)
* Documented deviation from the Docker standard when using the /docker/images/create API endpoint in conjunction with a private registry: [portainer/portainer#6712](https://github.com/portainer/portainer/issues/6712)
* Fixed issue where credentials from different registries were being used: [portainer/portainer#6087](https://github.com/portainer/portainer/issues/6087)
* Fixed issue where stack name was stated inaccurately in the message which informs users that a container/service inherited its access control settings from a specific stack: [portainer/portainer#6478](https://github.com/portainer/portainer/issues/6478)
* Fixed issue with displaying container template when connected to docker swarm in the app templates page view: [portainer/portainer#6837](https://github.com/portainer/portainer/issues/6837)
* Fixed text color on modal when updating a service: [portainer/portainer#6839](https://github.com/portainer/portainer/issues/6839)
* Fixed issue where Watchtower did not work for standalone stacks on Arm64: [portainer/portainer#5799](https://github.com/portainer/portainer/issues/5799)

### Portainer

* Enforced strong password policy for all Portainer Users: [portainer/portainer#6846](https://github.com/portainer/portainer/issues/6846)
* Improved the database migration to become more resilient: [portainer/portainer#6778](https://github.com/portainer/portainer/issues/6778)
* Introduced the ability to filter and sort environments on the Home page: [portainer/portainer#6823](https://github.com/portainer/portainer/issues/6823)
* When changing the user password the user gets redirected to the login page: [portainer/portainer#6456](https://github.com/portainer/portainer/issues/6456)
* Fixed issue where upgrading to the Business Edition and then downgrading back to the Community Edition did not work
* Improved security for custom templates when using Git repos that contain symlinks: [portainer/portainer#6847](https://github.com/portainer/portainer/issues/6847)
* Improved how the installation page times out: [portainer/portainer#6740](https://github.com/portainer/portainer/issues/6740)
* Improved file type validation when selecting multiple files when deploying from Git repository
* Removed superfluous warning message for the Enable Change Window setting
* Fixed bug relating to environment status in home page: [portainer/portainer#6047](https://github.com/portainer/portainer/issues/6047)
* Improved concurrency in agent code to prevent race conditions: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Improved concurrency in backend code to prevent race conditions: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Fixed duplicate naming issue for registries: [portainer/portainer#6838](https://github.com/portainer/portainer/issues/6838)
* Fixed issue around user accessing agent environment after changing an invalid environment url to a valid one: [portainer/portainer#6824](https://github.com/portainer/portainer/issues/6824)
* Fixed issue with the menu when connecting to another environment fails: [portainer/portainer#6449](https://github.com/portainer/portainer/issues/6449)
* Updated registry form wording from Password to "Dockerhub access token" : [portainer/portainer#6308](https://github.com/portainer/portainer/issues/6308)
* Fixed text color for change window warning text
* Fixed an issue where the hover-over tooltip for nav menu items always just showed 'Settings' rather than the menu item text: [portainer/portainer#6779](https://github.com/portainer/portainer/issues/6779)
* Fixed issue where the green success notification was not showing up after deleting a custom app template: [portainer/portainer#6724](https://github.com/portainer/portainer/issues/6724)
* Improved UX for setting themes by removing save button: [portainer/portainer#6840](https://github.com/portainer/portainer/issues/6840)

### Edge

* Renamed Trust on first connect to "Waiting Room"
* Introduced the ability to pass env variables from local system to edge stacks for Kubernetes environments
* Created the ability for Automatic Edge Environment Creation (AEEC) within Portainer Server
* Introduced support for using credentials with private registries for edge stacks
* Resolved data race on stack deploy for edge agents: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Added environment variable to the agent to adjust the probe timeout and interval: [portainer/agent#293](https://github.com/portainer/agent/issues/293)
* Introduce the ability to pass env variables from a local system on edge devices to the edge stack: [portainer/portainer#6832](https://github.com/portainer/portainer/issues/6832)
* Fixed issue with edge environments having faulty heartbeat on Edge Devices page: [portainer/portainer#6825](https://github.com/portainer/portainer/issues/6825)
* Improved concurrency in edge code to prevent race conditions: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Fixed data race in poll service on Edge Agent: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Resolved some race conditions with the edge agent: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Resolved data race on tunnels for edge agents: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Resolved data race with activity timer for edge agents: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)
* Fixed issue with displaying AMT device table for non-activated devices: [portainer/portainer#6835](https://github.com/portainer/portainer/issues/6835)
* Fixed minor UI issues in Edge devices page view around Action buttons: [portainer/portainer#6844](https://github.com/portainer/portainer/issues/6844)
* Fixed issue when creating edge job from file returning 404: [portainer/portainer#6826](https://github.com/portainer/portainer/issues/6826)

### Development

* Updated the Go library dependencies: [portainer/portainer#6777](https://github.com/portainer/portainer/issues/6777)
* Migrated AngularJS components to ReactJS: [portainer/portainer#6031](https://github.com/portainer/portainer/issues/6031)
* Reorganized the file structure of the agent installation yaml files: [portainer/portainer#6776](https://github.com/portainer/portainer/issues/6776)
* Removed the integration with Storidge clusters: [portainer/portainer#6512](https://github.com/portainer/portainer/issues/6512)

## Release 2.12.2

### Nomad

* Introduced Nomad integration
* Allows Nomad to be added as an environment in Portainer by using the Edge Agent
* Allows Edge Stacks to be deployed on Nomad as Nomad Jobs
* Allows Nomad Jobs and Tasks to be listed
* Allows Nomad logs and events to be viewed for Tasks

### Kubernetes

* Fixed issue where changing Portainer to HTTPS crashed Portainer
* Fixed issue around deploying in default namespace via manifest using the portainer namespace instead
* Fixed bug causing domain names to not displaying correctly under publish application options
* Fixed issue with first service naming having a suffix attached.
* Improved error message being displayed when deploying a malformed Kubernetes manifest from GitOps

### Portainer

* Fixed issue with GitOps automatic update
* Fixed issues around migration path for CE to BE
* Fixed missing operator role when migrating from 1.x
* Improved concurrency in edge code to prevent race conditions: [portainer/portainer#6677](https://github.com/portainer/portainer/issues/6677)

### Edge

* Resolved some race conditions with the Edge Agent

## Release 2.12.1

### Portainer

* Fixed bug where redeploying a stack causes an error and success message at the same time.
* Fixed bug that was preventing ability to edit application with persisted folder on Kubernetes.

## Release 2.12.0

### Breaking changes

* When OAuth is enabled, Portainer users can no longer use their Portainer internal password: [portainer/portainer#5889](https://github.com/portainer/portainer/issues/5889)
* Deploying a manifest without a namespace definition and selecting the Default namespace in Portainer may deploy the application into the portainer namespace in certain circumstances

### Kubernetes

* Added input validation for kubernetes workload names: [portainer/portainer#5363](https://github.com/portainer/portainer/issues/5363)
* Fixed issue where the Kube cluster resource stats had a rounding issue: [portainer/portainer#6472](https://github.com/portainer/portainer/issues/6472)
* Migrated to use the networking.k8s.io/v1 ingress API, available from Kubernetes v1.19: [portainer/portainer#6396](https://github.com/portainer/portainer/issues/6396)
* Allow Services to be managed for Kubernetes applications, which can be deployed within Portainer or outside of it: [portainer/portainer#5941](https://github.com/portainer/portainer/issues/5941)
* Restarting Portainer will no longer result in invalid kubeconfig credentials, which would have required the user to download a new kubeconfig file again: [portainer/portainer#5940](https://github.com/portainer/portainer/issues/5940)
* Provides a single process so that users can gain access to all their environments contexts from within the Portainer UI: [portainer/portainer#5945](https://github.com/portainer/portainer/issues/5945)
* Improved how a namespace gets selected when using Advanced deployment: [portainer/portainer#5557](https://github.com/portainer/portainer/issues/5557)
* Added warning that a secret will be created when adding registry access to a namespace: [portainer/portainer#5845](https://github.com/portainer/portainer/issues/5845)
* Fixed issue where selecting a Helm chart did not scroll to the top: [portainer/portainer#6146](https://github.com/portainer/portainer/issues/6146)
* Fixed issue when clearing Helm repo in global settings and added text notification in Helm charts page: [portainer/portainer#5996](https://github.com/portainer/portainer/issues/5996)
* Fixed issue where Helm charts fail to load in ARM cloud environments: [portainer/portainer#5937](https://github.com/portainer/portainer/issues/5937)
* Fixed issue where the kubectl shell wasn't working when Portainer runs on ARM64: [portainer/portainer#5723](https://github.com/portainer/portainer/issues/5723)
* Fixed bug so that Kubernetes terminology is used when deploying through Kubernetes: [portainer/portainer#6099](https://github.com/portainer/portainer/issues/6099)
* Fixed issue where error notice was coming up when deleting an application through kubeshell: [portainer/portainer#5939](https://github.com/portainer/portainer/issues/5939)
* Fixed issue where Portainer stacks were not being removed when removing a namespace: [portainer/portainer#5897](https://github.com/portainer/portainer/issues/5897)
* Fixed issue where standard users were unable to access the pod and node stats view: [portainer/portainer#5898](https://github.com/portainer/portainer/issues/5898)
* Fixed issue where the namespace details page showed an object object error: [portainer/portainer#5802](https://github.com/portainer/portainer/issues/5802)
* Fixed issue when selecting Cluster Setup in the menu: [portainer/portainer#6033](https://github.com/portainer/portainer/issues/6033)
* Fixed order of registries to be alphabetical in the select registry dropdown in namespaces: [portainer/portainer#6175](https://github.com/portainer/portainer/issues/6175)
* Fixed issue with publishing method defaulting to Ingress when changing to Cluster IP: [portainer/portainer#6190](https://github.com/portainer/portainer/issues/6190)

### Docker

* Introduced the ability to pull latest images when redeploying: [portainer/portainer#6155](https://github.com/portainer/portainer/issues/6155)
* Fixed issue where webhooks for services were accepting invalid tags: [portainer/portainer#6493](https://github.com/portainer/portainer/issues/6493)
* When updating a Swarm service and enabling Pull latest image, it would change the tag to latest: [portainer/portainer#6352](https://github.com/portainer/portainer/issues/6352)
* Fixed issue with displaying container template when connected to docker swarm in the app templates page view
* Fixed issue where updating the Stack always recreated the containers: [portainer/portainer#6306](https://github.com/portainer/portainer/issues/6306)
* Added the ability to filter the Swarm services published ports column: [portainer/portainer#6161](https://github.com/portainer/portainer/issues/6161)
* Added a warning when the same Swarm secret is assigned multiple times to a service: [portainer/portainer#2821](https://github.com/portainer/portainer/issues/2821)
* Added the option to detach Stacks deployed from Git to make them editable: [portainer/portainer#5748](https://github.com/portainer/portainer/issues/5748)
* Removed the ability to edit the Portainer container: [portainer/portainer#5121](https://github.com/portainer/portainer/issues/5121)
* Fixed issue where an error message would not be shown when failing to pull an image: [portainer/portainer#6239](https://github.com/portainer/portainer/issues/6239)
* Fixed issue where the default user for the container console was incorrectly auto filled: [portainer/portainer#6315](https://github.com/portainer/portainer/issues/6315)
* Fixed issue where uploading large files to a volume would fail: [portainer/portainer#4453](https://github.com/portainer/portainer/issues/4453)
* Fixed issue where stacks deployed from App Templates behaved as if they were deployed from Git: [portainer/portainer#5748](https://github.com/portainer/portainer/issues/5748)
* Fixed issue where stacks with environment variables in the networks section could not be removed: [portainer/portainer#5779](https://github.com/portainer/portainer/issues/5779)
* Allow the resource settings of a container to be updated without redeploying the container: [portainer/portainer#5906](https://github.com/portainer/portainer/issues/5906)
* Added support for .bz2 and .xz compression formats when importing Docker images: [portainer/portainer#5220](https://github.com/portainer/portainer/issues/5220)
* Enhancement of the Docker image import feature to support manually adding tags to the imported image: [portainer/portainer#5944](https://github.com/portainer/portainer/issues/5944)
* Improved how to change the image when editing a Service by pre-populating the fields in the UI: [portainer/portainer#5150](https://github.com/portainer/portainer/issues/5150)
* Fixed issue where automatic updates of stacks fail after restarting Portainer: [portainer/portainer#5914](https://github.com/portainer/portainer/issues/5914)
* Fixed issue where pull and redeploy button was not functioning as expected: [portainer/portainer#5948](https://github.com/portainer/portainer/issues/5948)
* Fixed UI issue when using a personal access token to deploy from Git: [portainer/portainer#5847](https://github.com/portainer/portainer/issues/5847)
* Fixed issue where certain docker events showed as Unsupported: [portainer/portainer#2717](https://github.com/portainer/portainer/issues/2717)
* Fixed issue with stack names when migrating from Swarm to docker standalone: [portainer/portainer#6139](https://github.com/portainer/portainer/issues/6139)
* Fixed issue where migrating a stack shows up twice: [portainer/portainer#5159](https://github.com/portainer/portainer/issues/5159)
* Fixed issue where using a webhook with an image registry running on a custom port did not work: [portainer/portainer#4526](https://github.com/portainer/portainer/issues/4526)
* Fixed issue where downloading container log files added extra carriage returns: [portainer/portainer#5312](https://github.com/portainer/portainer/issues/5312)
* Fixed issue where copying container log files added trailing commas: [portainer/portainer#4318](https://github.com/portainer/portainer/issues/4318)
* Fixed issue where the scale labels of the stats graph was showing multiple times: [portainer/portainer#5843](https://github.com/portainer/portainer/issues/5843)
* Fixed issue where stats were not working on windows containers: [portainer/portainer#5826](https://github.com/portainer/portainer/issues/5826)
* Fixed UI issue with empty stack dropdown when deploying an application via the form: [portainer/portainer#5848](https://github.com/portainer/portainer/issues/5848)
* Fixed issue with Custom Template on Docker being created when the file does not exist on a git repo: [portainer/portainer#6184](https://github.com/portainer/portainer/issues/6184)

### Portainer

* Fixed issue where upgrading from CE to BE failed due to missing RBAC roles
* Fixed trivy Helm and Portainer vulnerabilities relating to direct dependencies. [portainer/portainer#6342](https://github.com/portainer/portainer/issues/6342)
* Standard users will no longer be able to remove or export images. Also, Operators, Help Desk, and ready only users will no longer be able to export images.
* When changing the user password the user gets redirected to the login page: [portainer/portainer#6456](https://github.com/portainer/portainer/issues/6456)
* Fixed issue with default helm repo not populating in settings page
* Fixed ability for a Standard User to start/stop stacks [portainer/portainer#6369](https://github.com/portainer/portainer/issues/6369)
* Removed the integration with Storidge clusters: [portainer/portainer#6512](https://github.com/portainer/portainer/issues/6512)
* Changed the default Microsoft OAuth logout URL: [portainer/portainer#6405](https://github.com/portainer/portainer/issues/6405)
* Portainer users can no longer use their Portainer internal password when OAuth is enabled: [portainer/portainer#5889](https://github.com/portainer/portainer/issues/5889)
* Option to encrypt values in Portainer database: [portainer/portainer#6412](https://github.com/portainer/portainer/issues/6412)
* Added the ability to override the "Force HTTPS only" option: [portainer/portainer#6126](https://github.com/portainer/portainer/issues/6126)
* Supporting the ability for Portainer to run inside a subpath: [portainer/portainer#3901](https://github.com/portainer/portainer/issues/3901)
* Updated the defaults for the Git authentication toggles: [portainer/portainer#6406](https://github.com/portainer/portainer/issues/6406)
* Fixed display issue for environment tags in the Home page view [portainer/portainer#6276](https://github.com/portainer/portainer/issues/6276)
* Fixed issue where scrollbars would show in confirmation dialogs: [portainer/portainer#6257](https://github.com/portainer/portainer/issues/6257)
* Fixed issue where the `--sslcert` flag was being ignored: [portainer/portainer#6021](https://github.com/portainer/portainer/issues/6021)
* The ability for users to easily interact with the Portainer API through the use of Personal Access Tokens: [portainer/portainer#813](https://github.com/portainer/portainer/issues/813)
* Automatically sync Portainer dark/light theme with the browser dark/light theme settings: [portainer/portainer#5753](https://github.com/portainer/portainer/issues/5753)
* Fixed issue where the CPU and memory were not shown on the Home screen: [portainer/portainer#6143](https://github.com/portainer/portainer/issues/6143)
* Added confirmation modal when deleting an Environment: [portainer/portainer#5952](https://github.com/portainer/portainer/issues/5952)
* Fixed issue where removing an environment did not update the tree: [portainer/portainer#6127](https://github.com/portainer/portainer/issues/6127)
* Fixed issue where the DockerHub anonymous registry was being used instead of one with an account: [portainer/portainer#5896](https://github.com/portainer/portainer/issues/5896)
* Fixed issue where environment displayed as offline after starting Portainer: [portainer/portainer#5732](https://github.com/portainer/portainer/issues/5732)
* Fixed issue where the custom logo settings showed incorrectly in the UI: [portainer/portainer#4437](https://github.com/portainer/portainer/issues/4437)
* Fixed issue where uploading a backup file could not select a file on Mac: [portainer/portainer#5357](https://github.com/portainer/portainer/issues/5357)
* Fixed issue where apple touch Portainer icon had non standard image dimensions [portainer/portainer#5887](https://github.com/portainer/portainer/issues/5887)
* Fixed issue with widget header not displaying correctly for application settings: [portainer/portainer#6191](https://github.com/portainer/portainer/issues/6191)

### Edge

* Introduce the ability to pass env variables from a local system on edge devices to the edge stack
* Fixed minor UI behavior with toggles in Edge Compute settings view
* Fixed issue with displaying AMT device table for non-activated devices
* Fixed minor UI issues in Edge devices page view around Action buttons
* Introduced the ability to control and interact with OpenAMT: devices [portainer/portainer#6444](https://github.com/portainer/portainer/issues/6444)
* Introduce the ability to add edge devices through FDO: [portainer/portainer#6445](https://github.com/portainer/portainer/issues/6445)
* Added behavior for Edge agents to reject connections if not connected to within 72hrs: [portainer/portainer#6420](https://github.com/portainer/portainer/issues/6420)
* Optimize disk performance for Edge Agent [portainer/portainer#6455](https://github.com/portainer/portainer/issues/6455)
* Fixed issues with the Edge Agent reverse tunnel timing out: [portainer/portainer#5725](https://github.com/portainer/portainer/issues/5725)
* Fixed issue where the URL of an Environment would change to localhost: [portainer/portainer#5803](https://github.com/portainer/portainer/issues/5803)

### Registry

* Fixed issue with duplicating registries during upgrade process. [portainer/portainer#6062](https://github.com/portainer/portainer/issues/6062)
* Bring users the ability to use Amazon Elastic Container Registry: [portainer/portainer#1533](https://github.com/portainer/portainer/issues/1533)

### ACI

* Fixed issue where ACI stopped working when the number of exposed ports and container ports were different: [portainer/portainer#5335](https://github.com/portainer/portainer/issues/5335)

### Development

* Upgraded golang version to 1.17 [portainer/portainer#6342](https://github.com/portainer/portainer/issues/6342)
* Updated the Swagger documentation: [portainer/portainer#6019](https://github.com/portainer/portainer/issues/6019)
* Deprecated EndpointProvider in the code and moving away from its use: [portainer/portainer#5524](https://github.com/portainer/portainer/issues/5524)
* Introduced ReactJS support in the frontend: [portainer/portainer#6031](https://github.com/portainer/portainer/issues/6031)
* Updated docker and kubernetes library dependencies: [portainer/portainer#6137](https://github.com/portainer/portainer/issues/6137)
* Updated the Swagger documentation: [portainer/portainer#5338](https://github.com/portainer/portainer/issues/5338)
* Added logging to migrations: [portainer/portainer#6183](https://github.com/portainer/portainer/issues/6183)

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
