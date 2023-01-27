<?php

class Book extends Product
{
	public string $type = 'Book';
	public object $properties;
	
	public function __construct(string $sku = null, string $name = null, int $price = null, object $properties = null)
	{
		parent::__construct($sku, $name, $price);
		$this->setProperties($properties);
	}

	public function getProperties(): object
	{
		return $this->properties;
	}

	private function setProperties($properties)
	{
		$this->properties = (object) ['weight' => $properties->weight];
	}

	public function setWeight($weight)
	{
		$this->properties->weight = $weight;
	}

	public function getWeight(): int
	{
		return $this->properties->weight;
	}
}
