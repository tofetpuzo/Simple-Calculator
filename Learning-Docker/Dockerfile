FROM node:13-alpine3.10

ENV MONGO_DB_USERNAME=value \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /home/app

CMD ["node" , "/home/app/server.js"]

