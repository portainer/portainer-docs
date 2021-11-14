# Can I upgrade an environment from Docker Standalone to Docker Swarm?

We do not recommend upgrading existing Docker Standalone environments to Docker Swarm because you will lose your stacks. We do support migrating a stack from one environment to another, so our recommended approach is to:

1. [Add the Docker Swarm endpoint](../../admin/environments/add/swarm.md) to your Portainer installation.
2. [Migrate your stacks](../../user/docker/stacks/migrate.md) over to the new environment.
