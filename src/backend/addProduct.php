<?php
//Had to enable these headers because of cross-origin policy
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//connection
include 'database/connection.php';
//classes
include 'abstract/Product.php';
include 'abstract/DVD.php';
include 'abstract/Book.php';
include 'abstract/Furniture.php';
//Function responsible for returning which product type has been selected
include 'functions/setProductType.php';


$formData = file_get_contents('php://input');
$productData = json_decode($formData);

//Return the appropriate initialized class
$product = setProductType($productData);

//Retrieving the product's details
$sku = $product->getSKU();
$name = $product->getName();
$price = $product->getPrice();
$type = $product->getType();
$properties = json_encode($product->getProperties());

//Insertion to database
$stmt = $connection->prepare("INSERT INTO products(sku, name, price, type, properties) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssdss", $sku, $name, $price, $type, $properties);
$stmt->execute();

$stmt->close();
$connection->close();
