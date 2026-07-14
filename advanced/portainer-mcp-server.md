# Portainer MCP Server

Portainer provides an MCP server generated from the Portainer OpenAPI spec (via [FastMCP](https://github.com/PrefectHQ/fastmcp)). It exposes the Portainer REST API as MCP tools, letting an MCP client:&#x20;

* List and inspect environments
* Manage GitOps workflows
* Troubleshoot Docker and Kubernetes resources
* Proxy requests directly to the underlying Docker and Kubernetes APIs of each environment

You'll need a Portainer API key to connect the MCP server. See [Creating an access token](https://docs.portainer.io/api/access#creating-an-access-token) if you don't already have one.

## Deployment options

| Option                  | Best for                              | How it runs                                                   |
| ----------------------- | ------------------------------------- | ------------------------------------------------------------- |
| MCP bundle              | Quick local testing                   | One-click install via `.mcpb` file                            |
| Local (stdio via `uvx`) | Local testing without a bundle        | Stdio process on your machine, connects directly to Portainer |
| Container               | Multiple users sharing one deployment | Runs in your infrastructure; users connect over HTTPS         |

### 1. MCP bundle (one-click install)

The recommended way to test the MCP server locally. Your client must support MCP bundles.

1. Fetch the self-contained `.mcpb` bundle for your platform from the latest release.
2. Double-click to install.
3. Enter your Portainer URL and API key.

### 2. Local (stdio via `uvx`)

The other way to test the MCP server locally. Runs as a stdio process on your machine and connects directly to the Portainer instance.

{% hint style="info" %}
`uv` must be installed and available on `PATH`. See [the uv install docs](https://docs.astral.sh/uv/getting-started/installation/).
{% endhint %}

If your Portainer instance uses self-signed TLS certificates, set `PORTAINER_TLS_VERIFY=0`.

Register with Claude Code:

```
claude mcp add portainer \
  -e PORTAINER_URL=https://portainer.example.com \
  -e PORTAINER_API_KEY=ptr_xxxxxxxxxxxxxxxx \
  -- uvx --from "mcp-portainer~=2.43.0" mcp-portainer
```

For other clients, see [`docs/distribution/`](https://github.com/portainer/portainer-mcp/tree/main/docs/distribution).

### 3. Container (Team deployment)

The recommended setup when multiple users need to interact with your Portainer instance via MCP. The server runs as a [`container`](https://hub.docker.com/r/portainer/portainer-mcp) inside your infrastructure; users connect from their workstations over HTTPS.

Each request carries two credentials:

* A **shared gate secret** (`PORTAINER_MCP_AUTH_TOKEN`) that admits the request to the MCP server.
* The **user's own Portainer API key**, forwarded by their client, which determines what that user can actually do (governed by their existing Portainer identity and permissions).

Both values are sent over the wire, so the transport must be secured. You must declare one of three transport postures:

**Required for every option:**

* `PORTAINER_MCP_ALLOWED_HOSTS` — set to the hostname or IP address users will use to reach the MCP server. This is a DNS-rebinding allowlist; requests to any other host are rejected with a `421` status.
* `PORTAINER_MCP_AUTH_TOKEN` — required in HTTP mode. This is the shared front-gate secret you distribute to users; their MCP client sends it via the `Authorization` header.

#### Option A - BYO certificates

{% hint style="info" %}
The server will warn if using self-signed certificates. Using a private CA cert won't warn, but in both cases you will likely need to jump through some hoops to configure the MCP clients to accept it.
{% endhint %}

Deploy the container to use your own set of TLS certificates:

```
TOKEN=$(openssl rand -hex 32)
docker run -d --name portainer-mcp -p 17717:17717 \
	-v /etc/portainer-mcp/tls:/tls:ro \
	-e PORTAINER_URL=https://portainer.example.com \
	-e PORTAINER_MCP_AUTH_TOKEN="$TOKEN" \
	-e PORTAINER_MCP_ALLOWED_HOSTS=mcp.example.com:17717 \
	-e PORTAINER_MCP_TLS_CERT=/tls/cert.pem \
	-e PORTAINER_MCP_TLS_KEY=/tls/key.pem \
	portainer/portainer-mcp:2.43
```

Then connect your client:

```
claude mcp add portainer --transport http https://mcp.example.com:17717/mcp \
  --header "Authorization: Bearer <gate-token>" \
  --header "X-Portainer-API-Key: <ptr_user_key>"
```

#### Option B - TLS-terminated reverse proxy

Bring your own proxy and terminate TLS in front of the container.

* Don't publish the container port when a reverse proxy sits in front of it — only the proxy should be able to reach the container.
* Set `PORTAINER_MCP_FORWARDED_ALLOW_IPS` to your proxy's exact IP, if stable.
* Confirm your proxy forwards the original `Host` header and adds `X-Forwarded-Proto: https`.

```
TOKEN=$(openssl rand -hex 32)
docker run -d --name portainer-mcp \
	-e PORTAINER_URL=https://portainer.example.com \
	-e PORTAINER_MCP_AUTH_TOKEN="$TOKEN" \
	-e PORTAINER_MCP_ALLOWED_HOSTS=mcp.example.com \
	-e PORTAINER_MCP_TRUST_PROXY_TLS=1 \
	-e PORTAINER_MCP_FORWARDED_ALLOW_IPS=172.18.0.0/16 \
	portainer/portainer-mcp:2.43
```

Then connect your client:

```
claude mcp add portainer --transport http https://mcp.example.com/mcp \
  --header "Authorization: Bearer <gate-token>" \
  --header "X-Portainer-API-Key: <ptr_user_key>"
```

#### Option C - Plaintext HTTP

{% hint style="danger" %}
**This option is not recommended** outside a trusted private network. This is a deliberate, dangerous choice.
{% endhint %}

Set `PORTAINER_MCP_DANGEROUSLY_ALLOW_PLAINTEXT_HTTP=1` to start the server with HTTP only:

```
TOKEN=$(openssl rand -hex 32)
docker run -d --name portainer-mcp -p 17717:17717 \
	-e PORTAINER_URL=https://portainer.example.com \
	-e PORTAINER_MCP_AUTH_TOKEN="$TOKEN" \
	-e PORTAINER_MCP_ALLOWED_HOSTS=mcp.example.com:17717 \
	-e PORTAINER_MCP_DANGEROUSLY_ALLOW_PLAINTEXT_HTTP=1 \
	portainer/portainer-mcp:2.43
```

Then connect your client:

```
claude mcp add portainer --transport http http://mcp.example.com:17717/mcp \
  --header "Authorization: Bearer <gate-token>" \
  --header "X-Portainer-API-Key: <ptr_user_key>"
```

## Restricting and expanding the MCP server capabilities

Enabled by default:

* Basic Portainer operation support (settings, version, environments,etc.)
* Docker operation support
* Kubernetes operation support
* Docker and Kubernetes proxy support
* Redaction of environment variable values

To restrict or expand this set, see [`docs/profiles.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/profiles.md).

## Version compatibility

Match the MCP server's minor version to your Portainer minor version. The major and minor version together indicate which Portainer API version the embedded spec targets.

&#x20;see [`docs/versioning.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/versioning.md) for the full versioning policy.

## Configuration

The MCP server supports:

* Enabling different tool sets via profile configuration
* Widening API coverage by specifying extra tags
* Exposing read-only capabilities only
* Disabling proxy capabilities
* Tuning transport capabilities and TLS posture
* Logging configuration

See [`docs/configuration.md`](https://github.com/portainer/portainer-mcp/blob/main/docs/configuration.md) for details.
