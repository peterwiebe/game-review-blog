# RESTful Express API server

## Build Docker image

Ensure Docker is running.

Once docker is good to go, run the following command from the root directory:

```sh
# from the root directory of the repo
$ docker build -t express-api -f .docker/express-api.dockerfile .
```

## Run Docker container

### 1) Start MongoDB container

The API server depends on MongoDb. 

If you haven't already built a MongoDB image you can do so with the following command:

```sh
# from the root directory of the repo
$ docker build -t mongo -f .docker/mongo.dockerfile .
```

Once you have the MongoDB image on your machine you can start it with the following command:

```sh
# from the root directory of the repo
$ docker run -p 27017:27017 --env-file .docker/env/mongo.dev.env --name mongo mongo
```

### 2) Start API server

```sh
# from the root directory of the repo
$ docker run -p 5000:5000 --link mongo --name express-api express-api
```

## Unit Tests

TODO
