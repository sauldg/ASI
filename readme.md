# ASI Project 

## Requirements

- Node 16.
- Java 17 (tested with Eclipse Temurin).
- Maven 3.8+.
- MySQL 8.

## Database creation

```
Start Mysql server if not running (e.g. mysqld).

mysqladmin -u root create asi -p
mysqladmin -u root create asitest -p

mysql -u root -p
    CREATE USER 'mysqladmin'@'localhost' IDENTIFIED BY 'mysqladmin';
    GRANT ALL PRIVILEGES ON asi.* to 'mysqladmin'@'localhost' WITH GRANT OPTION;
    GRANT ALL PRIVILEGES ON asitest.* to 'mysqladmin'@'localhost' WITH GRANT OPTION;
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
