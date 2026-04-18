// const constructionCrew = (worker) => {
//   let weight = worker.weight;
//   let experience = worker.experience;
//   let levelOfHydrated = worker.levelOfHydrated;
//   let dizziness = worker.dizziness;

//   if (dizziness) {
//     let hydrationIncrease = 0.1 * weight * experience;

//     levelOfHydrated = levelOfHydrated + hydrationIncrease;
//     worker.levelOfHydrated = levelOfHydrated;
//     worker.dizziness = false;
//   }

//   return worker;
// };

// -------------------------

function solve(worker) {
  if (worker.dizziness === true) {
    let waterAmount = 0.1 * worker.weight * worker.experience;

    worker.levelOfHydrated = worker.levelOfHydrated + waterAmount;
    worker.dizziness = false;
  }

  return worker;
}

console.log(
  solve({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }),
);
console.log(
  solve({ weight: 120, experience: 20, levelOfHydrated: 200, dizziness: true }),
);
console.log(
  solve({ weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }),
);
