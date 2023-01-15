<?php

class DVD extends Product {
	public $size;

	function getProperties():array {
		return array('size' => $this->size);
	}

	function getSize() {
		return $this->size;
	}

	function setSize($size) {
		$this->size = $size;
	}
}