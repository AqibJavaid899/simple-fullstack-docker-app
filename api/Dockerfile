# Pulling a base Node image with an embedded OS
FROM node:17-alpine

# Specifying the Working Directory for Docker in the image that we're creating
WORKDIR ./app

# Copying the package.json file in the new image
COPY package.json .

# Installing all the dependencies into the new image on build time with the RUN command
RUN yarn

# Copying the app source code into the image that we're building with the working directory specified above
COPY . .

# Specifying the PORT exposed by the Container to the Computer so that the PORT mapping happen while using Docker Desktop app
EXPOSE 4001

# Specifying the commands that we want Docker to run when the Container run based on the created image
CMD ["yarn", "serve"]