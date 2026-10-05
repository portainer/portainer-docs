# Welcome to Portainer-Migrate

Portainer-Migrate is a Portainer Business add-on that moves your existing Docker and Docker Swarm workloads onto Kubernetes. It finds what is running today, converts it to Kubernetes manifests you can review, commits those manifests to Git, and has Portainer deploy them with GitOps, all from inside the Portainer interface.

<a href="https://app.gitbook.com/s/bGMpSuxXxaNqOTCFVjVA/architecture" class="button secondary" data-icon="buildings">Architecture</a><a href="requirements.md" class="button secondary" data-icon="clipboard-list-check">Requirements</a><a href="quick-start.md" class="button primary" data-icon="rocket-launch">Quick Start</a>

***

## Why Portainer-Migrate exists

Most organizations moving to Kubernetes are not starting from nothing. They have years of Compose files, `docker run` commands and Swarm stacks in production, some written by people who have since moved on. Rewriting each one by hand as Kubernetes YAML is slow, error-prone work, and it tends to stall a platform migration long before the last workload moves.

Portainer already manages both sides of that move: the Docker and Swarm environments you are leaving and the Kubernetes clusters you are moving to. Portainer-Migrate uses that position. It reads the real configuration of your running workloads through Portainer, so nothing has to be exported or reconstructed, and it hands the result to Portainer's GitOps engine, so the migrated workloads arrive under the same governance as everything else you deploy.

It is intentionally narrow in scope. Portainer-Migrate gets a workload from Docker to a running, reviewable, Git-managed deployment on Kubernetes. It does not try to redesign your application for Kubernetes, and it is honest about the parts it does not translate, so you know what to finish by hand.

## What Portainer-Migrate does

Portainer-Migrate runs as a five-step wizard: **Connections → Discover → Pre-flight → Translate → Migrate**. With it you can:

* **Discover workloads where they run.** Compose projects, `docker stack deploy` stacks, Swarm services and standalone containers are found from their Docker labels, even if they were never deployed through Portainer.
* **Translate them deterministically.** Each workload becomes a Deployment, a Service for its ports and a PersistentVolumeClaim for each volume, hardened to the Kubernetes baseline pod-security profile. The same input always produces the same output, and you review the YAML before anything is deployed.
* **Bring the data with it.** NFS volumes can be mounted in place with no copy. Local volumes, bind mounts and database volumes on standalone Docker are cold-copied into their new volumes automatically.
* **Deploy through Git.** Manifests are committed to a repository you choose (GitHub, GitLab or Gitea), and Portainer creates a GitOps stack that deploys from it. Nothing is applied to the cluster out of band.
* **See the outcome.** Each migrated workload reports live health (Running, Starting or Failed, with the reason), and every run is recorded in History.

Access is governed by your Portainer session. Portainer-Migrate has no users, passwords or permissions of its own: it sees the environments your Portainer account can see.

## Where to go next

* New to Portainer-Migrate? Start with [Requirements](requirements.md) and then [Quick Start](quick-start.md).
* Ready to move a workload? [Running a migration](running-a-migration/) walks through every step of the wizard.
* Moving data? Read [Migrating data](migrating-data.md) before your first stateful migration.
* Want to know exactly what gets generated? See [What gets translated](reference/what-gets-translated.md) and [Known issues and limitations](reference/known-issues-and-limitations.md).
