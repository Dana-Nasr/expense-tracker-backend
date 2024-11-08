async function editTransaction(editIndex, type1, type2) {
  const transactions = async () => {
    const result = await parse();
   
};
console.log(transactions());
  let toBEdited =  transactions();
  let edit = " ";
  edit += `<tr class="edittransaction">
  <td class="type"><input id="Ntype" type="text"  value="${toBEdited.type}" placeholder="Type"/></td>
  <td class="amount"><input id="Namount" type="text"  value="${toBEdited.amount}" placeholder="Amount"/></td>
  <td class="notes"><input id="Nnotes" type="text"  value="${toBEdited.notes}" placeholder="Notes"/></td>
   <td class="date"><input id ="Ndate" type="date" value="${toBEdited.date}" placeholder="Date"/></td>
  <td><button id="save" value=${editIndex}> save</button></td>
</tr>`;

  appendHTML("edit", edit);
  const saveButtons = document.getElementById("save");
  saveButtons.addEventListener(
    "click",
    async () => await save(editIndex, transactions)
  );
}

async function save(editIndex, transactions) {
  const type =
    document.getElementById("type").value || transactions[editIndex].type;
  const amount =
    document.getElementById("Namount").value || transactions[editIndex].amount;
  const date =
    document.getElementById("Ndate").value || transactions[editIndex].date;
  const notes =
    document.getElementById("Nnotes").value || transactions[editIndex].notes;
  if (type == "income") {
    t = 1;
  } else if ((type = "expance")) {
    t = 0;
  }
  transactions[editIndex] = {
    type: type,
    amount: amount,
    date: date,
    notes: notes,
  };
  console.log("HELLO");

  try {
    const response = await fetch(
      "http://localhost/expense-tracker-backend/php/createTransaction.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactions),
      }
    );
  } catch (error) {
    console.log(error);
  }

  document.getElementById("edit").innerHTML = "";
  await viewTransactions(parse());
}
