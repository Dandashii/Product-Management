<?php

class DVD extends Product {

	public $type = 'DVD';
	public $properties;
	public function __construct($sku = null, $name = null, $price = null , $properties = null)
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
		$this->properties = (object) ['size' => $properties->size];
	}

	public function getSize()
	{
		return $this->properties->size;
	}

	public function setSize($size)
	{
		$this->properties->size = $size;
	}
}