# Security and compliance

Portainer runs exclusively on your servers, within your network, behind your own firewalls. As a result, we do not currently hold any SOC or PCI/DSS compliance because we do not host any of your infrastructure. You can even run Portainer completely disconnected (air-gapped) without any impact on functionality.

We comply with GDPR in relation to the anonymous analytics we collect. Data collection can be disabled at startup (or at any time), and if you are disconnected, it silently fails.

The Portainer code itself does not undergo any formal code analysis, however we scan our published images for vulnerabilities as part of the DockerHub process.

We are also the subject of regular third-party vulnerability analyses. No issues have been reported for some time, and any issues that are discovered are resolved within six weeks.
