# I enabled "Force HTTPS only" and now I'm locked out of Portainer. How do I get back in?

Enabling the **Force HTTPS only** option (either via the toggle in [Settings](../../admin/settings/) or via the --http-disabled command line option) disables logging into Portainer via HTTP. If your HTTPS setup is misconfigured (for example a malformed or missing certificate chain) this can result in you being locked out of Portainer.

To resolve this, you can re-enable HTTP access by using the --http-enabled command line option in your docker run command, for example:

**Business Edition:**

```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ee:latest \
  --http-enabled
```

**Community Edition:**

```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v portainer_data:/data \
  portainer/portainer-ce:latest \
  --http-enabled
```

Make sure to remove the --http-disabled option from your command if you are using it, as this will override the --http-enabled flag.

When started with the --http-enabled flag, you will be able to access Portainer over HTTP once more.

**Alternative: Edit the database directly**

If you are using database encryption you will be unable to use this method.

If you are unable to adjust the run command to include the command line option, you can edit the Portainer database to re-enable HTTP access. The Portainer database is a BoltDB database named portainer.db and can be found in the portainer\_data volume. To edit the database:

1. Stop the Portainer container to ensure there are no locks on the database.
2. Open the portainer.db file in a BoltDB editor (for example [boltbrowser](https://github.com/br0xen/boltbrowser)).
3. Expand the ssl path and set the httpEnabled option to true.
4. Save and exit the editor and restart the Portainer container with the updated database.

You should now be able to log in to Portainer using HTTP.

\
