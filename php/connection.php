<?php
header("Access-Control-Allow-Origin: http://127.0.0.1:5500");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With, Authorization");


$host = "localhost";
$dbuser = 'root';
$pass = '';
$dbname = "mydb";
$port='4000';
$connection = new mysqli($host, $dbuser, $pass, $dbname,$port);

if ($connection->connect_error){
  die("Error happened");
};