# Add an environment via the Portainer API

Portainer's [API](../../../api/docs.md) lets you perform the same actions as via the Portainer UI, including adding new environments. This article explains how to add the following types of environments via the API:

* A local environment using Docker socket communication.
* A remote environment using TCP communication.
* A remote environment using TCP communication secured via TLS.

{% hint style="info" %}
The examples in this article use [httpie](https://httpie.io/) to make HTTP calls from the command line to the Portainer API. Feel free to replace httpie with your preferred method.
{% endhint %}

## Preparation

After deploying Portainer, you'll need to initialize your admin user. First, initialize the admin password:

```
http POST https://my-portainer-server:9443/api/users/admin/init Username="admin" Password="adminpassword"
```

Now, use the admin account to authenticate against the API. Generate an authorization token for your username. This token will provide you with the same permissions as the user who generated it.

```
http POST https://my-portainer-server:9443/api/auth Username="admin" Password="adminpassword"
```

The response is a JSON object containing the JWT token inside the `jwt` field. Make a note of this token. You'll use it in the authorization header when making API calls.

```
{
  "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE"
}
```

The authorization header value must take the form `Bearer JWT_TOKEN`. Using the above token as an example, the value would look like this:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE
```

{% hint style="info" %}
The JWT token is valid for 8 hours after it is generated. Once it expires, you will need to generate a new token.
{% endhint %}

## Adding an environment

### Adding a local environment via the Docker socket <a href="#local-endpoint-via-the-docker-socket" id="local-endpoint-via-the-docker-socket"></a>

This query will create an environment called `test-local` and will use the Docker socket to communicate with your environment.

{% hint style="info" %}
This example requires you to bind-mount the Docker socket when running Portainer.
{% endhint %}

Run the following command:

```
http --form POST https://my-portainer-server:9443/api/endpoints \
    "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
    Name="test-local" EndpointCreationType=1
```

The response is a JSON object representing the environment:

```
{
    "AuthorizedTeams": [], 
    "AuthorizedUsers": [], 
    "Extensions": [], 
    "GroupId": 1, 
    "Id": 1, 
    "Name": "test-local", 
    "PublicURL": "",
    "Type": 1,
    "TLSConfig": {
        "TLS": false, 
        "TLSSkipVerify": false
    }, 
    "Type": 1, 
    "URL": "unix:///var/run/docker.sock"
}
```

Make a note of the `Id` value. It will be used to execute queries against the Docker Engine for the endpoint.

### Adding a remote environment <a href="#remote-endpoint" id="remote-endpoint"></a>

This query will create an environment called `test-remote`. It will communicate with your environment over TCP using the IP address `10.0.7.10` and port `2375`. Make sure you replace the example values with your own IP address and port.

{% hint style="info" %}
The Docker API must be exposed on the provided IP address and port. To learn how to do this, refer to the Docker documentation.
{% endhint %}

Run the following command:

```
http --form POST https://my-portainer-server:9443/api/endpoints \
    "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
    Name="test-remote" URL="tcp://10.0.7.10:2375" EndpointCreationType=1
```

The response is a JSON object representing the environment:

```
{
    "AuthorizedTeams": [], 
    "AuthorizedUsers": [], 
    "Extensions": [], 
    "GroupId": 1, 
    "Id": 1, 
    "Type": 1,
    "Name": "test-remote", 
    "PublicURL": "", 
    "TLSConfig": {
        "TLS": false, 
        "TLSSkipVerify": false
    }, 
    "Type": 1, 
    "URL": "tcp://10.0.7.10:2375"
}
```

Take a note of the `Id` value. It will be used to execute queries against the Docker Engine for the environment.

### Adding a remote environment with TLS <a href="#remote-endpoint-secured-using-tls" id="remote-endpoint-secured-using-tls"></a>

This query will create an environment called `test-remote-tls`. It will communicate with your environment over TCP (secured with TLS) using the IP address `10.0.7.10` and port `2376`. Make sure you replace the example values with your own IP address and port.

{% hint style="info" %}
The Docker API must be exposed on the provided IP address and port. To learn how to do this, refer to the Docker documentation.
{% endhint %}

Run the following command:

```
http --form POST https://my-portainer-server:9443/api/endpoints \
    "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
    Name="test-remote-tls" URL="tcp://10.0.7.10:2376" EndpointCreationType=1 TLS="true" TLSCACertFile@/path/to/ca.pem TLSCertFile@/path/to/cert.pem TLSKeyFile@/path/to/key.pem
```

The response is a JSON object representing the environment:

```
{
    "AuthorizedTeams": [], 
    "AuthorizedUsers": [], 
    "Extensions": [], 
    "GroupId": 1, 
    "Id": 1, 
    "Type": 1,
    "Name": "test-remote-tls", 
    "PublicURL": "", 
    "TLSConfig": {
        "TLS": true, 
        "TLSCACert": "/data/tls/1/ca.pem", 
        "TLSCert": "/data/tls/1/cert.pem", 
        "TLSKey": "/data/tls/1/key.pem", 
        "TLSSkipVerify": false
    }, 
    "Type": 1, 
    "URL": "tcp://10.0.7.10:2376"
}
```

Make a note of the `Id` value. It will be used to execute queries against the Docker Engine for the environment.
