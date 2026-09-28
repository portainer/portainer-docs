# How can I roll back to a previous version of Portainer?

New versions of Portainer generally include a bump to the database schema version - this allows us to make changes to the database structure to accommodate new features, for example. As such, you're unable to use newer databases on older versions.

When updating Portainer we recommend [taking a backup](https://docs.portainer.io/admin/settings/general#back-up-portainer) first in case you need to roll back. You can then wipe your installation and [restore from the backup](https://docs.portainer.io/admin/settings/general#restoring-from-a-local-file) during reinstallation.

#### What if I don't have a backup?

If you didn't take a manual backup before updating, you can instead manually restore the database backup taken automatically during the update process. This is a backup of the `portainer.db` database only and is stored in the `portainer_data` volume, under the `backups` directory, named `portainer.db.bak`. You can use this backup to roll back to the previous version by doing the following:

1. Stop and remove your Portainer container (don't delete the `portainer_data` volume!)
2. Rename the existing `portainer.db` database in the base of the `portainer_data` directory to something like `portainer.db.oldversion` (just in case something goes wrong)
3. Copy the `backups/portainer.db.bak` file to `portainer.db` in the base of the `portainer_data` directory
4. Start Portainer using the image version you were _previously_ on (this must match the version of the backed up database or Portainer will fail to start).
