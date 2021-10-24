#!/bin/bash

expo login -u $EXPO_CLI_USERNAME -p $EXPO_CLI_PASSWORD

npm install

npm run start
