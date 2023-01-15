<?php

class Product {
	public $sku;
	public $name;
	public $price;
	public $type;

	public function getSKU() {
		return $this->sku;
	}

	public function getName() {
		return $this->name;
	}

	public function getPrice() {
		return $this->price;
	}

	public function getType() {
		return $this->type;
	}

	public function setSKU($sku) {
		$this->sku = $sku;
	}

	public function setName($name) {
		$this->name = $name;
	}

	public function setPrice($price) {
		$this->price = $price;
	}

	public function setType($type) {
		$this->type = $type;
	}
}