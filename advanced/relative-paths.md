# How Relative Path Support works in Portainer

The relative path volumes support in Portainer Business Edition is intended to provide you with a way to reference files and directories that are supplied within the Git repository alongside your compose file without needing to know the absolute path at which they will appear when they are deployed to your environment.&#x20;

{% hint style="info" %}
Relative path support is only present in Portainer Business Edition, and needs to be [enabled when deploying your stack from Git](../user/docker/stacks/add.md#relative-path-volumes) for this article to apply.
{% endhint %}

In the background the way this works is as follows:

1. In Portainer, a stack deployment is initiated where the stack is located in a Git repository, **Enable relative path volumes** is selected and a **Local (or Network) filesystem path** is specified.
2. Portainer creates a temporary unpacker container that bind mounts the path specified in the Local (or Network) filesystem path field.
3. The unpacker container clones the Git repository to a subdirectory under the bind mounted path.
4. Portainer creates the stack using the compose file provided, specifying the working directory as where the specified compose file is located within where the Git repo was cloned.
5. Now that the stack has been deployed, the temporary unpacker container is removed.

To take advantage of this with your compose file, you can specify any references to files that are within your repository in a _relative_ manner to your compose file. For example, imagine this simple nginx deployment:

```
.
├── docker-compose.yml
└── static
    └── index.html
```

In this example, the `docker-compose.yml` file is at the base directory of the repository. Alongside it there is a directory named `static`, and within that directory is an `index.html` file.

The `docker-compose.yml` file looks like this:

```
version: '3.1'
services:
  webapp:
    image: nginx:latest
    restart: always
    ports:
      - "3002:80"
    volumes:
      - ./static:/usr/share/nginx/html
```

The last line is the important one here - you'll note that we're referencing the static directory with a leading `.` and `/` - this tells compose that the path specified is _relative_ to the working directory, which Portainer specified during deployment. If we excluded the leading `.` this would be an _absolute_ path, and would refer to `/static` at the root of the host filesystem.

Let's look at an example where you had your compose file in a subdirectory of your repository, and your content in a different subdirectory:

```
.
├── nginx
│   └── docker-compose.yml
└── static
    └── index.html
```

In this scenario, you would specify the compose file when deploying as `nginx/docker-compose.yml`. Portainer will pull the contents of the repository to the specified location and set the working directory to the location of the compose file (ie, within the `nginx` subdirectory). As such, relative references within the compose need to be aware of this. To mount the contents of the `static` directory, your compose file would look like:

```
version: '3.1'
services:
  webapp:
    image: nginx:latest
    restart: always
    ports:
      - "3002:80"
    volumes:
      - ../static:/usr/share/nginx/html
```

The double dots (`..`) indicate that the files are at a directory level above the working directory.

### A note about the local (or network) filesystem path

The path on the local (or network) filesystem that the Git repository is cloned to will be in:

```
portainer-compose-unpacker/stacks/yourstackname/
```

For example, if you deployed a stack named `nginx` and specified the local filesystem path as:

```
/mnt/stacks/
```

it would result in:

```
/mnt/stacks/portainer-compose-unpacker/stacks/nginx/
```

This is generally not relevant for relative path referencing as the definition of the working directory avoids needing to be aware of this full path, but it does mean the same local (or network) filesystem path can be used to deploy multiple stacks without worrying about collisions (as long as they don't share the same stack name).

This path is where your stack's mounted files will be sourced from, so you will want to ensure this path remains intact and unchanged. When a stack deployed with this method is removed, the file and directory structure for that stack are removed as well.
