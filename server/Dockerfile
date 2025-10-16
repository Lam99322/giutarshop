# Stage 1: Base image
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài dependencies
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Expose cổng server
EXPOSE 5000

# Lệnh khởi chạy ứng dụng
CMD ["npm", "start"]
