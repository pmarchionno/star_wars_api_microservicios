# Instalamos la versión más estable node del modelo en nuestra computadorita docker. Es decir, vamos a tener un contenedor con node instalado
FROM node:16

WORKDIR /app
# A partir de ahora, la carpeta relativa será /app

COPY package*.json ./

RUN npm install

# COPY fuente destino
COPY . .

# Indicamos que queremos exponer el puerto 8000
EXPOSE 8003

# Ejecutamos el proyecto, primero el comando npm, seguido de start
CMD ["npm", "start"]
