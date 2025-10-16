# Stage 1: Build the React app using Vite
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy dependencies files first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
