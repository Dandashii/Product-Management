<?php

class ProductDataHandler
{
	public string $sku;
	public string $name;
	public int $price;
	public string $type;
	public object $properties;

	public function __construct(string $sku, string $name, int $price, string $type, object $properties)
	{
		$this->sku = $sku;
		$this->name = $name;
		$this->price = $price;
		$this->type = $type;
		$this->properties = $properties;
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
		if(preg_match('/^[a-zA-Z0-9-]{1,30}$/', $this->sku)) {
			return true;
		}

		return false;
	}

	public function isNameValid(): bool
	{
		if(strlen($this->name) <= 30) {
			return true;
		}

		return false;
	}

	public function isPriceValid(): bool
	{
		if(intval($this->price) >= 1) {
			return true;
		}

		return false;
	}

	//we already know that the whatever property of product it will be a int value.
	public function isPropertyValid(): bool
	{
		foreach ($this->properties as $key => $value) {
			if($value < 1) {
				return false;
			}
		}

		return true;
	}
}