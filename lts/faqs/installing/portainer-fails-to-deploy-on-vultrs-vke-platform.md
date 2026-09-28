# Portainer fails to deploy on Vultr's VKE platform

When attempting to deploy Portainer on Vultr's VKE (Vultr Kubernetes Engine) platform using our standard manifests, deployment will hang. This is because our manifests define a 10Gi volume claim from the Storage Class, but VKE will only accept a minimum of 40Gi when provisioning storage.

To resolve this issue, download the manifest and edit it in a text editor of your choice. You will need to change the option:

```
storage: "10Gi"
```

to the following:

```
storage: "40Gi"
```

Save the changes to the manifest. You can now use this edited manifest to deploy Portainer on VKE.
