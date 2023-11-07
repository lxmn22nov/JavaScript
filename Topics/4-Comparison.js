// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/* The reason is that an equality check == and comparisions >,<,>=,<= works differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= is true and null > 0 is false. 
*/
// console.log(null > 0);                   false
// console.log(null == 0);                  false
// console.log(null >= 0);                  true

// console.log(undefined > 0);              false
// console.log(undefined == 0);             false
// console.log(undefined >= 0);             false

/* 
=== strict check.
(It's checks not only the value but also the datatype. 
here, datatype is String comparison is with number.)
*/

console.log("2" === 2);                     // false