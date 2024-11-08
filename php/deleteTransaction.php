<?php
include "./connection.php";
$data = json_decode(file_get_contents("php://input"), true);

$transaction_id = $data["transaction_id"] ?? null;
$user_id = 1;  

$query = $connection->prepare("DELETE FROM transactions WHERE transaction_id = $transaction_id AND users_user_id = $user_id");
if ($query->execute()) {
        echo json_encode(["message" => "Transaction deleted successfully!"]);
    
} else {
    echo json_encode(["error" => "Error deleting transaction."]);
}
?>
