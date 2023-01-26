create table products (
                          id         int auto_increment primary key,
                          sku        varchar(255)                 not null,
                          name       varchar(100)                 not null,
                          price      decimal(10, 2)               not null,
                          type       varchar(50)                  not null,
                          properties longtext collate utf8mb4_bin not null
                              check (json_valid(`properties`)),
                          constraint sku
                              unique (sku)
);
