<?php
include "./connection.php";
$data = json_decode(file_get_contents("php://input"), true);
    $user_id = 1;  
    $amount = $_POST["amount"];    
    $description = $_POST['notes']; 
    $date =$_POST['date'];
    $type= $_POST['type'];
    
    $query = $connection->prepare("INSERT INTO transactions (users_user_id, 'type', amount, notes, 'date') VALUES ( $user_id ,$type, $amount , $description,$date )");
    if ($query->execute()) {
      
        echo json_encode(["message" => "Transaction created successfully!"]);
    } else {
        echo json_encode(["error" => "Error creating transaction."]);
    }


?>
