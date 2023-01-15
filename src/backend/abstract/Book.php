<?php

class Book extends Product {
	public $weight;

	function getProperties():array {
		return array('weight' => $this->weight);
	}

	function getWeight()  {
		return $this->weight;
	}

	function setWeight($weight) {
		$this->weight = $weight;
	}
}