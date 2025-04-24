# Usando a imagem oficial do Node.js
FROM node:18

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos para o container
COPY package.json ./
COPY package-lock.json ./
COPY . .

# Instalar dependências
RUN npm install

# Definir o comando que será executado ao iniciar o container
CMD ["npm", "start"]