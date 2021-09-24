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

```text
git clone https://github.com/portainer/portainer.git
```

Next, navigate into the Portainer project you downloaded:

```text
cd portainer
```

Install the development dependencies:

```text
yarn
```

And finally, build and run the project:

```text
yarn start
```

You should now be able to access Portainer at `http://localhost:9000`.

{% hint style="info" %}
The frontend application will update when you save your changes to any of the sources. Just refresh the browser to see the changes.
{% endhint %}

## Contribution guidelines

When contributing to the Portainer codebase, please follow [our contribution guidelines](https://github.com/portainer/portainer/blob/develop/CONTRIBUTING.md).

