// function solveOrbit(input) {
//   let width = input[0];
//   let height = input[1];
//   let x = input[2];
//   let y = input[3];

//   for (let row = 0; row < height; row++) {
//     let currentRow = [];

//     for (let col = 0; col < width; col++) {
//       let distanceX = Math.abs(col - x);
//       let distanceY = Math.abs(row - y);
//       let value = Math.max(distanceX, distanceY) + 1;

//       currentRow.push(value);
//     }

//     console.log(currentRow.join(" "));
//   }
// }

// solveOrbit([4, 4, 0, 0]);
// solveOrbit([5, 5, 2, 2]);
// solveOrbit([3, 3, 2, 2]);

// -------------------

const orbit = (width, height, x, y) => {
  for (let row = 0; row < height; row++) {
    let rowArray = [];

    for (let col = 0; col < width; col++) {
      let diffX = Math.abs(col - x);
      let diffY = Math.abs(row - y);
      let value = Math.max(diffX, diffY) + 1;

      rowArray.push(value);
    }

    console.log(rowArray.join(" "));
  }
};

orbit(4, 4, 0, 0);
orbit(5, 5, 2, 2);
orbit(3, 3, 2, 2);
