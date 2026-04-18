// const heroes = () => {
//   return {
//     mage: function (name) {
//       return {
//         name: name,
//         health: 100,
//         mana: 100,
//         cast: function (spell) {
//           this.mana--;
//           console.log(`${this.name} cast ${spell}`);
//         },
//       };
//     },
//     fighter: function (name) {
//       return {
//         name: name,
//         health: 100,
//         stamina: 100,

//         fight: function () {
//           this.stamina--;
//           console.log(`${this.name} slashes at the foe!`);
//         },
//       };
//     },
//   };
// };

// let create = heroes();

// const scorcher = create.mage("Scorcher");

// scorcher.cast("fireball");

// const leonidas = create.fighter("Leonidas");

// leonidas.fight();

// console.log(scorcher.mana);
// console.log(leonidas.stamina);

// ------------------------------

// function solve() {
//   return {
//     mage: function (name) {
//       return {
//         name: name,
//         health: 100,
//         mana: 100,
//         cast: function (spell) {
//           this.mana--;
//           console.log(`${this.name} cast ${spell}`);
//         },
//       };
//     },
//     fighter: function (name) {
//       return {
//         name: name,
//         health: 100,
//         stamina: 100,
//         fight: function () {
//           this.stamina--;
//           console.log(`${this.name} slashes at the foe!`);
//         },
//       };
//     },
//   };
// }

// let create = solve();
// const scorcher = create.mage("Scorcher 1");

// scorcher.cast("fireball");
// scorcher.cast("thunder");
// scorcher.cast("light");

// const scorcher2 = create.fighter("Scorcher 2");

// scorcher2.fight();

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);

// ------------------------------

function solve() {
  const canCast = (state) => ({
    cast: (spell) => {
      console.log(`${state.name} cast ${spell}`);
      state.mana--;
    },
  });

  const canFight = (state) => ({
    fight: () => {
      console.log(`${state.name} slashes at the foe!`);
      state.stamina--;
    },
  });

  const fighter = (name) => {
    let state = {
      name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(state, canFight(state));
  };

  const mage = (name) => {
    let state = {
      name,
      health: 100,
      mana: 100,
    };

    return Object.assign(state, canCast(state));
  };

  return { mage: mage, fighter: fighter };
}

let create = solve();
const scorcher = create.mage("Scorcher 1");

scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
