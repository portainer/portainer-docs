# Authenticate via LDAP

## Introduction

Portainer can be configured to accept Lightweight Directory Access Protocol \(LDAP\) authentication if your organization has implemented LDAP or Active Directory authentication. When users attempt to log into Portainer, the application will authenticate them against your LDAP directory or Active Directory. If authentication is successful, the user is allowed to log into Portainer.

To configure Portainer LDAP authentication, you first need to add a user to your directory service for the purpose of authenticating from Portainer to read the LDAP. The user should be a service account that needs read-only access to LDAP/Active Directory.

### Video: LDAP with Active Directory

{% embed url="https://youtu.be/Z2N7HnKypmA" %}

### Video: LDAP with OpenLDAP

{% embed url="https://youtu.be/l2pOP9syo7g" %}

## Enabling LDAP

Log into Portainer as an administrator. From the menu select **Settings**, select **Authentication** then select the **LDAP Authentication** option. Extra fields will appear, allowing you to configure LDAP.

![](../../../.gitbook/assets/authentication-ldap-1.gif)

### LDAP configuration

Enter the IP address/FQDN and port number of your LDAP server. Opt to either connect anonymously \(your LDAP server must support this\) or enter a user account that has READ access to the directory. Click **Test connectivity** to validate that you can connect.

{% hint style="info" %}
For Active Directory, the Reader DN format should be `username@MYDOMAIN.com` or `domain\userfirstname.userlastname`. For OpenLDAP,  the Reader DN format should be `CN=,DC=DOMAIN,DC=DOMAIN`.
{% endhint %}

![](../../../.gitbook/assets/authentication-ldap-2.png)

### LDAP security

Configure the remaining LDAP settings, using the table below as a guide:

| Field/Option | Overview |
| :--- | :--- |
| Use StartTLS | Changes the insecure connection to secure after the initial connection. |
| Use TLS | Initiates a connection to LDAP using TLS. |
| Skip verification of server certificate | If you do not have access to the LDAP server certificate, skipping verification will enable encrypted communications. However, you must manually ensure that you are talking to the intended LDAP server that you specified in the URL. If that gets maliciously redirected, you could be talking to a different server. Use with caution. |

![](../../../.gitbook/assets/authentication-ldap-3.png)

| Field/Option | Overview |
| :--- | :--- |
| TLS CA certificate | Lets you upload your CA certificate for the secure connection. |

![](../../../.gitbook/assets/authentication-ldap-4.png)

### Automatic user provisioning

Enabling this setting automatically creates users within Portainer once they are successfully authenticated by LDAP. If you do not enable this, you must [manually create users](ldap.md#manually-creating-ldap-users) with the same username as the corresponding LDAP directory.

### User-search configurations

#### BaseDN

* Enter `DC=MYDOMAIN,DC=com` to search your entire directory for the username attempting to login.
* Enter `OU=,DC=,DC=` to search for users only within the specified OU.
* Enter `CN=NAME,DC=,DC=` if your users are only in a container. In Active Directory, all users are in a container called users by default \(CN=Users\).

If you have a large number of users in your domain, narrow the scope Portainer searches on by using OUs.

#### Username attribute

For Native LDAP, enter `uid`. For Active Directory, enter either:

* `userPrincipalName` if your usernames will be in the format of `user@mydomain.com`.
* `SAMAccountName` if your usernames will be in the format `username`. 

Do not use `uid` with Active Directory. It will not work.

#### Filter

{% hint style="info" %}
These entries are case sensitive.
{% endhint %}

Enter filter criteria for the results returned from LDAP to Portainer. For example, to only allow users who are members of a group defined within an OU to login, set **Filter** to the following \(the brackets are important, so copy the entire string\):

```text
(&(objectClass=user)(memberOf=CN=,OU=,DC=,DC=))
```

In the example below, the domain `portainer.local` has an OU called `Groups` and within that OU is a group called `PortainerDevUsers`. This search filter will only allow users who are members of the `PortainerDevUsers` LDAP group to log into Portainer.

![](../../../.gitbook/assets/authentication-ldap-5.png)

As an optional step, click **Add user search configuration** to define additional user-search configurations.

### Group-search configurations

In addition to user search, Portainer also gives you the option to set up group search. When configured, if an LDAP user is a member of an LDAP group, and that LDAP Group corresponds to an identically named Portainer [Team](../../users/teams/), then the LDAP user will automatically be placed into the Portainer Team based on their LDAP group membership. This is very useful for automatically granting access to Portainer endpoints via group membership.

#### Group Base DN

Enter either:

* Enter `DC=,DC=` to search your entire directory for the list of groups.
* Enter `OU=,DC=,DC=` to search for groups only within the specified OU.
* Enter `CN=NAME,DC=,DC=` if your groups are only in a container. In Active Directory, all groups are in a container called users by default \(CN=Users\).

If you have a large number of groups in your domain, narrow the scope Portainer searches on by using OUs.

![](../../../.gitbook/assets/authentication-ldap-6.png)

#### Group Membership Attribute

Enter `member` as the attribute that determines if a user is a member of a group.

#### Group Filter

If you want to filter the list of groups to return only those that contain the string `Portainer` \(for example: `PortainerDev`, `PortainerProd`, `PortainerUAT`\), set up the filter like this:

```text
(&(objectclass=group)(cn=*Portainer*))
```

![](../../../.gitbook/assets/authentication-ldap-7.png)

As an optional step, click **Add group search configuration** to define additional group-search configurations.

## Manually creating LDAP users

{% hint style="info" %}
This is an optional step and is required only if you do not use automatic user provisioning.
{% endhint %}

Once LDAP has been enabled, from the menu select **Users**. Create a username that matches your LDAP source users with the format defined when you enabled LDAP \(either `username` or `username@mydomain.com`\).

