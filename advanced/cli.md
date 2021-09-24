# CLI configuration options

## Configuration flags available at the command line

<table>
  <thead>
    <tr>
      <th style="text-align:left">Flag</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>--admin-password</code>
      </td>
      <td style="text-align:left">Specifies a bcrypt hashed password for the admin user.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--admin-password-file</code>
      </td>
      <td style="text-align:left">Specifies the path to the file containing the password for the admin user.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>--bind</code>
        </p>
        <p><code>-p</code>
        </p>
      </td>
      <td style="text-align:left">Specifies the address and port from which to serve Portainer (default: <code>:9000</code>).</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>--data</code>
        </p>
        <p><code>-d</code>
        </p>
      </td>
      <td style="text-align:left">Specifes the directory where Portainer data will be stored (default: <code>/data</code> on
        Linux, <code>C:\data</code> on Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--edge-compute</code>
      </td>
      <td style="text-align:left">Automatically enables Edge Compute features.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>--hide-label</code>
        </p>
        <p><code>-l</code>
        </p>
      </td>
      <td style="text-align:left">Hides containers with a specific label in the UI.</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>--host</code>
        </p>
        <p><code>-H</code>
        </p>
      </td>
      <td style="text-align:left">Specifies the Docker daemon endpoint.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--logo</code>
      </td>
      <td style="text-align:left">Specifies the URL to the image to be displayed as a logo in the UI. If
        not specified, the Portainer logo is used instead.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--snapshot-interval</code>
      </td>
      <td style="text-align:left">Specifies the time interval between two endpoint snapshot jobs expressed
        as a string. For example 30s, 5m, 1h&#x2026; Supported by the <code>time.ParseDuration</code> method
        (default: 5m).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--ssl</code>
      </td>
      <td style="text-align:left">The secure Portainer instance using SSL (default: false).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--sslcert</code>
      </td>
      <td style="text-align:left">Specifies the path to the SSL certificate used to secure the Portainer
        instance (default: <code>/certs/portainer.crt</code> on Linux, <code>C:\certs\portainer.crt</code> on
        Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--sslkey</code>
      </td>
      <td style="text-align:left">Specifies the path to the SSL key used to secure the Portainer instance
        (default: <code>/certs/portainer.key</code> on Linux, <code>C:\certs\portainer.key</code> on
        Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <p><code>--templates</code>
        </p>
        <p><code>-t</code>
        </p>
      </td>
      <td style="text-align:left">Specifies the URL to the templates (apps) definitions.</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--tlscacert</code>
      </td>
      <td style="text-align:left">Specifies the path to the CA (default: <code>/certs/ca.pem</code> on Linux, <code>C:\certs\ca.pem</code> on
        Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--tlscert</code>
      </td>
      <td style="text-align:left">Specifies the path to the TLS certificate file (default: <code>/certs/cert.pem</code>, <code>C:\certs\cert.pem</code> on
        Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--tlskey</code>
      </td>
      <td style="text-align:left">Specifies the path to the TLS key (default: <code>/certs/key.pem</code>, <code>C:\certs\key.pem</code> on
        Windows).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--tlsverify</code>
      </td>
      <td style="text-align:left">TLS support (default: <code>false</code>).</td>
    </tr>
    <tr>
      <td style="text-align:left"><code>--tunnel-port</code>
      </td>
      <td style="text-align:left">Specifies an alternate tunnel port to use with the Edge Agent. Use <code>--tunnel-port 8001</code> with <code>-p 8001:8001</code> to
        make the Edge Agent communicate on port <code>8001</code>.</td>
    </tr>
  </tbody>
</table>

## Creating an admin account and password

{% hint style="info" %}
The commands in this section will automatically create an administrator account called `admin` with the password you specify.
{% endhint %}

### Method 1: Creating the account from the command line

You can specify a bcrypt-encrypted password from the command line for the admin account. If you have installed the `apache2-utils` package, create the password using the following command: 

```text
htpasswd -nb -B admin "your-password" | cut -d ":" -f 2
```

If your system does not have that command, use a container to run the command instead:

```text
docker run --rm httpd:2.4-alpine htpasswd -nbB admin "your-password" | cut -d ":" -f 2
```

Once the password has been created, specify the admin password from the command line by starting Portainer with the `--admin-password` flag:

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee --admin-password='$2y$05$8oz75U8m5tI/xT4P0NbSHeE7WyRzOWKRBprfGotwDkhBOGP/u802u'
```

### Method 2: Creating the account using a file

You can also store a plain text password inside a file and use the `--admin-password-file` flag. First, add the password to a file using the following example command as a guide:

```text
echo -n mypassword > /tmp/portainer_password
```

Next, start the Portainer container:

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer-ee --admin-password-file /tmp/portainer_password
```

This also works well with Docker Swarm and Docker Secrets:

```text
echo -n mypassword | docker secret create portainer-pass -
```

```text
docker service create \
    --name portainer \
    --secret portainer-pass \
    --publish 9000:9000 \
    --publish 8000:8000 \
    --replicas=1 \
    --constraint 'node.role == manager' \
    --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
    portainer/portainer-ee \
    --admin-password-file '/run/secrets/portainer-pass' \
    -H unix:///var/run/docker.sock
```

## Hiding specific containers

Portainer lets you hide containers with a specific label by using the `-l` flag. Here's an example showing a container labeled `owner=acme`:

```text
docker run -d --label owner=acme nginx
```

To hide this container, when starting Portainer add the `-l owner=acme` option on the CLI:

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee -l owner=acme
```

To hide multiple containers, repeat the `-l` flag:

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee -l owner=acme -l service=secret
```

## Using your own logo

{% hint style="info" %}
Images must be exactly 155px by 55px in size.
{% endhint %}

Replace our logo with your own using the `--logo` flag to specify the location of the image file:

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"
```

You can also update the logo in the Portainer UI \(**Settings** menu\).

## Defining your own app templates

{% hint style="info" %}
We suggest hosting template files on [GitHub](https://www.github.com/) so Portainer can access them without authentication.
{% endhint %}

Portainer allows you to rapidly [deploy containers using app templates](../user/docker/templates/deploy-container.md). By default, Portainer templates will be used but you can also define your own.

Templates are loaded once when Portainer is first started. If you already deployed a Portainer instance then decide to use your own templates, you’ll need to clear the default templates either in the user interface or through the HTTP API. Use the `--templates` flag to specify a URL where the template file can be accessed via HTTP.

```text
docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee --templates http://my-host.my-domain/templates.json
```

