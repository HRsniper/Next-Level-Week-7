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
  docker exec -it node /bin/bash
  ```

Install dependencies:

- ```bash
  npm install
  ```

Run the application:

- ```bash
  npm run dev # With docker and without docker
  ```

Create migrations from Prisma schema, apply them to the database:

- ```bash
  npx prisma migrate dev
  ```

Generate a secret key:

- ```bash
  echo -n "secret" | sha256sum
  ```
  or
- ```bash
  echo -n "secret" | openssl sha256
  ```

Prisma studio to show the database:

- ```bash
  npx prisma studio
  ```

Socket. io client:

- ```html
  public/index.html # Open the index.html file.
  ```

Stops containers and remove containers:

- ```bash
  docker-compose down
  ```

Remove the image to save space on your disk:

- ```bash
  docker rmi node_node
  ```

```markdown
#RumoAoPróximoNível
#Protagonistas
#ImaginarConstruirTransformar
#SemLimites
```
