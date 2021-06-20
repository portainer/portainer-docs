# :fontawesome-solid-clipboard-list: Requirements
Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine.

By default, Portainer will expose the UI over the port `#!Ruby 9000` and expose a TCP tunnel server over the port `#!Ruby 8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.


Every single release of Portainer goes through an extensive testing process (functional tests, release tests, post release tests) to ensure that what we are creating actually works as expected. Obviously though, we cannot possibly test Portainer against every single configuration variant out there, so we have elected to test against just a subset.

To try and alleviate confusion as to what we test against, we have documented the configurations that we personally validate as "functional"; any other variant is not tested (this does not mean it wont work, it just means its not tested). 

## :fontawesome-solid-check-double: Validated Configurations

| Portainer Version     | Release Date | Docker Version | Kubernetes* Version    | Architectures |
|-----------------------|--------------|----------------|-----------------------|---------------|
| Business 2.4 (latest) | May 4, 2021  | 20.10.5      | 1.19 1.20.2 1.21 | ARM64, x86_64 |
| Business 2.0 | Dec 3, 2020  | 19.03.13       | 1.17.13 1.18.6 1.19.3 | ARM64, x86_64 |


*RBAC needs to be enabled on Kubernetes for Portainer Access Control

## :material-note-text: Notes

If you report a bug for a configuration that is not on the list above, we will ask you to first update your environment to match a validated configuration before continuing.

Consumer Edition Validated Configurations can be found [here](https://documentation.portainer.io/v2.0/deploy/requirements/)

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
