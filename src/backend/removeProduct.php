<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'abstract/Product.php';
include 'database/connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$formData = file_get_contents('php://input');

	//Retrieve the sku of the selected products
	$selectedProducts = json_decode($formData);

	//remove the list of products
	Product::removeProducts($connection, $table, $selectedProducts);
}
