<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
	die("Connection to database has failed: " . $connection->connect_error);
}

echo "Connection to database is successful!";
