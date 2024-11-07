

function addTypeFilter(type) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];

    if (td) {
      value = td.textContent;
      if (type != value) {
        tr[i].style.display = "none";
      }
    }
  }
}

function addGreaterAmountFilter(amount) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      value = td.textContent;
      console.log(value);
      if (parseInt(value) > parseInt(amount)) {
        tr[i].style.display = "none";
      }
    }
  }
}
function addLessAmountFilter(amount) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      value = td.textContent;
      console.log(value);
      if (parseInt(value) < parseInt(amount)) {
        tr[i].style.display = "none";
      }
    }
  }
}

function addGreaterDateFilter(date) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];

    if (td) {
      value = new Date(td.textContent);
      date = new Date(date);
      console.log(value);
      if (value.getTime() < date.getTime()) {
        tr[i].style.display = "none";
      }
    }
  }
}
function addLessDateFilter(date) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];

    if (td) {
      value = new Date(td.textContent);
      date = new Date(date);
      console.log(value);
      if (value.getTime() > date.getTime()) {
        tr[i].style.display = "none";
      }
    }
  }
}

function addNotesFilter(note) {
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];

    if (td) {
      notes = td.textContent;
      if (!notes.includes(note)) {
        tr[i].style.display = "none";
      }
    }
  }
}
