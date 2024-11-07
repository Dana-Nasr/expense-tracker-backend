const submitIncome = document.getElementById("submit");
submitIncome.addEventListener("click", () =>
  createTransaction("type", "date", "amount", "notes")
);

const viewIncome = document.getElementById("view-income");
const viewExpence = document.getElementById("view-expense");
const lessThan = document.getElementById("less-than");
const greaterThan = document.getElementById("greater-than");
const greaterThanDate = document.getElementById("greater-than-Date");
const lessThanDate = document.getElementById("less-than-Date");

viewIncome.addEventListener("click", () => {
  transactions = parse();
  addTypeFilter("income");
  viewExpence.style.display = "none";
});

viewExpence.addEventListener("click", () => {
  transactions = parse();
  addTypeFilter("expense");
  viewIncome.style.display = "none";
});

lessThan.addEventListener("click", () => {
  let minprice = document.getElementById("priceFilter").value;
  addLessAmountFilter(minprice);
  greaterThan.style.display = "none";
});
greaterThan.addEventListener("click", () => {
  let maxprice = document.getElementById("priceFilter").value;
  addGreaterAmountFilter(maxprice);
  lessThan.style.display = "none";
});

greaterThanDate.addEventListener("click", () => {
  let dateFilter = document.getElementById("dateFilter").value;
  addGreaterDateFilter(dateFilter);
  lessThanDate.style.display = "none";
});

lessThanDate.addEventListener("click", () => {
  let dateFilter = document.getElementById("dateFilter").value;
  addLessDateFilter(dateFilter);
  greaterThanDate.style.display = "none";
});

const viewAll = document.getElementById("view-all");
viewAll.addEventListener("click", () => {
  viewIncome.style.display = "inline-block";
  viewExpence.style.display = "inline-block";
  lessThan.style.display = "inline-block";
  greaterThan.style.display = "inline-block";
  greaterThanDate.style.display = "inline-block";
  lessThanDate.style.display = "inline-block";

  transactions = parse();
  viewTransactions(transactions);
});
const findWord = document.getElementById("word-find");
findWord.addEventListener("click", () => {
  let noteFilter = document.getElementById("noteFilter").value;
  addNotesFilter(noteFilter);
});

const budget = document.getElementById("budget");
budget.addEventListener("click", calculateTotalBuget);

function appendHTML(div, html) {
  document.getElementById(div).innerHTML = html;
}
