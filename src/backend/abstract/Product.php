<?php

abstract class Product
{
	public string $sku;
	public string $name;
	public int $price;
	public string $type;

	public function __construct(string $sku = null, string $name = null, int $price = null)
	{
		$this->sku = $sku;
		$this->name = $name;
		$this->price = $price;
	}

	public function getSKU(): string
	{
		return $this->sku;
	}

	public function setSKU($sku): void
	{
		$this->sku = $sku;
	}

	public function getName(): string
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

	public function save($connection, $table): void
	{
		//Get the product's data
		$sku = $this->getSKU();
		$name = $this->getName();
		$price = $this->getPrice();
		$type = $this->getType();
		$properties = $this->getProperties();

		//Instantiate the handler class to validate the data submitted by the user
		$productData = new ProductDataHandler($sku, $name, $price, $type, $properties);

		if($productData->isEmpty()) {
			echo json_encode([
				'error' => [
					'target' => 'ALL',
					'type' => 'Missing Values',
					'desc' => "Please, submit required!"
				]
			]);
		} else {
			if($productData->isValid()) {
				//Prepare statement to check if the sku entered already exists
				$stmt = $connection->prepare('SELECT * from ' . $table . ' where sku = ?');
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
				} else {
					//Properties need to be in json format to be inserted into db
					$properties = json_encode($properties);
					$stmt = $connection->prepare('INSERT INTO ' . $table . ' (sku, name, price, type, properties) VALUES (?, ?, ?, ?, ?)');
					$stmt->bind_param("ssdss", $sku, $name, $price, $type, $properties);
					$stmt->execute();

					$stmt->close();
				}
			} else {
				echo json_encode([
					'error' => [
						'target' => 'ALL',
						'type' => 'Invalid Data',
						'desc' => "Please, provide the data of indicated type!"
					]
				]);
				exit();
			}
		}
	}
}