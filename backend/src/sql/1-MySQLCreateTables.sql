DROP TABLE User;
DROP TABLE Part;
DROP TABLE Stock;
DROP TABLE Draft;

CREATE TABLE User (
    id BIGINT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(60) COLLATE latin1_bin NOT NULL,
    password VARCHAR(60) NOT NULL, 
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL, 
    email VARCHAR(60) NOT NULL,
    role TINYINT NOT NULL,
    CONSTRAINT UserPK PRIMARY KEY (id),
    CONSTRAINT UserNameUniqueKey UNIQUE (userName)
);

CREATE INDEX UserIndexByUserName ON User (userName);


CREATE TABLE Part (
    id BIGINT NOT NULL AUTO_INCREMENT,
    reference VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    amount BIGINT NOT NULL,
    price DOUBLE(5,3) NOT NULL,
    photo_url VARCHAR(255) NOT NULL,
    description TEXT(500) NOT NULL,
    last_purchase_price DOUBLE(5,3) NOT NULL,
    provider VARCHAR(255) NOT NULL,
    CONSTRAINT PartPK PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE Draft (
    id BIGINT NOT NULL AUTO_INCREMENT,
    shipping_details VARCHAR(255) NOT NULL,
    invoicing_details VARCHAR(255) NOT NULL,
    providers VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    CONSTRAINT DraftPK PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE Stock (
    part_id BIGINT NOT NULL,
    draft_id BIGINT NOT NULL,
    amount BIGINT
) ENGINE = InnoDB;