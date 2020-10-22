# Deploy an App from a manifest

In Portainer you will capable to launch new applications using your currents manifest in format YML for K8s or convert from a docker-compose file format. 

<b>Note</b>: Portainer uses Kompose to convert your Compose manifest to a Kubernetes compliant manifest. Be wary that not all the Compose format options are supported by Kompose at the moment.

## Deploying an App from a Kubernetes Manifest.

To start, do a click in <b>Applications</b> and then in <b>Advanced Deployment</b>.

![manifest](assets/manifest-1.png)

In this section, you need to define the resource pool where your applications is going to be deployed and start to write or paste your Kubernetes Manifest. Once is done, do a click in <b>Deploy</b>.

![manifest](assets/manifest-2.png)

If everything work as expected you will see the next pop up.

![manifest](assets/manifest-3.png)

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).