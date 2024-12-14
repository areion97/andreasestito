# Use the official Node.js image as a base
FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Define environment variable
ENV PORT=3000

# Command to run the app
CMD ["npm", "start"]
