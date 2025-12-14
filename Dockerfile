FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --production=false

# Copy server files
COPY server ./server

# Expose port
EXPOSE 3001

# Start server
CMD ["node", "server/index.js"]
