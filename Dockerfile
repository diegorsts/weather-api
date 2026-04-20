# Usa o Nginx como servidor web
FROM nginx:alpine

# Copia os arquivos do projeto para dentro do container
COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY script.js /usr/share/nginx/html/script.js

# Expõe a porta 80
EXPOSE 80
