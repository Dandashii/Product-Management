<?php

abstract class Product
{
	public $sku;
	public $name;
	public $price;
	public $type = null;
	public function __construct($sku = null, $name = null, $price = null)
	{
		$this->sku = $sku;
		$this->name = $name;
		$this->price = $price;
	}

	public function getSKU()
	{
		return $this->sku;
	}

	public function setSKU($sku)
	{
		$this->sku = $sku;
	}

	public function getName()
	{
		return $this->name;
	}

	public function setName($name)
	{
		$this->name = $name;
	}

	public function getPrice()
	{
		return $this->price;
	}

	public function setPrice($price)
	{
		$this->price = $price;
	}

	public function getType()
	{
		return $this->type;
	}

	public function setType($type)
	{
		$this->type = $type;
	}

	public function save($connection): void
	{
		//Declare sku first in order to check if it already is in the products talbe
		$sku = $this->getSKU();

		$stmt = $connection->prepare('SELECT * from products where sku = ?');
		$stmt->bind_param('s', $sku);
		$stmt->execute();
		$stmt->store_result();

		//check if a product with the same sku exists, if not then insert into table
		if($stmt->num_rows > 0 ) {
			echo json_encode([
				'error' => [
					'target' => 'SKU',
					'type' => 'Duplicate SKU',
					'desc' => "The '{$this->getSKU()}' sku already exists!"
				]
			]);
			exit();
		} else {
			//Get the rest of the properties for database insertion
			$name = $this->getName();
			$price = $this->getPrice();
			$type = $this->getType();
			$properties = json_encode($this->getProperties());

			$stmt = $connection->prepare("INSERT INTO products (sku, name, price, type, properties) VALUES (?, ?, ?, ?, ?)");
			$stmt->bind_param("ssdss", $sku, $name, $price, $type, $properties);
			$stmt->execute();

			$stmt->close();
			$connection->close();
		}
	}
}