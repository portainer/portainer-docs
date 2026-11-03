# Doctor

Doctor is an admin-only page that checks for problems that build up over time, and offers a repair for each. Nothing runs until you ask: each check shows what it found last time, and runs again when you choose **Run**. Choose **Run all** to run every check in turn.

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
