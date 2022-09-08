# I enabled "Force HTTPS only" and now I'm locked out of Portainer. How do I get back in?

Enabling the **Force HTTPS only** option (either via the toggle in [Settings](../../admin/settings/#force-https-only) or via the `--http-disabled` command line option) disables logging into Portainer via HTTP. If your HTTPS setup is misconfigured (for example a malformed or missing certificate chain) this can result in you being locked out of Portainer.

To resolve this, you can re-enable HTTP access by using the `--http-enabled` command line option in your docker run command, for example:

```
docker run -d -p 8000:8000 -p 9000:9000 -p 9443:9443 --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ce:2.11.1 \
    --http-enabled
```

{% hint style="info" %}
Make sure to remove the `--http-disabled` option from your command if you are using it, as this will override the `--http-enabled` flag.
{% endhint %}

When started with the `--http-enabled flag`, you will be able to access Portainer over HTTP once more.

## Alternative

The Portainer database is a BoltDB database called `portainer.db` in the portainer_data volume.
Stop the container to release any locks from the database.
You can open the file in a BoltDB editor (e.g. https://github.com/br0xen/boltbrowser) and make the necessary changes. 
In this case, you want to change the httpEnabled option to true under the ssl path.

(Source: https://github.com/portainer/portainer/issues/6126#issuecomment-981156642)
