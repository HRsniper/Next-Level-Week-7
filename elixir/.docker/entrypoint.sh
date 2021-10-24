#!/bin/bash

mix do deps.get, compile

mix ecto.setup

mix phx.server
