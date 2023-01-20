# CLI configuration options

## Configuration flags available at the command line

| Flag                                                   | Description                                                                                                                                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--admin-password`                                     | Specifies a bcrypt hashed password for the admin user.                                                                                                                        |
| `--admin-password-file`                                | Specifies the path to the file containing the password for the admin user.                                                                                                    |
| <p><code>--bind</code></p><p><code>-p</code></p>       | Specifies the address and port from which to serve Portainer (default: `:9443`).                                                                                              |
| `--bind-https`                                         | Specifies the address and port from which to serve Portainer via HTTPS (default: `:9443`).                                                                                    |
| <p><code>--data</code></p><p><code>-d</code></p>       | Specifes the directory where Portainer data will be stored (default: `/data` on Linux, `C:\data` on Windows).                                                                 |
| `--edge-compute`                                       | Automatically enables Edge Compute features.                                                                                                                                  |
| <p><code>--hide-label</code></p><p><code>-l</code></p> | Hides containers with a specific label in the UI.                                                                                                                             |
| `--http-disabled`                                      | Serve Portainer only on HTTPS. Overrides `--http-enabled`. Ensure your HTTPS configuration is fully working and any agents are configured for HTTPS before enabling this.     |
| `--http-enabled`                                       | Serve Portainer on HTTP. If used in combination with `--http-disabled`, this is ignored.                                                                                      |
| <p><code>--host</code></p><p><code>-H</code></p>       | Specifies the Docker daemon endpoint.                                                                                                                                         |
| `--license-key`                                        | Specifies the license key to use. Only applicable to Portainer Business Edition.                                                                                              |
| `--log-level`                                          | Specifies the log level that Portainer uses, e.g. `DEBUG`. (default: `INFO`)                                                     |
| `--logo`                                               | Specifies the URL to the image to be displayed as a logo in the UI. If not specified, the Portainer logo is used instead.                                                     |
| `--snapshot-interval`                                  | Specifies the time interval between two environment snapshot jobs expressed as a string. For example 30s, 5m, 1h… Supported by the `time.ParseDuration` method (default: 5m). |
| `--sslcacert`                                          | Specifies the path to the certificate authority (CA) certificate used to secure the Portainer instance.                                                                       |
| `--sslcert`                                            | Specifies the path to the SSL certificate used to secure the Portainer instance (default: `/certs/portainer.crt` on Linux, `C:\certs\portainer.crt` on Windows).              |
| `--sslkey`                                             | Specifies the path to the SSL key used to secure the Portainer instance (default: `/certs/portainer.key` on Linux, `C:\certs\portainer.key` on Windows).                      |
| <p><code>--templates</code></p><p><code>-t</code></p>  | Specifies the URL to the templates (apps) definitions.                                                                                                                        |
| `--tlscacert`                                          | Specifies the path to the CA used for Docker daemon connections (default: `/certs/ca.pem` on Linux, `C:\certs\ca.pem` on Windows).                                            |
| `--tlscert`                                            | Specifies the path to the TLS certificate file used for Docker daemon connections (default: `/certs/cert.pem`, `C:\certs\cert.pem` on Windows).                               |
| `--tlskey`                                             | Specifies the path to the TLS key used for Docker daemon connections (default: `/certs/key.pem`, `C:\certs\key.pem` on Windows).                                              |
| `--tlsverify`                                          | TLS support (default: `false`).                                                                                                                                               |
| `--tlsskipverify`                                      | Disable TLS server verification.                                                                                                                                              |
| `--tunnel-addr`                                        | Specifies the tunnel address to listen on for use with the Edge Agent. Defaults to `0.0.0.0` (all interfaces).                                                                |
| `--tunnel-port`                                        | Specifies an alternate tunnel port to use with the Edge Agent. Use `--tunnel-port 8001` with `-p 8001:8001` to make the Edge Agent communicate on port `8001`.                |
| `--version`                                            | Display the version of Portainer.                                                                                                                                             |

## Creating an admin account and password

{% hint style="info" %}
The commands in this section will automatically create an administrator account called `admin` with the password you specify.
{% endhint %}

### Method 1: Creating the account from the command line

You can specify a bcrypt-encrypted password from the command line for the admin account. If you have installed the `apache2-utils` package, create the password using the following command:&#x20;

```
htpasswd -nb -B admin "your-password" | cut -d ":" -f 2
```

If your system does not have that command, use a container to run the command instead:

```
docker run --rm httpd:2.4-alpine htpasswd -nbB admin "your-password" | cut -d ":" -f 2
```

Once the password has been created, specify the admin password from the command line by starting Portainer with the `--admin-password` flag:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --admin-password='$2y$05$8oz75U8m5tI/xT4P0NbSHeE7WyRzOWKRBprfGotwDkhBOGP/u802u'
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest --admin-password='$2y$05$8oz75U8m5tI/xT4P0NbSHeE7WyRzOWKRBprfGotwDkhBOGP/u802u'
```
{% endtab %}
{% endtabs %}

