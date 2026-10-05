# Troubleshooting

## When a deployment fails

When a deployment fails on an environment, the failed row on the application's **Environments** tab explains the error in plain language and says what to do. Portainer's original message is under **Details**. Common causes are:

* An image that can't be pulled.
* A missing namespace.
* A quota or admission policy rejecting the manifest.
* An environment whose Edge Agent isn't connected.

## Common messages

<details>

<summary>Finish setting up</summary>

Portainer-IDP has no Edge Admin credential yet. An administrator needs to set it up on [Settings](admin/settings.md#edge-admin-credential).

</details>

<details>

<summary>Access required</summary>

Portainer-IDP's Edge Admin credential is missing, no longer valid, or lacks the Edge Administrator role. An administrator can check it on [Settings](admin/settings.md) with **Test credential**, and replace it with **Rotate credentials**.

</details>

<details>

<summary>Cannot reach Portainer</summary>

The add-on can't connect to Portainer, or Portainer refused its certificate or machine credential. Repairing the add-on in Portainer issues a fresh credential.

</details>

<details>

<summary>Edge Compute is disabled</summary>

Portainer-IDP deploys through Portainer's Edge features. An administrator needs to enable Edge Compute in Portainer's settings.

</details>

<details>

<summary>Portainer lost its copy of the file</summary>

Choose **Redeploy** on the failed row, on the application's **Environments** tab or a secret's **Placement** tab, to pull the file from Git again.

</details>

<details>

<summary>Sealed Secrets is not ready on every environment</summary>

One or more environments the secret is going to can't decrypt it. An administrator can install or repair Sealed Secrets from [Cluster Readiness](admin/cluster-readiness.md#sealed-secrets), or directly from the message.

</details>

<details>

<summary>Your saved token can no longer be read</summary>

The encryption key changed. Enter your token again on [Git commit identity](git-commit-identity.md).

</details>

<details>

<summary>Refused by the Helm policy</summary>

The chart, with your values, creates something the Helm policy doesn't allow. The review step lists each rule it breaks. See [The Helm policy](deploy.md#the-helm-policy).

</details>

<details>

<summary>A namespace or deploy target is missing from a deploy form</summary>

You don't have access to it. Ask an administrator to add you under **Who may use it** on the namespace.

</details>

<details>

<summary>A button is disabled</summary>

Hover over it. The tooltip says why, usually because your [role](../architecture/roles.md) doesn't allow that action.

</details>

## FAQ

<details>

<summary>Do developers need Portainer edge rights?</summary>

No. Portainer-IDP deploys with its own Edge Admin credential and checks access itself. Developers need a Portainer account, an environment role that gives them the right Portainer-IDP role, and access to a deploy target and namespace.

</details>

<details>

<summary>Can I edit the manifests in Git directly?</summary>

Yes. Portainer checks the file for changes and deploys them. Changes made in Portainer-IDP are commits to the same file, so the two stay in step.

</details>

<details>

<summary>Why do I need a personal access token?</summary>

Commits are made as you, with your token, so Git history shows who changed what. Portainer's own credential on the Git target is only used to read.

</details>

<details>

<summary>Can I deploy to Docker environments?</summary>

No. Deploy targets contain Kubernetes environments connected with the Edge Agent only.

</details>

<details>

<summary>Are secret values stored in Git?</summary>

Only encrypted, as Sealed Secrets. Values are encrypted in your browser before they're committed, and only the clusters you deploy to can decrypt them.

</details>

<details>

<summary>What happens to my applications if I remove Portainer-IDP?</summary>

They keep running. The manifests stay in Git and the Edge Stacks stay in Portainer.

</details>
