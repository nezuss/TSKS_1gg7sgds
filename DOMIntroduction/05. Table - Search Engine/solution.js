function solve() {
  let button = document.getElementById("searchBtn");

  button.addEventListener("click", function () {
    let input = document.getElementById("searchField");
    let searchText = input.value.toLowerCase();
    let tableRows = document.querySelectorAll("tbody tr");

    input.value = "";

    for (let row of tableRows) {
      row.classList.remove("select");

      if (
        searchText !== "" &&
        row.textContent.toLowerCase().includes(searchText)
      ) {
        row.classList.add("select");
      }
    }
  });
}
