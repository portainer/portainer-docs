# CLI Configuration Options

Portainer can be easily tuned using CLI flags.

## Admin password

### From the command line

Portainer allows you to specify a bcrypt encrypted password from the command line for the admin account. You need to generate the bcrypt encrypted password first.

You can generate the encrypted password with the following command if you have installed apache2-utils package:

<pre><code> htpasswd -nb -B admin "your-password" | cut -d ":" -f 2</code></pre>

If your system does not have the mentioned command, you can run a container to run the command:

<pre><code>docker run --rm httpd:2.4-alpine htpasswd -nbB admin "your-password" | cut -d ":" -f 2</code>s</pre>

To specify the admin password from the command line, start Portainer with the <code>--admin-password</code> flag:

<pre><code>docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --admin-password='$2y$05$8oz75U8m5tI/xT4P0NbSHeE7WyRzOWKRBprfGotwDkhBOGP/u802u'</code></pre>

### Inside a file

You can also store the plaintext password inside a file and use the <code>--admin-password-file</code> flag:

Add your password to a file running the following command:

<pre><code> echo -n mypassword > /tmp/portainer_password</code></pre>

Now you can start the Portainer container by running:

<pre><code> docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp/portainer_password:/tmp/portainer_password portainer/portainer-ee:latest --admin-password-file /tmp/portainer_password</code></pre>

This works well with Docker Swarm and Docker secrets too:

<pre><code> echo -n mypassword | docker secret create portainer-pass -</code></pre>

<pre><code> docker service create \
  --name portainer \
  --secret portainer-pass \
  --publish 9000:9000 \
  --publish 8000:8000 \
  --replicas=1 \
  --constraint 'node.role == manager' \
  --mount type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
  portainer/portainer-ee:latest \
  --admin-password-file '/run/secrets/portainer-pass' \
  -H unix:///var/run/docker.sock</code></pre>

Note: This will automatically create an administrator account called admin with the specified password.

## Hiding specific containers

Portainer allows you to hide containers with a specific label by using the -l flag.

For example, take a container started with the label owner=acme (note that this is an example label, you can define your own labels):

<pre><code> docker run -d --label owner=acme nginx</code></pre>

To hide this container, simply add the -l owner=acme option on the CLI when starting Portainer:

<pre><code> docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest -l owner=acme</code></pre>

Note that the -l flag can be repeated multiple times to specify multiple labels:

<pre><code> docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest -l owner=acme -l service=secret</code></pre>

## Use your own logo

You do not like our logo? Want to make Portainer more corporate? Don’t worry, you can easily switch for an external logo (it must be exactly 155px by 55px) using the <code>--logo flag</code>:

<pre><code> docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --logo "https://www.docker.com/sites/all/themes/docker/assets/images/brand-full.svg"</code></pre>

This can also be completed via the GUI in the Portaner Settings menu

## Use your own templates

Portainer allows you to rapidly deploy containers using App Templates.

By default Portainer templates will be used but you can also define your own templates.

Note: at the moment, templates are only loaded once at first Portainer startup. If you already deployed a Portainer instance and want to use your own templates after this, you’ll need to clear any existing templates (default templates) via the HTTP API.

Using the <code>--templates</code> flag you can specify an URL where the template file can be accessed via HTTP.

<pre><code> docker run -d -p 9000:9000 -p 8000:8000 -v /var/run/docker.sock:/var/run/docker.sock portainer/portainer-ee:latest --templates http://my-host.my-domain/templates.json</code></pre>

Suggestion: You can host your template files in [Github](https://www.github.com)

## Available flags

The following CLI flags are available:

- <code>--assets</code>: Path to the assets
- <code>--admin-password</code>: Specify a bcrypt hashed password for the admin user
- <code>--admin-password-file</code>: Path to the file containing the password for the admin user
- <code>--bind, -p</code>: Address and port to serve Portainer (default: :9000)
- <code>--data, -d</code>: Directory where Portainer data will be stored (default: /data on Linux, C:\data on Windows)
- <code>--edge-compute</code>: Automatically enable edge-compute features
- <code>--hide-label, -l</code>: Hide containers with a specific label in the UI
- <code>--host, -H</code>: Docker daemon endpoint
- <code>--logo</code>: URL to a picture to be displayed as a logo in the UI, use Portainer logo if not specified
- <code>--no-analytics</code>: Disable Analytics in app (deprecated)
- <code>--rollback-to-ce</code>: Rollback the database store to CE
- <code>--snapshot-interval</code>: Time interval between two endpoint snapshot jobs expressed as a string, e.g. 30s, 5m, 1h… as supported by the time.ParseDuration method (default: 5m)
- <code>--ssl</code>: Secure Portainer instance using SSL (default: false)
- <code>--sslcert</code>: Path to the SSL certificate used to secure the Portainer instance (default: /certs/portainer.crt, C:\certs\portainer.crt on Windows)
- <code>--sslkey</code>: Path to the SSL key used to secure the Portainer instance (default: /certs/portainer.key, C:\certs\portainer.key on Windows)
- <code>--templates, -t</code>: URL to templates (apps) definitions
- <code>--tlscacert</code>: Path to the CA (default: /certs/ca.pem on Linux, C:\certs\ca.pem on Windows)
- <code>--tlscert</code>: Path to the TLS certificate file (default: /certs/cert.pem, C:\certs\cert.pem on Windows)
- <code>--tlskey</code>: Path to the TLS key (default: /certs/key.pem, C:\certs\key.pem on Windows)
- <code>--tlsverify</code>: TLS support (default: false)
- <code>--tunnel-port</code>: Specify an alternate tunnel port to use with the Edge agent. Use --tunnel-port 8001 with -p 8001:8001 to make the Edge agent communicate on port 8001

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).
