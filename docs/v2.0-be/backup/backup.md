# :material-backup-restore: Backup Portainer

!!! Note "**Backup and Restore** feature is introduced in Portainer Business Version 2.4" 

Backup includes all information that Portainer stores on the /data volume, archived in a tar.gz file and optionally encrypted with a provided password. This archive is all you need to restore Portainer.

Logged in as an Admin, you will find the Backup option under Settings menu in Portainer. You have several options for backups; i.e., Backup to local disk, Manual Backup to S3 and Automated Scheduled Backups to S3. 

## :material-harddisk: Backup to Local Disk

!!! Abstract ""
    ![Backup to Disk](assets/backuptodisk.png)

    Login as an Admin User into Portainer

    Click on Settings in the menu

    Scroll down to Backup Portainer Option

    **Download backup file** is the default option, you can toggle the Password protect on and enter a password to encrypt the backup file

    Click on **Download backup**

    *A tar.gz file will be downloaded through your browser.*


## :fontawesome-brands-aws: Manual Backup to S3

!!! Abstract ""
    ![Backup to S3](assets/backuptos3.png)

    Login as an Admin User into Portainer 

    Click on Settings in the menu 

    Scroll down to Backup Portainer Option

    Select **Store in S3** option

    Enter Access Key ID, Secret Access Key, Region and Bucket name for your S3 storage

    Optionally, Enable Password protect and enter a password to protect the backup (recommended)

    Click **Export backup** to export the backup file to S3 Bucket




## :material-calendar-multiselect: Scheduled Backups to S3

!!! Abstract ""
    ![Scheduled Backup to S3](assets/cronbackuptos3.png)


    Login as an Admin User into Portainer 

    Click on Settings in the menu 

    Scroll down to Backup Portainer Option

    Select **Store in S3** option

    Enable Schedule automatic backups and enter a Cron rule for your schedule

    Enter Access Key ID, Secret Access Key, Region and Bucket name for your S3 storage

    Optionally, Enable Password protect and enter a password to protect the backup (recommended)

    Click **Save backup settings** to save the schedule.






## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=\_blank}