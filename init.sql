-- init.sql

-- Create the first database
CREATE DATABASE IF NOT EXISTS asi;
GRANT ALL PRIVILEGES ON asi.* TO 'mysqladmin'@'%';

-- Create the second database
CREATE DATABASE IF NOT EXISTS asitest;
GRANT ALL PRIVILEGES ON asitest.* TO 'mysqladmin'@'%';