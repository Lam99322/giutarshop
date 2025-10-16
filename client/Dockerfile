# Sử dụng Node.js official image (nhẹ hơn và ổn định hơn)
FROM node:18-alpine
# server/Dockerfile
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # build TypeScript -> dist

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --production
COPY --from=builder /app/dist ./dist
# nếu cần public/ client build đã được copy nếu dùng 1 image approach
EXPOSE 5000
CMD ["node", "dist/index.js"]  # chỉnh theo file entrypoint của bạn
