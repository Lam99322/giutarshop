# Stage 1: build
FROM node:18-slim AS builder
WORKDIR /app

# Copy package.json + package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy source code
COPY . .

# Build project
RUN npm run build

# Stage 2: serve static files
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
