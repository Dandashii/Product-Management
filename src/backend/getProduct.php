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
	$products = [];

	$stmt = $connection->prepare('SELECT * FROM ' . $table . ' ORDER BY id DESC');
	$stmt->execute();
	$result = $stmt->get_result();
	while ($row = $result->fetch_object()) {
		//had to do this because the properties in table are in stringed format.
		$properties = json_decode($row->properties);

		//set the type of retrieved product
		$productType = $row->type;

		//instantiate the respective class of the product
		$product = new $productType($row->sku, $row->name, $row->price, $properties);

		//push the product into the list of products
		$products[] = $product;

		//Old, realized I was doing it wrong because what am I supposed to do if there were thousands of products...
		/*=switch ($row->type) {
			case 'DVD':
				$product = new DVD();
				$product->setSize($properties->size);
				break;
			case 'Book':
				$product = new Book();
				$product->setWeight($properties->weight);
				break;
			case 'Furniture':
				$product = new Furniture();
				$product->setHeight($properties->height);
				$product->setWidth($properties->width);
				$product->setLength($properties->length);
					break;
				default:
					break;
			}*/

			/*placed them here because these are the common inherited attributes from the general class "Product"
			and it makes no sense to repeat them inside the switch for each class */
			/*$product->setSKU($row->sku);
			$product->setName($row->name);
			$product->setPrice($row->price);
			$product->setType($row->type);*/
		}

	$stmt->close();
	$connection->close();

	echo json_encode($products) ;
}




