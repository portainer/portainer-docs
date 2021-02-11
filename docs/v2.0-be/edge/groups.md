# Edge Groups

Edge Groups allows you to create groups of Edge endpoints based on a manual selection or synamically through <b>tags</b>. This feature is very useful when you manage multiple Edge Endpoints in multiple zones.

To create a group, 1. go to <b>Edge Groups</b> and then 2. click <b>Add Edge Group</b>.

![edge](https://documentation.portainer.io/v2.0-be/settings/assets/edge_3.png)

1. Enter a <b>Name</b> and then 2. select either <b>Static</b> or <b>Dynamic</b>.

## Static

3. Select the Endpoints you want to add to that group 4. These should then appear in the table on the right and finally 5. Click <b>Add edge group</b>

![edge](https://documentation.portainer.io/v2.0-be/settings/assets/edge_4.png)

## Dynamic

3. If you choose <b>Dynamic</b> you must choose between two options to match via <b>Tags</b> your Edge endpoints:

* Partial Match: Associate any endpoint matching at least one of the selected tags. (Each endpoint can have multiple tags).
* Full Match: Associate any endpoint matching all of the selected tags.

4. Type the tag and endpoints with that tag will appear in the screen. Finally, click <b>Add edge group</b>

![edge](https://documentation.portainer.io/v2.0-be/settings/assets/edge_5.png)

# Notes

[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}