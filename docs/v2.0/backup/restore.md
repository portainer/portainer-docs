# :material-backup-restore: Restore Portainer

!!! Note "**Backup and Restore** feature is introduced in Portainer CE Version 2.5" 

Restore could be only performed on a fresh instance of Portainer, during its' initialization stage. When you need to restore portainer, deploy a fresh instance of Portainer with an empty data volume and choose the **Restore Portainer from backup** option on the initialization page of the new instance.

## :material-harddisk: Restore from local file

!!! Abstract ""
    ![Restore from local file](assets/restorefromfile.png)

    On the initialization page, expand Restore Portainer from backup option

    Click on **Select file**, browse to and select the tar.gz backup file 

    Enter the password if the backup was originally encrypted

    Click **Restore Portainer**

    *Restore may take a few moments. Once complete you will be redirected to the login page. You should now be able to login with your previous credentials. All your Portainer config should be restored.*


## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=\_blank}