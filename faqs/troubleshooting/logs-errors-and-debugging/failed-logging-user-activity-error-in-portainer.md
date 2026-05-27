# “Failed logging user activity” error in Portainer

#### **Issue**

You may encounter the following error in Portainer:

> **“Failed logging user activity”**

#### **Cause**

This error typically occurs when the useractivity.db file is missing or inaccessible within the Portainer Server’s volume. This can impact:

* Viewing **activity logs** within Portainer
* **Creating backups**, as logging is part of the process

#### **Solution**

To resolve this issue:

1.  **Restart the Portainer Server container**

    Restarting the container will regenerate the useractivity.db file if it is missing and restore normal logging functionality.

#### **Steps to Restart (Docker Example)**

```
docker restart portainer
```

If this happens frequently, consider checking your volume mappings and file system permissions to ensure Portainer can consistently access and write to its data volume.
