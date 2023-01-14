<?php

namespace backend\abstract;

class DVD extends Product {
	protected float $size;

	function __construct($sku, $name, $price, $type, $size) {
		parent::__construct($sku, $name, $price, $type='DVD');

		$this->size = $size;
	}

	function getProperties():array {
		return array('size' => $this->size);
	}

	function getSize():float {
		return $this->size;
	}

	function setSize($size):void {
		$this->size = $size;
	}
}