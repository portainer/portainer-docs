===========
Limitations
===========

Information about supported platforms and Docker versions.

Docker
======

Portainer is compatible with the following versions of Docker:

* Docker > 1.9

Portainer has partial support for the following versions of Docker:

* Docker 1.9

Portainer is **not** compatible with the following versions of Docker:

* Docker < 1.9

Swarm
=====

Portainer is compatible with the following versions of Docker Swarm standalone:

* Docker Swarm >= 1.2.3

**Note:** this is not related to Docker Swarm mode, see https://docs.docker.com/swarm/swarm_at_scale/deploy-app/

Docker Compose
==============

Compose (`type: 3`) Application Template definitions are limited to using the `version: "2"` form. This is a docker/libcompose limitation.

Supported platforms
===================

Portainer can be deployed on the following platforms:

* Linux amd64
* Linux arm
* Linux arm64
* Linux ppc64le
* Linux s390x
* Windows amd64
* Darwin amd64
