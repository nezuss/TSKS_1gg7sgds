function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output");
  let sentences = input.value.split(".").filter((x) => x.length > 0);

  output.innerHTML = "";

  for (let i = 0; i < sentences.length; i += 3) {
    let text = sentences.slice(i, i + 3).join(".") + ".";

    output.innerHTML += `<p>${text}</p>`;
  }
}
