FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY index.js .
COPY mock_data ./mock_data

EXPOSE 5000

CMD [ "node", "index.js" ]
