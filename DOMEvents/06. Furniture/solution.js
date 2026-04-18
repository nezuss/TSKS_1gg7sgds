function solve() {
  let textares = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");
  let tbody = document.querySelector("tbody");
  let inputArea = textares[0];
  let outputArea = textares[1];
  let generateBtn = buttons[0];
  let buyBtn = buttons[1];

  generateBtn.addEventListener("click", function () {
    let items = JSON.parse(inputArea.value);

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let row = document.createElement("tr");
      let imgCell = document.createElement("td");
      let img = document.createElement("img");

      img.src = item.img;
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      let nameCell = document.createElement("td");
      let nameP = document.createElement("p");

      nameP.textContent = item.name;
      nameCell.appendChild(nameP);
      row.appendChild(nameCell);

      let priceCell = document.createElement("td");
      let priceP = document.createElement("p");

      priceP.textContent = item.price;
      priceCell.appendChild(priceP);
      row.appendChild(priceCell);

      let decCell = document.createElement("td");
      let decP = document.createElement("p");

      decP.textContent = item.decFactor;
      decCell.appendChild(decP);
      row.appendChild(decCell);

      let checkCell = document.createElement("td");
      let checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkCell.appendChild(checkbox);
      row.appendChild(checkCell);

      tbody.appendChild(row);
    }
  });

  buyBtn.addEventListener("click", function () {
    let allCheckedBoxes = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked'),
    );
    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (let i = 0; i < allCheckedBoxes.length; i++) {
      let checkbox = allCheckboxes[i];
      let row = checkbox.parentNode.parentNode;
      let name = row.children[1].textContent;
      let price = Number(row.children[2].textContent);
      let decFactor = Number(row.children[3].textContent);

      boughtFurniture.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
    }

    let avgDecFactor = 0;

    if (boughtFurniture.length > 0) {
      avgDecFactor = totalDecFactor / boughtFurniture.length;
    }

    let result = `Bought furniture: ${boughtFurniture.join(", ")}\n`;

    result += `Total price: ${totalPrice.toFixed(2)}\n`;
    result += `Average decoration factor: ${avgDecFactor}`;

    outputArea.value = result;
  });
}
