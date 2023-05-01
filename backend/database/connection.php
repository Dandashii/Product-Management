<?php
$servername = "localhost";
$username = "dandashi";
$password = "password";
$dbname = "scandiweb";
$table = "products";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
	echo ("Connection to database has failed: " . $connection->connect_error);
}
