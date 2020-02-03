# Specify a base image  : fix no npm command
FROM node:alpine

WORKDIR /usr/app

# Install some Dependencies : fix missing files for npm
COPY ./ ./
RUN npm install

# Default Command 
CMD [ "npm", "start" ]