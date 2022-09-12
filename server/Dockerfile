FROM node:12.16.1-alpine
WORKDIR /server/app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "server" ]
