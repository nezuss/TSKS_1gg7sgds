// const rectangle = (width, height, color) => {
//   return {
//     width,
//     height,
//     color: color.charAt(0).toUpperCase() + color.slice(1),
//     calcArea() {
//       return this.width * this.height;
//     },
//   };
// };

// let rect = rectangle(4, 5, "red");

// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());

// --------------------------

function rectangle(width, height, color) {
  let niceColor = color[0].toUpperCase() + color.slice(1);

  return {
    width: width,
    height: height,
    color: niceColor,
    calcArea: function () {
      return this.width * this.height;
    },
  };
}

let rect = rectangle(4, 5, "red");

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
