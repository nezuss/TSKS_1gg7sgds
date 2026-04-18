// const jansNotation = (input) => {
//   let stack = [];

//   for (let i = 0; i < input.length; i++) {
//     let token = input[i];

//     if (typeof token === "number") {
//       stack.push(token);
//     } else {
//       if (stack.length < 2) {
//         return "Error: not enough operands!";
//       }

//       let b = stack.pop();
//       let a = stack.pop();
//       let result;

//       switch (token) {
//         case "+":
//           result = a + b;
//           break;
//         case "-":
//           result = a - b;
//           break;
//         case "*":
//           result = a * b;
//           break;
//         case "/":
//           result = a / b;
//           break;
//       }

//       stack.push(result);
//     }
//   }
//   if (stack.length > 1) {
//     return "Error: too many operands!";
//   }

//   return stack[0];
// };

// console.log(jansNotation([3, 4, "+"]));
// console.log(jansNotation([5, 3, 4, "*", "-"]));
// console.log(jansNotation([7, 33, 8, "-"]));

// ---------------------------

function jansNotation(input) {
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    let instruction = input[i];

    if (typeof instruction === "number") {
      stack.push(instruction);
    } else {
      if (stack.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }

      let b = stack.pop();
      let a = stack.pop();

      let result;

      if (instruction === "+") result = a + b;
      else if (instruction === "-") result = a - b;
      else if (instruction === "*") result = a * b;
      else if (instruction === "/") result = a / b;

      stack.push(result);
    }
  }

  if (stack.length === 1) {
    console.log(stack[0]);
  } else {
    console.log("Error: too many operands!");
  }
}

jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
