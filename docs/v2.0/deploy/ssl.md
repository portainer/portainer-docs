# Secure Portainer using SSL

By default, Portainer’s web interface and API is exposed over HTTP. This is not secure, Portainer recommends enabling SSL, particularly in a production environment.

To do so, you can use the following flags <code>--ssl</code>, <code>--sslcert</code> and <code>--sslkey</code>:

<pre><code>$ docker run -d -p 443:9000 -p 8000:8000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v ~/local-certs:/certs -v portainer_data:/data portainer/portainer-ce --ssl --sslcert /certs/portainer.crt --sslkey /certs/portainer.key</code></pre>

Now, you can navigate to https://$ip-docker-host

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).