### Method 2: Creating the account using a file

You can also store a plain text password inside a file and use the `--admin-password-file` flag. First, add the password to a file using the following example command as a guide:

```
echo -n mypassword > /tmp/portainer_password
```

Next, start the Portainer container:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer-ee:latest --admin-password-file /tmp/portainer_password
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer-ce:latest --admin-password-file /tmp/portainer_password
```
{% endtab %}
{% endtabs %}

This also works well with Docker Swarm and Docker Secrets:

```
echo -n mypassword | docker secret create portainer-pass -
```

{% tabs %}
{% tab title="Business Edition" %}
```
docker service create \
    --name portainer \
    --secret portainer-pass \
    --publish 9443:9443 \
    --publish 8000:8000 \
    --replicas=1 \
    --constraint 'node.role == manager' \
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
    portainer/portainer-ee:latest \
    --admin-password-file '/run/secrets/portainer-pass' \
    -H unix:///var/run/docker.sock
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker service create \
    --name portainer \
    --secret portainer-pass \
    --publish 9443:9443 \
    --publish 8000:8000 \
    --replicas=1 \
    --constraint 'node.role == manager' \
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
    portainer/portainer-ce:latest \
    --admin-password-file '/run/secrets/portainer-pass' \
    -H unix:///var/run/docker.sock
```
{% endtab %}
{% endtabs %}

## Hiding specific containers

Portainer lets you hide containers with a specific label by using the `-l` flag. Here's an example showing a container labeled `owner=acme`:

```
docker run -d --label owner=acme nginx
```

To hide this container, when starting Portainer add the `-l owner=acme` option on the CLI:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest -l owner=acme
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest -l owner=acme
```
{% endtab %}
{% endtabs %}

To hide multiple containers, repeat the `-l` flag:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest -l owner=acme -l service=secret
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest -l owner=acme -l service=secret
```
{% endtab %}
{% endtabs %}

## Using your own logo

{% hint style="info" %}
Images must be exactly 155px by 55px in size.
{% endhint %}

Replace our logo with your own using the `--logo` flag to specify the location of the image file:

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"
```
{% endtab %}
{% endtabs %}

You can also update the logo in the Portainer UI (**Settings** menu).

## Defining your own app templates

{% hint style="info" %}
We suggest hosting template files on [GitHub](https://www.github.com/) so Portainer can access them without authentication.
{% endhint %}

Portainer allows you to rapidly [deploy containers using app templates](../user/docker/templates/deploy-container.md). By default, Portainer templates will be used but you can also define your own.

Templates are loaded once when Portainer is first started. If you already deployed a Portainer instance then decide to use your own templates, you’ll need to clear the default templates either in the user interface or through the HTTP API. Use the `--templates` flag to specify a URL where the template file can be accessed via HTTP.

{% tabs %}
{% tab title="Business Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --templates http://my-host.my-domain/templates.json
```
{% endtab %}

{% tab title="Community Edition" %}
```
docker run -d -p 9443:9443 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ce:latest --templates http://my-host.my-domain/templates.json
```
{% endtab %}
{% endtabs %}
