# Initial configuration

Portainer-Migrate works without any configuration once it is installed. Before your first migration you need a Git repository and token, and depending on your network you may need to tell the add-on where to find the Portainer API.

## Prepare a Git repository

Every migration is committed to Git and deployed from there by Portainer, so you need a repository Portainer-Migrate can write to and Portainer can read from.

* **Use a dedicated repository**, or at least a dedicated branch. Portainer-Migrate writes its own files into it, and on GitHub it updates the branch directly. Avoid a branch other people or pipelines push to at the same time.
* **Make sure the branch exists.** On GitHub, Portainer-Migrate creates the branch if it is missing. On GitLab and Gitea the branch must already exist, so create the repository with an initial commit (a README is enough).
* **Keep it private.** The committed manifests contain your workloads' environment variables, including any passwords or keys they hold. See [What gets translated](reference/what-gets-translated.md).

### Access tokens

Create a personal access token for an account that can push to the repository:

| Provider | Token                                                                                                                | Account access                           |
| -------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| GitHub   | A fine-grained token for the repository with **Contents: Read and write**, or a classic token with the `repo` scope. | Push access to the repository.           |
| GitLab   | A personal, project or group access token with the `api` scope.                                                      | Developer role or higher on the project. |
| Gitea    | An access token with read and write access to repositories.                                                          | Write access to the repository.          |

The same token is used twice: once by the Portainer-Migrate backend to commit the manifests, and again by Portainer to pull them for the GitOps deployment. If the token expires or is revoked, Portainer can no longer pull the stack, so choose an expiry that suits how long you'll keep deploying from this repository.

{% hint style="info" %}
Portainer-Migrate never stores the token in your browser. It saves your provider, server URL, username, repository and branch so you don't have to re-enter them, but you'll need to paste the token again after reloading the page.
{% endhint %}

### Self-hosted Git servers

For GitHub Enterprise, self-managed GitLab or your own Gitea, enter the server's base URL (for example `https://gitea.example.com`) in **Server URL** on the Connections step. Portainer-Migrate adds the API path for you (`/api/v3` for GitHub Enterprise, `/api/v4` for GitLab, `/api/v1` for Gitea).

The Portainer-Migrate pod must be able to reach the server over HTTPS with a certificate it trusts.

## Connect the add-on to the Portainer API

To copy volume data, the Portainer-Migrate backend calls the Portainer API on your behalf, using your Portainer session. By default it finds the API by itself, trying in order:

{% stepper %}
{% step %}
## Portainer's in-cluster Service

`portainer.portainer.svc.cluster.local`, on port 9000.
{% endstep %}

{% step %}
## The same Service

On port 9443.
{% endstep %}

{% step %}
## Your browser's Portainer address

The address your browser uses to reach Portainer.
{% endstep %}
{% endstepper %}

It uses the first one that accepts your session. The **Pre-flight** step shows the result under **Data copy readiness**.

If Pre-flight reports **Automated data copy isn't available** because the add-on couldn't reach the Portainer API, set the address explicitly with these chart values:

| Value                    | Default | Description                                                                                                                                             |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `portainerUrl`           | empty   | A Portainer URL the Portainer-Migrate pod can reach, for example `https://portainer.example.com`. Leave it empty to discover the address automatically. |
| `portainerTlsSkipVerify` | `false` | Set to `true` only if that URL serves a self-signed certificate the add-on can't verify.                                                                |

For example, with Helm:

```bash
helm upgrade <release> oci://ghcr.io/portainer/charts/portainer-migrate \
  --namespace portainer-addon-portainer-migrate \
  --reuse-values \
  --set portainerUrl=https://portainer.example.com
```

Use `helm list -n portainer-addon-portainer-migrate` to find the release name.

{% hint style="warning" %}
When `portainerUrl` is set, Portainer-Migrate also re-checks your Portainer session against it before every Git commit. If the URL is wrong or unreachable, those checks fail and you are sent back to Portainer's home page. Only set it when automatic discovery doesn't work.
{% endhint %}

Stateless migrations, and NFS volumes migrated in place, don't need the Portainer API connection at all.

## Other chart values

These values are only needed for private or air-gapped registries:

| Value              | Default                       | Description                                                                |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------- |
| `image.repository` | `portainer/portainer-migrate` | Pull the add-on image from a different (for example, mirrored) repository. |
| `image.tag`        | The chart's app version       | Pin a specific image tag.                                                  |
| `image.pullPolicy` | `Always`                      | Set to `IfNotPresent` to use an image already present on the node.         |
| `imagePullSecrets` | `[]`                          | Pull secrets for a private registry.                                       |

`addonBasePath` is set by Portainer when it installs the add-on. Don't change it.
