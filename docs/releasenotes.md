# :material-page-next: Release Notes

Read about the new and enhanced features in our latest releases here.
=== "Portainer Business"
    ???+ Tip "Release 2.4"
        #### Kubernetes​
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
        * Fixed issue with ability to retrieve config map error when trying to manager newly create resource pool
        ​
        #### Activity Logging        ​
        * Introduced user authentication activity logging
        * Introduced user activity logging
        ​
        #### RBAC        ​
        * Introduced new RBAC “Operator” Role
        * Fixed issue with user in 2 team with mix of helpdesk & endpoint admin resulting in the user having permissions of endpoint admin
        ​
        #### Registries        ​
        * Fixed issue causing Portainer to forget the password associated to a registry after an update
        * Fixed issue preventing the registry manager feature to work properly with a ProGet registry
        * Improved description for advanced mode usage with private registries
        ​
        #### Swarm        ​
        * Introduced validation to prevent adding a mount with nothing filled to and exiting service
        * Fixed issue in service creation, switching to bind mode from volume mode with a volume selected fills the host field with {object Object}
        ​
        #### Stacks        ​
        * Introduced support for creating stacks with the same name across different endpoints
        * Introduced extra stack information: creation, last update time and user who created the stack
        * Minor UX change for the start/stop stack action
        * Fixed issue with ability to use private registries with Standalone stacks
        * Fixed issue showing editor tab on limited stacks when it should not
        * Fixed issue when editing a stack, hitting backspace or delete keys with contents of web editor selected hides the entire editor UI element
        * Fixed issue with stack create via API with a regular user account are incorrectly marked as administrator only
        * Fixed issue of error being displayed when creating a stack on docker standalone despite the stack is created
        * Fixed issue of stacks being created via API incorrectly marked private with no owner
        ​
        #### Docker        ​
        * Introduced support for Compose > v2 when deploying a stack on a Docker standalone environment
        * Introduced the ability to download log file from Docker container/service views
        * Display labels in Image Details
        * Clarify the description of the restrict external access to the network property when creating a network
        ​
        #### User Management        ​
        * Automatically lowercase username when authenticating users
        * Update the authentication UX to put an emphasis on OAuth when OAuth is enabled
        ​
        #### Portainer
        * Introduced the ability to backup / restore Portainer
        * Fixed issue of version not being shown correctly after update
        * Support starting Portainer without having to specify any endpoint
        ​
        #### ACI
        * Introduced RBAC to ACI
        * Introduced UAC to ACI
        ​
        #### Minor Changes​
        * Removed the new version check  
        * Changed the license server errors to be a silent fail for offline environments
        * Added JS source map for Portainer UI
    <br>

    ???- Note "Release 2.0.1"
        #### Fixes
        **Fix an issue preventing a user from creating Kuberneres resources if they have a `#!Ruby @` character in their username**

        Users with a `#!Ruby @` character in their username were not able to create the following Kubernetes resources:

        * Resource pool
        * Application
        * Configuration

        **Fix platform issues with the Docker image for Portainer Business**

        The Docker image can now be successfully deployed on the following platforms:

        * Linux ARM64
        * Linux ARM

        **Minor update to the license server mechanism**
        
        The license server mechanism has been updated.
    <br>

    ???- Note "Release 2.0.0"
        Initial Release of Portainer Business

=== "Portainer CE"
    Latest release notes for Community Edition are availble [here](https://github.com/portainer/portainer/releases){target=_blank}
<br>

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
