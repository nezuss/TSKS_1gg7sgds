// const carFactory = (object) => {
//   const car = {
//     model: object.model,
//     power: 0,
//     color: object.color,
//     carriage: {
//       type: object.carriage,
//       color: object.color,
//     },
//     wheels: [0, 0, 0, 0],
//   };

//   if (object.power <= 90) {
//     car.power = 90;
//   } else if (object.power <= 120) {
//     car.power = 120;
//   } else {
//     car.power = 200;
//   }

//   if (object.wheelsize % 2 === 0) {
//     car.wheels = [
//       object.wheelsize - 1,
//       object.wheelsize - 1,
//       object.wheelsize - 1,
//       object.wheelsize - 1,
//     ];
//   } else {
//     car.wheels = [
//       object.wheelsize,
//       object.wheelsize,
//       object.wheelsize,
//       object.wheelsize,
//     ];
//   }

//   return car;
// };

// console.log(
//   carFactory({
//     model: "VW Golf II",
//     power: 90,
//     color: "blue",
//     carriage: "hatchback",
//     wheelsize: 14,
//   }),
// );
// console.log(
//   carFactory({
//     model: "Opel Vectra",
//     power: 110,
//     color: "grey",
//     carriage: "coupe",
//     wheelsize: 17,
//   }),
// );

// ------------------------------

function carFactory(requirements) {
  let car = {
    model: requirements.model,
    engine: null,
    carriage: null,
    wheels: null,
  };

  if (requirements.power <= 90) {
    car.engine = { power: 90, volume: 1800 };
  } else if (requirements.power <= 120) {
    car.engine = { power: 120, volume: 2400 };
  } else {
    car.engine = { power: 200, volume: 3500 };
  }

  car.carriage = {
    type: requirements.carriage,
    color: requirements.color,
  };

  let size = requirements.wheelSize;

  if (size % 2 === 0) {
    size = size - 1;
  }

  car.wheels = [size, size, size, size];

  return car;
}

console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelSize: 14,
  }),
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelSize: 17,
  }),
);
