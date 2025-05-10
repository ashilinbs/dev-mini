# Use the official Node.js image with Alpine for a lightweight base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port (optional, for development purposes)
EXPOSE 3000

# Run unit tests as the default command
CMD ["npm", "test"]
