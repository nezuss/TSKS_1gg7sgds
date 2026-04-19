const fib = () => {
  fibState.currentNumberIndex++;

  if (fibState.currentNumberIndex < 3) {
    return 1;
  }

  let a = 1;
  let b = 1;

  for (let i = 0; i < fibState.currentNumberIndex - 2; i++) {
    const next = a + b;

    a = b;
    b = next;
  }

  return b;
};

const fibState = {
  currentNumberIndex: 0,
  lastLastNumber: 0,
  lastNumber: 0,
};

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
console.log(fib()); // 21
console.log(fib()); // 34
console.log(fib()); // 55
