CREATE DATABASE vtc_database;

USE vtc_database;

CREATE TABLE enterprise (
    id
        INT 
        NOT NULL 
        AUTO_INCREMENT 
        PRIMARY KEY
    , 
    `name`
        VARCHAR(255)
        NOT NULL
    ,
    balance
        DOUBLE(10, 2)
    ,
    `description`
        TEXT
        NOT NULL
);

CREATE TABLE product (
    id
        INT 
        NOT NULL 
        AUTO_INCREMENT 
        PRIMARY KEY
    , 
    `name`
        VARCHAR(255)
        NOT NULL
    ,
    `value`
        DOUBLE(6, 2)
    ,
    FK_product_enterprise
		INT
        NOT NULL
	,
    FOREIGN KEY (FK_product_enterprise) REFERENCES enterprise(id)

);

CREATE TABLE `client` (
    guid
		VARCHAR(36)
        NOT NULL
        PRIMARY KEY
    , 
    `name`
        VARCHAR(255)
        NOT NULL
    ,
    wallet
        DOUBLE(10, 2)
    ,
    birth_date
        DATE
        NOT NULL
);

CREATE TABLE `user`(
    id
        INT
        NOT NULL 
        AUTO_INCREMENT
        PRIMARY KEY
    ,
    `name`
        VARCHAR(255)
        NOT NULL
    ,
    occupation
        ENUM ("admin", "commission", "worker")
    ,
    login
        VARCHAR(255)
        NOT NULL
    ,
    `password`
        VARCHAR(255)
        DEFAULT "123@change"
    ,
    observation
        TEXT
    ,
    FK_user_enterprise
		INT
        NOT NULL
	,
    FOREIGN KEY (FK_user_enterprise) REFERENCES enterprise(id)
);



CREATE TABLE paybox (
    id
        INT
        NOT NULL
        AUTO_INCREMENT
        PRIMARY KEY
    ,
    `description`
        VARCHAR(255)
        NOT NULL
    ,
    `type`
        ENUM ("input", "output")
        NOT NULL
    ,
    voucher
        BLOB
        NOT NULL
    ,
    `value`
        DOUBLE(8, 2)
        NOT NULL
    ,
    date_hour
        DATETIME
        NOT NULL
    ,
    responsible
        VARCHAR(255)
        NOT NULL
    ,
    FK_paybox_enterprise
		INT
        NOT NULL
	,
    FK_paybox_user
		INT
        NOT NULL
	,
    
    FOREIGN KEY (FK_paybox_enterprise) REFERENCES enterprise(id)
    ,
    FOREIGN KEY (FK_paybox_user) REFERENCES `user`(id)
);

CREATE TABLE purchase (
    id
        INT
        NOT NULL
        AUTO_INCREMENT
        PRIMARY KEY
    ,
    FK_purchase_client
		VARCHAR(32)
        NOT NULL
	,
    FK_purchase_product
		INT
        NOT NULL
	,
    FK_purchase_paybox
		INT
        NOT NULL
	,
    FOREIGN KEY (FK_purchase_client) REFERENCES `client`(guid)
    ,
    FOREIGN KEY (FK_purchase_product) REFERENCES product(id)
    ,
    FOREIGN KEY (FK_purchase_paybox) REFERENCES paybox(id)
);
