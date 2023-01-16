<?php
function setProductType($productData) {
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

	return $product;
}