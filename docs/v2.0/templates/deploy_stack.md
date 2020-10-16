# How to deploy and stack from a template

Portainer allows you to deploy an entire stack from a template included in the template list by default or a custom template created before. See how [Create a template from a Stack](/v2.0/stacks/template.md).

## Deploying an Stack

To deploy an stack, go to <b>App Templates</b> and choose the template you want to deploy. In this example, I will deploy a cluster of CockroachDB.

![templates](assets/stack-1.png)

Set a name, define access control (if enabled with the toogle) and do a click in <b>Deploy the Stack</b>

![templates](assets/stack-2.png)

You will see an animation in the button meanwhile is deploying this stack:

![templates](assets/stack-3.png)

If everything work as expected, you will see your new stack deployed. 

![templates](assets/stack-4.png)

Do a click in the name of your stack to see the details of the deployment:

![templates](assets/stack-5.png)

## Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md).
