<?php
include "./connection.php";
$data = json_decode(file_get_contents("php://input"), true);


$transaction_id = $data["transaction_id"] ?? null;
$user_id = 1;  
$amount = $data["amount"] ?? null;
$notes = $data["notes"] ?? null;
$date = $data["date"] ?? null;
$type = $data["type"] ?? null;

}

// P
$query = $connection->prepare("UPDATE transactions SET `type` =  $type, amount = $amount, notes = $notes, `date` =  $date WHERE transaction_id = $transaction_id AND users_user_id =  $user_id");


if ($query->execute()) {
        echo json_encode(["message" => "Transaction updated successfully!"]);
     
} else {
    echo json_encode(["error" => "Error updating transaction."]);
}
?>
