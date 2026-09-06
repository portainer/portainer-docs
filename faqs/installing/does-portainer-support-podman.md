# Does Portainer support Podman?

Yes, Portainer does support Podman. Portainer manages Podman through Podman's Docker-compatible API - the compatibility layer Podman's own service exposes to emulate the Docker Engine API - not a native Podman integration. Podman environments therefore behave like Docker environments in Portainer, and support is limited to configurations where that Docker-compatible API behaves consistently.

Currently, support is limited to:

* Podman running on CentOS Stream 9
* Podman version 5
* Podman running in rootful mode (as the root user)

Additionally:

* Podman environments are not supported by the auto-onboarding script.
* It is not possible to add Podman environments via socket when running a Portainer server on Docker (and vice versa).
