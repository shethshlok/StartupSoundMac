# Use an official Node.js image as the base
FROM node:20-alpine3.19

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the app files into the container
COPY . .

# Install dependencies
RUN npm install

# Build the app (initial build)
RUN npm run build

# Set environment variables if needed (replace <PORT> with the app's port)
EXPOSE 5113

# Run the app with git pull on each start
CMD npm run dev