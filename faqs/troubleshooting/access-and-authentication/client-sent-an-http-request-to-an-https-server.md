# Client sent an HTTP request to an HTTPS server

#### Issue Description

When accessing Portainer via the web you may receive the following error message:

```
Client sent an HTTP request to an HTTPS server.
```

#### Cause

This error occurs when you attempt to access Portainer's HTTPS URL (port 9443) using the HTTP protocol:

```
http://my.portainer.url:9443/
```

This is because port 9443 only accepts the HTTPS protocol and does not accept HTTP requests.

#### Resolution

Use the HTTPS protocol in the address when accessing port 9443.

```
https://my.portainer.url:9443/
```

Alternatively if you have HTTP access enabled you can access via HTTP on port 9000:

```
http://my.portainer.url:9000/
```

<br>
