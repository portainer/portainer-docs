# Secrets

**Secrets** creates Kubernetes Secrets for applications to use, such as database passwords, API tokens and TLS keys. Like everything else in Portainer-IDP, a secret is committed to Git and deployed as an Edge Stack, but its values are never committed in plaintext.

## How secrets are protected

Portainer-IDP stores secrets in Git as [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets). When you create or update a secret, your browser encrypts each value with the target clusters' public certificate, the same way `kubeseal` does, and Portainer-IDP commits a `SealedSecret`. Only the Sealed Secrets controller running in those clusters can decrypt it back into an ordinary Kubernetes Secret.

This means:

* **Plaintext never leaves your browser.** Not to Portainer-IDP's backend, and not to Git.
* **The repository holds only ciphertext.** Anyone who can read the repository can't read the values.
* **Values are write-only.** Portainer-IDP never shows a secret's values again once it's saved, only its key names.

Portainer-IDP also refuses to commit a plain `kind: Secret` to Git from any of its deploy flows.

{% hint style="info" %}
Sealed Secrets must be installed on every environment a secret is deployed to. An administrator installs it from [Cluster Readiness](admin/cluster-readiness.md#sealed-secrets). All environments share one sealing key, so one sealed file works everywhere.
{% endhint %}

## Creating a secret

{% stepper %}
{% step %}
### Open the form

Open **Secrets** and choose **New Secret**.
{% endstep %}

{% step %}
### Add keys and values

Enter a **Secret name** (lowercase letters, numbers and hyphens), then add each **Key** and **Value** with **Add key**. Keys that hold a password or token offer a **Generate** button.
{% endstep %}

{% step %}
### Choose where it's deployed

Pick one or more **Deploy targets** and one or more **Namespaces**. A secret is only readable by applications in the same namespace.

If Sealed Secrets isn't ready on every environment in those targets, the form says which, and **Deploy secret** stays disabled until it's fixed. Administrators can install or repair it right from the form.
{% endstep %}

{% step %}
### Deploy

Choose **Deploy secret**. Portainer-IDP commits one SealedSecret per namespace, under `secrets/` in the deploy target's folder, and deploys each as an Edge Stack.
{% endstep %}
{% endstepper %}

### Creating a secret while you deploy

You don't need to leave a deploy form to make a secret. Next to every secret picker, in Simple Deploy, the Application Builder, the catalog and the Helm forms, **Create secret** opens the same form with the destination fixed to the application's own deploy target and namespace, and the keys the application needs already filled in. The new secret is selected for you when it's created.

## Using a secret in an application

In the Application Builder and Simple Deploy, an application can read a single key as an environment variable, or the whole secret as environment variables or as files. Catalog templates and Helm charts that need credentials ask for a secret by name.

## The secret detail page

| Tab           | What it shows                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Placement** | Each deploy target and namespace the secret is deployed to, with its status. **Edit placement** adds or removes namespaces; **Redeploy** pulls a namespace's file from Git again. |
| **Keys**      | The key names. **Update keys** replaces values: leave a key empty to keep its current value, or type a new one.                                                                   |
| **Revisions** | The secret's Git history. Rolling back restores every namespace to the chosen commit.                                                                                             |
| **Access**    | Who can view, change and delete this secret.                                                                                                                                      |
| **Activity**  | Every change made to this secret through Portainer-IDP, and by whom.                                                                                                              |

A secret can't be deleted while an application still uses it. Remove it from those applications first.

## Secrets created before Sealed Secrets

Earlier versions of Portainer-IDP committed secrets as plain Kubernetes Secrets, which are only base64-encoded. These show a **Stored unencrypted in Git** alert on their detail page, and Cluster Readiness counts them. Choose **Encrypt in Git** to rewrite the file as a SealedSecret.

{% hint style="warning" %}
Encrypting a secret doesn't remove the old values from the repository's history. Rotate those credentials after you encrypt them.
{% endhint %}
