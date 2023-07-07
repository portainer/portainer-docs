# Release Notes

The following release notes are for the **Business Edition** of Portainer. For **Community Edition** release notes, refer to the [GitHub releases page](https://github.com/portainer/portainer/releases).

## Release 2.18.4

July 7, 2023

This release includes an experimental ChatGPT integration. Although it promises exciting possibilities, it's in the early stages of development. We recommend its use for testing and development, and urge caution in production environments. We greatly appreciate your feedback and understanding during this phase. [portainer/portainer#9116](https://github.com/portainer/portainer/issues/9116)

### Resolved CVEs

<details>

<summary>Portainer dependencies</summary>

* CVE-2023-28840 [portainer/portainer#9058](https://github.com/portainer/portainer/issues/9058)

</details>

### Docker

* Upgraded Docker Compose version to v2.17.2 for Portainer Agent. [portainer/portainer#9095](https://github.com/portainer/portainer/issues/9095)
* Resolve a problem building Portainer due to an issue with v1.53.0 of golangci-lint. [portainer/portainer#9057](https://github.com/portainer/portainer/issues/9057)

### Swarm

* Resolved an issue where users were unable to migrate or duplicate their swarm stack. [portainer/portainer#9097](https://github.com/portainer/portainer/issues/9097)

### Portainer

* Resolved an issue where the static IP addresses in a macvlan were unexpectedly changed. [portainer/portainer#9101](https://github.com/portainer/portainer/issues/9101)
* Enhanced the user experience of the 'Skip TLS Verification' feature by adding a confirmation modal. [portainer/portainer#9098](https://github.com/portainer/portainer/issues/9098)
* Resolved an issue where recreate containers fail when it has a shared and external volumes. [portainer/portainer#9102](https://github.com/portainer/portainer/issues/9102)
* Fixed issue where registry credential does not sync between registry configuration page and registry details page.
* Fixed an issue around prompting for a new license.
* Improved the way node count shows for trial licenses.
* Resolved an issue where update or rollback was only executed when connection was re-established.
* Introduced a change to allow removal of all Portainer licenses.
* Fixed an issue where a warning banner was not always showing in the Homepage or Licenses page when licenses were close to expiring.

### REST API Changes

* Resolved an issue where the response from the API was inconsistent when querying all endpoints and a specific endpoint. [portainer/portainer#9096](https://github.com/portainer/portainer/issues/9096)
* Corrected 'container' to 'containers' in Swagger API docs (Business Edition).

## Release 2.18.3

May 22, 2023

In this release, we introduce an experimental ChatGPT integration. Although it promises exciting possibilities, it's in the early stages of development. We recommend its use for testing and development, and urge caution in production environments. We greatly appreciate your feedback and understanding during this phase.

### Edge

* Fixed issue preventing configuration of Portainer authentication settings with an alternative mTLS certificate
* Resolved issue causing edge agent to skip command processing during full snapshot resend

### Kubernetes

* Restored options and wording in the Kubernetes Advanced deployment screen's Automatic updates section, following regression from changes in 2.17. ([portainer/portainer#8950](https://github.com/portainer/portainer/issues/8950))

### Docker

* Resolved issue preventing correct display of network details when containers are running on an unexpected Docker swarm node. ([portainer/portainer#8981](https://github.com/portainer/portainer/issues/8981))

### Portainer

* Introduced ChatGPT integration as an experimental feature, currently not recommended for production environment use
* Fixed issue preventing LDAP server from creating a connection when using TLS 1.2. ([portainer/portainer#8980](https://github.com/portainer/portainer/issues/8980))
* Implemented minor UI changes to clarify existing experimental and beta features, ensuring accurate icon and wording display. ([portainer/portainer#8951](https://github.com/portainer/portainer/issues/8951))
* Corrected an issue causing the polling indicator to float incorrectly in UI when pulling Git repo list on the stack creation page. ([portainer/portainer#8982](https://github.com/portainer/portainer/issues/8982))
* Resolved syntax styling display issue in web editor. ([portainer/portainer#8984](https://github.com/portainer/portainer/issues/8984))
* Improved button color contrast in web editor. ([portainer/portainer#8985](https://github.com/portainer/portainer/issues/8985))
* Fixed visual hierarchy in web editor selection behavior. ([portainer/portainer#8986](https://github.com/portainer/portainer/issues/8986))

### REST API Changes

* Corrected 'team' to 'teams' in Swagger API docs. ([portainer/portainer#8983](https://github.com/portainer/portainer/issues/8983))

## Release 2.18.2

May 1, 2023

### Upgrade notice

* Users upgrading from 2.16.x should note that a bug was introduced then which prevented enforcing of TLS verifications. This has now been fixed but, in circumstances where certificates were not set up correctly and appeared to work due to the bug, you may now need to resolve the certificate issue or deliberately set the new ‘Skip verification’ toggle.

### Edge

* Fixed issue where users were unable to update their Edge Agent to the latest version because the corresponding option was not available when creating a scheduled update

### Kubernetes

* Increased potential success rate of updating Portainer with larger databases by changing Kubernetes manifest and Helm chart for Portainer to have `initialDelaySeconds` of 45 (sec) and `failureThreshold` of 3. [portainer/portainer#8860](https://github.com/portainer/portainer/issues/8860)

### Docker

* Fixed issue where users were unable to pull the latest image from the image details page [portainer/portainer#8847](https://github.com/portainer/portainer/issues/8847)

### Portainer

* Fixed issue where the option to skip TLS verification was missing when editing a stack created from git. Additionally, to adhere to security best practices, the option’s default value has been corrected to be set to off during migration [portainer/portainer#8853](https://github.com/portainer/portainer/issues/8853)
* Fixed issue where TLS verification was being skipped when creating / editing stacks created from git in version 2.16.x [portainer/portainer#8853](https://github.com/portainer/portainer/issues/8853)
* Fixed issue where the port number in the displayed webhook link was incorrect when Portainer was running behind a reverse proxy
* Resolved an issue with the updated web editor component, where it was not loading long YAML files correctly [portainer/portainer#8848](https://github.com/portainer/portainer/issues/8848)

## Release 2.18.1

April 18, 2023

Please note 2.18.0 is not publicly available. This release is 2.18.1 and is our next GA release since "2.17.x". This was done due to the need to provide an upgradeable preview image to a customer.

### Breaking changes

* For breaking changes in the API, please see the [REST API changes](release-notes.md#rest-api-changes) section.
* The Kompose functionality in Kubernetes has been removed since 2.17.0. Compose yaml can no longer be deployed on Kubernetes.
* Moved edge devices to the homepage view and removed edge devices menu option under edge compute.
* Add devices button is replaced with new UX in environment wizard.

### Resolved CVEs

<details>

<summary>Portainer dependencies</summary>

* SNYK-JS-BOOTBOX-174704
* SNYK-JS-FASTJSONPATCH-3182961
* SNYK-JS-MINIMATCH-3050818
* SNYK-JS-SANITIZEHTML-2957526
* SNYK-JS-XMLDOMXMLDOM-3042243
* SNYK-JS-XMLDOMXMLDOM-3092934
* CVE-2022-23471
* CVE-2021-41092
* CVE-2022-41717
* CVE-2022-32149
* CVE-2022-27664
* SNYK-GOLANG-GOLANGORGXNETHTTP2-3160322

</details>

<details>

<summary>Agent dependencies</summary>

* CVE-2022-41717
* SNYK-GOLANG-GOLANGORGXNETHTTP2-3160322

</details>

### Upgrade notice

* Since release 2.17.x we have added the ability to upgrade Edge Agents from Portainer when running on Docker Standalone / Docker Swarm / Nomad. Before using this feature we strongly advise to test this on a non-production environment first and have an alternative method available to connect to the Edge Device.
* Any clusters connected to Portainer of version 1.23 Kubernetes and above will have their Pod Security Policies (if they have any and are using the pod security constraints feature) updated to the Pod Security Standards

### Edge

* Introduced a retry policy for edge stack deployment to improve success rate
* Fixed issue where browse snapshot button was clickable for Kubernetes and Nomad edge agents in async mode
* Fixed issue where upgrading edge agent from ECR private registry using certificates failed
* Fixed issue when browsing async edge agents before first snapshot is received.
* Provide feature flag for FDO feature to be shown in UI [portainer/portainer#8696](https://github.com/portainer/portainer/issues/8696)
* Fixed issue when browsing non-existent async agent snapshot cause backend panic
* Fixed issue for remote update schedules error incorrectly displaying for non admin users
* Fixed the issue where the edge stack is not removed from edge agent when it has been deleted while edge agent is offline
* Fixed issue where live connect button is clickable for async environment when it shouldn't be [portainer/portainer#8697](https://github.com/portainer/portainer/issues/8697)
* Fixed issue where edge agent panics with malformed edge key
* Introduced ability to view container's environment variable when browsing snapshot
* Removed "Add Edge devices" from Edge Compute and introduced to Environment wizard by renaming Edge Agent to Edge Agent Standard and introduced Edge Agent Async UI options [portainer/portainer#8783](https://github.com/portainer/portainer/issues/8783)
* Fixed an issue where "copy token" button was missing from edge agent environment wizard [portainer/portainer#8554](https://github.com/portainer/portainer/issues/8554)
* Introduced remote updating edge agent from a private registry for docker standalone environment
* Introduced ability to assign group, edge groups and tags to edge environment when using AEEC script
* Fixed issue where live connect button is clickable for async environment when it shouldn't be [portainer/portainer#8697](https://github.com/portainer/portainer/issues/8697)
* Fixed issue where edge job logs was not retrieved correctly when edge groups contain async devices
* Changed default value for async check-in intervals from disabled to 1 minute to improve success rate of initial edge agent connection
* Renamed AEEC to "Auto onboarding" for better user understanding

### Kubernetes

* Introduced a new feature to allow creating of a MicroK8s Kubernetes cluster on existing machines.
* Improved performance of Kubernetes screens by adjusting rate limiting of Kubernetes go client. [portainer/portainer#8682](https://github.com/portainer/portainer/issues/8682)
* Fixed an issue when provisioning a Civo Kubernetes cluster with the Kubernetes version left as the latest, due to Civo introducing Talos as a new Kubernetes cluster type (instead of K3s on Alpine) which then only applied to the latest Kubernetes version.
* Improved Kubernetes Applications page performance by introducing a namespace filter. [portainer/portainer#8637](https://github.com/portainer/portainer/issues/8637)
* Improved Kubernetes Dashboard page performance. [portainer/portainer#8635](https://github.com/portainer/portainer/issues/8635)
* Improved the load time of various Kubernetes pages by removing existing API calls that retrieve namespace resource quota information, where they are not needed. [portainer/portainer#8571](https://github.com/portainer/portainer/issues/8571)
* Introduced the ability to set annotations against various different Kubernetes objects via the existing form pages.
* Introduced a new Services screen in Kubernetes environments to improve the visibility of all services that may exist in a cluster, and enable removing where they've inadvertently been left behind after manual removal of applications/deployments. [portainer/portainer#8613](https://github.com/portainer/portainer/issues/8613)
* Introduced the ability to upload an internal SSL/TLS certificate which can then be used to access a Helm repository hosted on a private server.
* Updated the pod security constraints feature to use newer OPA Gatekeeper 2.9 and moved the feature away from using Pod Security Policy resources with Kubernetes clusters of 1.23 and above (as they are now removed in Kubernetes 1.25 and above).
* Added migration to ensure existing pod security constraints work on environments with new Pod Security Standards of updated OPA Gatekeeper 2.9. This includes migrating edge environments on post-upgrade connect that may occur on clicking into via Homepage.
* Resolved an issue where pod security constraints were not being enforced (since 2.16).

### Docker

* Fixed issue where users are not able to re-create container with multiple networks
* Fixed issue with relative path not working when private registry is used, due to private registry credentials not passing to unpacker
* Resolved an issue where default storage detection logic that runs on Kubernetes environment connection was incorrectly running on Docker environment connection, and was therefore causing an error to be output to the logs (but was otherwise benign). [portainer/portainer#8606](https://github.com/portainer/portainer/issues/8606)
* Improved the existing UI around GPU support for Docker Standalone environments, introduced an overall toggle to turn this on or off and generally improved performance in Docker Containers and Stacks screens where GPU columns may show. [portainer/portainer#8646](https://github.com/portainer/portainer/issues/8646)
* Defaulted the image up to date indicator to on for new Docker environments added, or on upgrade from CE to BE for all Docker environments (now that caching and Ajax load performance improvements have been applied to this feature).
* Fixed an issue where stack name validation was missing, causing deployments to fail [portainer/portainer#8629](https://github.com/portainer/portainer/issues/8629)

### Nomad

* Fixed issue where Nomad Edge Agent install script causes error when using environment variables
* Introduced ability to upgrade edge agent in Nomad environment from within portainer UI

### Portainer

* Fixed issue where container log not showing when logs contain NULL value
* Added form validation for S3 compatible host field
* Resolved a minor UI issue with the Container details page's container health panel alignment and content label wrapping. [portainer/portainer#8636](https://github.com/portainer/portainer/issues/8636)
* Fixed a typo in the placeholder text for the access control component's Authorized users dropdown where it said 'teams' but should have said 'users'. [portainer/portainer#8565](https://github.com/portainer/portainer/issues/8565)
* Fixed issue where stack can not be deleted if relative path is removed from the mount point
* Fixed issue where logs in JSON format displayed incorrectly in log viewer [portainer/portainer#8787](https://github.com/portainer/portainer/issues/8787)
* Resolved an issue with slow performance of certain actions (such as bulk removing of unused container volumes or adding of Kubernetes ingresses) when a user has a long list of notifications (shown via the bell icon in the page header). [portainer/portainer#8604](https://github.com/portainer/portainer/issues/8604)
* Fixed issue where you can not connect or configure Azure private registry from Portainer while registry is empty
* Added release testing of ARM32 architecture for Portainer Agent
* Resolved an issue that occurred when updating user preferences. [portainer/portainer#8570](https://github.com/portainer/portainer/issues/8570)
* Introduced UI mechanism for automatic retrying of tunnel connection when it fails due to high latency [portainer/portainer#8784](https://github.com/portainer/portainer/issues/8784)
* Added certificate support of AWS IAM Role Anywhere authentication for Agent and Edge Agent [portainer/portainer#8789](https://github.com/portainer/portainer/issues/8789)
* Updated hide internal authentication prompt option to default to off
* Fixed issue where searching is not functional in associated edge environment when creating edge group [portainer/portainer#8589](https://github.com/portainer/portainer/issues/8589)
* Fixed issue with Docker Swarm environment where containers count weren't displaying correctly in homepage. [portainer/portainer#8695](https://github.com/portainer/portainer/issues/8695)
* Fixed issue where skipping https verification was default to true for Azure git deployment [portainer/portainer#8698](https://github.com/portainer/portainer/issues/8698)
* Fixed issue where TLS Min Version was not fully enforced [portainer/portainer#8788](https://github.com/portainer/portainer/issues/8788)
* Fixed a minor issue on restarting a container where the toaster pop-up message shown had an extraneous slash in front of the container name. [portainer/portainer#8563](https://github.com/portainer/portainer/issues/8563)
* Introduced ability to use different certificate for mTLS communication between Portainer server and agent.
* Fixed an issue while in dark mode, where, with any auto-filled text in fill-ins, the cursor completely disappeared until you started typing again. [portainer/portainer#8564](https://github.com/portainer/portainer/issues/8564)
* Resolved a minor issue in the Browse Registry screen on Kubernetes environments, where the Registries breadcrumb link would take non-admin users back to the Homepage instead of the Registries list screen.
* Provide feature flag for FDO feature to be shown in UI [portainer/portainer#8696](https://github.com/portainer/portainer/issues/8696)
* Fixed issue of missing requirement of TLS definition for endpoint creation and correct tagids parameter in swagger API [portainer/portainer#8780](https://github.com/portainer/portainer/issues/8780)
* Improved Edge Agent Health status indicator and keep consistency with API response [portainer/portainer#8781](https://github.com/portainer/portainer/issues/8781)
* Fixed issue where git deployment failed to edit or redeploy when compose path begin with slash [portainer/portainer#8782](https://github.com/portainer/portainer/issues/8782)
* Fixed an issue in the restore from backup function, where a timeout error can occur and Portainer does not restart with the backup restored. [portainer/portainer#8792](https://github.com/portainer/portainer/issues/8792)

### Development

* Improved the layering of the Portainer Dockerfile to ensure internal development-related aspects are excluded where possible. [portainer/portainer#8559](https://github.com/portainer/portainer/issues/8559)
* Migrated git deployment page form Angular to React [portainer/portainer#8785](https://github.com/portainer/portainer/issues/8785)
* Migrated code editor component from Angular to React [portainer/portainer#8786](https://github.com/portainer/portainer/issues/8786)
* Introduced Tailwind prettier which will group utility classes project-wide and order them in a recommended way, making it easier to work with them. [portainer/portainer#8560](https://github.com/portainer/portainer/issues/8560)
* Introduced replacement for bootbox with react components [portainer/portainer#8588](https://github.com/portainer/portainer/issues/8588)
* Improved the feature flag architecture to make it easier to use. [portainer/portainer#8562](https://github.com/portainer/portainer/issues/8562)
* Resolved incorrect usage of log.fatal to ensure the application exits only as necessary. [portainer/portainer#8561](https://github.com/portainer/portainer/issues/8561)

### REST API Changes

* Fixed the API Swagger/OpenAPI documentation for some IDs that were defined as strings but should be integers. [portainer/portainer#8794](https://github.com/portainer/portainer/issues/8794)
* Added to the API Swagger/OpenAPI documentation that you can upload a file to a Docker Standalone host when the host management feature is enabled. [portainer/portainer#8793](https://github.com/portainer/portainer/issues/8793)

<details>

<summary>New Endpoints: 2</summary>

* GET `/edge_update_schedules/previous_versions`
* POST `/sshkeygen`

</details>

<details>

<summary>Deleted Endpoints: 2</summary>

* GET `/system/info`
* POST `/system/upgrade`

</details>

<details>

<summary>Modified Endpoints: 39</summary>

* POST `/cloud/{provider}`
* POST `/cloudcredentials`
  * Description changed from 'Create a cloud credential **Access policy**: authenticated' to 'delete delete a cloud credential by ID **Access policy**: authenticated'
  * New query param: `id`
* POST `/custom_templates`
* PUT `/custom_templates/{id}`
* POST `/edge_groups`
* PUT `/edge_groups/{id}`
* POST `/edge_jobs`
* POST `/edge_jobs/{id}`
* POST `/edge_stacks`
* PUT `/edge_stacks/{id}`
* POST `/edge_update_schedules`
* GET `/edge_update_schedules/active`
* GET `/edge_update_schedules/agent_versions`
* POST `/endpoint_groups`
* PUT `/endpoint_groups/{id}`
* GET `/endpoints`
  * New query param: `edgeAsync`
  * Deleted query param: `edgeDevice`
  * Modified query param: `edgeDeviceUntrusted`
    * Description changed from 'if true, show only untrusted endpoints, if false show only trusted (relevant only for edge devices, and if edgeDevice is true)' to 'if true, show only untrusted edge agents, if false show only trusted edge agents (relevant only for edge agents)'
* POST `/endpoints`
* PUT `/endpoints/{id}`
* POST `/endpoints/{id}/docker/v2/browse/put`
  * Description changed from 'Upload a file under a specific path on the file system of an environment (endpoint). **Access policy**: authenticated' to 'Use this environment(endpoint) to upload TLS files. **Access policy**: administrator'
  * Responses changed
    * New response: `204`
    * Deleted response: `200`
* GET `/endpoints/{id}/kubernetes/helm`
  * Modified query param: `filter`
    * Required changed from `true` to `false`
  * Modified query param: `namespace`
    * Required changed from `true` to `false`
  * Modified query param: `selector`
    * Required changed from `true` to `false`
* DELETE `/endpoints/{id}/kubernetes/helm/{release}`
  * Modified query param: `namespace`
    * Required changed from `true` to `false`
* PUT `/endpoints/{id}/registries/{registryId}`
* PUT `/endpoints/{id}/settings`
* POST `/gitops/repo/files/search`
* POST `/gitops/repo/refs`
* POST `/ldap/admin-groups`
* POST `/ldap/check`
* POST `/ldap/groups`
* POST `/ldap/test`
* POST `/ldap/users`
* POST `/registries`
* PUT `/registries/{id}`
* POST `/resource_controls`
* PUT `/settings`
* POST `/stacks`
* POST `/team`
* POST `/webhooks`
* PUT `/webhooks/{id}`
* PUT `/webhooks/{id}/reassign`

</details>

## Release 2.17.1

February 22, 2023

### Resolved CVEs

* Resolved the false positive report of Portainer binaries from VirusTotal. [portainer/portainer#8519](https://github.com/portainer/portainer/issues/8519)

### Docker

* Fixed issue with recreating containers in the Portainer UI if they have been originally created via the CLI. [portainer/portainer#8507](https://github.com/portainer/portainer/issues/8507)

### Portainer

* Fixed an issue where upgrading to Business Edition leaves behind limited stack. [portainer/portainer#8516](https://github.com/portainer/portainer/issues/8516)
* Fixed an issue where Edge Agent updater leaves behind limited stack.
* Fixed grammar of placeholder for region field in S3 backup configuration. [portainer/portainer#8515](https://github.com/portainer/portainer/issues/8515)
* Fixed an issue where an error occurred for upgrading Portainer to 2.17.0 version when Docker engine version is 19.03. [portainer/portainer#8514](https://github.com/portainer/portainer/issues/8514)
* Fixed an issue where node enforcement message displayed incorrectly for trial license users.
* Fixed an issue where git credentials are not selected when editing stack deployed from git repository.

## Release 2.17.0

February 7, 2023

### Known issues

* Running Portainer with Docker Engine <= 19.03 (Docker API <= 1.40) will cause a fatal error similar to `failed initializing upgrade service | error="failed to determine container platform: failed to retrieve docker info: Error response from daemon: client version 1.41 is too new. Maximum supported API version is 1.40"`

### Breaking changes

* For breaking changes in the API, please see the [REST API changes](release-notes.md#rest-api-changes) section
* The Kompose functionality in Kubernetes has been removed. Compose yaml can no longer be deployed on Kubernetes.
* Moved Edge Devices to the homepage view and removed Edge Devices menu option under Edge Compute
* Add devices button is temporarily located on the Edge Compute Settings page

### Resolved CVEs

#### Portainer dependencies

* [SNYK-GOLANG-GITHUBCOMURFAVENEGRONI-1658297](https://security.snyk.io/vuln/SNYK-GOLANG-GITHUBCOMURFAVENEGRONI-1658297) - Negroni
* [CVE-2022-27191](https://nvd.nist.gov/vuln/detail/CVE-2022-27191) - golang.org/x/crypto/ssh in Go
* [GHSA-8c26-wmh5-6g9v](https://github.com/advisories/GHSA-8c26-wmh5-6g9v) - golang.org/x/crypto/ssh in Go
* [CVE-2022-27664](https://nvd.nist.gov/vuln/detail/CVE-2022-27664) - net/http in Go
* [CVE-2022-29526](https://nvd.nist.gov/vuln/detail/CVE-2022-29526) - Go
* [SNYK-JS-XMLDOMXMLDOM-3092934](https://security.snyk.io/vuln/SNYK-JS-XMLDOMXMLDOM-3092934) - javascript
* [CVE-2022-23806](https://nvd.nist.gov/vuln/detail/CVE-2022-23806) - kompose
* [CVE-2022-41720](https://nvd.nist.gov/vuln/detail/CVE-2022-41720) - kompose
* [CVE-2022-41716](https://nvd.nist.gov/vuln/detail/CVE-2022-41716) - kompose
* [CVE-2022-41715](https://nvd.nist.gov/vuln/detail/CVE-2022-41715) - kompose
* [CVE-2022-32189](https://nvd.nist.gov/vuln/detail/CVE-2022-32189) - kompose
* [CVE-2022-30635](https://nvd.nist.gov/vuln/detail/CVE-2022-30635) - kompose
* [CVE-2022-30634](https://nvd.nist.gov/vuln/detail/CVE-2022-30634) - kompose
* [CVE-2022-30633](https://nvd.nist.gov/vuln/detail/CVE-2022-30633) - kompose
* [CVE-2022-30632](https://nvd.nist.gov/vuln/detail/CVE-2022-30632) - kompose
* [CVE-2022-30631](https://nvd.nist.gov/vuln/detail/CVE-2022-30631) - kompose
* [CVE-2022-30630](https://nvd.nist.gov/vuln/detail/CVE-2022-30630) - kompose
* [CVE-2022-30580](https://nvd.nist.gov/vuln/detail/CVE-2022-30580) - kompose
* [CVE-2022-29804](https://nvd.nist.gov/vuln/detail/CVE-2022-29804) - kompose
* [CVE-2022-2880](https://nvd.nist.gov/vuln/detail/CVE-2022-2880) - kompose
* [CVE-2022-2879](https://nvd.nist.gov/vuln/detail/CVE-2022-2879) - kompose
* [CVE-2022-28327](https://nvd.nist.gov/vuln/detail/CVE-2022-28327) - kompose
* [CVE-2022-28131](https://nvd.nist.gov/vuln/detail/CVE-2022-28131) - kompose
* [CVE-2022-27664](https://nvd.nist.gov/vuln/detail/CVE-2022-27664) - kompose
* [CVE-2022-24921](https://nvd.nist.gov/vuln/detail/CVE-2022-24921) - kompose
* [CVE-2022-24675](https://nvd.nist.gov/vuln/detail/CVE-2022-24675) - kompose
* [CVE-2022-23772](https://nvd.nist.gov/vuln/detail/CVE-2022-23772) - kompose
* [CVE-2021-44716](https://nvd.nist.gov/vuln/detail/CVE-2021-44716) - kompose
* [CVE-2021-41772](https://nvd.nist.gov/vuln/detail/CVE-2021-41772) - kompose
* [CVE-2021-41771](https://nvd.nist.gov/vuln/detail/CVE-2021-41771) - kompose
* [CVE-2021-39293](https://nvd.nist.gov/vuln/detail/CVE-2021-39293) - kompose
* [CVE-2021-33198](https://nvd.nist.gov/vuln/detail/CVE-2021-33198) - kompose
* [CVE-2021-33196](https://nvd.nist.gov/vuln/detail/CVE-2021-33196) - kompose
* [CVE-2021-33195](https://nvd.nist.gov/vuln/detail/CVE-2021-33195) - kompose
* [CVE-2021-27918](https://nvd.nist.gov/vuln/detail/CVE-2021-27918) - kompose
* [CVE-2020-16845](https://nvd.nist.gov/vuln/detail/CVE-2020-16845) - kompose
* [CVE-2022-41717](https://nvd.nist.gov/vuln/detail/CVE-2022-41717) - kompose
* [CVE-2022-32148](https://nvd.nist.gov/vuln/detail/CVE-2022-32148) - kompose
* [CVE-2022-29526](https://nvd.nist.gov/vuln/detail/CVE-2022-29526) - kompose
* [CVE-2022-1962](https://nvd.nist.gov/vuln/detail/CVE-2022-1962) - kompose
* [CVE-2022-1705](https://nvd.nist.gov/vuln/detail/CVE-2022-1705) - kompose
* [CVE-2021-44717](https://nvd.nist.gov/vuln/detail/CVE-2021-44717) - kompose
* [CVE-2021-36221](https://nvd.nist.gov/vuln/detail/CVE-2021-36221) - kompose
* [CVE-2021-34558](https://nvd.nist.gov/vuln/detail/CVE-2021-34558) - kompose
* [CVE-2021-33197](https://nvd.nist.gov/vuln/detail/CVE-2021-33197) - kompose
* [CVE-2021-31525](https://nvd.nist.gov/vuln/detail/CVE-2021-31525) - kompose
* [CVE-2021-3114](https://nvd.nist.gov/vuln/detail/CVE-2021-3114) - kompose
* [CVE-2020-24553](https://nvd.nist.gov/vuln/detail/CVE-2020-24553) - kompose
* [CVE-2020-15586](https://nvd.nist.gov/vuln/detail/CVE-2020-15586) - kompose
* [CVE-2020-14039](https://nvd.nist.gov/vuln/detail/CVE-2020-14039) - kompose
* [CVE-2022-30629](https://nvd.nist.gov/vuln/detail/CVE-2022-30629) - kompose

#### Agent dependencies

* [CVE-2022-27664](https://nvd.nist.gov/vuln/detail/CVE-2022-27664) - net/http in Go

### Upgrade notice

* This release has added the ability to upgrade Edge Agents from Portainer when running on Docker Standalone. Before using this feature we strongly advise to test this on a non-production environment first and have an alternative method available to connect to the Edge Device.

### Edge

* Introduced the ability to remotely update edge agents from within Portainer
* Moved Edge Devices to the homepage view: [portainer/portainer#8333](https://github.com/portainer/portainer/issues/8333)
* Introduced the ability to browse snapshots of async edge environments from homepage view: [portainer/portainer#8336](https://github.com/portainer/portainer/issues/8336)
* Optimized performance for scaling large numbers of edge agents: [portainer/portainer#8349](https://github.com/portainer/portainer/issues/8349)
* Introduced option for pre-pull of images for edge stack deployment to increase deployment success rate
* Added edge group support in edge jobs to allow execution across many devices
* Introduce the ability to edit edge agent tunnel URL and API server URL from within Portainer
* Introduced improved environment tile layout to address consistency when edge devices moved to homepage: [portainer/portainer#8334](https://github.com/portainer/portainer/issues/8334)
* Clarified UX around polling intervals and poll frequency option in edge compute settings between async and normal edge agents.
* Added info text to waiting room view
* Fixed issue where edge stack incorrectly deployed to default namespace when there is a specified namespace defined in the manifest: [portainer/portainer#8346](https://github.com/portainer/portainer/issues/8346)
* Fixed issue where select all checkbox is missing for edge stack and edge job tables: [portainer/portainer#8029](https://github.com/portainer/portainer/issues/8029)
* Fixed issue with Edge device tags not showing on Create Edge Group screen: [portainer/portainer#7936](https://github.com/portainer/portainer/issues/7936)
* Fixed issue where delete edge device does not remove it from the edge groups mapping: [portainer/portainer#8348](https://github.com/portainer/portainer/issues/8348)
* Fixed issue where edge stack failed to deploy with private registry in async mode
* Fixed issue where actions icon under edit edge stack page is not consistent

### Kubernetes

* Introduced new log viewer to Portainer Business Edition
* Introduced the ability to edit the YAML manifest of Kubernetes objects and apply the changes via the Kubernetes patch function
* Introduced global and cluster-level options to allow enforcing of code-based deployment of Kubernetes objects, preventing the use of Portainer forms and other less easy-to-repeat workflows
* Introduced a new setting in the Cluster setup screen of a Kubernetes environment to allow enforcing of admin-only deploying of ingresses
* Introduced the ability to specify updates to existing environment variables of a deployment via query string parameters on the Kubernetes application redeploy webhook
* Added a rolling restart button to the Kube application UI
* Introduced a new rollout-restart parameter to Kube application redeploy webhooks to allow remote initiating of zero-downtime deployment rolling restarts
* Introduced an alternate means of authenticating connections to the Google Cloud platform (used by our KaaS provisioning of Google Kubernetes Engine environments), following their deprecation of the gcp auth plugin in Kubernetes v1.22 and removal in v1.26
* Introduced experimental Kubernetes functionality (behind a feature flag) to allow installing of MicroK8s to existing machines
* The Kubernetes deployment option for docker-compose format manifests and the Kompose conversion tool that enabled this have now been removed due to long-standing Common Vulnerabilities and Exposures (CVEs) in Kompose: [portainer/portainer#8355](https://github.com/portainer/portainer/issues/8355)
* Improved the explanatory tooltips and info text for Kube application automatic updates functionality: [portainer/portainer#8223](https://github.com/portainer/portainer/issues/8223)
* Updated Kubernetes as a Service (KaaS) cluster provisioning to use the latest eksctl tool for the AWS EKS platform, and support up to v1.23 of Kubernetes (use of this version was previously failing)
* Resolved an issue where Kubernetes secrets were no longer shown in an expand panel for each application listed in the Applications list screen: [portainer/portainer#8118](https://github.com/portainer/portainer/issues/8118)
* Improved config setting defaults when connecting clusters: ingress controllers (with a class) are auto detected/set as allowed, metrics API features setting is on (if metrics server is deployed), and storage classes with the 'default' annotation are on: [portainer/portainer#8240](https://github.com/portainer/portainer/issues/8240)
* The Kubernetes Operator role is not intended to have secrets update permission and hence, as a security consideration, this permission is now removed from Portainer
* Corrected the look of the fallback icon used for Helm charts that don't have their own icon: [portainer/portainer#8116](https://github.com/portainer/portainer/issues/8116)
* Made a change to default the resource quota's resource assignment setting to off for new Kubernetes namespaces but always show the toggle (although it can be disabled for change if the cluster's (BE only) allow over-commit setting is off): [portainer/portainer#8122](https://github.com/portainer/portainer/issues/8122)
* In the Kubernetes Add ingress screen, corrected the namespace selection dropdown to only show those that the user has access to: [portainer/portainer#8150](https://github.com/portainer/portainer/issues/8150)
* Added a check in Kube Cluster setup and Namespace -> Manage access to see if Kube RBAC addon is enabled in the cluster, and if not, show a warning that Portainer RBAC functionality will be limited. Warning also gives info on enabling RBAC in the cluster: [portainer/portainer#8171](https://github.com/portainer/portainer/issues/8171)
* Resolved an issue that was causing an 'Unable to get k8s environment access' error on deleting of a Kubernetes edge environment
* When connecting a Kubernetes environment to Portainer via kubeconfig import, stop deleting of any extant 'portainer' namespace in the cluster
* When using Kubernetes (KaaS) cluster provisioning and choosing the Azure Kubernetes Service (AKS) option, only node size options that are valid for provisioning now show. Previously, there was at least one option which gave an error on use
* Resolved two scenarios where importing of the kubeconfig of a Kubernetes cluster raised an error that caused a stuck 'Deploying' status
* In Kube Create namespace and Namespace details screens, made the resource assignment toggle always visible - even when the cluster's resource over-commit option is off (when it will show but be disabled for change)
* Fixed an issue introduced in 2.16, where deploying of an ingress via the Portainer Add ingress form does not label the ingress object in the cluster with a Portainer 'internal' deployment label. Any deployment of ingress via Portainer should have this: [portainer/portainer#8337](https://github.com/portainer/portainer/issues/8337)
* Fixed an issue introduced in 2.16, where, when attaching a ConfigMap to an application being deployed via the Portainer Add application form, the ConfigMap is wrongly included as a Secret in the manifest and the deployment could therefore fail: [portainer/portainer#8323](https://github.com/portainer/portainer/issues/8323)
* Fixed an incorrect mention in the UI of a 'docker-compose file' which was showing when editing a Kube application deployed from git: [portainer/portainer#8228](https://github.com/portainer/portainer/issues/8228)
* Fixed an issue preventing adding of a Helm repo that has a redirect: [portainer/portainer#7892](https://github.com/portainer/portainer/issues/7892)
* Fixed an issue where the kubectl shell does not work when Istio Proxy is installed in the cluster: [portainer/portainer#8321](https://github.com/portainer/portainer/issues/8321)
* Fixed an issue introduced in 2.16 where the Kube Create namespace screen's CPU and Memory resource allocation max limits did not have other namespaces' resource amounts subtracted when the cluster's allow resource over-commit option was turned off

### Docker

* Introduced support of relative paths for volumes when creating a Docker Standalone or Swarm stack that uses a git repository. Support in edge stacks is excluded at present: [portainer/portainer#6390](https://github.com/portainer/portainer/issues/6390)
* Introduced new log viewer to Portainer Business Edition
* Introduced pull image param for stack webhook to turn pull-image on and off
* Introduced 24 hour caching for new image notification
* Upgraded docker compose to v2.13.0: [portainer/portainer#8289](https://github.com/portainer/portainer/issues/8289)
* Provided clarification and rewording in the UI around the 'Pull latest image' toggle in Stacks, Swarm Services and Service details update and Container recreate: [portainer/portainer#8226](https://github.com/portainer/portainer/issues/8226)
* Updated embedded docker binaries in Portainer and agent from 20.10.13 to 20.10.18: [portainer/portainer#8290](https://github.com/portainer/portainer/issues/8290)
* Fixed issue of not been able to associate stack created from other docker environments: [portainer/portainer#8030](https://github.com/portainer/portainer/issues/8030)
* Fixed issue where content overlap edge of screen and left column becomes too narrow: [portainer/portainer#8161](https://github.com/portainer/portainer/issues/8161)
* Fixed issue where default option for access control is not selected when editing public resource: [portainer/portainer#8162](https://github.com/portainer/portainer/issues/8162)
* Fixed incorrect wording for private box selector under user access control: [portainer/portainer#7969](https://github.com/portainer/portainer/issues/7969)
* Fixed issue where text input jumps to the end of the input box in repository form: [portainer/portainer#8214](https://github.com/portainer/portainer/issues/8214)
* Fixed issue where scrollbar always visible in web editor form regardless contents of web editor: [portainer/portainer#7968](https://github.com/portainer/portainer/issues/7968)
* Fixed issue where number of stopped container does not display in dashboard correctly: [portainer/portainer#7925](https://github.com/portainer/portainer/issues/7925)
* Fixed an issue where deleting a network, config or secret did not show a confirmation warning modal: [portainer/portainer#7920](https://github.com/portainer/portainer/issues/7920)
* Fixed an issue where a user cannot upload a stack file as a custom template: [portainer/portainer#7921](https://github.com/portainer/portainer/issues/7921)
* Fixed an issue where the old-style UI was still being used in a Docker template-related page: [portainer/portainer#7950](https://github.com/portainer/portainer/issues/7950)
* Fixed issue where container webhook URL always changed on each recreation
* Fixed issue where new image notification only relies on checking first digest which is not always accurate: [portainer/portainer#7148](https://github.com/portainer/portainer/issues/7148)

### Portainer

* Introduced support for S3 compatible hosts for backup and restore: [portainer/portainer#6555](https://github.com/portainer/portainer/issues/6555)
* Introduced support for GitHub container registry as a registry type
* On the header context sensitive help icon, the red dot notification has been removed. This was put there to highlight the new feature in 2.16: [portainer/portainer#8167](https://github.com/portainer/portainer/issues/8167)
* Updated Portainer dependencies of Business Edition
* Upgraded version of golang.org/x/net from v0.0.0 to v0.1.0 for agent: [portainer/portainer#8073](https://github.com/portainer/portainer/issues/8073)
* Upgraded jwt version to 4.4.2: [portainer/portainer#7970](https://github.com/portainer/portainer/issues/7970)
* Improved Portainer tooltips to allow them to stay open long enough for clicking of links and selecting of text in them. Also left-justified them for better readability: [portainer/portainer#8224](https://github.com/portainer/portainer/issues/8224)
* Resolved an issue related to revoking of user permissions: [portainer/portainer#8338](https://github.com/portainer/portainer/issues/8338)
* Fixed issue where password could be leaked to the log files when errors occur: [portainer/portainer#8343](https://github.com/portainer/portainer/issues/8343)
* Fixed issue when navigating to the login page log as a unique visitor in Matomo: [portainer/portainer#8344](https://github.com/portainer/portainer/issues/8344)
* Fixed an svg attribute height error in the page (visible via the browser console): [portainer/portainer#8105](https://github.com/portainer/portainer/issues/8105)
* Fixed typo where "occured" is used in error message instead of "occurred": [portainer/portainer#8027](https://github.com/portainer/portainer/issues/8027)
* Fixed issue where long notification is pushed out of table making it hard to read: [portainer/portainer#8215](https://github.com/portainer/portainer/issues/8215)
* Fixed incorrect link for other settings and agent setup: [portainer/portainer#8347](https://github.com/portainer/portainer/issues/8347)
* Fixed issue where deleted environment does not clear in table and sidebar when deleting current selected environment: [portainer/portainer#8291](https://github.com/portainer/portainer/issues/8291)
* Fixed issue where standard users were not able to change ownership to their own team: [portainer/portainer#8216](https://github.com/portainer/portainer/issues/8216)
* Fixed issue where user encountered an error by deleting tags associated to deleted environments: [portainer/portainer#8089](https://github.com/portainer/portainer/issues/8089)
* Fixed an issue where the 'hide for all users' button styling behaves differently in dark mode: [portainer/portainer#7926](https://github.com/portainer/portainer/issues/7926)
* Fixed a minor issue where the pages and items per page elements in data table pagination controls did not quite vertically align with each other: [portainer/portainer#8227](https://github.com/portainer/portainer/issues/8227)
* Fixed issue where team lead feature is unexpectedly enabled when external authentication is enabled with team sync: [portainer/portainer#7972](https://github.com/portainer/portainer/issues/7972)
* Fixed issue where response from API when creating edge environments wasn't clearly specifying that URL is compulsory: [portainer/portainer#7997](https://github.com/portainer/portainer/issues/7997)
* Fixed issue where internal authentication setting is not saved when switch from other authentication method without refreshing browser manually: [portainer/portainer#8028](https://github.com/portainer/portainer/issues/8028)
* Fixed issue where admin users are not able to delete expired or revoked license
* Fixed issue where user unable to remove group configuration with active directory authentication: [portainer/portainer#7558](https://github.com/portainer/portainer/issues/7558)
* Fixed issue where user is not removed from team when removed from LDAP group

### Nomad

* Fixed issue around task logs not loading if they are empty
* Fixed issue where old UI components were still being used for Nomad related pages

### Development

* Replaced Feather svg icon set with Lucide, a Feather fork that is actively maintained and has a larger and improved range of icons: [portainer/portainer#8121](https://github.com/portainer/portainer/issues/8121)
* Removed Font Awesome and all remaining references to it. All icons are now svg-based: [portainer/portainer#8120](https://github.com/portainer/portainer/issues/8120)
* Redesigned Portainer database migration versioning to improve the robustness of the upgrade process: [portainer/portainer#8153](https://github.com/portainer/portainer/issues/8153)
* Replaced aws-sdk-go with aws-sdk-go-v2
* Fixed issue where random number generator is not seeded causing predictable outputs: [portainer/portainer#8342](https://github.com/portainer/portainer/issues/8342)
* Resolved issues building Portainer (caused by third-party deletion of the github.com/rkl-/digest package) by replacing the package with imported code. This provides HTTP Digest Authentication for Portainer's FIDO Device Onboard (FDO) protocol support: [portainer/portainer#8177](https://github.com/portainer/portainer/issues/8177)
* Corrected a minor UI issue around a corrupted file-code.svg icon: [portainer/portainer#8117](https://github.com/portainer/portainer/issues/8117)
* Removed the Go experimental module golang.org/x/exp, replacing the small amount of functionality that we use from it with direct code: [portainer/portainer#8176](https://github.com/portainer/portainer/issues/8176)
* Deprecated the github.com/portainer/libhelm Helm wrapper and moved the code into CE, since EE can now share from CE. This is used by Portainer's Helm functionality: [portainer/portainer#8178](https://github.com/portainer/portainer/issues/8178)
* Fixed issue where struct tag is malformed with incorrect blank space in template\_file.go: [portainer/portainer#7923](https://github.com/portainer/portainer/issues/7923)
* (swagger) fix licenses attach route

### REST API changes

#### New Endpoints

* GET `/docker/{environmentId}/containers/{containerID}/image_status`
* GET `/docker/{environmentId}/services/{serviceID}/image_status`
* GET `/docker/{environmentId}/stacks/{id}/images_status`
* GET `/kubernetes/{id}/namespaces/{namespace}/applications`
* GET `/kubernetes/{id}/namespaces/{namespace}/applications/{kind}/{name}`
* GET `/kubernetes/{id}/rbac_enabled`
* GET `/nomad/endpoints/{endpointID}/leader`
* GET `/system/info`
* GET `/system/nodes`
* GET `/system/status`
* POST `/system/upgrade`
* GET `/system/version`
* PUT `/webhooks/{id}/reassign`

#### Deleted Endpoints

* GET `/nomad/endpoints/{endpointID}/status`

#### Deprecated Endpoints

* GET `/status` - Deprecated: use the `/system/status` endpoint instead to retrieve the Portainer status.
* GET `/status/nodes` - Deprecated: use the `/system/nodes` endpoint instead.
* GET `/status/version` - Deprecated: use the `/system/version` endpoint instead to check if portainer has an update available.

#### Modified Endpoints

* POST `/backup/s3/execute`
* POST `/backup/s3/restore`
* POST `/backup/s3/settings`
* POST `/edge_jobs`
* POST `/edge_jobs/{id}`
* POST `/edge_stacks`
* PUT `/edge_stacks/{id}`
* POST `/edge_update_schedules`
* GET `/edge_update_schedules/active`
* PUT `/endpoints/{id}`
* PUT `/endpoints/{id}/settings`
* POST `/registries`
* PUT `/registries/{id}`
* PUT `/settings`
* POST `/stacks`



## Release 2.16.2

November 21, 2022

### Edge

* Fixed issue where the Git repository section is missing when creating an Edge Stack via the Git repository option. [portainer/portainer#8072](https://github.com/portainer/portainer/issues/8072)

### Portainer

* Fixed issue where the effective viewer is not showing the correct user access role of environments they have access to. [portainer/portainer#8070](https://github.com/portainer/portainer/issues/8070)



## Release 2.16.1

November 9, 2022

### Kubernetes

* Fixed an issue with view/edit of an external application (i.e. one originally added to the cluster outside of Portainer) where a 'cannot read properties' error was shown.
* Fixed an issue with view/edit of Kubernetes namespaces where memory and CPU resource limit sliders were positioned incorrectly and erroneous warnings were shown.

### Docker

* Fixed issue of update stack button being disabled when updating an existing stack.

### Portainer

* Fixed license key issue where node counts were not updated when environments are deleted.
* Fixed issue with JSON formatted logs failing in 2.16.0.



## Release 2.16.0

October 31, 2022

### Deprecation notice

* Proposing to deprecate ACI (Azure Container Instances) and remove the functionality to connect to ACI, view existing containers and deploy new containers.

### Upgrade notice

* `portainer/portainer:latest` moved to `portainer/portainer:2.16`.

### React migration

* Migrated from Angular to React: Tag selector for Environment Details view.
* Migrated from Angular to React: Teams view.

### Kubernetes

* When upgrading to 2.16, if you already have ingress controllers in a Kubernetes cluster/environment linked to Portainer and used Portainer to set them at the cluster and namespace level, and if these ingress controllers were not used by any ingresses, after the upgrade, you may end up with dummy ingresses visible in the new Ingresses screen in Portainer (that are not actually used for any deployment). This is simply an artifact of how we retained information about ingress controllers in earlier Portainer releases. If you find these kinds of dummy ingresses, you can safely delete them.
* Introduced the ability to auto-detect ingress classes in the environment. [portainer/portainer#7827](https://github.com/portainer/portainer/issues/7827)
* Added an Ingress menu option in the sidebar that lists all Ingresses in the cluster. [portainer/portainer#7839](https://github.com/portainer/portainer/issues/7839)
* Introduced the ability to set the type of a Kubernetes secret (e.g. TLS or a user-defined/custom type). Existing secrets were previously always of type Opaque (which remains the default). [portainer/portainer#7842](https://github.com/portainer/portainer/issues/7842)
* Improved ingress options on the cluster setup page, allowing admins to define ingresses without assigning them to a namespace. [portainer/portainer#7832](https://github.com/portainer/portainer/issues/7832)
* Introduce TLS and HTTPS support for ingresses. [portainer/portainer#7843](https://github.com/portainer/portainer/issues/7843)
* Moved the Ingress management from the Application details page to a new Ingress section. [portainer/portainer#7828](https://github.com/portainer/portainer/issues/7828)
* Resolved an issue when OAuth is in use and Kubernetes updates are deployed via manifest from git. The user email address used in labels/annotations for Kube objects now has disallowed characters (such as the at symbol) replaced with a dot (period symbol). [portainer/portainer#7720](https://github.com/portainer/portainer/issues/7720)
* The Homepage's kubeconfig download dialog now only includes those environments that show on the Homepage. Those with a connection error or provisioning error (these states were introduced in recent releases) are now excluded.
* Resolved an issue where Node stats would not work for Google Kubernetes Engine (GKE) clusters. [portainer/portainer#7668](https://github.com/portainer/portainer/issues/7668)
* Fixed the issue of missing Kubernetes definition for Kubernetes application deployment in the swagger API documentation. [portainer/portainer#7741](https://github.com/portainer/portainer/issues/7741)
* Fixed issue with deploying custom templates on Kubernetes that are using mustache variables.

### Docker

* Updated the Compose version to 2.10.2. [portainer/portainer#7838](https://github.com/portainer/portainer/issues/7838)
* Added support for shared memory when creating or editing a container by allowing to set --shm-size from portainer. [portainer/portainer#4992](https://github.com/portainer/portainer/issues/4992)
* Introduced support for uploading of local files to be included in a Docker image when using Portainer to build an image. [portainer/portainer#7796](https://github.com/portainer/portainer/issues/7796)
* Set notification of new image for docker default to off.
* Introduced a setting to turn on/off per host showing of out-of-date image indicators. [portainer/portainer#7219](https://github.com/portainer/portainer/issues/7219)
* Resolved an issue in Docker Services, Containers, and Stacks, where loading of the recently added out-of-date image indicator delayed showing of a row's action icons.
* Added information for rebuilding images from stacks on docker standalone environments. [portainer/portainer#7829](https://github.com/portainer/portainer/issues/7829)
* Added information to the build image from the URL page, including a link to additional documentation. [portainer/portainer#7771](https://github.com/portainer/portainer/issues/7771)
* Fixed an issue where environment variables for stacks could not be set to empty. [portainer/portainer#7780](https://github.com/portainer/portainer/issues/7780)
* Fixed an issue where assigning user access to a stack, showed users that don't have access to the Environment. [portainer/portainer#7695](https://github.com/portainer/portainer/issues/7695)
* Fixed the issue of missing agent deployment script for the docker standalone environment. [portainer/portainer#7757](https://github.com/portainer/portainer/issues/7757)
* Fixed the issue of the misconfigured stack being saved and subsequently can not be deleted. [portainer/portainer#7798](https://github.com/portainer/portainer/issues/7798)
* Fixed an issue where the Swarm secret values incorrectly were being trimmed. [portainer/portainer#7772](https://github.com/portainer/portainer/issues/7772)
* Fixed the issue where the container webhook toggle was not being saved.
* Fixed an issue where the Docker API section in the add environment wizard incorrectly was showing the docker.sock code block. [portainer/portainer#7650](https://github.com/portainer/portainer/issues/7650)
* Fixed an issue where a console error was showing for GPU when using Swarm because GPU is not supported on Swarm.
* Fixed an issue where renaming a deployed container resulted in an error. [portainer/portainer#7778](https://github.com/portainer/portainer/issues/7778)
* Fixed an issue where the image pull limits weren't being shown for standard users.
* Fixed error message when adding new docker environments with invalid CA certs for TLS. [portainer/portainer#7934](https://github.com/portainer/portainer/issues/7934)
* Adjusted the "remove" buttons as per the UI guidelines that were introduced in the 2.15 release. [portainer/portainer#7739](https://github.com/portainer/portainer/issues/7739)

### Gitops

* Introduced the offering of auto-suggestions retrieved from the git repo when entering the Compose path.
* Added the ability to store git credentials in user settings.

### Portainer

* Introduced a new section that shows past toaster notifications, which are stored in the browser's local storage. [portainer/portainer#7756](https://github.com/portainer/portainer/issues/7756)
* Introduced a context sensitive help button that links to the relevant documentation based on the current page. [portainer/portainer#7744](https://github.com/portainer/portainer/issues/7744)
* Introduced login screen banner to the login page.
* Added banner for "new version available" in portainer business edition.
* Updated dependencies of PCIDB/GHW for the portainer agent. [portainer/portainer#7705](https://github.com/portainer/portainer/issues/7705)
* Updated version of chart.js to 2.9.4 and moment to 2.29.4. [portainer/portainer#7681](https://github.com/portainer/portainer/issues/7681)
* Update golang and image dependencies for API and portainer binary ( EE ).
* Updated binary version for docker-compose and helm (to v3.9.3). [portainer/portainer#7704](https://github.com/portainer/portainer/issues/7704)
* Updated the agent library dependencies. [portainer/portainer#7420](https://github.com/portainer/portainer/issues/7420)
* Fixed an issue where the Microsoft OAuth information was not being retrieved correctly when editing the settings.
* Fixed select all behavior in environments page.
* Fixed the issue of handling images built by buildx or buildkit in the registry browser.
* Fixed an issue where the browser tab title did not update with the actually selected environment. [portainer/portainer#7651](https://github.com/portainer/portainer/issues/7651)
* Fixed issue with text color and text background color on auto-filled text.
* Fixed issue where the dropdown menu has incorrect background color in dark mode. [portainer/portainer#7678](https://github.com/portainer/portainer/issues/7678)
* Fixed styling issues in the Runtime & Resources tab. [portainer/portainer#7779](https://github.com/portainer/portainer/issues/7779)
* Fixed an issue where the new styling wasn't being applied to links. [portainer/portainer#7740](https://github.com/portainer/portainer/issues/7740)
* Adjusted the warning text color as per the UI guidelines that were introduced in the 2.15 release. [portainer/portainer#7667](https://github.com/portainer/portainer/issues/7667)
* Introduced UI info components while browsing snapshots.

### Edge

* Introduced the ability to run remote commands on edge environments connected via Async using mTLS.
* Introduced UI info components while browsing snapshots.

### Nomad

* Fixed issue around Home page loading time when you have Nomad environments connected.
* Removed extension validation from compose path field. [portainer/portainer#7652](https://github.com/portainer/portainer/issues/7652)
* Fixed an issue where the Group and Tag could not be set for Nomad environments when adding it via the wizard. [portainer/portainer#7703](https://github.com/portainer/portainer/issues/7703)
* Fixed an issue where Nomad system jobs would prevent other jobs from being shown. [portainer/portainer#7229](https://github.com/portainer/portainer/issues/7229)

### Development

* Improved unit tests by using T.TempDir to create a temporary test directory. [portainer/portainer#7675](https://github.com/portainer/portainer/issues/7675)
* Replaced the logrus logging framework with Zerolog. [portainer/portainer#7935](https://github.com/portainer/portainer/issues/7935)
* Fixed an issue where new installations that use the develop branch didn't apply the analytics setting correctly. [portainer/portainer#7584](https://github.com/portainer/portainer/issues/7584)



## Release 2.15.1

September 16, 2022

### Docker

* Fixed an issue with connecting to the local Docker environment when using Windows Container Services. [portainer/portainer#7618](https://github.com/portainer/portainer/issues/7618)
* Fixed an issue where the build image button would stay inactive when using a tar file. [portainer/portainer#7624](https://github.com/portainer/portainer/issues/7624)

### Portainer

* Fixed an issue where some colors in dark mode appeared too brown. [portainer/portainer#7616](https://github.com/portainer/portainer/issues/7616)
* Fixed an issue when using leading or trailing spaces in a password would break the login process. [portainer/portainer#7621](https://github.com/portainer/portainer/issues/7621)



## Release 2.15.0

September 6, 2022

### Deprecation notice

* Proposing to deprecate Kompose and remove the functionality to deploy compose yaml on Kubernetes. [portainer/portainer#7514](https://github.com/portainer/portainer/issues/7514)

### Breaking changes

* Breaking change in API where the endpoint filter `edgeDeviceFilter` has been replaced by `edgeDevice` and `edgeDeviceUntrusted`.

### Browser cache

* Improved caching to prepare a resolution for an issue where certain browsers need a manual browser refresh for new version assets to load. The change only takes effect for upgrades subsequent to migration to 2.15. [portainer/portainer#7443](https://github.com/portainer/portainer/issues/7443)

### React migration

* Migrated docker/containers/list views to React.
* Migrated the Docker console.
* Migrated Azure Container Instances views to React.
* Migrated the sidebar menu and adjusted the Settings page.
* Migrated the Kubectl shell window.
* Migrated tooltip into react component.
* Migrated page header into React component.

### Kubernetes

* Introduced the ability to define pod security constraints per Kubernetes cluster.
* Introduced an option to forcibly remove a Kubernetes namespace that's in a 'Terminating' state. [portainer/portainer#4580](https://github.com/portainer/portainer/issues/4580)
* Improved the kubeconfig download dialog by providing pagination (including choosing of the number of items per page), an option to 'select all in page' and selection across multiple pages. [portainer/portainer#7261](https://github.com/portainer/portainer/issues/7261)
* Resolved an issue where the link shown for an application that is exposed via an ingress was including an incorrect port (the servicePort). [portainer/portainer#7337](https://github.com/portainer/portainer/issues/7337)
* Resolved some errors and wording issues in recent KaaS cluster provisioning and import kubeconfig functionality.
* When using Kubernetes (KaaS) cluster provisioning and choosing the DigitalOcean option, only node size options that are valid for provisioning now show. Previously, there was at least one option which gave an 'invalid droplet size' error on use.

### Docker

* Added GPU support to Docker containers. [portainer/portainer#3143](https://github.com/portainer/portainer/issues/3143)
* Introduced the ability to disable use of the anonymous Docker Hub registry option via the Portainer UI for all users.
* Added support to read value from .env in subfolder for git deployment in Docker Standalone Environment. [portainer/portainer#7265](https://github.com/portainer/portainer/issues/7265)
* Added message explaining that changed env values only take effect after redeployment or auto update via webhook. [portainer/portainer#7242](https://github.com/portainer/portainer/issues/7242)
* Provided prune option for stack deployment from Git. [portainer/portainer#7224](https://github.com/portainer/portainer/issues/7224)
* Removed "Show Container Template" toggle on App templates page and introduced filter and sort by dropdown options. [portainer/portainer#7394](https://github.com/portainer/portainer/issues/7394)
* Fixed recreate of container so it pulls the image using the SHA256 hash if its tag no longer exists, and if the image is still inaccessible (as it no longer exists or the tag or name is now incorrect) warn the user and disable 'Pull latest image' option. [portainer/portainer#6566](https://github.com/portainer/portainer/issues/6566)
* Introduced support for checking images held in private registries to the recently added functionality that shows a visual image indication on stacks, services and containers that are running with an out-of-date image.
* Introduced improved validation to the Docker build image function, to prevent invalid image names. [portainer/portainer#7463](https://github.com/portainer/portainer/issues/7463)
* Fixed host info being sent when host management feature is turned off. [portainer/portainer#7277](https://github.com/portainer/portainer/issues/7277)
* Following the introduction of v2 Docker Compose, changed any front-end wording that mentions 'docker-compose' to say 'docker compose', to clarify and bring in line with official documentation. [portainer/portainer#7141](https://github.com/portainer/portainer/issues/7141)

### Portainer

* Introduced license enforcement for 5 nodes free in business edition.
* Introduced new styling for Portainer. [portainer/portainer#7528](https://github.com/portainer/portainer/issues/7528)
* Introduced Portainer UI redesign with changes for common configuration pages. [portainer/portainer#7527](https://github.com/portainer/portainer/issues/7527)
* Included build information in Portainer for easier debug. [portainer/portainer#7317](https://github.com/portainer/portainer/issues/7317)
* Introduced the ability to show/hide the password you are entering on login. [portainer/portainer#7461](https://github.com/portainer/portainer/issues/7461)
* Introduced CTRL+F (or CMD+F on MacOS) to search in web editors. [portainer/portainer#6537](https://github.com/portainer/portainer/issues/6537)
* Introduced the ability to filter connection type and agent version on the home page. [portainer/portainer#7468](https://github.com/portainer/portainer/issues/7468)
* Improved environment address entry to handle http:// or https:// prefixes when adding an environment via Docker or Kubernetes (agent) options. [portainer/portainer#7462](https://github.com/portainer/portainer/issues/7462)
* Introduced a change to the Homepage's multi-select filters to keep the dropdown open after a single selection until the user closes it themselves, or the last remaining option is selected. [portainer/portainer#7548](https://github.com/portainer/portainer/issues/7548)
* Added tips for entering Portainer license key.
* Updated the agent library dependencies [portainer/portainer#7420](https://github.com/portainer/portainer/issues/7420)
* Fixed issue where Automatic team membership did not always work for Azure.
* Fixed an issue where auto populate team admins LDAP feature didn't work on upgrade from CE to BE.
* Fixed issue of authentication logs not working behind reverse proxy. [portainer/portainer#7120](https://github.com/portainer/portainer/issues/7120)
* Fixed license expiry message flashing even license is not expired or close to expiring.
* Fixed a few typos in various locations. [portainer/portainer#7243](https://github.com/portainer/portainer/issues/7243)
* Fixed issue with environment page table losing selection on table refresh. [portainer/portainer#7395](https://github.com/portainer/portainer/issues/7395)
* Fixed missing BE feature indicators. [portainer/portainer#7396](https://github.com/portainer/portainer/issues/7396)
* Fixed issue where certificate uploading is not functional for StartTLS/TLS in LDAP configuration. [portainer/portainer#6271](https://github.com/portainer/portainer/issues/6271)
* Reworded error message for JWT token missing to more user-friendly message.

### Edge

* Introduced the ability to get logs for edge stacks of specific environments.
* Fixed connection issue ("Environment is unreachable") after deploying Nomad environment with AEEC script.
* Updated UI of Add devices page to match the Add environment page. [portainer/portainer#7393](https://github.com/portainer/portainer/issues/7393)
* Fixed issue where editing edge jobs changed the configured cron expression. [portainer/portainer#7432](https://github.com/portainer/portainer/issues/7432)
* Fixed known issue with manually adding an Edge Device environment through the edge device page when using Async mode, does not retain Async settings and needs to be manually added through the environment details page.
* Removed Beta label on Edge Jobs. [portainer/portainer#7162](https://github.com/portainer/portainer/issues/7162)
* Improved image parsing for Kubernetes Edge Stacks that use private registries so that the same parsing as Docker ones is used.

### Registry

* Improved Registry details screen with better prompting for relevant fields. [portainer/portainer#3015](https://github.com/portainer/portainer/issues/3015)
* Resolved an issue around not being able to add multiple Quay registries. [portainer/portainer#7430](https://github.com/portainer/portainer/issues/7430)
* Improved the Registry details screen to show the registry provider and made the Add registry screen default to Docker Hub as the provider. [portainer/portainer#7246](https://github.com/portainer/portainer/issues/7246)

### Nomad

* Standardized the behavior of Nomad edge environments to be the same as non-Nomad edge environments.



## Release 2.14.2

July 26, 2022

### Known issues

* Known issue with manually adding an Edge Device environment through the Edge Device page when using Async mode, does not retain Async settings and needs to be manually added through the environment details page.
* Image update notifications are currently not supported for private registries and private images in DockerHub. This is due to be fixed in our next major version.

### Kubernetes

* Fixed an issue where the kubeconfig downloadable from Portainer always had port 9443 in its URLs, even though the actual Portainer instance was being accessed via another port. [portainer/portainer#7059](https://github.com/portainer/portainer/issues/7059)

### Docker

* Fixed certificate file validation for .pem files [portainer/portainer#7183](https://github.com/portainer/portainer/issues/7183)
* Fixed an issue when using a Mustache variable (e.g. \{{service\}}) multiple times in the YAML, where the UI should prompt for it only once and then reuse it (rather than prompting for it multiple times).
* Fixed an issue when using a Mustache variable (e.g. \{{path\}}) with special characters in the value, where the resulting value would end up being HTML encoded.
* Fixed issue around access control labels being ignored.

### Portainer

* Fixed an issue where the original admin user was unable to change their password when external authentication is enabled. [portainer/portainer#7291](https://github.com/portainer/portainer/issues/7291)
* Fixed toggle state reset issue for custom logo and anonymous statistics. [portainer/portainer#7278](https://github.com/portainer/portainer/issues/7278)
* Fixed issue with not being able to add users to teams while LDAP authentication is enabled without auto teams population. [portainer/portainer#7252](https://github.com/portainer/portainer/issues/7252)
* Fixed an issue where auto populate team admins LDAP feature didn't work on upgrade from CE to BE.
* Resolved an issue where new installs of recent Portainer releases had an extraneous (although innocuous) db version update on restart.

### Edge&#x20;

* Fixed pagination issue on Add edge jobs page for listed environments. [portainer/portainer#7312](https://github.com/portainer/portainer/issues/7312)



## Release 2.14.1

July 12, 2022

### Known issues

* Known issue with manually adding an Edge Device environment through the Edge Device page when using Async mode, does not retain Async settings and needs to be manually added through the environment details page.
* Image update notifications are currently not supported for private registries and private images in DockerHub. This is due to be fixed in our next major version.
* When using a Mustache variable (e.g. `{{ service }}`) multiple times in the YAML, the UI also prompts for it multiple times, rather than prompting for it a single time and then reusing it.

### Kubernetes

* Improved KaaS cluster provisioning's cluster name validation to enforce restrictions that Google GKE expects.
* Fixed issue of variable inputs not showing on deployment view when using custom templates.
* Improved Portainer logging to better record the output from eksctl, the CLI tool used for Amazon EKS (KaaS) cluster provisioning.
* Fixed an issue where, upon initiating AWS KaaS cluster/environment provisioning and subsequently restarting Portainer in a short space of time, the requested environment would become stuck and unusable in Portainer, and couldn't be deleted.

### Docker

* Resolved an issue where users running Portainer with non-root access were receiving a 'Permission denied on docker-compose' error since the recent update to Docker Compose V2. [portainer/portainer#6906](https://github.com/portainer/portainer/issues/6906)

### Portainer

* Fix to improve LDAP, etc. authentication/login speed when there are many thousands of users.
* Resolved an issue where users upgrading a Portainer install, where the portainer\_data volume is stored on a network volume, receive a 'Permission denied' error when the upgrade attempts a backup of the database. [portainer/portainer#7144](https://github.com/portainer/portainer/issues/7144)
* Fixed "Create user" button in disabled stage when external Auth enabled. [portainer/portainer#7214](https://github.com/portainer/portainer/issues/7214)

### Edge

* Fixed issue where the edge agent could not connect when running Portainer behind a reverse proxy only supporting TLS v1.2. [portainer/portainer#7167](https://github.com/portainer/portainer/issues/7167)



## Release 2.14.0

June 28, 2022

### Known issues

* Known issue with manually adding an Edge Device environment through the Edge Device page when using Async mode, does not retain Async settings and needs to be manually added through the environment details page.
* Image update notifications are currently not supported for private registries and private images in DockerHub. This is due to be fixed in our next major version.

### Breaking changes

* With the upgrade to Docker Compose V2, container names now use hyphens as separators instead of underscores. This may affect you if you are generating container names instead of explicitly defining them, then using them as references.

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

May 12, 2022

### Portainer

* Changed the minimum TLS version of Portainer from 1.3 to 1.2 to avoid issues with nginx reverse proxies: [portainer/portainer#6902](https://github.com/portainer/portainer/issues/6902)
* Fixed issue with the Portainer authentication settings page not being able to save: [portainer/portainer#6899](https://github.com/portainer/portainer/issues/6899)
* Changed the password policy to require 12 characters for all Portainer internal users: [portainer/portainer#6904](https://github.com/portainer/portainer/issues/6904)

## Release 2.13.0

May 9. 2022

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

April 4, 2022

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

March 9, 2022

### Portainer

* Fixed bug where redeploying a stack causes an error and success message at the same time.
* Fixed bug that was preventing ability to edit application with persisted folder on Kubernetes.

## Release 2.12.0

March 8, 2022

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

November 15, 2021

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

## Release 2.7.0

July 29, 2021

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

## Release 2.4.0

May 4, 2021

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

February 22, 2021

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

December 3, 2020

Initial release of Portainer Business
