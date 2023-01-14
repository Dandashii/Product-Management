<?php
//Had to enable these headers because of cross-origin policy
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

use backend\abstract\Product;
use backend\abstract\BOOK;
use backend\abstract\DVD;
use backend\abstract\Furniture;


$request_body = file_get_contents('php://input');
$productData = json_decode($request_body, true);

$sku = $productData["sku"];
$name = $productData["name"];
$price = $productData["price"];
$type = $productData["type"];
$properties = $productData["properties"];

$product = new Product($sku, $name, $price, $type);

switch ($product->getType()) {
	case 'DVD':
		$productType = new DVD();
		break;
	case 'Book':
		$productType = new Book();
		break;
	case 'Furniture':
		$productType = new Furniture();
		break;
}

