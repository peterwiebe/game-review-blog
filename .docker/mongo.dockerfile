FROM mongo:4.1

LABEL author="Peter Wiebe"

EXPOSE 27017

### TODO:
# - add setup for backups

### Steps to build && run this single page react app
## (From the root directory run the following)

## Build image
# docker build -t mongo -f .docker/mongo.dockerfile .

## Run container
# docker run -p 27017:27017 --env-file .docker/env/mongo.dev.env --name mongo mongo
