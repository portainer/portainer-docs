---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/contribute/build/mac
---

# Set up a macOS build environment

As an open source product, we encourage users to edit our code and submit patches to it.  This article explains how to set up a local environment on Mac so you can build your own copy of Portainer and test your changes.

{% hint style="info" %}
We tested these instructions on macOS 10.14.3 (Mojave).
{% endhint %}

## Dependencies

* [Docker for Mac](https://www.docker.com/products/docker-desktop) installs the Docker application and other Docker tools. The latest version is not a requirement for this development stack, however we recommend staying up to date with the latest improvements and security fixes.
* [Pnpm](https://pnpm.io/) is a package manager for installing new software packages on your system, and is used to run the Portainer development environment.
* [Node.JS](https://nodejs.org/en/download/) is a JavaScript package used when building applications that leverage networking, such as Portainer. Version 22 is required.
* ​[Golang](https://golang.org/dl/) is the open source language that we use to build the majority of Portainer software.
* [Wget](https://www.gnu.org/software/wget/) is a package used to retrieve files using common internet protocols such as HTTP and FTP.

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

## Part 2: Installing pnpm version 10.26.2

{% hint style="info" %}
If you have issues installing or using pnpm, read their [official documentation](https://pnpm.io/motivation).
{% endhint %}

{% hint style="info" %}
This procedure uses the [Corepack](https://github.com/nodejs/corepack) package manager.&#x20;
{% endhint %}

Corepack must be enabled before it can manage pnpm. Run `corepack enable` from the macOS terminal, then install and activate pnpm version 10.26.2 by running `corepack use pnpm@10.26.2`.

Confirm the installation by running `pnpm --version`. If successful, the command will output `10.26.2`, indicating that pnpm is installed correctly and available on your system.

## Part 3: Installing Node.JS version 22

{% hint style="info" %}
This procedure makes use of NVM to install Node.JS (Node.JS version 22). NVM allows multiple different versions of Node.JS to be installed on a system and provides an easy way to switch between them.
{% endhint %}

{% hint style="info" %}
If you have issues installing or updating Node.JS, read NVM's [documentation](https://github.com/creationix/nvm).
{% endhint %}

To install Node.js, begin by downloading and installing nvm by running

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

Then install or update to the latest version of Node.JS by running this command in the terminal:

```
nvm install 22
```

Finally, check if Node is installed on your system:

```
node --version
```

## Part 4: Installing Golang

First, [download](https://golang.org/dl/) the appropriate version of Go for your system. The package installs the Go distribution to `/usr/local/go`. The package should put the `/usr/local/go/bin` directory in your `PATH` environment variable. You may need to restart any open terminal sessions for the change to take effect.

Verify that Go has been installed correctly by running `go version`  in your terminal.&#x20;

## Part 5: Installing Wget

{% hint style="info" %}
If you have issues installing or updating Wget using Homebrew, read [Homebrew's troubleshooting guide](https://docs.brew.sh/Common-Issues).
{% endhint %}

To install or update Wget on your Mac, use [Homebrew](https://formulae.brew.sh/formula/wget) by running `brew install wget` .&#x20;

