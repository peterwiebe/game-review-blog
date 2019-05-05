FROM node:10.15.3-alpine

LABEL author="Peter Wiebe"

WORKDIR /api-server

EXPOSE 5000

ENTRYPOINT [ "node", "index.js" ]

### Steps to build && run api server
## (From the root directory run the following)

## Build image
# docker build -t express-api -f .docker/express-api.dockerfile .

## Run container
# NOTE: This image is dependent on a running mongodb container
#       so you must get it running first

# docker run -d --name mongo mongo
# docker run -p 5000:5000 --link mongo --name express-api express-api
