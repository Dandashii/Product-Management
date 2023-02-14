<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'database/connection.php';
include 'abstract/Product.php';
include 'abstract/DVD.php';
include 'abstract/Book.php';
include 'abstract/Furniture.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
	//retrieve the list of products
	$products = Product::getProducts($connection, $table);

	//send them to be displayed
	echo json_encode($products);
}
