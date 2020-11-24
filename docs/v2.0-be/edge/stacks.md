# Deploy an Edge Stack

This feature allows the deployment of multiple applications to multiple endpoints from a single screen and multiple sources. 

Edge stacks lets you deploy an app to all selected edge endpoints concurrently, regardless of their current state (online, disconneted, new).

## Deploying an Edge Stack

1. Select <b>Edge Stacks</b> and then 2. Click <b>Add stack</b>.

![edge](https://documentation.portainer.io/v2.0-be/settings/assets/edge_6.png)

Next 1. <b>Name</b> your stack and 2. select one or more <b>Edge Groups</b>.

3. In the <b>Build Methond</b> you need to define how to deploy your app from one of these options:

* Web Editor: You can use our web editor to write or paste a docker-compose file. 
* Upload: Upload a docker-compose.yml file from your computer
* Repository: Use a git repository where the compose file is. 
* Template: Use an Edge stack template. 

4. Once complete, click <b>Deploy stack</b>

![edge](https://documentation.portainer.io/v2.0-be/settings/assets/edge_7.png)

# Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).
