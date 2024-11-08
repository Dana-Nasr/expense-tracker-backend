<?php
include "./connection.php";
$data = json_decode(file_get_contents("php://input"), true);
    $user_id = 1;  
    $amount =  $_POST["amount"] ?? null;    
    $notes = $_POST["notes"]?? null; 
    $date =$_POST['date']?? null;
    $type= $_POST['type']?? null;
    
    $query = $connection->prepare("INSERT INTO transactions (users_user_id, `type`, amount, notes, `date`) VALUES ( $user_id ,$type, $amount , $notes,$date )");
    if ($query->execute()) {
      
        echo json_encode(["message" => "Transaction created successfully!"]);
    } else {
        echo json_encode(["error" => "Error creating transaction."]);
    }


?>
