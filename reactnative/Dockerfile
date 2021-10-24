FROM node:14.18.1-alpine3.14

RUN apk update && apk upgrade
RUN apk add --no-cache bash

# USER reactnative

WORKDIR /home/reactnative/src

RUN npm install --global expo-cli

COPY . .

RUN chmod +x .docker/entrypoint.sh

# CMD ["tail", "-f", "/dev/null"]
ENTRYPOINT [".docker/entrypoint.sh"]
