<?php
//Had to enable these headers because of cross-origin policy
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'abstract/Product.php';
include 'abstract/DVD.php';
include 'abstract/Book.php';
include 'abstract/Furniture.php';

$formDataJson = file_get_contents('php://input');
$productData = json_decode($formDataJson);

/*if (filter_input(INPUT_POST, 'submit')) {
	// form was submitted
	// access form data in $_POST
} else {
	// form
}*/


switch ($productData->type) {
	case "DVD":
		$product = new DVD();

		$product->setSKU($productData->sku);
		$product->setName($productData->name);
		$product->setPrice($productData->price);
		$product->setType($productData->type);

		//DVD SIZE
		$product->setSize($productData->properties->size);
		break;
	case "Book":
		$product = new Book();

		$product->setSKU($productData->sku);
		$product->setName($productData->name);
		$product->setPrice($productData->price);
		$product->setType($productData->type);

		//Book WEIGHT
		$product->setWeight($productData->properties->weight);
		break;
	case "Furniture":
		$product = new Furniture();

		$product->setSKU($productData->sku);
		$product->setName($productData->name);
		$product->setPrice($productData->price);
		$product->setType($productData->type);

		//Furniture piece DIMENSIONS
		$product->setHeight($productData->properties->height);
		$product->setWidth($productData->properties->width);
		$product->setLength($productData->properties->length);
		break;
	default:
		break;
}

/*
$stmt = $connection->prepare("INSERT INTO products(sku, name, price, type, properties) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssdss", $sku, $name, $price, $type, $properties);
$stmt->execute();
$stmt->close();

$connection->close();*/



echo json_encode($product);