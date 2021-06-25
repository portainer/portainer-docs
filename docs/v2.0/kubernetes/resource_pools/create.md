???+ Hint ""
    From Portainer CE 2.6 on, `Resource Pool(s)` has been renamed to `Namespace(s)` to be aligned with Kubernetes lingo.

# Create a Namespace/Resource Pool

The Namespaces/Resource Pools are helpful when multiple teams are using the same cluster and there is potential collision, you can prevent this by using a virtual wall between multiple clusters. In this help article, you will learn how to create a Namespace/Resource Pool using Portainer.

## Creating a Namespace/Resource Pool

Go to <b>Namespaces/Resource Pools</b> and then click <b>Add Namespace/Resource pool</b>.

![resource_pool](assets/create-1.png)

In the next screen, you need to <b>name</b> your resource pool, assign a <b>quota<b> (Optional), set the <b>resource limits</b> of that quota indicating how much memory and CPU is assigned to this Namespace/Resource Pool.

When everything is set, click <b>Create resource pool</b>.

![resource_pool](assets/create-2.png)

If everything works as expected, you will see a pop up confirming the creation of this resource pool.

![resource_pool](assets/create-3.png)

## :material-note-text: Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}