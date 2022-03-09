# Which ARM architectures does Portainer support?

We build our ARM images to support the ARM64 architecture primarily (as indicated in our [requirements and prerequisites](../../start/requirements-and-prerequisites.md)), with ARMv7 support also available. We do not support builds below ARMv7 (such as ARMv6) for Portainer Community Edition.&#x20;

As architectures evolve and the world moves more toward 64-bit as the default, there is less and less support for 32-bit architectures available. In the case of Portainer, some of the binaries we embed are no longer available for ARMv6 and below, preventing us from being able to provide a fully functioning Portainer environment on these older systems.

{% hint style="info" %}
While an ARMv6 build of Portainer Community Edition is available, this is provided as a convenience and the lack of support for some binaries means this build may be missing features and should be used at your own risk - support will not be provided for ARMv6 builds.
{% endhint %}
