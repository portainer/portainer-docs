# How do I change the port that Portainer uses?

By default, Portainer runs on port `9000`. To change the port, edit the `-p` parameter of your `docker run` command to suit. For example, if you wanted Portainer to listen on port 443:

```text
-p 443:9000
```



