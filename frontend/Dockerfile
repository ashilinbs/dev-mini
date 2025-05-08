FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all remaining files
COPY . .

# Run tests
CMD ["npm", "test", "--", "--watchAll=false"]
