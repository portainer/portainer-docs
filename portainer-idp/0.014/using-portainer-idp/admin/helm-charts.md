# Helm charts

Helm Charts is an admin-only page where you decide which Helm charts developers can deploy, and from where. There are two levels of control:

* **Curated charts** appear in the [Catalog](../deploy.md#catalog), pinned to one version, with your defaults and with values you can lock.
* **Chart hosts** decide which Helm repositories developers may use with **Deploy** > [**Helm Chart**](../deploy.md#helm-chart), which deploys any chart from them.

## Curated charts

The **Helm charts** card lists the charts in the catalog, each pinned to one version and its digest. Built-in charts can be hidden if you don't want to offer them.

To add one, choose **Add a Helm chart**:

| Field                                              | What it does                                                                                                                       |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Repository URL**, **Chart**, **Pinned version**  | The chart to offer, and the one version developers get.                                                                            |
| **Catalog id**                                     | A lowercase identifier. Fixed once saved.                                                                                          |
| **Name**, **Category**, **Description**            | How the chart appears in the catalog.                                                                                              |
| **Default values (YAML)**                          | Your defaults, layered over the chart's own. Developers can change them.                                                           |
| **Locked values (YAML)**                           | Values developers can't override. A deploy or edit that tries to change them is refused.                                           |
| **Fields developers can set**                      | The values shown as form fields when deploying, each with a path, label and type. A field can be a secret, with the keys it needs. |
| **Also let developers write custom values (YAML)** | Allow free-form values as well as the fields above.                                                                                |
| **Refuse values that look like plaintext secrets** | Reject values that look like passwords or tokens, so they go in a secret instead.                                                  |

Choose **Add to catalog** to save it.

### Changing the pinned version

Moving a chart's pin to a new version offers deployed applications an upgrade; it doesn't upgrade them. Their **Chart** tab shows **Update available**, and their owners upgrade with **Edit**.

### Removing a chart

Applications already deployed from a chart you remove keep running, but can no longer have their values edited or be upgraded. Their **Chart** tab shows **Removed from the catalog**.

## Chart hosts

The **Chart hosts** card lists the hosts developers may deploy Helm charts from, one per line. Only `https` repositories are allowed, every redirect is checked against the list too, and a leading dot allows any subdomain, for example `.github.io`.

The default list covers well-known chart hosts, including `github.com`, `.github.io`, `gitlab.com`, `.gitlab.io`, `charts.bitnami.com` and `repo.broadcom.com`, plus the hosts the built-in catalog uses.

{% hint style="warning" %}
A Helm chart is applied to your clusters by the Edge Agent with cluster-administrator rights, and anyone can publish charts on public hosts such as `github.io`. The [Helm policy](../deploy.md#the-helm-policy) limits what a chart can create, but only allow hosts you trust.
{% endhint %}
