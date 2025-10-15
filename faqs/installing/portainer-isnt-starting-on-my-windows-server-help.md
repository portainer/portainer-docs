# Portainer isn't starting on my Windows server - help!

When running Portainer Server or the Portainer Agent on a Windows server, you may be presented with an error similar to the following:

`failure in a Windows system call: The system cannot find the file specified.`\


In some instances we have seen antimalware software (in particular, Trend Micro Deep Security) silently removing the Portainer and Agent executables from container images when they are pulled. As a result, when the container attempts to start it is missing the executable it needs, and returns the above error.\
In this instance, you can restore the removed executables to the image from within your antimalware software (for Trend Micro Deep Security, this documentation may help). We would also advise adding exceptions for portainer.exe and agent.exe in your antimalware configuration to prevent this in the future.
