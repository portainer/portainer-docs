# Portainer fails to start with "invalid url for trusted origin" error

#### Issue

* Portainer fails to start and logs a fatal error such as:

```
  failed to build server | error="invalid url for trusted origin. Please check the trusted origins flag. trusted_origin: \"portainer.example.com\""
```

* After startup, browser requests return `403 Forbidden` on state-changing actions, with `CSRF check failed` entries in the server logs.

#### Cause

As of Portainer version 2.41, CSRF protection has been migrated from `gorilla/csrf` to Go's standard library. This is a breaking change to how trusted origins are validated. Each entry in `PORTAINER_TRUSTED_ORIGINS` must now be a **full URL including scheme** (`http` or `https`). Bare hostnames are no longer accepted. Optionally, a port may also be included.

| Format                               | Valid?             |
| ------------------------------------ | ------------------ |
| `portainer.example.com`              | No longer accepted |
| `https://portainer.example.com`      | Valid              |
| `https://portainer.example.com:9443` | Valid              |

#### Solution&#x20;

Update all entries in your `PORTAINER_TRUSTED_ORIGINS` configuration (CLI flag or environment variable) to use full URLs with scheme.

If you need more time to update your configuration, a `legacy-csrf` feature flag is available in 2.41 to revert to the previous behaviour. Note that this flag will be removed in 2.42.
