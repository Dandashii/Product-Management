<?php

class Furniture extends Product
{
	public $type = 'Furniture';
	public $properties;
	public function __construct($sku = null, $name = null, $price = null, $properties = null)
	{
		parent::__construct($sku, $name, $price);
		$this->setProperties($properties);
	}

	public function getProperties():object
	{
		return $this->properties;
	}

	public function setProperties($properties)
	{
		$this->properties = (object) [
			'height' => $properties->height,
			'width' => $properties->width,
			'length' => $properties->length
		];
	}

	public function getHeight()
	{
		return $this->properties->height;
	}

	public function setHeight($height)
	{
		$this->properties->height = $height;
	}

	public function getWidth() {
		return $this->properties->width;
	}

	public function setWidth($width)
	{
		$this->properties->width = $width;
	}

	public function getLength() 
	{
		return $this->properties->length;
	}

	public function setLength($length) 
	{
		$this->properties->length = $length;
	}
}
	