---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/j6QEqM3Sd94bdPsX4HaN/faqs/troubleshooting/ui-and-features/why-doesnt-the-portainer-ui-load-inside-an-iframe
---

# Why doesn’t the Portainer UI load inside an iframe?

By default, Portainer cannot be embedded in an iframe. This is because the default **Content-Security-Policy (CSP)** header includes:

```
frame-ancestors 'none';
```

This blocks all iframing of Portainer.

If you need to allow iframing, you can disable the CSP header entirely by setting the [`--no-csp` flag](../../../advanced/cli.md#configuration-flags-available-at-the-command-line) when running Portainer.&#x20;

{% hint style="danger" %}
This removes **all** of the Content-Security-Policy header, so please use it with caution and at your own risk, and only if you **need** the iframing to work for you.
{% endhint %}
