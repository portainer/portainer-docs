# Stream auth and activity logs to an external provider

{% hint style="warning" %}
This is an experimental feature.
{% endhint %}

With Portainer 2.20 and later, you can configure the streaming of Portainer's authentication and activity logs to an external Security Information and Event Management (SIEM) system in Syslog format. This is done via CLI flags when starting the Portainer container.

## Available CLI flags

| Flag                            | Description                                                                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `--syslog-address`              | Syslog Address to stream authentication and activity logs. FQDN or IP Address only.                                                  |
| `--syslog-port`                 | Syslog Port for the address above. Defaults to `514`.                                                                                |
| `--syslog-protocol`             | Syslog Protocol to send logs to the Syslog Server. Supported values are `udp`, `tcp`, or `tcp+tls`. Defaults to `udp`.               |
| `--syslog-format`               | Syslog Format to be used. Supported values are `rfc3164` or `rfc5424`. Defaults to `rfc5424.`                                        |
| `--syslog-source-hostname`      | The hostname value that will be shown in the Syslog server in the messages. Defaults to `portainer`.                                 |
| `--syslog-insecure-skip-verify` | Disable TLS server verification when using `tcp+tls` protocol. Should only be enabled for testing. Defaults to `false`.              |
| `--syslog-ca-cert`              | The path to the trusted CA used by the Syslog server. Defaults to `/syslog/certs/ca.pem`.                                            |
| `--syslog-cert`                 | The path to the client certificate that is used to authenticate to the Syslog server via mTLS. Defaults to `/syslog/certs/cert.pem`. |
| `--syslog-key`                  | The path to the client key that is used to authenticate to the Syslog server via mTLS. Defaults to `/syslog/certs/key.pem`.          |

## Example usage

The following is an example `docker run` command to start Portainer using the above options to stream logs to a SIEM provider at `syslog.mydomain.com` on UDP port `514`.

{% hint style="warning" %}
As the flags are Portainer options, they must be specified after the image specification.
{% endhint %}

```
docker run -d -p 8000:8000 -p 9443:9443 \
    --name portainer \
    --restart=always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v portainer_data:/data \
    portainer/portainer-ee:lts \
    --syslog-addr=syslog.mydomain.com \
    --syslog-port=514 \
    --syslog-source-hostname="my-portainer-instance"
```
