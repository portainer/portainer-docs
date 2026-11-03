# Git commit identity

Everyone who deploys needs a Git commit identity, including administrators. It's the personal access token Portainer-IDP commits with, so every commit to a manifest is made as you, and Git history shows who changed what. Anything that writes to Git, such as deploying, adding a namespace or creating a secret, asks you to set one up first.

## Setting your identity

{% stepper %}
{% step %}
### Open the page

Open the account menu and choose **Settings**.
{% endstep %}

{% step %}
### Enter your details

| Field                     | What to enter                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **Provider**              | **GitHub**, **GitLab** or **Gitea / Forgejo**.                                             |
| **Username**              | Optional. Your username on that provider.                                                  |
| **Host URL**              | Only for a self-hosted provider, such as GitHub Enterprise Server or a self-hosted GitLab. |
| **Personal access token** | A token that can push to the repositories you deploy to.                                   |

Choose **Save identity**.
{% endstep %}

{% step %}
### Test it

Enter a **Test repository URL** and choose **Test connection**. Portainer-IDP checks that the token can both read and write that repository.
{% endstep %}
{% endstepper %}

### Token permissions

| Provider                    | What the token needs                                                                                                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GitHub (fine-grained token) | **Contents**: read and write, on the repositories you deploy to.                                                             |
| GitHub (classic token)      | The `repo` scope, and SSO authorization if your organization uses SAML.                                                      |
| GitLab                      | The `api` scope (`write_repository` alone isn't enough), and at least the Developer role on a branch Developers may push to. |
| Gitea / Forgejo             | The `write:repository` scope, and write access to the repository.                                                            |

## How your token is stored

Your token is encrypted with the installation's encryption key and stored in Portainer-IDP's own database. It's never sent back to the browser. To replace it, for example before it expires, enter the new token and choose **Rotate token**.

Your commit identity is separate from the credential on a [Git target](git-targets.md), which Portainer uses only to read the repository.
