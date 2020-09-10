# Deploy and connect Portainer Agent in Docker

If you want to manage any standalone Docker Host, is required to connect to the Docker API directly. To expose the Docker API to admit remote connections, you need to follow [theses steps](https://docs.docker.com/engine/install/linux-postinstall/#configuring-remote-access-with-systemd-unit-file)

Once this is done, we going trought too se how to connect to the Docker API using TLS and Without TLS

## Connect to Docker Host API without TLS

To connect directly to a Docker host API without TLS. First, you need to go to <b>endpoints</b> and the do a click in the <b>Add Endpoint</b> button.

![docker_endpoint](assets/docker_1.png)

The next step is <b>choose the environment</b> type and select <b>Docker</b>. In the following section (Environment Details), you need to specify the following information:

* Name: This a descriptive name that help you to identify this endpoint in the future.
* Endpoint URL: Is the name or IP address to connect to the Docker Host. Don't forget to specify the port. When you set Docker to use TLS, the default port is <b>2376</b>
* Public IP: URL or IP address where exposed containers will be reachable. This field is optional and will default to the endpoint URL.
* TLS: Enable this option if you need to connect to the Docker endpoint with TLS.

Once all this has be specified, you can click in the <b>Add Endpoint</b> button. 

![docker_endpoint](assets/docker_2.png)

If everything work as expected, you will see a pop up confirming that the Endpoint was added successfully

![docker_endpoint](assets/docker_3.png)

## Connect to Docker Host API with TLS

Portainer is capable to connect to the Docker Host API using TLS. To use this option, the requeriment is that the Docker environment be protected already. You can find out more information about how to protect a Docker environment with TLS in the [Docker documentation](https://docs.docker.com/engine/security/https/)

To connect directly to a Docker host API TLS support. First, you need to go to <b>endpoints</b> and the do a click in the <b>Add Endpoint</b> button.

![docker_endpoint](assets/docker_1.png)

The next step is <b>choose the environment</b> type and select <b>Docker</b>. In the following section (Environment Details), you need to specify the following information:

* Name: This a descriptive name that help you to identify this endpoint in the future.
* Endpoint URL: Is the name or IP address to connect to the Docker Host. Don't forget to specify the port. 
* Public IP: URL or IP address where exposed containers will be reachable. This field is optional and will default to the endpoint URL.
* TLS: Enable this option if you need to connect to the Docker endpoint with TLS.
* TLS CA Certificate: Define your CA Cerficate.
* TLS Certificate: Define your certificate.
* TLS Key: Define your certificate key.

Once all this has be specified, you can click in the <b>Add Endpoint</b> button. 

![docker_endpoint](assets/docker_5.png)

Scroll down to the bottom of the page and do click in the <b>Add Endpoint</b> button.

![docker_endpoint](assets/docker_6.png)

## Notes

Do you think that is missing something here? Contribute with this admin guide forking the repo [Portainer-Docs](https://github.com/portainer/portainer-docs) and propose changes.