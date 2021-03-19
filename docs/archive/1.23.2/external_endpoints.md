External endpoints
==================

External endpoint definitions are written in JSON.

It must consist of an array with every endpoint definition consisting of
one element.

<pre><code>
[
  {
    "Name": "my-first-endpoint",
    "URL": "tcp://myendpoint.mydomain:2375"
  },
  {
    "Name": "my-second-endpoint",
    "URL": "tcp://mysecondendpoint.mydomain:2375",
    "TLS": true,
    "TLSSkipVerify": true,
    "TLSCACert": "/tmp/ca.pem",
    "TLSCert": "/tmp/cert.pem",
    "TLSKey": "/tmp/key.pem"
  }
]
</code></pre>

Endpoint definition format
--------------------------

An endpoint element must be a valid [JSON](http://www.json.org/) object.

Example:

<pre><code>
{
  "Name": "my-secure-endpoint",
  "URL": "tcp://myendpoint.mydomain:2375",
  "TLS": true,
  "TLSCACert": "/tmp/ca.pem",
  "TLSCert": "/tmp/cert.pem",
  "TLSKey": "/tmp/key.pem"
}
</code></pre>

It is composed of multiple fields, some mandatory and some optionals.

### `Name`

Name of the endpoint. Used to check if an endpoint already exists in the
database during a synchronization request. It will also be displayed in
the UI.

This field is **mandatory**.

### `URL`

How to reach the endpoint.

Protocol **must** be specified, only `tcp://` and `unix://` are
supported at the moment. Any definition not using one of these 2
protocols will be skipped.

This field is **mandatory**.

### `TLS`

Specify this field to true if you need to use TLS to connect to the
endpoint. Defaults to `false`. When applying the true value to this
field, Portainer will expect the TLSCACertPath, TLSCertPath and
TLSKeyPath fields to be defined too.

This field is **optional**.

### `TLSSkipVerify`

Specify this field to true if you want to skip server verification.
Defaults to `false`.

This field is **optional**.

### `TLSCACert`

Path to the CA used to connect to the endpoint.

This field is **optional**.

### `TLSCert`

Path to the certificate used to connect to the endpoint.

This field is **optional**.

### `TLSKey`

Path to the key used to connect to the endpoint.

This field is **optional**.

Endpoint synchronization
------------------------

When using the `--external-endpoints` flag, Portainer will read the
specified JSON file at startup and automatically create the endpoints.

Portainer will then read the file based on the interval defined in
`--sync-interval` (every `60s` by default) and will automatically do the
following:

-   For each endpoint in the database, it will automatically merge any
    configuration find in the file using the enpoint name as the
    comparison key
-   If an endpoint exists in the database but is not present in the
    file, it will be removed from the database
-   If an endpoint exists in the file but not in the database it will be
    created in the database

When using external endpoint management, endpoint management will via
the UI will be disabled to avoid any possible configuration overwrite
(the endpoints view is still accessible but will only display the list
of endpoints without giving the possibility to create/update endpoints).
A simple warning message will be displayed in the endpoints view.