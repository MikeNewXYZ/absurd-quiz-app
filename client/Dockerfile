# Stage 1
FROM node:18-alpine AS builder
WORKDIR /app
ARG SERVER_URL
ENV SERVER_URL=$SERVER_URL
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.19.0
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY entry.sh /entry.sh
RUN chmod +x /entry.sh
EXPOSE 80
ENTRYPOINT ["/entry.sh"]
CMD ["nginx", "-g", "daemon off;"]