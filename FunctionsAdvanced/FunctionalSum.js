function add(num) {
  function calc(nextNum) {
    return add(num + nextNum);
  }

  calc.toString = function () {
    return num;
  };

  return calc;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
