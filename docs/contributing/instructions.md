# Contributing to the Portainer Project

How to setup the development environment

<b>Note</b>: Make sure you have installed the dependencies for this project on your [Mac](/contributing/tools-macos) or [Linux](/contributing/tools-linux) machine before continuing this tutorial.

<b>Note 2</b>: Windows is currently not supported by the Portainer development environment.

## Instructions:

<b>Step 1</b>: Navigate to the folder you wish to store the code for the Portainer project. This can be anywhere such as on your desktop or in your downloads folder.

<b>Step 2</b>: Download the Portainer project:

```
git clone https://github.com/portainer/portainer.git
```

<b>Step 3</b>: Navigate into the Portainer project you downloaded:

```
cd portainer
```

<b>Step 4</b>: Install the development dependencies:

```
yarn
```

<b>Step 5</b>: Build and run the project:

```
yarn start
```

You should now be able to access Portainer at http://localhost:9000

<b>Tip</b>: The frontend application will be updated when you save your changes to any of the sources (app/**/*.js, assets/css/app.css or index.html). Just refresh the browser :)

## Contribution Guidelines

Please follow the contribution guidelines on [the repository](https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md) when contributing to the Portainer codebase.

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}