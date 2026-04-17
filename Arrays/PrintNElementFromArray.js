const nElement = (array, n) => {
  let result = [];

  for (let i = 0; i < array.length; i = i + n) {
    result.push(array[i]);
  }

  return result;
};

console.log(nElement(["5", "20", "31", "4", "20"], 2));
console.log(nElement(["dsa", "asd", "test", "tset"], 2));
console.log(nElement(["1", "2", "3", "4", "5"], 6));
