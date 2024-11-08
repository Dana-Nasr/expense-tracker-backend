async function createTransaction(type, date, amount, notes) {
  let amountOfTransaction = document.getElementById(amount).value;
  let dateOfTransaction = document.getElementById(date).value;
  let noteOnTransaction = document.getElementById(notes).value;
  let typeOfTransaction = document.getElementById(type).value;

  if (
    amountOfTransaction.trim() !== "" &&
    dateOfTransaction.trim() !== "" &&
    noteOnTransaction.trim() !== "" &&
    (typeOfTransaction.trim() === "income" ||
      typeOfTransaction.trim() === "expense")
  ) {
    let i;
    if (typeOfTransaction.trim() === "income") {
      i = 1;
    } else if (typeOfTransaction.trim() === "expense") {
      i = 0;
    }
    let transaction = {
      type: i,
      amount: amountOfTransaction,
      date: dateOfTransaction,
      notes: noteOnTransaction,
    };

    try {
      const response = await fetch(
        "http://localhost/expense-tracker-backend/php/createTransaction.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        }
      );

    } catch (error) {
      console.log(error);
    }

    document.getElementById("type").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("notes").value = "";
    document.getElementById("date").value = "";

    const transactions = await parse();
    viewTransactions(transactions);
    // calculateTotalBudget();
  }
}
