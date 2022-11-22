# Create Docker Image
```bash
docker build . -t <image-name>
docker build . -t <image-name> -f Dockerfile.dev
```
# See images
```bash
docker image ls
```
# Remove image
```bash
docker image rm <ID>
```
---

# Create Docker Container
```bash
docker run -d -p 3000:3000 --name <container-name> <image-name>
```
# See runing containers
```bash
docker ps
```
# Stop runing container
```bash
doker stop <container-name>
```
# Remove Docker container
```bash
doker rm <container-name> -f
```
# Get inside docker container
```bash
docker exec -it react-app bash
```
---

# Bine mount Syncronize Folder
```bash
- docker volume to create bin mount
- read-olny localdir:containerdir:ro
  docker run -v dirlocal:container directory -d -p 3000:3000 --name image-name

docker run -v $(pwd):/app:ro -d -p 3000:3000 --name react-app react-image
```
# Docker Compose
```bash
docker-compose.yml file creation
```
# Start all containers
```bash
docker-compose up -d
docker-compose up -d --build
```
# Kill all containers
```bash
docker-compose down
```
---

# Create production enviroment for react

1. Multi stage Docker Build

# Docker compose multiple

# Development server
```bash
docker-compose -f docker-compose.yml -f docker-compose-dev.yml
```
## Production server
```bash
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```