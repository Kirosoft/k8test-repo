# Use Node.js LTS as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application code
COPY src/ ./src/

# Expose port
EXPOSE 3000

# Set non-root user for security
USER node

# Start the application
CMD ["node", "src/index.js"]