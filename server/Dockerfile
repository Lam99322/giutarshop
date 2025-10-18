# Sử dụng image Node.js nhẹ
FROM node:18-alpine

# Set thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở port server (5000 theo ảnh bạn gửi)
EXPOSE 5000

# Lệnh khởi động
CMD ["npm", "start"]
