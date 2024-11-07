function createTransaction(type, date, amount, notes) {
  let oldTransactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || [];  //change tocreate transaction

  let amountOfTransaction = document.getElementById(amount).value;
  let dateOfTransaction = document.getElementById(date).value;
  let noteOnTransaction = document.getElementById(notes).value;
  let typeOfTransaction = document.getElementById(type).value;
  // console.log(typeOfTransaction);
  if (
    amountOfTransaction.trim() !== "" && //only spaces entered
    dateOfTransaction.trim() !== "" &&
    noteOnTransaction.trim() !== "" &&
    (typeOfTransaction.trim() === "income" ||
      typeOfTransaction.trim() === "expense")
  ) {
    let transaction = {
      type: typeOfTransaction,
      amount: amountOfTransaction,
      date: dateOfTransaction,
      notes: noteOnTransaction,
    };
    oldTransactions.push(transaction);
  }

  document.getElementById("type").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("notes").value = "";
  document.getElementById("date").value = "";

  localStorage.setItem("transactionsArray", JSON.stringify(oldTransactions));
  viewTransactions(parse());
  calculateTotalBuget();
}
