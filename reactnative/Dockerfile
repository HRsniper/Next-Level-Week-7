FROM node:14.18.1-alpine3.14

RUN apk update && apk upgrade
RUN apk add --no-cache bash

# USER reactnative

WORKDIR /home/reactnative/src

RUN npm install --global expo-cli

COPY . .

CMD ["tail", "-f", "/dev/null"]
# CMD [ "npm", "run", "start" ]
