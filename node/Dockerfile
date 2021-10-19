FROM node:14.18.1-alpine3.14

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/src

COPY . .

CMD ["tail", "-f", "/dev/null"]
