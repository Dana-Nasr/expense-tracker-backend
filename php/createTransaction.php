<?php

include "./connection.php";
t
    $user_id = '1';  
    $amount = $_POST['amount'];    
    $description = $_POST['notes']; 
    $date = date('Y-m-d');
    $type= $_POST('type')
    
    $query = $connection->prepare("INSERT INTO transactions (users_user_id, type, amount, notes, transaction_date) VALUES ( $user_id ,$type, $amount , $description,$date )");
    if ($query->execute()) {
      
        echo json_encode(["message" => "Transaction created successfully!"]);
    } else {
        echo json_encode(["error" => "Error creating transaction."]);
    }

    $query->close();

?>
