// const townToJSON = (towns) => {
//   console.log(
//     JSON.stringify(
//       towns.map((t) => {
//         const [name, latitude, longitude] = t.split(" | ");
//         return {
//           Town: name,
//           Latitude: Number(latitude),
//           Longitude: Number(longitude),
//         };
//       }),
//     ),
//   );
// };

// townToJSON([
//   "Sofia | 42.696552 | 23.32601",
//   "Beijing | 39.913818 | 116.363625",
// ]);

// ------------------------------

function townsToJSON(input) {
  let keys = input
    .shift()
    .split("|")
    .filter((x) => x !== "")
    .map((x) => x.trim());

  let result = [];

  for (let row of input) {
    let values = row
      .split("|")
      .filter((x) => x !== "")
      .map((x) => x.trim());

    let townObject = {
      [keys[0]]: values[0],
      [keys[1]]: Number(Number(values[1]).toFixed(2)),
      [keys[2]]: Number(Number(values[2]).toFixed(2)),
    };

    result.push(townObject);
  }

  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
