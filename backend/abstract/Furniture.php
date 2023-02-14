<?php

class Furniture extends Product
{
	public string $type = 'Furniture';
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

	private function setProperties($properties): void
	{
		$this->properties = (object) [
			'height' => $properties->height,
			'width' => $properties->width,
			'length' => $properties->length
		];
	}

	public function getHeight(): int
	{
		return $this->properties->height;
	}

	public function setHeight($height): void
	{
		$this->properties->height = $height;
	}

	public function getWidth(): int
	{
		return $this->properties->width;
	}

	public function setWidth($width): void
	{
		$this->properties->width = $width;
	}

	public function getLength(): int
	{
		return $this->properties->length;
	}

	public function setLength($length): void
	{
		$this->properties->length = $length;
	}
}
	
