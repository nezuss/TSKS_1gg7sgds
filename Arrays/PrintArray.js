const printArray = (arrayOfStrings, string) => {
  console.log(arrayOfStrings.join(string));
};

printArray(["One", "Two", "Three", "Four", "Five"], "-");
printArray(["How about no?", "I", "will", "not", "do", "it!"], "_");
