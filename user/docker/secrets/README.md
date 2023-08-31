# Secrets

{% hint style="info" %}
The Secrets menu is only available to Docker Swarm environments.
{% endhint %}

A secret is a blob of data, such as a password, SSH private key, SSL certificate, or another piece of data that should not be transmitted over a network, stored unencrypted in a Dockerfile, or stored in your application’s source code. In Docker 1.13 and later, you can use Docker Secrets to centrally manage this data and securely transmit it only to those containers that need access to it.

<figure><img src="../../../.gitbook/assets/2.15-docker_secrets_secrets_list.png" alt=""><figcaption></figcaption></figure>

Secrets are encrypted during transit and at rest in Docker Swarm. A given secret is only accessible to those services which have been granted explicit access to it, and only while those service tasks are running.

You can use secrets to manage any sensitive data that a container needs at runtime, but you don’t want to store in the image or in source control, such as:

* Usernames and passwords.
* TLS certificates and keys.
* SSH keys.
* Other important data such as the name of a database or internal server.
* Generic strings or binary content (up to 500Kb in size).

For less sensitive data or larger content, see [configs](../configs/).

In Portainer you can add and remove secrets for use in deployments.

{% content-ref url="add.md" %}
[add.md](add.md)
{% endcontent-ref %}

{% content-ref url="remove.md" %}
[remove.md](remove.md)
{% endcontent-ref %}



