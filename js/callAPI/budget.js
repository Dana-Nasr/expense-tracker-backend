function calculateTotalBuget() {
  let budget = 0;
  let expense = 0;
  let income = 0;
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || []; //change to query to get incomeamount expance amout and balance
  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type == "income") {
      income += parseInt(transactions[i].amount);
      console.log(income);
    }

    if (transactions[i].type == "expense") {
      expense += parseInt(transactions[i].amount);
      console.log(expense);
    }
  }

  displayBudget(income, expense);
}

function displayBudget(income, expense) {
  let budget = 0;
  if (income >= 0 && expense >= 0) {
    budget = income - expense;
  }
  const budgetDisplay = document.getElementById("budgetDiv");
  budgetDisplay.innerHTML = "";

  const budgetElement = document.createElement("div");
  budgetElement.textContent = `Budget: ${budget}`;
  budgetDisplay.appendChild(budgetElement);

  const incomeElement = document.createElement("div");
  incomeElement.textContent = `Income: ${income}`;
  budgetDisplay.appendChild(incomeElement);

  const expenseElement = document.createElement("div");
  expenseElement.textContent = `Expanse: ${expense}`;
  budgetDisplay.appendChild(expenseElement);
}
