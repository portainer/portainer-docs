# What changed with Git credentials with the introduction of GitOps Sources?

Portainer version 2.43 introduced [GitOps Sources](../../../user/app-delivery/sources/) as the central place to manage Git connections across all of Portainer's GitOps functionality. Previously, Git credentials could be configured and reused in a few different places depending on how you deployed. Now, each Source is a self-contained Git connection, with its own credentials scoped to that one repository. There's no saved credential to select from - every new Source needs its own token entered directly. This is a permanent design change.

When you upgrade your Portainer version and switch to this new functionality, any existing GitOps setups are automatically converted to Sources, each carrying over its own copy of the credentials it was using before.

Classic personal access tokens are still supported, but each one still needs to be re-entered per Source. GitHub introduced [fine-grained personal access tokens](https://github.blog/security/application-security/introducing-fine-grained-personal-access-tokens-for-github/#choosing-the-right-programmatic-access-method) in 2022 as a more secure alternative - scoped to a single repository and a specific set of permissions, rather than everything you have access to across every org. We strongly recommend generating a unique fine-grained token per Source, scoped only to that repository.

**What to do moving forward:**

* For each repository you deploy from, [create a Source](../../../user/app-delivery/sources/add-a-new-source/add-a-new-git-repository-source.md).
* Generate a new fine-grained token for that Source, scoped to only that repository and only the permissions it needs.
* Share the Source with others in your organization by setting the access level at creation time. Since it's scoped to one repository, sharing it doesn't expose access to anything else.
* Use any newly created Source in multiple [workflows](../../../user/app-delivery/workflows.md).
