function solve() {
  let inputs = document.querySelectorAll("input");
  let checkBtn = document.querySelectorAll("button")[0];
  let clearBtn = document.querySelectorAll("button")[1];
  let table = document.querySelector("table");
  let message = document.querySelector("#check p");

  checkBtn.addEventListener("click", function () {
    let board = [
      [inputs[0].value, inputs[1].value, inputs[2].value],
      [inputs[3].value, inputs[4].value, inputs[5].value],
      [inputs[6].value, inputs[7].value, inputs[8].value],
    ];
    let isSolved = true;

    for (let i = 0; i < 3; i++) {
      let row = board[i];
      let col = [board[0][i], board[1][i], board[2][i]];
      let uniqueInRow = new Set(row);
      let uniqueInCol = new Set(col);

      if (uniqueInRow.size !== 3 || uniqueInCol.size !== 3) {
        isSolved = false;
        break;
      }
    }

    if (isSolved) {
      table.style.border = "2px solid green";
      message.style.color = "green";
      message.textContent = "You solve it! Congratulations!";
    } else {
      table.style.border = "2px solid red";
      message.style.color = "red";
      message.textContent = "NOP! You are not done yet...";
    }
  });

  clearBtn.addEventListener("click", function () {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    table.style.border = "none";
    message.textContent = "";
  });
}
