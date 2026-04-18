function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let input = document.querySelector("#inputs textarea").value;
    let arr = JSON.parse(input);
    let restaurants = {};

    arr.forEach((line) => {
      let [name, workersStr] = line.split(" - ");
      let workersArray = workersStr.split(", ").map((w) => {
        let [workerName, salary] = w.split(" ");
        return { name: workerName, salary: Number(salary) };
      });

      if (restaurants[name]) {
        restaurants[name].workers.push(...workersArray);
      } else {
        restaurants[name] = {
          workers: workersArray,
          avgSalary: 0,
          bestSalary: 0,
        };
      }
    });

    let bestRestName = "";
    let maxAvgSalary = 0;

    Object.keys(restaurants).forEach((name) => {
      let workers = restaurants[name].workers;
      let totalSalary = workers.reduce((acc, curr) => acc + curr.salary, 0);

      restaurants[name].avgSalary = totalSalary / workers.length;

      workers.sort((a, b) => b.salary - a.salary);

      restaurants[name].bestSalary = workers[0].salary;

      if (restaurants[name].avgSalary > maxAvgSalary) {
        maxAvgSalary = restaurants[name].avgSalary;
        bestRestName = name;
      }
    });

    let best = restaurants[bestRestName];
    let resultRest = `Name: ${bestRestName} Average Salary: ${best.avgSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
    let resultWorkers = best.workers
      .map((w) => `Name: ${w.name} With Salary: ${w.salary}`)
      .join(" ");

    document.querySelector("#bestRestaurant p").textContent = resultRest;
    document.querySelector("#workers p").textContent = resultWorkers;
  }
}
