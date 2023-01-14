<?php

namespace backend\abstract;

class Book extends Product {
	protected float $weight;

	function __construct($sku, $name, $price, $type, $weight) {
		parent::__construct($sku, $name, $price, $type='Book');

		$this->weight = $weight;
	}

	function getProperties():array {
		return array('weight' => $this->weight);
	}

	function getWeight():float {
		return $this->weight;
	}

	function setWeight($weight):void {
		$this->weight = $weight;
	}
}