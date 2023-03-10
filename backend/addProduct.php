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
include 'handlers/ProductDataHandler.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$formData = file_get_contents('php://input');

	//Retrieved data from the component
	$productData = json_decode($formData);

	//set the product type that has been sent from the user selection menu
	$productType = $productData->type;

	//Instantiate the respective class of the received product
	$product = new $productType($productData->sku, $productData->name, $productData->price, $productData->properties);

	//save the product into the product's table
	$product->save($connection, $table);
}


