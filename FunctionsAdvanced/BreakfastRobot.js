function solution() {
  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  return function (commandString) {
    let parts = commandString.split(" ");
    let action = parts[0];
    let item = parts[1];
    let quantity = Number(parts[2]);

    if (action === "report") {
      return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }

    if (action === "restock") {
      stock[item] = stock[item] + quantity;

      return "Success";
    }

    if (action === "prepare") {
      if (item === "apple") {
        if (stock.carbohydrate < 1 * quantity)
          return "Error: not enough carbohydrate in stock";
        if (stock.flavour < 2 * quantity)
          return "Error: not enough flavour in stock";

        stock.carbohydrate -= 1 * quantity;
        stock.flavour -= 2 * quantity;

        return "Success";
      }

      if (item === "lemonade") {
        if (stock.carbohydrate < 10 * quantity)
          return "Error: not enough carbohydrate in stock";
        if (stock.flavour < 20 * quantity)
          return "Error: not enough flavour in stock";

        stock.carbohydrate -= 10 * quantity;
        stock.flavour -= 20 * quantity;

        return "Success";
      }

      if (item === "burger") {
        if (stock.carbohydrate < 5 * quantity)
          return "Error: not enough carbohydrate in stock";
        if (stock.fat < 7 * quantity) return "Error: not enough fat in stock";
        if (stock.flavour < 3 * quantity)
          return "Error: not enough flavour in stock";

        stock.carbohydrate -= 5 * quantity;
        stock.fat -= 7 * quantity;
        stock.flavour -= 3 * quantity;

        return "Success";
      }

      if (item === "eggs") {
        if (stock.protein < 5 * quantity)
          return "Error: not enough protein in stock";
        if (stock.fat < 1 * quantity) return "Error: not enough fat in stock";
        if (stock.flavour < 1 * quantity)
          return "Error: not enough flavour in stock";

        stock.protein -= 5 * quantity;
        stock.fat -= 1 * quantity;
        stock.flavour -= 1 * quantity;

        return "Success";
      }

      if (item === "turkey") {
        if (stock.protein < 10 * quantity)
          return "Error: not enough protein in stock";
        if (stock.carbohydrate < 10 * quantity)
          return "Error: not enough carbohydrate in stock";
        if (stock.fat < 10 * quantity) return "Error: not enough fat in stock";
        if (stock.flavour < 10 * quantity)
          return "Error: not enough flavour in stock";

        stock.protein -= 10 * quantity;
        stock.carbohydrate -= 10 * quantity;
        stock.fat -= 10 * quantity;
        stock.flavour -= 10 * quantity;

        return "Success";
      }
    }
  };
}

let manager = solution();

console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report"));
