# ASI Project 

## Requirements

- Node 16.
- Java 17 (tested with Eclipse Temurin).
- Maven 3.8+.
- MySQL 8.

## Database creation

```
Start Mysql server if not running (e.g. mysqld).

mysqladmin -u root create asiproject -p
mysqladmin -u root create asiprojecttest -p

mysql -u root -p
    CREATE USER 'asi'@'localhost' IDENTIFIED BY 'asi';
    GRANT ALL PRIVILEGES ON asiproject.* to 'asi'@'localhost' WITH GRANT OPTION;
    GRANT ALL PRIVILEGES ON asiprojecttest.* to 'asi'@'localhost' WITH GRANT OPTION;
    exit
```

## Run

```
cd backend
mvn sql:execute (only first time to create tables)
mvn spring-boot:run

cd frontend
npm install (only first time to download libraries)
npm start
```
