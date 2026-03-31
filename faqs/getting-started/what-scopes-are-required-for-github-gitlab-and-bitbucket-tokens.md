---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/MdgxA76kWxcRmwybM8Ft/faqs/getting-started/what-scopes-are-required-for-github-gitlab-and-bitbucket-tokens
---

# What scopes are required for GitHub, GitLab and Bitbucket tokens?

When using a personal access token, API token, app password, or similar token to authenticate to a Git repository, the token must have sufficient permissions to access the repository. If the token does not have the required scopes, authentication will fail even if the username and token are correct.

For private repositories, the token typically requires at least read access to repositories. The exact scope names vary by provider:

| Provider                    | Required scope      |
| --------------------------- | ------------------- |
| GitHub (classic token)      | repo                |
| GitHub (fine-grained token) | Contents: Read-only |
| GitLab                      | read\_repository    |
| Bitbucket Cloud             | Repository: Read    |
| Azure DevOps                | Code: Read          |

If authentication fails and you are sure your username and token are correct, the most common cause is that the token does not have the required repository permissions.

Note that for repository access, GitHub [does not currently support](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry) the use of fine-grained tokens and your personal access token (classic) will need the `delete:packages`, `repo`, and `write:packages` scopes assigned.
