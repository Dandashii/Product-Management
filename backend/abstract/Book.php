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

	public function setProperties($properties): void
	{
		$this->properties = (object) ['weight' => $properties->weight];
	}

	public function setWeight($weight): void
	{
		$this->properties->weight = $weight;
	}

	public function getWeight(): int
	{
		return $this->properties->weight;
	}
}