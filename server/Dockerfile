FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
