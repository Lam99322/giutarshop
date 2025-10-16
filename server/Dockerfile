# --- Backend Dockerfile (server/Dockerfile) ---

# Sử dụng Node 20 (nhẹ, hiện đại)
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Mở cổng 5000 (backend)
EXPOSE 5000

# Lệnh khởi chạy server
CMD ["npm", "start"]
