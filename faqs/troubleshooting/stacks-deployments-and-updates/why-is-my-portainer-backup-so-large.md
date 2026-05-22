---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/faqs/troubleshooting/stacks-deployments-and-updates/why-is-my-portainer-backup-so-large
---

# Why is my Portainer backup so large?

{% hint style="info" %}
For a full list of what is included in a backup, see [this FAQ](../../getting-started/what-does-portainers-backup-include.md).
{% endhint %}

**Issue**

Your Portainer backup file is much larger than expected.

**Cause**

If you deploy stacks from a Git repository, Portainer clones the repository to the Portainer data directory at `/data/compose/<stack-id>/`.

This data is included in the Portainer backup. If the repository is large, the backup will also be large.

Portainer reduces the size where possible by:

* Performing a shallow clone (`--depth 1`) so only the latest commit is pulled.
* Cloning only the selected branch.
* Not pulling tags.
* Removing the `.git` directory after cloning.
* Not cloning submodules.

However, the working copy of the repository is still stored on disk and included in backups.

If multiple stacks are deployed from the same repository (for example, from a monorepo), the repository is cloned separately for each stack. This duplicates the repository contents and can significantly increase backup size.

If relative path volumes are used when deploying the stack, the repository is cloned to the specified host path instead of `/data/compose/<stack-id>/`. In this case, the repository contents are not included in the Portainer backup, only the Compose file is.

**Resolution**

To reduce backup size:

* Keep Git repositories used for stacks as small as possible.
* Avoid large monorepos when deploying multiple stacks from the same repository.
* Use separate repositories per stack where possible.
* Use relative path volumes if appropriate so the repository is stored outside the Portainer data directory.
