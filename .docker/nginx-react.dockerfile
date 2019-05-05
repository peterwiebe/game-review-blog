# BUILD
FROM node:10.15.3-alpine as build

LABEL author="Peter Wiebe"

WORKDIR /spa

COPY front-end/package.json /spa/

RUN npm i

COPY front-end /spa

# DISTRIBUTION
FROM nginx:stable-alpine

COPY --from=build /spa/build /usr/share/nginx/html

COPY .config/nginx.conf /etc/nginx/conf.d/default.conf

### Steps to build && run this single page react app
## (From the root directory run the following)

## Build image
# docker build -t nginx-react -f .docker/nginx-react.dockerfile .

## Run container
# docker run -p 8080:80 nginx-react
