# :material-page-next: Release Notes

Read about the new and enhanced features in our latest releases here.
=== "Portainer Business"
    ???+ Tip "Release 2.4"
        #### Fixes
        **Kubernetes**
        * Linux ARM64
        * Linux ARM
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
