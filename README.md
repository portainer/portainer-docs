# Portainer documentation

[![Documentation Status](https://readthedocs.org/projects/portainer/badge/?version=latest)](http://portainer.readthedocs.io/en/latest/?badge=latest)

Documentation is available at http://portainer.readthedocs.io/

# Contribute

After modifying the documentation files inside the `docs/source` folder, you can
build the documentation locally to preview your changes.

```shell
$ docker run --rm -v ${PWD}/docs:/src portainer/docbuilder:latest make html
```

HTML files will be available under `docs/build/html` for preview.

## Visual Studio Code

You can also work directly inside the docker container used above via
[VS Code devcontainer](https://code.visualstudio.com/docs/remote/containers).

Please follow the getting started guide from the link above to install and
setup the required VS Code extensions. Once they are ready VS Code will
inform you that it has detected a devcontainer configuration and you can
switch your project folder into it. During startup of the devcontainer
VS Code will build the Dockerfile of this repository, mount the project
into the running container and finally open a terminal for you inside it.

Inside the devcontainer based project workspace you can then run the
pre-defined VS Code Task "Make HTML" to build the documentation.
