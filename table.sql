CREATE TABLE products (
                          id int AUTO_INCREMENT PRIMARY KEY,
                          sku varchar(255) NOT NULL UNIQUE,
                          name varchar(100) NOT NULL,
                          price decimal(10,2) NOT NULL,
                          type varchar(50) NOT NULL,
                          properties JSON NOT NULL
);
