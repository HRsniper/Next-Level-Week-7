FROM postgres:14.0-alpine3.14

RUN apk update && apk upgrade
RUN apk add --no-cache bash
# RUN apk add shadow
# RUN usermod -u 1000 postgres

USER postgres

# WORKDIR /home/postgres/src

# CMD ["tail", "-f", "/dev/null"]
