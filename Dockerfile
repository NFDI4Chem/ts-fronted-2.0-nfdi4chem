# pull official base image
FROM node:16-alpine3.12 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Increate node max memory, the default memory limit is too low for building 
ENV NODE_OPTIONS --max-old-space-size=8192 

# install app dependencies
COPY package.json package.json ./
COPY package-lock.json package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# Include default values; override in deployment image
RUN cp default.env .env

# Build
RUN npm run build

EXPOSE 3000

# start app
CMD ["npm", "run", "start"]

# Serve the built application with nginx
#FROM nginx:stable-alpine

#RUN apk add --no-cache nodejs npm bash

#SHELL ["/bin/bash", "-c"]

#RUN npm install -g @beam-australia/react-env

#COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPY --from=build /app/build /usr/local/src/frontend/build

#CMD ["nginx", "-g", "daemon off;"]