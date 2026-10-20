# Deploy

Portainer-IDP offers several ways to deploy an application, so you can start from whatever you have: a template, a container image, a Helm chart, a full specification, or manifests that already live in Git. Every one of them ends the same way. Portainer-IDP commits a Kubernetes manifest to Git with your personal access token, registers it with Portainer as an Edge Stack, and Portainer deploys it to every environment in the deploy target.

{% hint style="warning" %}
Deploying needs a [Git commit identity](git-commit-identity.md). If you haven't set one up, Portainer-IDP asks you to before it writes anything to Git.
{% endhint %}

## Choosing where it lands

Every deploy flow asks for the same destination:

* One or more **Deploy targets**: groups of environments that an administrator or your team has set up. A deployment to a target goes to every environment in it.
* A **Namespace** declared on those targets.

Only deploy targets and namespaces you're allowed to deploy into are listed. If one you expect is missing, ask an administrator for access. See [Deploy Targets](deploy-targets.md).

## Choosing a deploy flow

| Flow                                                     | Start from                                  | Best for                                                                           |
| -------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------- |
| [**Catalog**](deploy.md#catalog)                         | A ready-made template or curated Helm chart | Common software, such as databases, message brokers and dev tools, in a few clicks |
| [**Simple Deploy**](deploy.md#simple-deploy)             | One container image                         | Your own service, when you just need ports, resources and environment variables    |
| [**Helm Chart**](deploy.md#helm-chart)                   | Any chart from an allowed Helm repository   | Software published as a Helm chart that isn't in the catalog                       |
| [**Application Builder**](deploy.md#application-builder) | A full form with live YAML preview          | Anything that needs storage, ConfigMaps, scheduling, auto-scaling or several pods  |
| [**Source Deploy**](deploy.md#source-deploy)             | Manifests that already exist in Git         | Bringing existing Kubernetes YAML under Portainer-IDP's management                 |

## Catalog

The **Catalog** page lists ready-made applications. Filter by type (**IDP**, **Kubernetes** or **Helm**) or by category: Starters, Database, Messaging, Storage, Search, Observability, Dev Tools, Web, CMS, Apps, and Edge & IoT.

The built-in catalog includes, among others, WordPress + MySQL, Ghost, Nginx, PostgreSQL, PostgreSQL + pgAdmin, MySQL, MariaDB, MongoDB, Adminer, Valkey, Kafka, RabbitMQ, NATS, Qdrant, OpenSearch, Meilisearch, Garage and SeaweedFS (S3-compatible storage), Gitea, Zot, Mailpit, Keycloak, WireMock, Grafana, Prometheus, Loki, OpenTelemetry Collector, Jaeger, Uptime Kuma, Metabase, n8n, Mosquitto, Node-RED, InfluxDB, Telegraf, podinfo, a Static site from Git and a Scheduled job (CronJob) starter. Administrators can add their own Helm charts; see [Helm Charts](admin/helm-charts.md).

Choose **Deploy** on a card for three steps:

{% stepper %}
{% step %}
### Deploy target

Choose where the application lands: deploy targets and a namespace.
{% endstep %}

{% step %}
### Details

Set the app name and how it's exposed. Templates that need credentials list them under **Secrets**: pick an existing secret, choose **Create secret** to make one without leaving the form, or choose **None: start without it** where that's allowed. Helm charts show the fields an administrator has made available under **Values**.
{% endstep %}

{% step %}
### Deploy

Shows the progress as it happens: committing to Git, registering with Portainer, and deploying to each environment.
{% endstep %}
{% endstepper %}

On a template, **Customize** opens it in the Application Builder first, so you can change anything before deploying. A template that is only an example until you set something, such as **Static site from Git** and its repository, is marked **Customize required**: **Deploy** waits until you've set the value in the Application Builder.

## Simple Deploy

**Deploy** > **Simple Deploy** deploys one container image. Enter the image, its ports, resources and environment variables, and choose how to expose it. Environment variables can read a key from a secret, and **Create secret** next to the picker makes a new one in the same deploy target and namespace.

## Helm Chart

**Deploy** > **Helm Chart** deploys any chart from a Helm repository an administrator allows. It's available to the Standard and Admin [roles](../architecture/roles.md). The chart and your values are committed to your Git target, and Portainer deploys the release as an Edge Stack.

{% stepper %}
{% step %}
### Destination

Choose deploy targets and a namespace.
{% endstep %}

{% step %}
### Chart

Pick a repository Portainer, the catalog or your applications already use, or choose **Use another repository…** and enter its URL. **Which repositories can I use?** lists the allowed hosts. Then search the repository's charts, choose a **Version**, and give the application a name. The chart's README is shown alongside.

{% hint style="info" %}
Only HTTP Helm repositories are supported. Charts published only to OCI registries aren't available yet.
{% endhint %}
{% endstep %}

{% step %}
### Values

If the chart publishes a values schema, you get a form. Otherwise you edit `values.yaml` directly, and only your differences from the chart's defaults are committed.

Passwords belong in a Portainer-IDP secret, not in values. Under **Secrets**, bind a values path the chart reads an existing secret from (for example `auth.existingSecret`) to one of your secrets, or create one there.
{% endstep %}

{% step %}
### Review

Portainer-IDP renders the chart and shows **What the chart creates**: its objects, images, hosts and ports. It checks the result against the Helm policy before anything is committed. If the chart breaks a rule, the review explains which, and the deploy is refused. It also warns you about charts that read existing cluster objects at install time, or that generate passwords which will change on every render.
{% endstep %}

{% step %}
### Deploy

Commits the chart and values, and shows the progress on each environment.
{% endstep %}
{% endstepper %}

### The Helm policy

Every Helm deploy, edit, upgrade and rollback is rendered and checked first. Under every profile except **Off**, a chart may only create namespaced objects in namespaces you have been granted, with no CustomResourceDefinitions and no cluster-wide RBAC. The profiles then differ:

| Profile        | Pod Security | Service types         | Ingress hosts                         |
| -------------- | ------------ | --------------------- | ------------------------------------- |
| **Permissive** | Privileged   | Any                   | Any                                   |
| **Standard**   | Baseline     | ClusterIP or NodePort | Under the deploy target's base domain |
| **Restricted** | Restricted   | ClusterIP only        | Under the deploy target's base domain |

The installation default is **Standard**, shown as a badge on the review step. Administrators can deploy past the policy with **Deploy with override…**, confirming each violation; the override is recorded in the [audit log](admin/audit-log.md).

## Application Builder

**Deploy** > **Application Builder** is the full form, with a live YAML preview alongside. It covers:

* **Workload type**: **Replicated** (Deployment), **StatefulSet**, **Global** (DaemonSet), **Run once** (Job) or **Scheduled** (CronJob, with a cron **Schedule** in the cluster's time zone).
* Containers, ports, resources and environment variables.
* ConfigMaps, secrets (as single environment variables, all keys as environment variables, or files), and persistent storage.
* Auto-scaling, placement rules, Services and Ingress.
* **Other settings**, at the end of the form and of each container: anything an imported manifest holds that the form has no field for, edited as YAML.

Use **Add pod** to deploy several applications together as a [group](applications.md#application-groups).

When you edit an application whose manifest also contains ConfigMaps, Jobs or CronJobs, the Application Builder keeps them and writes them back unchanged. Every built-in catalog template can be opened here with **Customize**. Other kinds it can't edit, plain Secrets above all, are dropped with a warning.

### What Portainer-IDP refuses

Before it commits anything, Portainer-IDP refuses:

* **An Ingress with no host, or with a default backend.** It would take every request no other application claims. Enter a host, or expose the application as a NodePort or not at all.
* **An Ingress host and path another application on the same environments already routes.** The second application would silently get none of the traffic.
* **A credential set to a literal value**, such as an environment variable named `DB_PASSWORD` with a plain `value`, in Simple Deploy, the Application Builder or a manifest. Use a [secret](secrets.md) instead. Helm values with credential-like names are refused the same way when the chart has **Refuse values that look like plaintext secrets** on. Names that point at a secret, such as `existingSecret`, are fine.
* **An edit made on a stale copy of a file.** If the application changed after you opened it, the save is refused and says what changed, so you can reload and reapply your changes.

## Source Deploy

**Deploy** > **Source Deploy** adopts Kubernetes manifests that already exist in a source repository: either one of Portainer's GitOps sources, or a public Git repository by URL. Choose the files, and Portainer-IDP pushes a copy of them to the deploy target's repository, one application per file. The source is only read. Files that aren't Kubernetes objects, such as a Helm chart's `Chart.yaml`, a CI pipeline or a Kustomize config, can't be deployed; select the manifests they refer to instead.

An administrator chooses which hosts a repository URL may name, under **Source hosts** in [Settings](admin/settings.md).

{% hint style="info" %}
Source Deploy copies the files. Later changes to the original files are not picked up; change the application in Portainer-IDP instead.
{% endhint %}

## What happens on deploy

After you choose **Deploy**, the monitor shows each stage as it happens:

{% stepper %}
{% step %}
### Committing to Git

The manifest is written to the deploy target's repository, branch and folder, under a folder per namespace, for example `clusters/production/team-a/web.yml`. The commit is made with your token, so it's attributed to you.
{% endstep %}

{% step %}
### Registering with Portainer

Portainer-IDP creates an Edge Stack that points at that file, targeted at the deploy target's Edge Group.
{% endstep %}

{% step %}
### Deploying to each environment

Each environment's Edge Agent applies the manifest and reports back.
{% endstep %}
{% endstepper %}

Every later change, such as editing, scaling or rolling back, is a new commit to the same file, followed by a redeploy.
