FROM node:16.20.2

ENV MONGODB_URL=mongodb+srv://ireport:!report@ireport.bq7gso9.mongodb.net/iReport

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
