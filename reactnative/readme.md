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
  docker exec -it reactnative /bin/bash
  ```

Login your expo account:

- ```bash
  expo login
  ```

Install dependencies:

- ```bash
  npm install
  ```

Run the application:

- ```bash
  npm run start # With docker and without docker
  ```

Stops containers and remove containers:

- ```bash
  docker-compose down
  ```

Remove the image to save space on your disk:

- ```bash
  docker rmi reactnative_reactnative
  ```

```markdown
#RumoAoPróximoNível
#Protagonistas
#ImaginarConstruirTransformar
```
