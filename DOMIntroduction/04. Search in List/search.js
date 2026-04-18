function search() {
  let cities = document.querySelectorAll("#towns li");
  let input = document.getElementById("searchText").value;
  let matches = 0;

  for (let li of cities) {
    li.style.fontWeight = "";
    li.style.textDecoration = "";

    if (li.textContent.includes(input)) {
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";

      matches++;
    }
  }

  result.textContent = `${matches} matches found`;
}
