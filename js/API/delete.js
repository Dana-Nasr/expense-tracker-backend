async function deleteTransaction(removeIndex, type1, type2) {
  try {
    const response = await fetch(
      "http://localhost/expense-tracker-backend/php/createTransaction.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(removeIndex),
      }
    );
  } catch (error) {
    console.log(error);
  }
  viewTransactions(await parse());
  calculateTotalBuget();
}
