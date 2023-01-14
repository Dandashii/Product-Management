<?php

namespace backend\abstract;

class Product {
	protected string $sku;
	protected string $name;
	protected float $price;
	protected string $type;

	public function __construct($sku, $name, $price, $type) {
		$this->sku = $sku;
		$this->name = $name;
		$this->price = $price;
		$this->type = $type;
	}

	public function getSKU():string {
		return $this->sku;
	}

	public function getName():string {
		return $this->name;
	}

	public function getPrice():string {
		return $this->price;
	}

	public function getType():string {
		return $this->type;
	}

	public function setSKU($sku):void {
		$this->sku = $sku;
	}

	public function setName($name):void {
		$this->name = $name;
	}

	public function setPrice($price):void {
		$this->$price = $price;
	}

	public function setType($type):void {
		$this->$type = $type;
	}
}