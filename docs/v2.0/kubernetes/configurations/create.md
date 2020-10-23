# Create a configuration

From Portainer you can create Configurations files, outside a service’s image or running containers. This allows you to keep your images as generic as possible, without the need to bind-mount configuration files into the containers or use environment variables.

## Creating a configuration

To create a configuration, do a click in <b>Configurations</b> and then do a click in <b>Add configuration</b>.

![add](assets/add-1.png)

In the next screen, you need to define some things:

* Name: Name your configuration.
* Resource Pool: Where the configuration is going to be saved.
* Configuration Type:
  - Non-sensitive: This configuration holds non-sensitive information like passwords or certificates.
  - Sensitive: This configuration holds sensitive information

In the data section, clicking in <b>Advanced Mode</b> you can define in YAML format your configuration. If not, you can create entries using the fields below or taking from a file. 

Once you set your configuration, do a click in <b>Create configuration</b>

![add](assets/add-2.png)

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).