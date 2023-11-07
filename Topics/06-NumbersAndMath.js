const score = 400
// console.log(score);

// explicitly defining the identifier has to be number.
const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length);                 // length of the variable.
// console.log(balance.toFixed(2));                        // zeroes/numbers after the decimal.

const otherNum = 123.56789

// console.log(otherNum.toPrecision(5));                       // round off the last digit of the number.

const hundreds = 1000023230
// console.log(hundreds.toLocaleString('en-IN'));                  // puts commas according to indian metrics.

// ******************************************** MATHS *******************************************************

// console.log(Math);
// console.log(Math.abs(-4));                          //  Absolute value turns -ve into +ve.
// console.log(Math.round(4.6));                       // round-off value.
// console.log(Math.ceil(4.6));                        // chooses high approx value.
// console.log(Math.floor(4.6));                       // chooses lowest approx value.

// console.log(Math.max(4,3,6,8));
// console.log(Math.min(4,3,6,8));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));

// Random number in finite range.
const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);