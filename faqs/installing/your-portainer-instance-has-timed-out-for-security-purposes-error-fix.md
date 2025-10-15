# "Your Portainer instance has timed out for security purposes" error fix

You may encounter the following message in your Portainer logs after installation:

```
the Portainer instance timed out for security purposes, to re-enable your Portainer instance, you will need to restart Portainer
```

#### Cause

When you first install Portainer, if you do not log in and complete the initial setup within 5 minutes the Portainer service within the container stops. This is a security measure to prevent a malicious user taking over a fresh Portainer installation and configuring it themselves. To avoid this happening, we suggest completing the initial setup within 5 minutes of starting the Portainer container for the first time.&#x20;

#### Resolution

If you are receiving the above error message, you can resolve this by stopping and restarting the Portainer container. This will give you another 5 minutes to complete the initial setup. On Docker Standalone for example, you can do this by running:

```
docker stop portainer
docker start portainer
```

In some cases you may also need to remove the Portainer container with `docker rm portainer` then start it again with the `docker run` command from the installation instructions.

If you are receiving this message on a previously working Portainer installation, check to ensure your `portainer_data` volume is correctly mounted to the Portainer container and that it contains your Portainer configuration files. If your `portainer_data` volume is not mounted correctly or the configuration files are missing, Portainer assumes you are performing a fresh installation and will act accordingly.
