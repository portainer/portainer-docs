# LDAP Groups are not auto-populating Portainer teams

**Issue:**

Users find that LDAP authentication succeeds and **Display User/Group matching** correctly shows group membership, but the user is not automatically added to the corresponding Portainer team on login.

**Cause:**

Portainer team synchronization requires distinguished name (DN)-based group membership.

* `posixGroup` + `memberUid` → Group detection works, but Team sync does not assign users
* `groupOfNames` + `member` → Fully supported for Team auto-assignment

**Resolution:**

To resolve this issue, update the LDAP group configuration to use DN-based membership.

```
objectClass: groupOfNames
member: <full user DN>
```
