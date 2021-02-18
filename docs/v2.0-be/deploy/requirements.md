# Requirements
Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine.

By default, Portainer will expose the UI over the port `#!Ruby 9000` and expose a TCP tunnel server over the port `#!Ruby 8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.


Every single release of Portainer goes through an extensive testing process (functional tests, release tests, post release tests) to ensure that what we are creating actually works as expected. Obviously though, we cannot possibly test Portainer against every single configuration variant out there, so we have elected to test against just a subset.

To try and alleviate confusion as to what we test against, we have documented the configurations that we personally validate as "functional"; any other variant is not tested (this does not mean it wont work, it just means its not tested). 

## Validated Configurations

| Portainer Version     | Release Date | Docker Version | Kubernetes Version    | Architectures | Operating Systems                                                                            |
|-----------------------|--------------|----------------|-----------------------|---------------|----------------------------------------------------------------------------------------------|
| Business 2.0 (latest) | Dec 3, 2020  | 19.03.13       | 1.17.13 1.18.6 1.19.3 | ARM64, x86_64 | Windows 10 (version 1809) + WSL2, Windows Server 2019 (version 1809) + Windows Containers, Ubuntu 18.04 LTS, Ubuntu 20.04.1* |

*For Docker and K8s on ARM64.

## :material-note-text: Notes

If you report a bug for a configuration that is not on the list above, we will ask you to first update your environment to match a validated configuration before continuing.

Business Edition Validated Configurations can be found [here](https://documentation.portainer.io/v2.0/deploy/requirements/)

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
