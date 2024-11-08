let transaction = " ";

async function parse() {
  const id = 1;
  try {
    const response = await fetch(`http://localhost/expense-tracker-backend/php/getTransactions.php`);
    const transactions = await response.json(); 
    console.log(transactions);  
    return transactions;        
  } catch (error) {
    console.log(error);  
  }
}


document.addEventListener("DOMContentLoaded", async () => {
  const transactions = await parse();
  viewTransactions(transactions);
});


