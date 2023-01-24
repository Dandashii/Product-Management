<h5> The website is composed of adding a product and deleteing them. The products are displayed at the homepage </h5>
<h1> Figma Prototypes </h1>

<h3> Homepage </h3>
<img width="1440" alt="Products List" src="https://user-images.githubusercontent.com/9285042/214294608-efc2d951-7863-46c2-87c5-329c1aa50f4d.png">

<h5> Homepage - phone </h5>
<img width="430" alt="Product List - Phone" src="https://user-images.githubusercontent.com/9285042/214394682-992d112d-7404-4c5c-b053-434c67425f57.png">

<h3> Product ADD </h3>
<img width="1440" alt="Product Add" src="https://user-images.githubusercontent.com/9285042/214394790-7c68e263-4906-47ea-9576-0437c1bfb49b.png">

<h5> Product ADD - phone </h5>
<img width="430" alt="Product Add - Phone" src="https://user-images.githubusercontent.com/9285042/214394706-5b103d02-47f3-4642-9142-bc686cfd5525.png">



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
