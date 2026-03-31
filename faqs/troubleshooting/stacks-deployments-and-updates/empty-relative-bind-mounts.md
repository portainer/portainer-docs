---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/MdgxA76kWxcRmwybM8Ft/faqs/troubleshooting/stacks-deployments-and-updates/empty-relative-bind-mounts
---

# Why do relative bind mounts appear empty after updating a stack that was deployed from Git?

When a stack deployed from a Git repository is updated, Portainer re-clones the repository if the commit has changed. This removes and recreates the repository directory on the host. If a container uses a relative path bind mount that points to files or directories inside the Git repository and that container is not recreated during the update, the bind mount can appear empty inside the container. This happens because the container is still referencing the previous filesystem path, which no longer exists after the repository is re-cloned.

Containers are only recreated when their Compose file or related configuration changes, unless [GitOps Updates with Force redeployment](../../../user/docker/stacks/add.md#option-3-git-repository) is enabled. If a configuration file mounted by a service changes, Portainer will restart the affected service during the GitOps update so the updated configuration is applied.

To ensure bind mounts are remounted correctly, [update the stack](../../../user/docker/stacks/edit.md) using **Pull and redeploy** with **Re-pull image and redeploy** enabled. This forces all containers in the stack to be recreated and remounts bind mounts against the newly cloned repository.

<div><figure><img src="../../../.gitbook/assets/Relative-bind-mounts-FAQ.png" alt=""><figcaption></figcaption></figure> <figure><img src="../../../.gitbook/assets/Relative-bind-mounts-FAQ-1.png" alt=""><figcaption></figcaption></figure></div>
