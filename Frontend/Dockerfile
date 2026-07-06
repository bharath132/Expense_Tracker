# ---- Frontend Dockerfile ----
# Stage 1: Build the React app
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies for the build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# Accept the API URL as a build argument
ARG VITE_API_URL=http://localhost:5000
ENV VITE_API_URL=$VITE_API_URL

# Build the production bundle
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files to Nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the frontend port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
