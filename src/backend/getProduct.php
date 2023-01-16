<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

include '../backend/database/connection.php';
include 'abstract/Product.php';

$stmt = "select * from products order by id desc";
$result = $connection->query($stmt);
$products = [];

if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$row["properties"] = json_decode($row["properties"]);
		$products[] = $row;
	}
}

$connection->close();

echo json_encode($products);


