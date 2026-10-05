# History

**History** lists every migration you've run, newest first, and how each workload fared on Kubernetes.

Each run shows:

* The namespace and the target environment, for example `shop → production-k8s`.
* When it ran.
* Badges counting the workloads that **migrated**, are **pending** and **failed**.
* One row per workload with its outcome: **Migrated**, **Pending** (or the reason it's still starting), or **Failed** with the reason.

A run is recorded once its manifests have been committed and its GitOps stack created. Workload status is updated while the Migrate step is open, so a run you left before every workload started may still show **Pending**. Check the stack in Portainer for its current state.

## Where History is stored

History is kept in your browser, not on the server. That means:

* It's only visible in the browser you ran the migrations from.
* Other users, and you on another device, won't see it.
* It holds the 50 most recent runs.
* Clearing your browser's site data removes it.

Your repository and Portainer's stacks are the lasting record of what was migrated.

## Clearing History

**Clear** removes every entry straight away, without asking. It only clears this browser's record: nothing in Git or on Kubernetes is changed.
