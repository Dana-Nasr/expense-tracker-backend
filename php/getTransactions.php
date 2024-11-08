<?php

include "./connection.php";


$query = $connection->prepare("SELECT * FROM transactions WHERE users_user_id= '1'");

$query->execute();

$result = $query->get_result();

if ($result->num_rows > 0){
  $array = [];

  while($resultObject = $result->fetch_assoc()){
    $array[] = $resultObject;
  }

  echo json_encode($array);
} else {
  $response = [
    "message" => "Empty result"
  ];

  echo json_encode($response);
  
};
