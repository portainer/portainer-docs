# Build instructions

This article explains how to set up your local development environment so you can contribute to the Portainer codebase.

{% hint style="info" %}
Make sure you have installed the dependencies for this project on your [Mac](mac.md) or [Linux](linux.md) machine before continuing.
{% endhint %}

{% hint style="warning" %}
Windows is currently not supported by the Portainer development environment.
{% endhint %}

## Instructions

Navigate to the folder where you will store Portainer project code. This can be anywhere such as on your desktop or in your downloads folder.

Now, download the Portainer project:

```
git clone https://github.com/portainer/portainer.git
```

Next, navigate into the Portainer project you downloaded:

```
cd portainer
```

Install the development dependencies:

```
make deps
```

And finally, build and run the project:

```
make dev
```

You should now be able to access Portainer at `https://localhost:9443` and UI dev server runs on `http://localhost:8999`.

For additional commands, run `make help`.

{% hint style="info" %}
The frontend application will update and refresh when you save your changes to any of the sources.
{% endhint %}

## Contribution Guidelines

When contributing to the Portainer codebase, please follow [our contribution guidelines](https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md).
