# --- Backend Dockerfile (server/Dockerfile) ---

FROM node:20-alpine

WORKDIR /app

# Copy package files trước để cache layer npm install
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port backend (ví dụ 5000)
EXPOSE 5000

# Chạy server (dùng ts-node)
CMD ["npm", "start"]
