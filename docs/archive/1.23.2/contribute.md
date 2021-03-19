Contribute
==========

Use the following instructions and guidelines to contribute to the
Portainer project.

Build Portainer locally
-----------------------

### Requirements

Ensure you have [Docker](https://docs.docker.com/engine/installation/),
[Node.js](https://nodejs.org/en/) \>= 6, [yarn](https://yarnpkg.com) and
[Golang (\>= 1.11)](https://golang.org/) installed on your system.

### Build

Checkout the project, set up the project inside your `$GOPATH` and go
inside the root directory:

``` {.sourceCode .bash}
$ git clone https://github.com/portainer/portainer.git
$ mkdir -p ${GOPATH}/src/github.com/portainer
$ ln -s ${PWD}/portainer ${GOPATH}/src/github.com/portainer/portainer
$ cd portainer
```

Install dependencies with yarn:

``` {.sourceCode .bash}
$ yarn
```

Build and run the project:

``` {.sourceCode .bash}
$ yarn start
```

Access Portainer at [<http://localhost:9000>](http://localhost:9000)

> **tip**
>
> The frontend application will be updated when you save your changes to
> any of the sources (app/\*\*/\*.js, assets/css/app.css or index.html).
> Just refresh the browser.

Contribution guidelines
-----------------------

Please follow the contribution guidelines on [the
repository](https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md).

Contributing to the documentation
---------------------------------

Checkout the project and go inside the root directory:

``` {.sourceCode .bash}
$ git clone https://github.com/portainer/portainer-docs.git
$ cd portainer-docs
```

Update the documentation and trigger a local build:

``` {.sourceCode .bash}
$ docker run --rm -v ${PWD}/docs:/src portainer/docbuilder:latest make html
```

This will create a local folder docs/build/html where you will find the
generated static files for the documentation.
