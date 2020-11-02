# Install required tools on Linux

The following instructions were followed to install the required tools on Linux

<b>Note</b>: This tutorial was written using Ubuntu 18.04.2 LTS. You can refer to the linked documentation within the dependencies sections for instructions for other systems.

## Dependencies:

* [Docker CE](https://docs.docker.com/install/) is the docker application run on your machine to enable use of docker features. The latest version is not a requirement for this development stack, however it is always advised to keep up to date as improvements and security fixes are released frequently.
* ​[Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is package manager for installing new software packages on your system and is used to run the Portainer dev environment .
* [Node.JS](https://nodejs.org/en/download/) is a JavaScript package used when building applications leveraging networking, such as Portainer. Version 12 or greater is required.
* [Golang](https://golang.org/dl/) is an open-source language, from which we build a majority of the Portainer software. Version 1.15 is required.
* Wget is a package for retrieving files using common internet protocols such as HTTP and FTP.

## Docker

<b>Note</b>: he below instructions were run on Ubuntu, for up-to-date instructions on this and other Linux flavours refer to [the official Docker CE documentation](https://docs.docker.com/install/).

You must configure the Docker repository before installing Docker.

### Configure Docker repository

* Update your system's packages:

```
sudo apt-get update
```

* Install required packages to use repos over HTTPS:

```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

* Install the official GPG key for Docker:

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

* Verify that you now have the key with the fingerprint 9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 :

```
sudo apt-key fingerprint 0EBFCD88
```

* Correct output should be:

```
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
sub   rsa4096 2017-02-22 [S]
```

* Use the following command to set up the stable repository:

```
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```

### Installing Docker

* Update your system's packages:

```
sudo apt-get update
```

* Install Docker and it's associated packages:

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

* Verify that Docker was correctly installed and is running on your system:

```
sudo docker run hello-world
```

This command should download a test image, run it in a container and print an informational message then exit.

<b>Tip</b>: It is always a good idea to install software based on up-to-date instructions from the offical vendor. This guide was written based on the official Docker help doc for installation on Linux which can be found [here](https://docs.docker.com/install/).

<k>That’s it for Docker!</k>

## Yarn

<b>Note</b>: If you are running a different Linux flavour than Ubuntu, you can refer to the official installation instructions for yarn on Linux [here](https://yarnpkg.com/en/docs/install).

### Installation Instructions:

* Running the below command in the terminal will configure the yarn repository on your system: 

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

* Update your system's packages & install yarn:

```
sudo apt-get update && sudo apt-get install yarn
```

* Confirm Yarn has successfully installed by running the below command in the terminal

```
yarn --version
```

<b>The current version of yarn should now print out in your terminal</b>. This indicates that yarn is successfully installed and running on your system.

### Troubleshooting:

If you are receiving errors when trying to install or use yarn, you can refer to their official documentation [here](https://yarnpkg.com/en/docs/install#mac-stable).

## Node.JS

<b>Note</b>: This tutorial will make use of NVM to install Node.JS (Node.JS version 12 or greater is required). 

NVM allows install of multiple different versions of Node.JS on a system & provides an easy way to switch between them. You can find the official documentation for NVM [here](https://github.com/creationix/nvm).

### Installing or Updating Node.JS

* Install or update Node.JS to the latest version by entering the below command in the terminal:

```
nvm install node
```

* Check if Node is installed on your system:

```
node --version
```

<b>The latest version</b> of Node.JS should now print out.

### Troubleshooting: 

If you cannot install or update Node.JS, refer to the official NVM documentation [here](https://github.com/creationix/nvm).

## Golang

<b>Note</b>: Go version 1.15 is required. You can refer to offical go documentation [here](https://golang.org/doc/install#install) for up to date instructions. If you are upgrading from an older version of Go you must first [remove the existing version](https://golang.org/doc/install#uninstall). 

### Installing GO using a Linux Tar file:

* [Download](https://golang.org/dl/) the appropriate version of go for your system appropriate for your system and navigate to where it was downloaded.

* Extract it to the /usr/local directory:

```
sudo tar -C /usr/local -xzf go1.15.3.linux-amd64.tar.gz
```

* Add <code>/usr/local/go/bin</code> to the PATH environment variable inside your shell profile (example using bash):

```
echo "export PATH=$PATH:$HOME/go/bin:/usr/local/go/bin" >> ~/.bashrc
```

<b>Note</b>: You may need to logout and log back in for this to take effect.

* Verify GO is installed correctly by following the Test your installation section of the offical documentation [here](https://golang.org/doc/code.html#Testing).

Troubleshooting: 

If you are having errors trying to install or use GO, you can refer to the Getting help section of the official guide [here](https://golang.org/doc/install#help).

## Wget

Installing Wget on Linux is simple enough. Just run the <code>apt-get install wget</code> command in the terminal.

### Troubleshooting: 

If you are having errors trying to install or use Wget, you can refer to the official guide [here](https://www.gnu.org/software/wget/manual/).

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).