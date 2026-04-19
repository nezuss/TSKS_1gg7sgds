function solve() {
  const taskInput = document.getElementById("task");
  const descInput = document.getElementById("description");
  const dateInput = document.getElementById("date");
  const addButton = document.getElementById("add");
  const openSection = document
    .querySelectorAll("section")[1]
    .querySelectorAll("div")[1];
  const progressSection = document.getElementById("in-progress");
  const completeSection = document
    .querySelectorAll("section")[3]
    .querySelectorAll("div")[1];

  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (!taskInput.value || !descInput.value || !dateInput.value) {
      return;
    }

    const article = document.createElement("article");
    const h3 = document.createElement("h3");

    h3.textContent = taskInput.value;

    const pDesc = document.createElement("p");

    pDesc.textContent = "Description: " + descInput.value;

    const pDate = document.createElement("p");

    pDate.textContent = "Due Date: " + dateInput.value;

    const flexDiv = document.createElement("div");

    flexDiv.className = "flex";

    const startBtn = document.createElement("button");

    startBtn.className = "green";
    startBtn.textContent = "Start";

    const deleteBtn = document.createElement("button");

    deleteBtn.className = "red";
    deleteBtn.textContent = "Delete";

    flexDiv.appendChild(startBtn);
    flexDiv.appendChild(deleteBtn);
    article.appendChild(h3);
    article.appendChild(pDesc);
    article.appendChild(pDate);
    article.appendChild(flexDiv);
    openSection.appendChild(article);

    taskInput.value = "";
    descInput.value = "";
    dateInput.value = "";

    deleteBtn.addEventListener("click", function () {
      article.remove();
    });

    startBtn.addEventListener("click", function () {
      progressSection.appendChild(article);
      startBtn.remove();

      const finishBtn = document.createElement("button");

      finishBtn.className = "orange";
      finishBtn.textContent = "Finish";

      flexDiv.appendChild(finishBtn);

      finishBtn.addEventListener("click", function () {
        completeSection.appendChild(article);

        flexDiv.remove();
      });
    });
  });
}
