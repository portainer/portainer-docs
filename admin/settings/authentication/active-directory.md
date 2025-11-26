# Authenticate via Active Directory

Portainer Business Edition lets you connect to an existing Microsoft Active Directory service to manage your authentication settings in Portainer.

To set up Active Directory authentication, from the menu select **Settings** then select **Authentication**. Under the **Authentication method** section select **Microsoft Active Directory**.

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad.gif" alt=""><figcaption></figcaption></figure>

A guide to all of the Active Directory configuration settings follows.

## Automatic user provisioning

Enabling this setting automatically creates users within Portainer once they are successfully authenticated by Active Directory (AD). If you do not enable this, you must [manually create users](ldap.md#manually-creating-ldap-users) with the same username as the corresponding AD user.

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ldap-auto.png" alt=""><figcaption></figcaption></figure>

## AD configuration

Configure your Active Directory details using the table below as a guide.

| Field/Option  | Overview                                                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| AD Controller | Enter the FQDN or IP address of your domain controller. If you need to add more than one server, click **Add additional server**. |
| Binding       | Select the binding type to use with your AD configuration. Portainer supports **Simple** and **Kerberos**.                        |

<figure><img src="../../../.gitbook/assets/2.30-settings-auth-ad-configuration.png" alt=""><figcaption></figcaption></figure>

### Simple

When using the **Simple** binding, the following options are displayed:

| Field/Option             | Overview                                                                                                                                                                                                                                |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service Account          | Enter the account name that is used to connect to Active Directory and search users.                                                                                                                                                    |
| Service Account Password | Enter the password for the above service account.                                                                                                                                                                                       |
| Connectivity Check       | Perform a check to ensure there is connectivity between Portainer and your Active Directory server. This will also test SSL handshaking if **Use StartTLS** or **Use TLS** are selected under the **AD Connectivity Security** section. |

<figure><img src="../../../.gitbook/assets/2.30-settings-auth-ad-configuration-simple.png" alt=""><figcaption></figcaption></figure>

### Kerberos

When using the **Kerberos** binding, the following options are displayed:

| Field/Option                | Overview                                                                                                                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kerberos Realm              | Enter your Kerberos realm. This is usually your Active Directory domain name in all uppercase, and is case sensitive.                                                                                                                   |
| Service                     | Select the service principal type that Portainer will use to authenticate with your Kerberos realm. LDAP is the most common for AD integration.                                                                                         |
| Username                    | Enter the service account username that will authenticate to the Kerberos realm. This account requires read permissions in your Active Directory.                                                                                       |
| Password                    | Enter the password for the above service account. Ensure the account has proper permissions and a non-expiring password.                                                                                                                |
| Kerberos Configuration File | Upload your krb5.conf file containing Kerberos realm information, KDC locations and encryption types. This file is required for Kerberos authentication.                                                                                |
| Connectivity check          | Perform a check to ensure there is connectivity between Portainer and your Active Directory server. This will also test SSL handshaking if **Use StartTLS** or **Use TLS** are selected under the **AD Connectivity Security** section. |

<figure><img src="../../../.gitbook/assets/2.30-settings-auth-ad-configuration-kerberos.png" alt=""><figcaption></figcaption></figure>

## AD Connectivity Security

Configure the security settings using the table below as a guide.

| Field/Option                            | Overview                                                                                                                                                  |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use StartTLS                            | Enable this option if want to use StartTLS to secure the connection to the server. Enabling this will hide and ignore the **Use TLS** option.             |
| Use TLS                                 | Enable this option if you need to specify TLS certificates to connect to the LDAP server. Enabling this will hide and ignore the **Use StartTLS** option. |
| Skip verification of server certificate | Toggle this option on if you want to skip the verification of the server TLS certificate. Not recommended on unsecured networks.                          |
| TLS CA certificate                      | Lets you upload the CA certificate for your TLS certificate.                                                                                              |

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad-security.png" alt=""><figcaption></figcaption></figure>

## User search configurations

Configure the user search configurations using the table below as a guide. Click **add user search configuration** to set up multiple configurations.

| Field/Option                | Overview                                                                                                                          |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Username Format             | Select the username format you want to use when logging into Portainer. Options are `username` and `username@domainname`.         |
| Root Domain                 | This will be filled with the domain of the domain controller.                                                                     |
| User Search Path (optional) | Click **add another entry** to define specific OUs or folders to search for users.                                                |
| Allowed Groups (optional)   | Click **add another group** to define specific groups to be allowed access to Portainer.                                          |
| User Filter                 | This will be filled based on the options you selected previously.                                                                 |
| Display Users               | Click this to use the settings provided to query the Active Directory server for a list of users matching the specified criteria. |

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad-usersearch.png" alt=""><figcaption></figcaption></figure>

## Group search configurations

Configure the group search configurations using the table below as a guide. Click **add group search configuration** to set up multiple configurations.

| Field/Option                 | Overview                                                                                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Search Path (optional) | Click **add another entry** to define specific OUs or folders to search for groups.                                                                                          |
| Group Base DN                | Automatically updated based on previous selections.                                                                                                                          |
| Groups                       | Click **add another group** to define specific groups by OU or folder name.                                                                                                  |
| Group Filter                 | This will be filled based on options previously selected.                                                                                                                    |
| Display User/Group matching  | Click this to use the settings provided in Portainer to query the Active Directory server for a list of users matching the criteria specified, and how they match to groups. |

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad-groupsearch.png" alt=""><figcaption></figcaption></figure>

## Auto-populate team admins

If desired, Portainer can configure specified AD groups of users to become Portainer administrators automatically.&#x20;

To configure this, first click **add group search configuration** and define the **Group Base DN**, **Groups** and **Group Filter** as required. Once done, click the **Fetch Admin Group(s)** button to retrieve the list of groups matching your search configuration.

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad-autopop.png" alt=""><figcaption></figcaption></figure>

When you're happy with the group selection, enable this feature by toggling **Assign admin rights to group(s)** on.

## Test login

To test your settings are correct and that the right users and groups are configured for access, scroll down to **Test login**, enter a valid user and password then click **Test**. If everything is working as expected, a green tick will appear next to the button.

<figure><img src="../../../.gitbook/assets/2.15-settings-authentication-ad-testlogin.png" alt=""><figcaption></figcaption></figure>
