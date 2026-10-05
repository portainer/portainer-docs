# Overview

Portainer-Migrate runs inside Portainer. You reach it from the application switcher in the top left of Portainer, and you are signed in with your Portainer account: there is no separate login.

## Navigation

The sidebar has three sections:

| Section | Page              | What it's for                                                              |
| ------- | ----------------- | -------------------------------------------------------------------------- |
| Migrate | **New migration** | The migration wizard. This is where Portainer-Migrate opens.               |
| Migrate | **History**       | Every migration you've run from this browser, and how each workload fared. |
| Manage  | **Settings**      | Reserved for future configuration. There are no settings to change yet.    |

## The migration wizard

A migration is five steps, shown across the top of the wizard:

{% stepper %}
{% step %}
## [Connections](overview.md#connections)

Select the Git repository where the migrated manifests are committed.
{% endstep %}

{% step %}
## [Discover](overview.md#discover)

Select the Docker or Swarm environment and the workloads to move.
{% endstep %}

{% step %}
## [Pre-flight](overview.md#pre-flight)

Select the target Kubernetes environment, namespace, and storage options.
{% endstep %}

{% step %}
## [Translate](overview.md#translate)

Review the generated manifests and how each volume will be handled.
{% endstep %}

{% step %}
## [Migrate](overview.md#migrate)

Commit, deploy through GitOps, and watch the workloads start.
{% endstep %}
{% endstepper %}

Nothing changes on either environment until you click **Commit & deploy via GitOps** on the last step. See [Running a migration](running-a-migration/) for how the wizard behaves as a whole.

## What happens to the original workload

Portainer-Migrate copies; it doesn't move. Your Docker or Swarm workload keeps running after the migration. If its data is copied, the source container is stopped briefly to take a consistent snapshot and then started again. You decide when to switch users over to the Kubernetes deployment and when to remove the original.

## Licensing

Portainer-Migrate checks your Portainer Business license when you open it and as you move between pages. If Portainer reports the license as invalid, you are taken to Portainer's license page.
