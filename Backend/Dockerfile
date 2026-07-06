# ---- Backend Dockerfile ----
# Node.js LTS base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["node", "src/index.js"]
