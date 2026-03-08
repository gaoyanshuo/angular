FROM nginx:alpine
COPY artifact/ /usr/share/nginx/html/
EXPOSE 80
