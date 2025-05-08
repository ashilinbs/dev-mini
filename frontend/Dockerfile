FROM node:18-alpine

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Run tests
CMD ["npm", "test", "--", "--watchAll=false"]
