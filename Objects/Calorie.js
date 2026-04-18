// const calories = (array) => {
//   const calorieObject = {};

//   for (let i = 0; i < array.length - 1; i += 2) {
//     const product = array[i];
//     const calories = Number(array[i + 1]);

//     calorieObject[product] = calories;
//   }

//   return calorieObject;
// };

// console.log(calories(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));
// console.log(
//   calories([
//     "Potato",
//     "93",
//     "Skyr",
//     "63",
//     "Cucumber",
//     "18",
//     "Milk",
//     "42",
//     "Bread",
//   ]),
// );

// -------------------------------

function solve(input) {
  let obj = {};

  for (let i = 0; i < input.length; i += 2) {
    let name = input[i];
    let calories = Number(input[i + 1]);

    obj[name] = calories;
  }

  console.log(obj);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42", "Bread"]);
