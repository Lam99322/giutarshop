# Sử dụng image Node.js nhẹ
FROM node:18-slim

# Set thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json để tận dụng cache
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Mở port 5173 cho Vite dev server
EXPOSE 5173

# Lệnh chạy khi container khởi động
CMD ["npm", "run", "dev", "--", "--host"]
