let transaction = " ";
function parse() {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || []; //change to get select *transactions
  return transactions;
}

document.addEventListener("DOMContentLoaded", () => {
  viewTransactions(parse());
});
