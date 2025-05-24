<?php
$host = "localhost";
$username = "root"; // default for XAMPP
$password = "";     // default for XAMPP
$database = "soundsphere";

$connection = new mysqli($host, $username, $password, $database);

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
?>
