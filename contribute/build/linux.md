# Set up a Linux build environment

As an open source product, we encourage users to edit our code and submit patches to it. This article explains how to set up a local environment on Linux so you can build your own copy of Portainer and test your changes.

{% hint style="info" %}
We tested these instructions on Ubuntu 18.04.2 LTS. For instructions that relate to other systems, see the linked documentation below.
{% endhint %}

## Dependencies

* [Docker CE](https://docs.docker.com/install/) is the Docker application that runs on your machine to enable the use of Docker features. The latest version is not a requirement for this development stack, however we recommend staying up to date with the latest improvements and security fixes.
* ​[Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is a package manager for installing new software packages on your system, and is used to run the Portainer development environment.
* [Node.JS](https://nodejs.org/en/download/) is a JavaScript package used when building applications that leverage networking, such as Portainer. Version 18 or later is required.
* [Golang](https://golang.org/dl/) is the open source language that we use to build the majority of Portainer software. Version 1.18 of Golang is required.
* Wget is a package used to retrieve files using common internet protocols such as HTTP and FTP.

## Part 1: Installing Docker

{% hint style="info" %}
The following instructions were run on Ubuntu, for up-to-date instructions on this and other Linux distributions read the [official Docker CE documentation](https://docs.docker.com/install/).
{% endhint %}

{% hint style="info" %}
You must configure the Docker repository before you install Docker.
{% endhint %}

### Step 1: Configure the Docker repository

First, update your system's packages using this command:

```
sudo apt-get update
```

Next, install the required packages to use repos over HTTPS:

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

Now install the official GPG key for Docker:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Use this fingerprint to confirm that you have the correct key:

`9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88`

```
sudo apt-key fingerprint 0EBFCD88
```

The correct output should be:

```
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

And finally, use the following command to set up the stable repository:

```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### Step 2: Install Docker

{% hint style="info" %}
We always recommend installing software using the most up-to-date instructions from the official vendor. This step is based on Docker's own [installation instructions for Docker on Linux](https://docs.docker.com/install/).
{% endhint %}

First, update your system's packages using this command:

```
sudo apt-get update
```

Next, install Docker and its associated packages:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

Finally, verify that Docker was correctly installed and is running on your system. This command should download a test image that you can run in a container, print an informational message for then exit out of.

```
sudo docker run hello-world
```

## Part 2: Installing Yarn

{% hint style="info" %}
If you are running a different Linux distribution than Ubuntu, read Yarn's own [installation instructions for Yarn on Linux](https://yarnpkg.com/en/docs/install).
{% endhint %}

{% hint style="info" %}
If you have issues installing or using Yarn, read their [official documentation](https://yarnpkg.com/en/docs/install#mac-stable).
{% endhint %}

Run this command in the terminal to configure the Yarn repository on your system:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

Update your system's packages and install Yarn using this command:

```
sudo apt-get update && sudo apt-get install yarn
```

Finally, run this command in the terminal to confirm that the Yarn installation was a success:

```
yarn --version
```

The current version of Yarn should print out in your terminal, indicating that that it installed successfully and is running on your system.

## Part 3: Installing or updating Node.JS

{% hint style="info" %}
This procedure makes use of NVM to install Node.JS (Node.JS version 12 or later is required). NVM allows multiple different versions of Node.JS to be installed on a system and provides an easy way to switch between them.
{% endhint %}

{% hint style="info" %}
If you have issues installing or updating Node.JS, read NVM's [documentation](https://github.com/creationix/nvm).
{% endhint %}

First, install or update to the latest version of Node.JS by running this command in the terminal:

```
nvm install node
```

Finally, check if Node is installed on your system:

```
node --version
```

The latest version of Node.JS should now print out.

## Part 4: Installing Golang using a Linux tar file

{% hint style="info" %}
Go version 1.17 must be installed. If you're upgrading from an older version, you must [remove the existing version](https://golang.org/doc/install#uninstall) first before installing version 1.17. For the most up-to-date installation instructions, read [Go's own documentation](https://golang.org/doc/install#install).
{% endhint %}

{% hint style="info" %}
If you have issues installing or using Go, read the _Getting help_ section in their [official documentation](https://golang.org/doc/install#help).
{% endhint %}

First, [download](https://golang.org/dl/) the appropriate version of Go for your system. Navigate to where it was downloaded then extract it to the `/usr/local` directory using this command:

```
sudo tar -C /usr/local -xzf go1.17.6.linux-amd64.tar.gz
```

Next, add `/usr/local/go/bin` to the PATH environment variable inside your shell profile. Here's an example using bash:

```
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc
```

{% hint style="info" %}
You may need to log out and log back in for this to take effect.
{% endhint %}

And finally, follow the _Test your installation_ section in [Golang's official documentation](https://golang.org/doc/code.html#Testing) to ensure that Go installed correctly.

## Part 5: Installing Wget

{% hint style="info" %}
If you have issues installing or using Wget, read their [documentation](https://www.gnu.org/software/wget/manual/).
{% endhint %}

To install Wget on Linux, simply run the `apt-get install wget` command in the terminal.
