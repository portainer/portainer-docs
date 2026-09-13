# Why did my API client start getting 409 errors after upgrading?

From Portainer version 2.41.0, the following Docker Standalone and Docker Swarm operations became asynchronous: stack create, stack update, and Git redeploy. Portainer validates and persists these request, marks the stack as Deploying, and returns the response while deployment continues in the background. If a second request targets the same stack while it's still Deploying, Portainer rejects it with a 409.

If your pipeline issues repeat update or redeploy calls against the same stack without waiting for the previous one to finish, upgrading to 2.41.0 or later will surface this as 409 error. A fixed sleep between calls isn't a reliable fix as the deployment time varies, poll the stack's status instead, as detailed below.

#### Does a 200 response mean my stack deployed successfully?

Not necessarily. A 200 response does not guarantee that the stack’s workloads are healthy or fully converged. A 200 from `PUT /api/stacks/{id}` means the update was accepted, not that deployment finished. The deployment runs in the background, and the outcome is only reflected once the stack's `Status` field leaves Deploying.

The full set of status values:

<table><thead><tr><th width="149.828125">Value</th><th width="149.71875">Status</th><th>Meaning</th></tr></thead><tbody><tr><td>1</td><td>Active</td><td>The latest deployment operation completed without error. This doesn't guarantee every container or health check has fully converged.</td></tr><tr><td>2</td><td>Inactive</td><td>The stack exists but is stopped.</td></tr><tr><td>3</td><td>Deploying</td><td>A deployment operation is currently in progress.</td></tr><tr><td>4</td><td>Error</td><td>The latest deployment operation returned an error.</td></tr></tbody></table>

#### How should my CI/CD pipeline check if a deployment succeeded?

Treat a successful HTTP response as acceptance, not completion, then:

1. Poll `GET /api/stacks/{id}` while `Status == 3`.
2. Treat `Status == 1` as successful completion.
3. Treat `Status == 4` as failure, and read the reason from the last entry in `DeploymentStatus[].Message`.
4. Apply a bounded timeout to your polling rather than waiting indefinitely.

Don't treat any status other than 3 as "still in progress" - `Status == 2` (Inactive) means the stack exists but is stopped, not that it's mid-deployment.

If a request returns 409 because a deployment is already in progress, avoid retrying in a tight loop. Poll until the current deployment finishes, check its result, then only retry your original request if it's still needed.

#### Why does my webhook return 409 even though nothing else is deploying?

A stack webhook can return 409 for two different reasons, and they need different handling:

* **A deployment is already in progress.** This is temporary. If you have the stack ID and appropriate credentials, poll `GET /api/stacks/{id}` and retry once it's no longer Deploying. If you're calling the webhook without stack-level access (a public registry callback, for example), retry later using backoff rather than immediately.
* **Auto-update isn't available for the stack.** This isn't temporary - retrying won't help. It means the stack's configured Git auto-update author is missing or invalid, and needs correcting in the stack's Git settings before the webhook will work.

#### Is Kubernetes stack deployment behaviour the same as Docker?

Not quite. Kubernetes stack update and Git redeploy run synchronously inside the request handler rather than in a background task - but Portainer only waits for the Kubernetes API calls to return, not for the cluster to finish reconciling or for workloads to become Ready. In practice this means:

* The window where a concurrent request can hit a 409 is much shorter than for Docker, since there's no long-running background task.
* A `Status: 1` (Active) result still only reflects that Portainer's request to the Kubernetes API succeeded, not that your pods are up and healthy.

#### I'm upgrading from to 2.41 or beyond - what should I check?

Before upgrading, check whether your automation:

* Issues sequential stack update or redeploy calls without waiting for each to finish.
* Treats a 200/202 response as confirmation that the deployment completed.

If either is true, update your pipeline to poll for the final status as described above before upgrading.
