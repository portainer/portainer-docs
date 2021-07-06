# :fontawesome-solid-code: API

Portainer exposes an HTTP API that you can use to automate everything you do via the Portainer UI. You may also use Portainer as a gateway (HTTP queries against the Portainer API) to the underlying Docker/Kubernetes API.

!!! Note "API documentation is available [here](../api-schema/)"

## :octicons-code-review-16: Examples

!!! Note "The following examples use [httpie](https://httpie.org/){target=_blank} to execute API calls against Portainer"
<br>
### Initialize the admin password
On a fresh install of Portainer, you need to create an admin account to initialize Portainer. You will be asked for this when you visit the Portainer url for the very first time. You can acheive the same using the below

```shell 
http POST <portainer url>/api/users/admin/init Username="<admin username>" Password="<adminpassword>"
```
<br>
### Authenticate against the API using the admin account
```shell
http POST <portainer url>/api/auth Username="<admin username>" Password="<adminpassword>"
```
The response is a JSON object containing the JWT token inside the jwt field:
```shell
{
  "jwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE"
}
```
You need to retrieve this token. You will need to pass this token inside the Authorization header when executing an authentication query against the API.

The value of the Authorization header must be of the form Bearer <JWT_TOKEN>.

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE
```

**Note**: This token has a 8 hour validity, you'll need to generate another token to execute authenticated queries once this one expires.
<br>
### Create a new endpoint
Here, We'll show how to create 3 different types of endpoints:

* Local endpoint using Docker socket communication
* Remote endpoint using TCP communication
* Remote endpoint using TCP communication secured via TLS
<br>
#### Local endpoint via the Docker socket
This query will create an endpoint called test-local and will use the Docker socket to communicate with this environment.

**Note**: This example requires to you bind-mount the Docker socket when running Portainer.

```shell
http --form POST <portainer url/api/endpoints \
"Authorization: Bearer <jwt token>" \
Name="<endpoint name>" EndpointCreationType=1
```
The response is a JSON object representing the endpoint:

```json
{
    "AuthorizedTeams": [], 
    "AuthorizedUsers": [], 
    "Extensions": [], 
    "GroupId": 1, 
    "Id": 2, 
    "Name": "<endpoint name>", 
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
<br>
#### Remote endpoint
This query will create an endpoint called test-remote and will communicate with this environment over TCP using the IP address 10.0.7.10 and port 2375 (these are example values, ensure that you're using the correct IP & port).

**Note**: The Docker API must be exposed on that IP address & port. Please refer to the Docker documentation to check how to configure this.

```shell
http --form POST <portainer url>/api/endpoints \
"Authorization: Bearer <jwt token>" \
Name="test-remote" URL="tcp://10.0.7.10:2375" EndpointCreationType=1
```
The response is a JSON object representing the endpoint:

```json
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
<br>
<br>
#### Remote endpoint secured using TLS

This query will create an endpoint called test-remote-tls and will communicate with this environment over TCP (secured with TLS) using the IP address 10.0.7.10 and port 2376 (these are example values, ensure that you're using the correct IP & port).

**Note**: The Docker API must be exposed on that IP address & port. Please refer to the Docker documentation to check how to configure this.

```shell
http --form POST <portainer url>/api/endpoints \
"Authorization: Bearer <jwt token>" \
Name="test-remote-tls" URL="tcp://10.0.7.10:2376" EndpointCreationType=1 TLS="true" TLSCACertFile@/path/to/ca.pem TLSCertFile@/path/to/cert.pem TLSKeyFile@/path/to/key.pem
```
The response is a JSON object representing the endpoint:

```json
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
<br>
### Execute Docker queries against a specific endpoint

By using the following Portainer HTTP API endpoint /api/endpoints/<ENDPOINT_ID>/docker, you can now execute any of the Docker HTTP API requests.

This Portainer HTTP API endpoint acts as a reverse-proxy to the Docker HTTP API.

**Note**: You can refer to the Docker API [documentation](https://docs.docker.com/engine/api/) to get more information on how you can query the Docker engine.

<br>

#### List all containers

Here is how you can list all the containers available in a specific endpoint:

```shell
http GET <portainer url>/api/endpoints/1/docker/containers/json \
"Authorization: Bearer <jwt token>" \
all==true
```
The response is exactly the same as returned by the ContainerList operation of the Docker API, see the [documentation for the ContainerList operation](https://docs.docker.com/engine/api/v1.41/#operation/ContainerList){target=_blank}.

<br>

#### Create a container

Here is how you can create a container in a specific endpoint using the Portainer HTTP API as a gateway.

This query will create a new Docker container inside the endpoint using the ID 1. The container will be named web01, use the nginx:latest Docker image and publish the container port 80 on via the 8080 port on the host.

See the link below to retrieve more information on how you can create a container using the Docker HTTP API.

```shell
http POST <portainer url>/api/endpoints/1/docker/containers/create \
"Authorization: Bearer <jwt token>" \
name=="web01" Image="nginx:latest" \
ExposedPorts:='{ "80/tcp": {} }' \
HostConfig:='{ "PortBindings": { "80/tcp": [{ "HostPort": "8080" }] } }'
```

The response is exactly the same as returned by the ContainerCreate operation of the Docker API, see the [documentation for the ContainerCreate operation](https://docs.docker.com/engine/api/v1.41/#operation/ContainerCreate){target=_blank}.

Example response:

```json
{
    "Id": "5fc2a93d7a3d426a1c3937436697fc5e5343cc375226f6110283200bede3b107",
    "Warnings": null
}
```

Retrieve the ID of the container, you will need it to execute actions against that container.

<br>

#### Start a container

You can now start the container that you previously created using the endpoint /api/endpoints/<ENDPOINT_ID>/docker/containers/<CONTAINER_ID>/start (ensure you retrieved the ID of the container created previsouly):

```shell
http POST <portainer url>/api/endpoints/1/docker/containers/5fc2a93d7a3d426a1c3937436697fc5e5343cc375226f6110283200bede3b107/start \
"Authorization: Bearer <jwt token>"
```

The response is exactly the same as returned by the ContainerStart operation of the Docker API, see the [documentation for the ContainerStart operation](https://docs.docker.com/engine/api/v1.41/#operation/ContainerStart){target=_blank}.

<br>

#### Delete a container

You can create a container using the following endpoint /api/endpoints/<ENDPOINT_ID>/docker/containers/<CONTAINER_ID>:

```shell
http DELETE <portainer url>/api/endpoints/1/docker/containers/5fc2a93d7a3d426a1c3937436697fc5e5343cc375226f6110283200bede3b107 \
"Authorization: <jwt token>" \
force==true
```

The response is exactly the same as returned by the ContainerDelete operation of the Docker API, see the [documentation for the ContainerDelete operation](https://docs.docker.com/engine/api/v1.41/#operation/ContainerDelete){target=_blank}.

<br>
<br>
*More Examples to be added soon*
<br>

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}