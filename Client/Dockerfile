FROM node:10

WORKDIR /usr/Chatbox-Client
COPY package*.json ./
RUN npm i
COPY . .

EXPOSE 32000
CMD ["npm", "start"]