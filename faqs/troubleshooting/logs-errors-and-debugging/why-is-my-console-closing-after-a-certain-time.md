---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/faqs/troubleshooting/logs-errors-and-debugging/why-is-my-console-closing-after-a-certain-time
---

# Why is my console closing after a certain time?

### Is your container console or Kube-shell in Portainer closing on its own and you have published Portainer via reverse proxy? <a href="#hs_cos_wrapper_kb-article-module-4" id="hs_cos_wrapper_kb-article-module-4"></a>

This could be related to a time out setting in your reverse proxy and can be changed. Below are some examples of how this can be done for nginx based proxies.

In below examples, change the value `3600` to match your requirement.\
\
**Nginx Server**:\
add the following to the `nginx.conf` file.

```
proxy_read_timeout 3600;
```

\
**Nginx Proxy Manager:**

Edit the proxy host that you need to change and add `proxy_read_timeout 3600;` as below.<br>

<figure><img src="../../../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>

**Nginx Ingress Controller (Kubernetes)**\
\
You need to add the following annotation to the Ingress object\
`nginx.ingress.kubernetes.io/proxy-read-timeout: 3600`
