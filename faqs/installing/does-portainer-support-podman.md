# Does Portainer support Podman?

Yes, Portainer does support Podman; however, there are some limitations:

Currently, support is limited to:

* Podman running on CentOS Stream 9
* Podman version 5
* Podman running in rootful mode (as the root user)

Additionally:

* Podman environments are not supported by the auto-onboarding script.
* It is not possible to add Podman environments via socket when running a Portainer server on Docker (and vice versa).
