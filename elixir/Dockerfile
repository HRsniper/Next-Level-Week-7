FROM elixir:1.12.3-alpine

ENV DOCKERIZE_VERSION v0.6.1

RUN apk update && apk upgrade
RUN apk add --no-cache bash

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# USER elixir

WORKDIR /home/elixir/src

RUN mix local.hex --force && mix local.rebar --force
RUN mix archive.install hex phx_new --force

COPY . .

RUN chmod +x .docker/entrypoint.sh

# CMD ["tail", "-f", "/dev/null"]
ENTRYPOINT [".docker/entrypoint.sh"]
