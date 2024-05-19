#Dockerfile

# Use this image as the platform to build the app
FROM node:18-alpine AS external-website

# The WORKDIR instruction sets the working directory for everything that will happen next
WORKDIR /app

# Copy all local files into the image
COPY . .

# Clean install all node modules
RUN npm i

# Build SvelteKit app
ENV NODE_ENV=production
ENV PUBLIC_BACKEND_HOST=http://haciendola-backend
ENV PUBLIC_BACKEND_PORT=3006
RUN npm run build


EXPOSE 3000

# The USER instruction sets the user name to use as the default user for the remainder of the current stage

# This is the command that will be run inside the image when you tell Docker to start the container
CMD ["node","build/index.js"]