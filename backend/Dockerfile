FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/src

RUN node generateKeyPairs.js

EXPOSE 3000

CMD [ "node", "start"]