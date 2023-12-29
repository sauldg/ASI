# ASI Project 

## Requirements

- Node 21.4.0
- Java 17.0.2 (tested with OpenJDK).
- Maven 3.9+.
- MySQL 8.2.0

## Docker compose

Go to the root folder of the project open the terminal in that location and run the following command with Docker desktop 
running in background:
```
docker compose up -d
```
This command will create the containers for the databases and minio.

## Minio configuration

Once the containers are created and docker is running, you can access the minio configuration going to the following url in your browser "http://localhost:9090/". 

In this page, you have to login with the username and password "minioadmin". Inside the portal, you can now create a bucket named "asi" and upload two images, "1.png" and "2.png".

## Run

Open a terminal in the root folder of the project to run the backend, use the following commands: 
```
cd backend
mvn sql:execute (only first time to create tables)
mvn spring-boot:run
```

Open another terminal in the root folder of the project to run the frontend, use the following commands: 
```
cd frontend
npm install (only first time to download libraries)
npm start
```
