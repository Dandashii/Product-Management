<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'database/connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$formData = file_get_contents('php://input');
	$selectedProducts = json_decode($formData);
	foreach ($selectedProducts as $product) {
		$stmt = $connection->prepare('DELETE FROM ' . $table . ' where sku = ?');
		$stmt->bind_param('s', $product);
		$stmt->execute();
	}
}
