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
  docker exec -it react /bin/bash
  ```

Install dependencies:

- ```bash
  npm install
  ```

Run the application:

- ```bash
  npm run dev:docker # With docker
  ```
  or
- ```bash
  npm run dev # Without docker
  ```

Stops containers and remove containers:

- ```bash
  docker-compose down
  ```

Remove the image to save space on your disk:

- ```bash
  docker rmi react_react
  ```

```markdown
#RumoAoPróximoNível
#Protagonistas
#ImaginarConstruirTransformar
```
