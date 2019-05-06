FROM mongo:4.1

LABEL author="Peter Wiebe"

RUN apt-get update && \
    apt-get install -y netcat

COPY .docker/scripts/mongo /docker-entrypoint-initdb.d

# RUN chmod +x /scripts/*.sh

RUN touch /docker-entrypoint-initdb.d/.firstrun

EXPOSE 27017

VOLUME ["/data"]

### TODO:
# - connect to volume for persistent data
# - add setup for backups

### Steps to build && run this single page react app
## (From the root directory run the following)

## Build image
# docker build -t mongo -f .docker/mongo.dockerfile .

## Run container
# docker run -p 27017:27017 --env-file .docker/env/mongo.dev.env --name mongo mongo
