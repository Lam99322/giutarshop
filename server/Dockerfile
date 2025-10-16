# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy file khai báo dependencies
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Build TypeScript ra thư mục dist
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Copy thư mục dist và node_modules từ stage build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

# Mở cổng chạy ứng dụng
EXPOSE 5000

# Lệnh khởi động
CMD ["npm", "start"]
