# Requirements
Portainer is comprised of two elements, the Portainer Server, and the Portainer Agent. Both elements run as lightweight Docker containers on a Docker engine.


By default, Portainer will expose the UI over the port `#!Ruby 9000` and expose a TCP tunnel server over the port `#!Ruby 8000`. The latter is optional and is only required if you plan to use the Edge compute features with Edge agents.

Every single release of Portainer goes through an extensive testing process (functional tests, release tests, post release tests) to ensure that what we are creating actually works as expected. Obviously though, we cannot possibly test Portainer against every single configuration variant out there, so we have elected to test against just a subset.

To try and alleviate confusion as to what we test against, we have documented the configurations that we personally validate as "functional"; any other variant is not tested (this does not mean it wont work, it just means its not tested). 

## Validated Configurations

| Portainer Version        | Release Date   | Docker Version | Kubernetes Version           | Architectures        | Operating Systems                                                                                        |
|--------------------------|----------------|----------------|------------------------------|----------------------|----------------------------------------------------------------------------------------------------------|
| 1.23.2                   | March 25, 2020 | 19.03.6        | N/A                          | ARM32, ARM64, x86_64 | Windows 10 Windows Containers, WSL1 Windows Server 2019, Release 1809 Ubuntu 18.04 & CentOS7             |
| 1.24.0                   | June 2, 2020   | 19.03.10       | N/A                          | ARM32, ARM64, x86_64 | Windows 10 Windows Containers, WSL1 Windows Server 2019, Release 1809 Ubuntu 18.04 & CentOS7             |
| 1.24.1.                  | July 23, 2020  | 19.03.12       | N/A                          | ARM32, ARM64, x86_64 | Windows 10 Windows Containers, WSL1 Windows Server 2019, Release 1809 Ubuntu 18.04 & CentOS 7            |
| Community 2.0            | Aug 31, 2020   | 19.03.12       | 1.17.13 1.18.6 1.18.9 1.19.3 | ARM64, x86_64        | Windows 10 WSL2 "Docker Desktop Default Distro" Windows Server 2019 Release 1809 Ubuntu 18.04 |
| Community 2.0.1          | Jan 7, 2021    | 20.10.0        | 1.17.13 1.18.9 1.19.3 1.20.0 | ARM64, x86_64        | Windows 10 WSL2 "Docker Desktop Default Distro" Windows Server 2019 release 1809 Ubuntu 18.04 |
| Community 2.1.x (latest)   | Feb 2, 2021    | 20.10.2        | 1.20.0                       | ARM64, x86_64        | Windows 10 WSL2 "Docker Desktop Default Distro" Windows Server 2019 release 1809 Ubuntu 18.04 |
                 
## :material-note-text: Notes

If you report a bug for a configuration that is not on the list above, we will ask you to first update your environment to match a validated configuration before continuing.

Business Edition Validated Configurations can be found [here](https://documentation.portainer.io/v2.0-be/deploy/requirements/)

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
