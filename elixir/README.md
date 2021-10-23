# HeatTags

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Start the container:

- ```bash
  docker-compose up # Start the container and hold the terminal.
  ```
  or
- ```bash
  docker-compose up -d # Start the container in the background and release the terminal.
  ```

Lists all running and background containers:

- ```bash
  docker ps -a
  ```

Entering in container:

- ```bash
  docker exec -it elixir /bin/bash
  ```

Install dependencies:

- ```bash
  mix deps.get
  ```

Compile dependencies:

- ```bash
  mix compile
  ```

Run the application:

- ```bash
  mix phx.server # With docker and without docker
  ```

With IEx

- ```bash
  iex -S mix
  ```
- ```bash
  iex -S mix phx.server
  ```

  Run migrations them to apply the database:

- ```bash
  mix ecto.create
  ```

Stops containers and remove containers:

- ```bash
  docker-compose down
  ```

Remove the image to save space on your disk:

- ```bash
  docker rmi elixir_elixir
  ```
- ```bash
  docker rmi elixir_postgres
  ```
- ```bash
  docker rmi elixir_pgadmin4
  ```

```markdown
#RumoAoPróximoNível
#Protagonistas
#ImaginarConstruirTransformar
#SemLimites
```
