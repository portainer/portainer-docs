# Running a migration

To start a migration, open **New migration** from the sidebar. The wizard, titled **Migrate to Kubernetes**, has five steps:

| Step                                                                  | You choose                                                      | What happens                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| [Connections](/broken/pages/230f675752d77284415b0f29fbef18fba0b54baa) | Git provider, token, repository and branch.                     | The connection is tested. Nothing is written.                   |
| [Discover](/broken/pages/627f0b3b4f8adef4b7b034dfbaee5a55ce873d1c)    | The source environment and the workloads to migrate.            | Workloads are listed. Nothing is changed.                       |
| [Pre-flight](pre-flight.md)                                           | Target environment, namespace, repository folder, NFS handling. | The target is checked. Nothing is changed.                      |
| [Translate](/broken/pages/4ab8ab8cc1fdf17f427de6986218452226594c5e)   | Whether any mounts should start empty.                          | Manifests are generated for you to review. Nothing is changed.  |
| [Migrate](/broken/pages/7cbea1e601d1e26d2fb5112a1e88e9815f0ec9c3)     | Nothing more: you confirm.                                      | Data is staged, manifests are committed, the stack is deployed. |

## Moving through the wizard

* You can click any step at the top of the wizard to jump to it, and go back to change an earlier choice. Your choices are kept as you move between steps.
* **Cancel** and **Finish** both take you to [History](../history.md). Choices you haven't migrated yet are discarded, and Cancel doesn't ask first.
* Reloading the page starts the wizard again. Your Git connection details are remembered, except the access token, which you'll need to paste again.
* Each run of the wizard deploys once. To migrate something else, start a new migration.

## Before you start

* Read [Migrating data](../migrating-data.md) if any of the workloads have volumes or bind mounts. Copying data stops the source container briefly.
* Use a **new namespace** for each migration. See [Known issues and limitations](../reference/known-issues-and-limitations.md).
* Keep the browser tab open until the Migrate step finishes, especially while data is being restored.
