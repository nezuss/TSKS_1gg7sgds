function generateReport() {
  let checkboxes = document.querySelectorAll("thead tr th input");
  let rows = document.querySelectorAll("tbody tr");
  let result = [];

  for (let i = 0; i < rows.length; i++) {
    let person = {};
    let cells = rows[i].children;

    for (let j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        let propertyName = checkboxes[j].name;
        let cellData = cells[j].textContent;

        person[propertyName] = cellData;
      }
    }

    result.push(person);
  }

  document.getElementById("output").value = JSON.stringify(result, null, 2);
}
