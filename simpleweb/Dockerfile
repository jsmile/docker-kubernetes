# Specify a base image  : fix no npm command
FROM node:alpine

WORKDIR /usr/app

# Install some Dependencies : fix missing files for npm
# Split COPY into 2 part : .package.json ( for dependencies ) and others ( for sources )
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default Command 
CMD [ "npm", "start" ]