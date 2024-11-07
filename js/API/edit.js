function editTransaction(editIndex, type1, type2) {
  let transactions =
    JSON.parse(localStorage.getItem("transactionsArray")) || []; //change

  let toBEdited = transactions[editIndex];
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
  saveButtons.addEventListener("click", () => save(editIndex, transactions));
}

function save(editIndex, transactions) {
  
  const type =
    document.getElementById("type").value || transactions[editIndex].type;
  const amount =
    document.getElementById("Namount").value || transactions[editIndex].amount;
  const date =
    document.getElementById("Ndate").value || transactions[editIndex].date;
  const notes =
    document.getElementById("Nnotes").value || transactions[editIndex].notes;

  transactions[editIndex] = {
    type: type,
    amount: amount,
    date: date,
    notes: notes,
  };
  console.log("HELLO");

  localStorage.setItem("transactionsArray", JSON.stringify(transactions));

  document.getElementById("edit").innerHTML = "";
  viewTransactions(parse());
}
