# Discover

The **Discover** step lists the workloads in a Docker or Swarm environment so you can choose which ones to migrate.

## Choose the source environment

**Source environment** lists every Docker and Swarm environment your Portainer account can reach. Swarm environments are shown with `(Swarm)` after their name. Kubernetes environments aren't listed here, because they are migration targets, not sources.

Changing the source environment clears your selection.

## What gets listed

Portainer-Migrate reads the workloads straight from the environment, so it finds them however they were deployed: through Portainer, with `docker compose`, with `docker stack deploy` or with `docker run`. Workloads are grouped as follows:

| Environment | Group                     | Each row shows                                 | Badge       |
| ----------- | ------------------------- | ---------------------------------------------- | ----------- |
| Docker      | **Compose stacks**        | The number of containers in the project.       | Compose     |
| Docker      | **Standalone containers** | The image and the container's state.           | Container   |
| Swarm       | **Swarm stacks**          | The number of services in the stack.           | Swarm stack |
| Swarm       | **Standalone services**   | The replica count (or `global`) and the image. | Service     |

Compose projects are recognized by the `com.docker.compose.project` label and Swarm stacks by the `com.docker.stack.namespace` label. Stopped containers are included. Portainer's own Server and Agent containers are never listed.

Tick each workload you want to migrate. Selecting a stack migrates all of its services or containers. The footer shows how many workloads you've selected.

{% hint style="info" %}
Everything you select in one run is deployed into the same namespace as one GitOps stack. To keep apps independent on Kubernetes, migrate them in separate runs.
{% endhint %}

## If nothing is listed

| Message                                   | What it means                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **No Docker or Swarm environments found** | Your Portainer account can't reach any Docker or Swarm environment, or none are connected.                                                 |
| **Couldn't load workloads**               | Portainer returned an error listing the environment's workloads. Check that the environment is up and that you have access to it.          |
| **No migratable workloads found**         | The environment has no stacks, services or standalone containers. If you know there are workloads, check your access to them in Portainer. |
