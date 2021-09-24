# How do I change the port that Portainer uses?

By default, Portainer runs on port `9000`. To change the port, you must override the entry point and specify the port you want to use. For example, to force Portainer to bind to port `443` you will need to do the following:

#### If launching Portainer via docker run:

Add the flag `"--entrypoint /portainer -p :443"`.

#### If launching Portainer via via docker-compose:

Add the flag `"entrypoint: /portainer -p :443"`.



