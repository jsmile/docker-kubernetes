# Specify a base image
FROM node:alpine

# Install needed programs
WORKDIR /app

COPY package.json .
RUN  npm install 
COPY . .

# Specify a default command 
CMD [ "npm", "start"]