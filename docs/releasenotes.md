# :material-page-next: Release Notes

Read about the new and enhanced features in our latest releases here.
=== "Portainer Business"
    ???+ Tip "Release 2.0.1"
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
