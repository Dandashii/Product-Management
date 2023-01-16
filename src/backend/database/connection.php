<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "scandiweb";

$connection = new mysqli($servername, $username, $password, $dbname);

if ($connection->connect_error) {
	die("Connection to database has failed: " . $connection->connect_error);
}
