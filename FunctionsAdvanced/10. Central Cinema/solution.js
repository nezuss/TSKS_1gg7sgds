function solve() {
  const container = document.getElementById("container");
  const inputs = container.querySelectorAll("input");
  const addMovieBtn = container.querySelector("button");
  const moviesUl = document.querySelector("#movies ul");
  const archiveUl = document.querySelector("#archive ul");
  const cleararchiveBtn = document.querySelector("#archive > button");

  addMovieBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const name = inputs[0].value;
    const hall = inputs[1].value;
    const price = inputs[2].value;

    if (!name || !hall || !price || isNaN(Number(price))) {
      return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = name;

    const strongHall = document.createElement("strong");

    strongHall.textContent = `Hall: ${hall}`;

    const div = document.createElement("div");
    const strongPrice = document.createElement("strong");

    strongPrice.textContent = Number(price).toFixed(2);

    const ticketsInput = document.createElement("input");

    ticketsInput.placeholder = "Tickets Sold";

    const archiveBtn = document.createElement("button");

    archiveBtn.textContent = "Archive";

    div.appendChild(strongPrice);
    div.appendChild(ticketsInput);
    div.appendChild(archiveBtn);
    li.appendChild(span);
    li.appendChild(strongHall);
    li.appendChild(div);
    moviesUl.appendChild(li);

    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";

    archiveBtn.addEventListener("click", function () {
      const ticketsSold = ticketsInput.value;

      if (!ticketsSold || isNaN(Number(ticketsSold))) {
        return;
      }

      const totalProfit = Number(price) * Number(ticketsSold);

      li.removeChild(div);

      strongHall.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

      const deleteBtn = document.createElement("button");

      deleteBtn.textContent = "Delete";

      li.appendChild(deleteBtn);
      archiveUl.appendChild(li);

      deleteBtn.addEventListener("click", function () {
        li.remove();
      });
    });
  });

  cleararchiveBtn.addEventListener("click", function () {
    archiveUl.innerHTML = "";
  });
}
