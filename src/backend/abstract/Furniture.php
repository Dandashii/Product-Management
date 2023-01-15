<?php

class Furniture extends Product {
	public $height;
	public $width;
	public $length;

	function getProperties():array {
		return array('height' => $this->height, 'width' => $this->width, 'length' => $this->length);
	}

	function getHeight() {
		return $this->height;
	}

	function getWidth() {
		return $this->width;
	}

	function getLength() {
		return $this->length;
	}

	function setHeight($height) {
		$this->height = $height;
	}

	function setWidth($width) {
		$this->width = $width;
	}

	function setLength($length) {
		$this->length = $length;
	}

}