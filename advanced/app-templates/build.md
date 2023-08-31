# Build and host your own app templates

To provide your own template files, you will need to host your files somewhere accessible by the Portainer Server instance. This could be somewhere like GitHub, a web server, or perhaps a container running nginx.

As an example, the Portainer templates repository includes a `Dockerfile` that lets you start it as a container to serve the JSON file. To set this up, first clone the [Portainer templates repository](https://github.com/portainer/templates), edit the templates file, then build and run the container:

```
git clone https://github.com/portainer/templates.git portainer-templates
cd portainer-templates
# Edit the file templates.json
docker build -t portainer-templates .
docker run -d -p "8080:80" portainer-templates
```

Access your template definitions at `http://docker-host:8080/templates.json`.

You can also mount the `templates.json` file inside the container, so you can edit the file and see live changes:

```
docker run -d -p "8080:80" -v "${PWD}/templates.json:/usr/share/nginx/html/templates.json" portainer-templates
```

For more information about the format of the app template, go [here](format.md).
