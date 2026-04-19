const argumentInfoBasic = (...args) => {
  let typeCounts = {};

  for (let i = 0; i < args.length; i++) {
    let arg = args[i];
    let type = typeof arg;

    console.log(`${type}: ${arg}`);

    if (!typeCounts[type]) {
      typeCounts[type] = 0;
    }

    typeCounts[type]++;
  }

  let sortedTypes = Object.entries(typeCounts).sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < sortedTypes.length; i++) {
    console.log(`${sortedTypes[i][0]} = ${sortedTypes[i][1]}`);
  }
};

argumentInfoBasic("cat", 42, function () {
  console.log("Hello world!");
});
