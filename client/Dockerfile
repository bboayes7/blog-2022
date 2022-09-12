FROM node
WORKDIR /client/app
COPY package*.json ./
run npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]