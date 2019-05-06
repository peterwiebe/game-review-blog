# Game Review Blog

## Requirements

- [Docker v2.0.0.3](https://www.docker.com/products/docker-desktop)

## Getting Started

To run all the services needed run the following command:
```sh
# in the root directory
$ docker-compose -f .docker/docker-compose.yml
```

OR you can start each service individually by following the appropriate README files:
- [back-end](back-end/README.md)
- [frontend](front-end/README.md)

### User Story

As an avid video game reviewer 
I want a way to create blog posts for my video game reviews 
So that I can share my reviews in a way that my readers can respond to

### Acceptance Criteria

A blog post will show the following:
- Title
- Article text (plain text)
- Author name

All comments on a blog post will show the following:
- Comment text (plain text) 
- Author name

### Non-functional Requirements

Qualities of the codebase: 
- Production ready
- Team supportable
- Desirable to work on

Qualities of the application:
- **Must** have a Build system
- Should be built or compiled in a docker container
- Should produce a docker container as an artifact
- Should not have any runtime dependencies (datastore needs to be in memory)

### Expectations

- Build & release framework in place
- Tests written for the application included in the build or release process
- Clear documentation
- Clean and understandable code
