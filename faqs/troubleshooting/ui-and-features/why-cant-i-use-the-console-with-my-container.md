# Why can't I use the console with my container?

To use Portainer's Console feature, your container must first contain a shell. You can select the shell that your container uses from the dropdown. If your container image does not come with a shell included (for example, images built from Docker's scratch image) then you will not be able to use the console feature.

If your container image does support a shell but the console does not work, you may receive an error message indicating that the interactive-flag and TTY-flag are not set. You can set these options on your container by editing the running container and selecting the **Interactive & TTY** option in the **Advanced container settings** section.
