What is a Container?
A way to package application with all the necesary dependencies and configuration.
Layers of images
Most Linux Base image, bac

Portable artifact , easily shared and move

Where do containers live? 
1. container repository 
2. private
3. public

Using Docker Commandsdock
command: 
1. docker run postgres:9.6
docker run -e POSTGRES_HOST_AUTH_METHOD=trust postgres:9.6

Basic Commands
1. docker images
2. create a container for redis by using this command: docker run redis
3. docker run -d redis: this helps to bring back the container in a detached mode
4. docker start or stop container_id: If you will have to restart the docker images because of an area of crash.
5. docker ps -a: This gives all the necessary information about the docker process 

To bind docker images with different hosts 
1. docker run -p(port-number):redis-port-number (image-name)
example: docker run -p6000:6379 -d redis
		  docker run -p6001:6379 -d redis:5.0

6. This helps you when you want to trouble shot the images.
command: docker logs container-id or docker logs nameofcontainer: 

7. To rename an image from when you run a docker ps command, you must stop the image first
command: docker run -d p6001:6379 —-name redis-older redis:5.0

8. There is a problem with the latest docker and i want to navigate the latest directory or enter the terminal.
command: docker exec -it 5ee9e3efc86a(container-id) /bin/bash
command are like bash: env 

Understanding the framework for how Docker is used for software development.
1. Download: docker pull mongoDB 
2. Download: docker pull mongo-express
3. The next step is to ensure that docker talks on the same network

// Start the mongodb-network
1. Create a mongo-network: docker network create mongo-network
	To make mongoDB and mongo-express talk to each other on the same network we have to give make sure 	there is an option for this to happen.
 	
// Start the mongodb
4. docker run -d \
	> -p 27017:27017 \
	> -e MONGO_INITDB_ROOT_USERNAME=admin \
	> -e MONGO_INITDB_ROOT_PASSWORD=password \
	> --name mongodb \
	> --net moongo-network \
	> mongo

// Start the mongodb-express
5. Create a mongo-expressUI
docker run -d \
> -p 8081:8081 \
> -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
> -e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
> --net mongo-network \
> --name mongo-express \
> -e ME_CONFIG_MONGODB_SERVER=mongodb \
> mongo-express

6. after this you then , go to the browser. http://localhost:8081/

7. to screen the log you can use docker logs (container-id) -f


6. Docker Compose










