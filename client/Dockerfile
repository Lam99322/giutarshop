FROM node:18-alpine
WORKDIR /app

# Copy package.json và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose port Vite mặc định
EXPOSE 5173

# Chạy dev server
CMD ["npm", "run", "dev", "--", "--host"]
