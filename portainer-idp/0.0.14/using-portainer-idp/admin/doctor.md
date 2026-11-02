# Doctor

Doctor is an admin-only page, under **Administration**, that checks for problems that build up over time, and offers a repair for each. Nothing runs until you ask: each check shows what it found last time, and runs again when you choose **Run**. Choose **Run all** to run every check in turn.

A run that takes too long stops at a time limit and shows what it had checked by then. Choose **Cancel** to stop one sooner. Each run, and each repair, is recorded in the [audit log](audit-log.md).

## Undeployed manifests in deploy targets

YAML in a deploy target's folder that no deployment deploys. It's left behind when an application is deleted without its file, when someone pushes a file to Git by hand, or when a deploy fails part way.

For each file, choose:

* **Register** to create the missing Edge Stack and deploy the file as an application.
* **Delete from Git** to remove the file in a new commit. You can select several files and delete them in one commit.

Both ask you to confirm first.

## IDP files outside every deploy target

Files Portainer-IDP wrote to Git that sit in no deploy target's folder and that no deployment deploys, such as manifests left under a deploy target that was deleted. Portainer-IDP keeps a record of the files it writes, so this check reads none of them and never lists files someone else committed.

Choose **Delete from Git** to remove a file, or select several and delete them in one commit.

Files written before that record began are found only by **Deep scan (slow)**, which reads the files themselves. If a deep scan stops before it has read every file, the rest weren't checked, so don't delete them on its account.

## CI account credentials

Whether each [CI account's](../releasing-from-ci.md#ci-accounts) token is stored and can push to the repositories its deploy targets commit to, which releases through the API need. Nothing is written: the push check asks the Git host for permission without creating a commit or branch.

## Release accounts have no environment access

Whether any [release account](../releasing-from-ci.md#release-accounts) has been given a team, a role or an environment in Portainer. Portainer-IDP refuses such an account until the access is taken away.

## CI runs on GitOps commits

GitHub Actions workflows whose `on: push` trigger takes in a deploy target's branch and directory, so each of Portainer-IDP's commits starts them. Doctor reads `.github/workflows` on each GitOps home's branch with your Git commit identity, or the deploy target's CI account token if you have none, and changes nothing. A workflow it can't parse is reported as not checked, never as clean. Other CI systems aren't read yet. See [Releasing from CI](../releasing-from-ci.md#when-ci-runs-on-the-gitops-repository).
