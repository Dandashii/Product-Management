# scandiweb-assignment
Scandiweb's skills test assignment written in React, SASS, and PHP.

<h1> Figma Prototypes </h1>

<h3> Homepage </h3>
<img width="1440" alt="Products List" src="https://user-images.githubusercontent.com/9285042/214294608-efc2d951-7863-46c2-87c5-329c1aa50f4d.png">

<h5> Homepage - phone </h5>
<img width="430" alt="Product List - Phone" src="https://user-images.githubusercontent.com/9285042/214294686-b25b2901-a1b1-4ab1-b11d-04615fc79c2c.png">


<h3> Product ADD </h3>
<img width="1440" alt="Product Add" src="https://user-images.githubusercontent.com/9285042/214295451-b5674f84-6256-4c62-9c81-f6b5937f356c.png">

<h5> Product ADD - phone </h5>
<img width="430" alt="Product Add - Phone" src="https://user-images.githubusercontent.com/9285042/214294822-7c85e30c-65c7-4007-b8a7-da0c7d387534.png">



<h3> Database Schema </h3>

CREATE TABLE products (
                          id int auto_increment primary key,
                          sku VARCHAR(255) NOT NULL UNIQUE,
                          name VARCHAR(100) NOT NULL,
                          price DECIMAL(10,2) NOT NULL,
                          type VARCHAR(50) NOT NULL,
                          properties JSON NOT NULL,
                          PRIMARY KEY (sku)
);
