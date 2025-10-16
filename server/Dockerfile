# ----------------------
# Backend Dockerfile (Node.js)
# ----------------------
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Cài dependencies
RUN npm install --only=production

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở port backend (ví dụ 5000 hoặc 8080)
EXPOSE 5000

# Lệnh chạy ứng dụng (kiểm tra package.json để chắc đúng)
CMD ["npm", "start"]
