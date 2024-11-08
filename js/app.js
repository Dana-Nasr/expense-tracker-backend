let transaction = " ";

async function parse() {
  const id = 1;
  try {
    const response = await fetch(`http://localhost/expense-tracker-backend/php/getTransactions.php`);
    const transactions = await response.json(); // Wait for the response to be parsed as JSON
    console.log(transactions);  // Log the transactions
    return transactions;        // Return the transactions
  } catch (error) {
    console.log(error);  // Log any errors
  }
}


document.addEventListener("DOMContentLoaded", async () => {
  const transactions = await parse();
  viewTransactions(transactions);
});


