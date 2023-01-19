<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include 'database/connection.php';

$formData = file_get_contents('php://input');
$selectedProducts = json_decode($formData);
$messages = [];

for($sku = 0; $sku < count($selectedProducts); $sku++) {
	$stmt = $connection->prepare("DELETE FROM products where sku = ?");
	$stmt->bind_param('s', $selectedProducts[$sku]);
	$stmt->execute();
}

