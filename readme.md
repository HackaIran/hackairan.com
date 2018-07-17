# hackairan com
HackaIran&#39;s official website

## Docker Deployment
In order to deploy the website using docker, first install the ```docker-ce``` and ```docker-compose``` using Digital Ocean tutorials. Then either build or pull the hackairan's website image, change to directory where "docker-compose.yml" exists, and run the containers using the following command:

```bash
docker-compose up
```

Be advised that if you don't have ```mongo```'s docker image on your machine, while runnning the compose file, it will automatically pull the image from docker registry.

If you wanna build the image yourself, run the following command where your Dockerfile lies:

```bash
docker build -t hackairan .
```

[How to Install and Use Docker on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)

[How To Install Docker Compose on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04)
