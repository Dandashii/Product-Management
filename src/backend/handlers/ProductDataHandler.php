<?php

class ProductDataHandler
{
	public $sku = null;
	public $name = null;
	public $price = null;
	public $type = null;
	public $properties = null;

	public function __construct($sku, $name, $price, $type, $properties)
	{
		$this->sku = $sku;
		$this->name = $name;
		$this->price = $price;
		$this->type = $type;
		$this->properties = $properties;
	}

	public function isEmpty(): bool
	{
		if (empty(trim($this->sku)) || empty(trim($this->name)) || empty(trim($this->price)) || empty(trim($this->type))) {
			return true;
		}

		$properties = get_object_vars($this->properties);
		foreach ($properties as $property) {
			if(!isset($property)) {
				return true;
			}
		}

		return false;
	}

	public function isValid(): bool
	{
		if($this->isSkuValid() && $this->isNameValid() && $this->isPriceValid() && $this->isPropertyValid()) {
			return true;
		}

		return false;
	}

	public function isSkuValid(): bool
	{
		//checks if the sku is made up of only letters, numbers and hyphens
		if(preg_match('/^[a-zA-Z0-9-]{1,30}$/', $this->sku) && (strlen($this->sku) <= 40)) {
			return true;
		} else {
			return false;
		}
	}

	public function isNameValid(): bool
	{
		if(strlen($this->name) <= 30) {
			return true;
		} else {
			return false;
		}
	}

	public function isPriceValid(): bool
	{
		if(is_numeric($this->price) && intval($this->price) >= 1) {
			return true;
		} else {
			return false;
		}
	}

	//we already know that the whatever property of product it will be a int value.
	public function isPropertyValid(): bool
	{
		$properties = get_object_vars($this->properties);
		foreach ($properties as $property) {
			if (is_numeric($property) && $property > 0) {
				return true;
			}
		}

		return false;
	}
}