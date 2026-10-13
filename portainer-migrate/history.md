# History

**History** lists every migration you've run, newest first, and how each workload fared on Kubernetes.

Each run shows:

* The namespace and the target environment, for example `shop → production-k8s`.
* When it ran.
* Badges counting the workloads that **migrated**, are **pending** and **failed**.
* One row per workload with its outcome: **Migrated**, **Pending** (or the reason it's still starting), or **Failed** with the reason.

A run is recorded once its manifests have been committed and its GitOps stack created. A run that isn't fully running is re-checked every five seconds for its first 30 minutes, and once after that. If your role can't read the namespace, History says so and stops checking. An older run whose workload still has no pod shows **Not found on the target**, because the namespace or app may have been removed, and no longer counts as pending.

## Where History is stored

History is kept in your browser, not on the server. That means:

* It's only visible in the browser you ran the migrations from.
* It's stored per Portainer user, so other users of the same browser, and you on another device, won't see it.
* It holds the 50 most recent runs.
* Clearing your browser's site data removes it.

Your repository and Portainer's stacks are the lasting record of what was migrated.

## Clearing History

**Clear** asks first, then removes every entry. It only clears this browser's record: nothing in Git or on Kubernetes is changed.
