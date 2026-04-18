function solve() {
  let selectMenuTo = document.getElementById("selectMenuTo");
  let binaryOption = document.createElement("option");

  binaryOption.textContent = "Binary";
  binaryOption.value = "binary";

  let hexOption = document.createElement("option");

  hexOption.textContent = "Hexadecimal";
  hexOption.value = "hexadecimal";

  selectMenuTo.appendChild(binaryOption);
  selectMenuTo.appendChild(hexOption);

  document.querySelector("button").addEventListener("click", function () {
    let numberInput = document.getElementById("input");
    let number = Number(numberInput.value);
    let result = "";

    if (selectMenuTo.value === "binary") {
      result = number.toString(2);
    } else if (selectMenuTo.value === "hexadecimal") {
      result = number.toString(16).toUpperCase();
    }

    document.getElementById("result").value = result;
  });
}
