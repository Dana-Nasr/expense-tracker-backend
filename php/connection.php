<?php


$host = "localhost";
$dbuser = 'root';
$pass = '';
$dbname = "mydb";
$port='4000';
$connection = new mysqli($host, $dbuser, $pass, $dbname,$port);

if ($connection->connect_error){
  die("Error happened");
};