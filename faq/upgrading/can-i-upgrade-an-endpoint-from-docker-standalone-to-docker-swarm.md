# Can I upgrade an endpoint from Docker Standalone to Docker Swarm?

We do not recommend upgrading existing Docker Standalone endpoints to Docker Swarm because you will lose your stacks. We do support migrating a stack from one endpoint to another, so our recommended approach is to:

1. [Add the Docker Swarm endpoint](../../admin/endpoints/add/swarm.md) to your Portainer installation.
2. [Migrate your stacks](../../user/docker/stacks/migrate.md) over to the new endpoint.

