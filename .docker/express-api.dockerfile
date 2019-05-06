FROM node:10.15.3-alpine

LABEL author="Peter Wiebe"

WORKDIR /api-server

COPY back-end/package.json /api-server/

RUN npm i

COPY back-end /api-server

EXPOSE 5000

ENTRYPOINT [ "npm", "start" ]

### Steps to build && run api server
## (From the root directory run the following)

## Build image
# docker build -t express-api -f .docker/express-api.dockerfile .

## Run container
# NOTE: This image is dependent on a running mongodb container
#       so you must get it running first

# docker run -p 27017:27017 --env-file .docker/env/mongo.dev.env --name mongo mongo
# docker run -p 5000:5000 --link mongo --name express-api express-api
