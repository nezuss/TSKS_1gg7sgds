// const spiralMatrix = (rows, cols) => {
//   let matrix = [];

//   for (let i = 0; i < rows; i++) {
//     matrix.push([]);
//   }

//   let counter = 1;
//   let startRow = 0;
//   let endRow = rows - 1;
//   let startCol = 0;
//   let endCol = cols - 1;

//   while (startRow <= endRow && startCol <= endCol) {
//     for (let i = startCol; i <= endCol; i++) {
//       matrix[startRow][i] = counter++;
//     }

//     startRow++;

//     for (let i = startRow; i <= endRow; i++) {
//       matrix[i][endCol] = counter++;
//     }

//     endCol--;

//     if (startRow <= endRow) {
//       for (let i = endCol; i >= startCol; i--) {
//         matrix[endRow][i] = counter++;
//       }

//       endRow--;
//     }

//     if (startCol <= endCol) {
//       for (let i = endRow; i >= startRow; i--) {
//         matrix[i][startCol] = counter++;
//       }

//       startCol++;
//     }
//   }

//   matrix.forEach((row) => console.log(row.join(" ")));
// };

// spiralMatrix(5, 5);
// spiralMatrix(3, 3);

// -----------------------

function spiralMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
  }

  let topWall = 0;
  let bottomWall = rows - 1;
  let leftWall = 0;
  let rightWall = cols - 1;
  let counter = 1;

  while (topWall <= bottomWall && leftWall <= rightWall) {
    for (let i = leftWall; i <= rightWall; i++) {
      matrix[topWall][i] = counter;
      counter++;
    }

    topWall++;

    for (let i = topWall; i <= bottomWall; i++) {
      matrix[i][rightWall] = counter;
      counter++;
    }

    rightWall--;

    if (topWall <= bottomWall) {
      for (let i = rightWall; i >= leftWall; i--) {
        matrix[bottomWall][i] = counter;
        counter++;
      }

      bottomWall--;
    }

    if (leftWall <= rightWall) {
      for (let i = bottomWall; i >= topWall; i--) {
        matrix[i][leftWall] = counter;
        counter++;
      }

      leftWall++;
    }
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);
