let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score)               // Number, Boolean and String are Interfaces.

// console.log(typeof valueInNumber)
// console.log(valueInNumber)          // NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// **************************************** Operations ********************************************************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%3);

let str1 = "Hello "
let str2 = "Laxman"

let str3 = str1 + str2
console.log(str3);

// Conversion are happening on the basis of preferred types.(first datatype basis k basis par.)
console.log("1" + 2);           // "12"
console.log(1 + "2");           // 12
console.log("1" + 2 + 2);       // "122"
console.log(1 + 2 + "2");       // 32

console.log((3 + 4) * 5 % 3);

let gameCounter = 10
++gameCounter                   // Prefix and Postfix operator.
gameCounter++
console.log(gameCounter);