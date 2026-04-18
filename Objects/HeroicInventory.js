// const heroicInventory = (input) => {
//   let result = [];

//   for (const iterator of input) {
//     let [name, level, items] = iterator.split(" / ");

//     level = Number(level);
//     items = items ? items.split(", ") : [];

//     result.push({ name, level, items });
//   }

//   console.log(JSON.stringify(result));
// };

// heroicInventory([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);
// heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);

// -------------------------------

function heroicInventory(input) {
  let result = [];

  for (let i = 0; i < input.length; i++) {
    let heroData = input[i].split(" / ");
    let name = heroData[0];
    let level = Number(heroData[1]);
    let items = [];

    if (heroData.length > 2) {
      items = heroData[2].split(", ");
    } else {
      items = [];
    }

    let hero = {
      name: name,
      level: level,
      items: items,
    };

    result.push(hero);
  }

  console.log(JSON.stringify(result));
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
