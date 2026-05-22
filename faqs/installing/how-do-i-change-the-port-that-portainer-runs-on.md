---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/Dalese9Lv4CX6YKS1s45/faqs/installing/how-do-i-change-the-port-that-portainer-runs-on
---

# How do I change the port that Portainer runs on?

By default, Portainer runs on port 9443. To change the port, edit the `-p` parameter of your docker run command to suit. For example, if you wanted Portainer to listen on port 443:

```
-p 443:9443
```
