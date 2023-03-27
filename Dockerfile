FROM nginx

COPY nginx.conf /etc/nginx/

COPY . /usr/share/nginx/html

RUN ls /usr/share/nginx/html
