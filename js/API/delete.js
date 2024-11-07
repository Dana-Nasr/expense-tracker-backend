function deleteTransaction(removeIndex, type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];
  transactions.splice(removeIndex, 1);

  localStorage.setItem("transactionsArray", JSON.stringify(transactions)); //change delete based on id 

  viewTransactions(parse());
  calculateTotalBuget();
}
