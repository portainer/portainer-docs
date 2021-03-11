# Switching from CE to Portainer Business 

Full instructions on how to switch your environment from Portainer CE to Portainer Business are here. These steps should be followed where you have bought the product or you are running a Free Trial.

### Switching on Docker
Assuming you've used our recommended deployment scripts: when upgrading to the latest version of Portainer, use the following commands:

```shell

docker stop portainer

```

```shell

docker rm portainer

```

Those 2 commands will stop and remove the container respectively. Doing this will NOT remove your other applications/containers/etc.

Now that you have stopped and removed the old version of Portainer, you can run this command

```shell

docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always --pull=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee-latest

```

That will deploy the newest version of Portainer Business on your system.

Now you can return to Portainer and login (you might need to log out first). When you login for the first time you will be prompted to enter your License Key. Copy this from the email you received and paste it into the dialogue box.

You should notice that the bottom left corner now contains the words "Business Edition"


### Switching on Kubernetes
Upgrade method depends on the original install method used.

#### For NodePort
```shell
kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer-ee.yaml
```

That will deploy the newest version of Portainer Business on your system.

Now you can go return to Portainer and login (you might need to log out first). When you login for the first time you will be prompted to enter your License Key. Copy this from the email you received and paste it into the dialogue box.

You should notice that the bottom left corner now contains the words "Business Edition"


### How to Downgrade

Full steps on how to downgrade from Portainer Business to CE [are found here.](https://documentation.portainer.io/v2.0-be/downgrade/be-to-ce/)


## :material-note-text: Notes
[Contribute to these docs](https://github.com/portainer/portainer-docs/blob/master/contributing.md){target=_blank}
