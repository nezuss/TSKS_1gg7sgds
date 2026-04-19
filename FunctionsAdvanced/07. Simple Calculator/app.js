function calculator() {
  let input1;
  let input2;
  let resultOutput;

  return {
    init: function (selector1, selector2, resultSelector) {
      input1 = document.querySelector(selector1);
      input2 = document.querySelector(selector2);
      resultOutput = document.querySelector(resultSelector);
    },
    add: function () {
      let val1 = Number(input1.value);
      let val2 = Number(input2.value);
      resultOutput.value = val1 + val2;
    },
    subtract: function () {
      let val1 = Number(input1.value);
      let val2 = Number(input2.value);
      resultOutput.value = val1 - val2;
    },
  };
}

const calculate = calculator();

calculate.init("#num1", "#num2", "#result");
