<?php

namespace backend\abstract;

class Furniture extends Product {
	protected float $height;
	protected float $width;
	protected float $length;

	function __construct($sku, $name, $price, $type, $height, $width, $length) {
		parent::__construct($sku, $name, $price, $type='Furniture');

		$this->height = $height;
		$this->width = $width;
		$this->length = $length;
	}

	function getProperties():array {
		return array('height' => $this->height, 'width' => $this->width, 'length' => $this->length);
	}

	function getHeight():float {
		return $this->height;
	}

	function getWidth():float {
		return $this->width;
	}

	function getLength():float {
		return $this->length;
	}

	function setHeight($height):void {
		$this->height = $height;
	}

	function setWidth($width):void {
		$this->width = $width;
	}

	function setLength($length):void {
		$this->length = $length;
	}
}