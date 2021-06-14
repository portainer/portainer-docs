# :fontawesome-solid-code: API

Portainer exposes an HTTP API that you can use to automate everything you do via the Portainer UI. You may also use Portainer as a gateway (HTTP queries against the Portainer API) to the underlying Docker/Kubernetes API.

## :fontawesome-solid-file-code: API Documentation

The API documentation is available on
[Swaggerhub](https://app.swaggerhub.com/apis/portainer/portainer-ce/2.5.1){target=_blank}
<!-- and you can also find some examples
[here](https://gist.github.com/deviantony/77026d402366b4b43fa5918d41bc42f8){target=_blank}. 
<script src="https://gist.github.com/deviantony/77026d402366b4b43fa5918d41bc42f8.js"></script>
-->

## :octicons-code-review-16: Examples

!!! Note "The following examples use [httpie](https://httpie.org/){target=_blank} to execute API calls against Portainer"

### Initialize the admin password
On a fresh install of Portainer, you need to create an admin account to initialize Portainer. You will be asked for this when you visit the Portainer url for the very first time. You can acheive the same using the below

```shell 
http POST <portainer url>/api/users/admin/init Username="<admin username>" Password="<adminpassword>"
```

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
```json
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTQ5OTM3NjE1NH0.NJ6vE8FY1WG6jsRQzfMqeatJ4vh2TWAeeYfDhP71YEE
```
**NOTE**: This token has a 8 hour validity, you'll need to generate another token to execute authenticated queries once this one expires.

### Create a new endpoint
Here, We'll show how to create 3 different types of endpoints:

* Local endpoint using Docker socket communication
* Remote endpoint using TCP communication
* Remote endpoint using TCP communication secured via TLS

#### Local endpoint via the Docker socket
This query will create an endpoint called test-local and will use the Docker socket to communicate with this environment.

**NOTE**: This example requires to you bind-mount the Docker socket when running Portainer.

```shell http --form POST <portainer url/api/endpoints \
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
**More Examples to be added soon**