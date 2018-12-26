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
