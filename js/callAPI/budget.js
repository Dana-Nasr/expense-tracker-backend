function calculateTotalBuget() {
  let budget = 0;
  let expense = 0;
  let income = 0;
  const transactionsBudget = async () => {
    const result = await parse();
  };
  let budgets = transactionsBudget();
  for (let i = 0; i < transactions.length; i++) {
    if (budgets[i].type == "income") {
      income += parseInt(budgets[i].amount);
      console.log(income);
    }

    if (transactions[i].type == "expense") {
      expense += parseInt(budgets[i].amount);
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
