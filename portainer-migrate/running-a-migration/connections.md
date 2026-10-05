# Connections

The **Connections** step sets the Git repository your migrated manifests are committed to. Portainer deploys from that repository using GitOps; Portainer-Migrate never applies anything to Kubernetes directly.

## Fields

| Field                                       | Description                                                                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Provider**                                | **GitHub**, **GitLab** or **Gitea**.                                                                                                |
| **Server URL (self-hosted only, optional)** | The base URL of a self-hosted server, for example `https://gitea.example.com`. Leave empty for github.com, gitlab.com or gitea.com. |
| **Git username**                            | The account the token belongs to. Portainer uses it to authenticate when it pulls the repository.                                   |
| **Access token (write access)**             | A personal access token that can push to the repository. See [Initial configuration](../initial-configuration.md#access-tokens).    |
| **Repository**                              | The repository to commit to, chosen from a list.                                                                                    |
| **Branch**                                  | The branch to commit to and deploy from. Defaults to `main`.                                                                        |

## Choosing a repository

Once you have chosen a provider and entered a token, Portainer-Migrate tests the connection automatically (shortly after you stop typing). If it succeeds, you'll see **connected** with the number of repositories found, and the **Repository** list fills in.

Only repositories your token can write to are listed:

* **GitHub and Gitea:** repositories where you have push, maintain or admin access.
* **GitLab:** projects you are a member of with the Developer role or higher.

The list shows your most recently updated repositories: up to 100 on GitHub and GitLab, and up to 50 on Gitea. If the repository you want isn't listed, update it (push a commit) or use a token scoped to fewer repositories.

If the test fails, you'll see **Couldn't connect** with the provider's error. Check the provider, server URL and token, then edit any field to test again.

## How the token is used

The Portainer-Migrate backend uses your token to commit the manifests. The GitOps stack it creates is then given the same username and token so Portainer can pull from the repository. Each stack keeps its own copy, so if you rotate the token, update the Git authentication on each migrated stack in Portainer.

The token is also saved in Portainer as a Git credential named `portainer-migrate-<repository>`, which later migrations to the same repository reuse.

The token is never written to your browser's storage, so it is gone if you reload the page. Your provider, server URL, username, repository and branch are remembered in this browser.

{% hint style="info" %}
If you see "The access token contains spaces, line breaks or invisible characters", clear the field and paste the token again. Some password managers and terminals add whitespace when you copy.
{% endhint %}
