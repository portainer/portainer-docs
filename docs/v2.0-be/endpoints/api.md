# Create/Add a new endpoint through Portainer API

In this help article, you will learn how to add the following type of endpoints trough our API:

* Local endpoint using Docker socket communication
* Remote endpoint using TCP communication
* Remote endpoint using TCP communication secured via TLS

The API documentation is available [here](https://app.swaggerhub.com/apis/deviantony/portainer/).

<b>WARNING:</b> This documentation is valid for Portainer >= 1.18.0.

<b>NOTE:</b> We're using httpie to execute HTTP queries from the CLI.

Once you have deployed portainer (see [Deploying Portainer](../deploy/requirements.md)) you need to initialize your admin user.

## Initialize the admin password

<pre><code> http POST :9000/api/users/admin/init Username="admin" Password="adminpassword"</code></pre>

## Authenticate against the API using the admin account

<pre><code> http POST :9000/api/auth Username="admin" Password="adminpassword"</code></pre>

The response is a JSON object containing the JWT token inside the jwt field:

<pre><code>{
  "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE"
}</code></pre>

You need to retrieve this token and pass it into the <b>Authorization</b> header when executing an authentication query against the API.

The value of the <b>Authorization</b> header must be of the form Bearer <code>JWT_TOKEN</code>.

<pre><code>Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE</code></pre>

<b>NOTE:</b> This token has an 8 hour validity, you'll need to generate another token to execute authenticated queries once this one expires.

## Local endpoint via the Docker socket

This query will create an endpoint called <b>test-local</b> and will use the Docker socket to communicate with this environment.

<b>NOTE:</b> This example requires to you bind-mount the Docker socket when running Portainer. Run the following:

<pre><code> http --form POST :9000/api/endpoints \
"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
Name="test-local" EndpointCreationType=1</code></pre>

The response is a JSON object representing the endpoint:

<pre><code>{
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
}</code></pre>

Retrieve the value of the <code>Id</code> property, it will be used to execute queries against the Docker engine for that endpoint.

## Remote endpoint

This query will create an endpoint called <b>test-remote</b> and will communicate with this environment over TCP using the IP address 10.0.7.10 and port 2375 (these are example values, ensure that you're using the correct IP & port).

<b>NOTE:</b> The Docker API must be exposed on that IP address & port. Please refer to the Docker documentation to check how to configure this.

<pre><code> http --form POST :9000/api/endpoints \
"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
Name="test-remote" URL="tcp://10.0.7.10:2375" EndpointCreationType=1</code></pre>

The response is a JSON object representing the endpoint:

<pre><code>{
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
}</code></pre>

Retrieve the value of the <code>Id</code> property, it will be used to execute queries against the Docker engine for that endpoint.

## Remote endpoint secured using TLS

This query will create an endpoint called <b>test-remote-tls</b> and will communicate with this environment over TCP (secured with TLS) using the IP address 10.0.7.10 and port 2376 (these are example values, ensure that you're using the correct IP & port).

<b>NOTE:</b> The Docker API must be exposed on that IP address & port. Please refer to the Docker documentation to check how to configure this.

<pre><code> http --form POST :9000/api/endpoints \
"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE" \
Name="test-remote" URL="tcp://10.0.7.10:2376" EndpointCreationType=1 TLS="true" TLSCACertFile@/path/to/ca.pem TLSCertFile@/path/to/cert.pem TLSKeyFile@/path/to/key.pem</code></pre>

The response is a JSON object representing the endpoint:

<pre><code>{
    "AuthorizedTeams": [], 
    "AuthorizedUsers": [], 
    "Extensions": [], 
    "GroupId": 1, 
    "Id": 1, 
    "Type": 1,
    "Name": "test-remote", 
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
}</code></pre>

Retrieve this ID, it will be used to execute queries against the Docker engine for that endpoint.

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
