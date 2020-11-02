# Install required tools on MacOS

The following instructions were followed to install the required tools on macOS 10.14.3 (Mojave)

## Dependencies:

* [Docker for Mac](https://www.docker.com/products/docker-desktop) installs the Docker application and other Docker tools. The latest version is not a requirement for this development stack, however it is always advised to keep up to date as improvements and security fixes are released frequently.
* [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is package manager for installing new software packages on your system and is used to run the Portainer development environment.
* [Node.JS](https://nodejs.org/en/download/) is a JavaScript package used when building applications leveraging networking, such as Portainer. Version 12 or greater is required.
* ​[Golang](https://golang.org/dl/) is an open-source language, from which we build a majority of the Portainer software. Version 1.15 is required.
* Wget is a package for retrieving files using common internet protocols such as HTTP and FTP.

## Docker for Mac

<b>Note</b>: Docker for Mac requires OSX Mountain Lion or later, otherwise it WILL NOT work. Make sure you check your version before you begin following this guide!

### Installation Instructions

* To begin installation [Download Docker](https://www.docker.com/products/docker-desktop).
* Navigate to where the Docker.dmg file downloaded and double click to open.
* Drag-and-drop Docker into your Applications folder.
* Next you must authorize the installation with your system password.
* Wait for Docker to finish installing, and thats it!

<k>Optional Steps:</k>

* It's a good idea to check your Docker installed successfully. Double-click Docker inside your Applications folder to start Docker. 
* The whale icon should appear in your status bar, indicating Docker is running and accessible.

### Checking the installed Docker version

Click on the Docker icon in the status bar and select "About Docker Desktop" from the menu. <b>Depending on your Docker version this option may be worded a little different</b>. A Docker window should now pop up displaying the current version of Docker and its supporting software.

<b>Tip</b>: It is always a good idea to install software based on up-to-date instructions from the offical vendor. This guide was written based on the official Docker help doc for installation on macOS which can be found [here](https://runnable.com/docker/install-docker-on-macos).

<k>That’s it for Docker!</k>

## Yarn

<b>Note</b>: This tutorial will makes use of the Homebrew package manager. If you don't have this installed, you can follow the tutorial on [the offical website](https://brew.sh/).

If you don't want to use Homebrew, you can find alternative tutorials on [the offical Yarn website](https://yarnpkg.com/en/docs/install#mac-stable).

### Installation Instructions:

* Running <code>brew install yarn</code> in the macOS terminal will install Yarn. 
* Confirm Yarn has successfully installed by running <code>yarn --version</code> command in the macOS terminal.

<b>The current version of yarn should now print out in your terminal</b>. This indicates that yarn is successfully installed and running on your system.

### Troubleshooting:

If you are receiving errors when trying to install or use yarn, you can refer to their official documentation [here](https://yarnpkg.com/en/docs/install#mac-stable).

## Node.JS

<b>Tip</b>: If you followed the above steps of this tutorial and used Homebrew to install Yarn, Node.JS should have been installed alongside it. Alternatively you can install it following the offical documentation [here](https://nodejs.org/en/download/).

To check if Node is installed on your system run <code>node --version</code> in your terminal. The current version of Node.JS should now print out.

If you have a version of Node.JS greater than version 6 updating Node.JS is optional, however it is always recommended to check everything is up to date.

### Updating Node.JS

If you are running a version of Node.JS <b>older than version 6</b>, then you will not be able to run the Portainer development environment and will need to upgrade.

You can follow the below instructions to upgrade Node.JS <b>if it was installed using Homebrew.</b>

* Run <code>brew upgrade node</code> in the macOS terminal to upgrade.
* Check the version of node to make sure that it has successfully installed by running <code>node --version</code> in your terminal. You should see a version <b>newer than v6</b>.

### Troubleshooting: 

If you are having errors trying to install or upgrade Node.JS using Homebrew, it might be helpful to refer to the official documentation [here](https://docs.brew.sh/Common-Issues).

## Golang

<b>Note</b>: Go version 1.15 is required. If you are upgrading from an older version of Go you must first [remove the existing version](https://golang.org/doc/install#uninstall).

There are two ways to install Go on a macOS system, using a tar and a package file. This tutorial makes use of the package installer. You can refer to offical go documentation [here](https://golang.org/doc/install#install) for up-to-date instructions.

### Installing GO using the macOS package installer:

* [Download the package file](https://golang.org/dl/), open it, and follow the prompts to install the Go tools. This package installs the Go distribution to /usr/local/go.
* The next step is to create a Go [Workspace](https://golang.org/doc/code.html#Workspaces) directory: navigate to /Home and create a directory (folder) called <code>go</code>. If you'd like to use a different directory, you will need to [set the GOPATH environment variable](https://golang.org/wiki/SettingGOPATH).
* Verify GO is installed correctly by following the official documentation [here](https://golang.org/doc/code.html#Testing).

## Wget

Installing Wget on macOS is simple when you use Homebrew. Just run the <code>brew install wget</code> command in the terminal.

### Troubleshooting: 

If you are having errors trying to install or use Wget, you can refer to the official guide [here](https://www.gnu.org/software/wget/manual/).

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).