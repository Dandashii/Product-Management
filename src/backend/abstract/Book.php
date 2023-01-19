<?php

class Book extends Product
{
	public $type = 'Book';
	public $properties;
	public function __construct($sku = null, $name = null, $price = null, $properties = null)
	{
		parent::__construct($sku, $name, $price);
		$this->setProperties($properties);
	}

	public function getProperties(): object
	{
		return $this->properties;
	}

	public function setProperties($properties)
	{
		$this->properties = (object) ['weight' => $properties->weight];
	}

	public function setWeight($weight)
	{
		$this->properties->weight = $weight;
	}

	public function getWeight()
	{
		return $this->properties->weight;
	}
}