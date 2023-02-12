<?php

class DVD extends Product
{
	public string $type = 'DVD';
	public object $properties;

	public function __construct(string $sku = null, string $name = null, int $price = null , object $properties = null)
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
		$this->properties = (object) ['size' => $properties->size];
	}

	public function getSize(): int
	{
		return $this->properties->size;
	}

	public function setSize($size): void
	{
		$this->properties->size = $size;
	}
}