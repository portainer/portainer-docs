# Build and host your own app templates

The best way to do this is to [bind-mount your own template file](../cli.md#use-your-own-templates) directly into the Portainer container. You can also build your own container that will use Nginx to serve the template definitions.

First, clone the [Portainer templates repository](https://github.com/portainer/templates), edit the templates file, then build and run the container:

```text
git clone https://github.com/portainer/templates.git portainer-templates
cd portainer-templates
# Edit the file templates.json
docker build -t portainer-templates .
docker run -d -p "8080:80" portainer-templates
```

Access your template definitions at `http://docker-host:8080/templates.json`.

You can also mount the `templates.json` file inside the container, so you can edit the file and see live changes:

```text
docker run -d -p "8080:80" -v "${PWD}/templates.json:/usr/share/nginx/html/templates.json" portainer-templates
```

For more information about the format of the app template, go [here](format.md).

