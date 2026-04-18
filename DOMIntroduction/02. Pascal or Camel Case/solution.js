function solve() {
  let text = document.getElementById("text").value.toLowerCase();
  let namingConvention = document.getElementById("naming-convention").value;
  let words = text.split(" ");
  let result = "";

  if (namingConvention === "Camel Case") {
    for (let i = 0; i < words.length; i++) {
      if (i === 0) {
        result += words[i];
      } else {
        result += words[i][0].toUpperCase() + words[i].slice(1);
      }
    }
  } else if (namingConvention === "Pascal Case") {
    for (let i = 0; i < words.length; i++) {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}
