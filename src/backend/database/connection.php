<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "scandiweb";
$table = "product";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
	echo ("Connection to database has failed: " . $connection->connect_error);
}


