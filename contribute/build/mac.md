# Set up a macOS build environment

As an open source product, we encourage users to edit our code and submit patches to it.  This article explains how to set up a local environment on Mac so you can build your own copy of Portainer and test your changes.

{% hint style="info" %}
We tested these instructions on macOS 10.14.3 (Mojave).
{% endhint %}

## Dependencies

* [Docker for Mac](https://www.docker.com/products/docker-desktop) installs the Docker application and other Docker tools. The latest version is not a requirement for this development stack, however we recommend staying up to date with the latest improvements and security fixes.
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is a package manager for installing new software packages on your system, and is used to run the Portainer development environment.
* [Node.JS](https://nodejs.org/en/download/) is a JavaScript package used when building applications that leverage networking, such as Portainer. Version 18 or later is required.
* ​[Golang](https://golang.org/dl/) is the open source language that we use to build the majority of Portainer software. Version 1.18 of Golang is required.
* Wget is a package used to retrieve files using common internet protocols such as HTTP and FTP.

## Part 1: Installing Docker for macOS

{% hint style="warning" %}
Docker for macOS requires OSX Mountain Lion or later or it will not work. Please check that you have the right version before you begin.
{% endhint %}

### Step 1: Install Docker

{% hint style="info" %}
We always recommend installing software using the most up-to-date instructions from the official vendor. This step is based on Docker's own [installation instructions for Docker on macOS](https://runnable.com/docker/install-docker-on-macos).
{% endhint %}

[Download Docker](https://www.docker.com/products/docker-desktop) then navigate to the `Docker.dmg` file and double-click to open. Drag and drop Docker into your applications folder. Authorize the installation using your system password then wait for Docker to finish installing.

To check that Docker installed successfully, double-click Docker inside your applications folder to start it. The whale icon should appear in your status bar, indicating Docker is running and accessible.

### Step 2: Check the installed Docker version

Click the Docker icon in the status bar then select **About Docker Desktop** from the menu (or a similarly named menu item, depending on your Docker version). A window should open, displaying the current version of Docker and its supporting software.

## Part 2: Installing Yarn

{% hint style="info" %}
This procedure uses the Homebrew package manager. Go [here](https://brew.sh/) to learn how install it. If you don't want to use Homebrew, Yarn provides [some alternatives](https://yarnpkg.com/en/docs/install#mac-stable).
{% endhint %}

{% hint style="info" %}
If you have issues installing or using Yarn, read their [official documentation](https://yarnpkg.com/en/docs/install#mac-stable).
{% endhint %}

Running `brew install yarn` in the macOS terminal will install Yarn. To confirm it installed successfully, run `yarn --version` in the macOS terminal.

If successful, the current version of Yarn should print out in your terminal, indicating that it installed successfully and is running on your system.

## Part 3: Installing or updating Node.JS

{% hint style="info" %}
If you used Homebrew to install Yarn, Node.JS should have automatically installed alongside it.  If not, you can install it by following the [Node.JS documentation](https://nodejs.org/en/download/).
{% endhint %}

{% hint style="info" %}
If you have issues installing or updating Node.JS using Homebrew, read [Homebrew's troubleshooting guide](https://docs.brew.sh/Common-Issues).
{% endhint %}

To check if Node.JS is installed on your system, run `node --version` in your terminal. The current version of Node.JS should print out. If the version is version 6 or later, updating it to the latest version is optional (but we recommend it because it's good practice to stay up to date).

If you are running a version of Node.JS that is older than version 6, you must upgrade in order to run the Portainer development environment.

If Homebrew was installed at the same time as Yarn (using Homebrew), follow these steps to update Node.JS:
