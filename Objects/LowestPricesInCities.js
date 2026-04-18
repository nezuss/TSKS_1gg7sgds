// const lowestPricesInCities = (input) => {
//   let result = {};

//   for (const iterator of input) {
//     let [town, product, price] = iterator.split(" | ");

//     price = Number(price);

//     if (!result[product]) {
//       result[product] = { town, price };
//     } else {
//       if (result[product].price > price) {
//         result[product] = { town, price };
//       }
//     }
//   }

//   for (const key in result) {
//     console.log(`${key} -> ${result[key].price} (${result[key].town})`);
//   }
// };

// lowestPricesInCities([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 999",
//   "New York | Burger | 10",
// ]);

// ----------------------

function solve(input) {
  let products = {};

  for (let i = 0; i < input.length; i++) {
    let splitData = input[i].split(" | ");
    let town = splitData[0];
    let product = splitData[1];
    let price = Number(splitData[2]);

    if (!products.hasOwnProperty(product)) {
      products[product] = { price: price, town: town };
    } else {
      if (price < products[product].price) {
        products[product] = { price: price, town: town };
      }
    }
  }

  for (let key in products) {
    console.log(`${key} -> ${products[key].price} (${products[key].town})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
