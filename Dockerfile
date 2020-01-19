FROM node:alpine as builder
WORKDIR '/app'
RUN npm run build
COPY . .
# /app/build = static content for server

FROM nginx
EXPOSE 80
COPY --from=builder /app/build/wp-client /usr/share/nginx/html