// Control Flow.
/* Comparioson operators.
< : less than
> : greater than
<= : less than equal to
>= : greater than equal to 
== : equal to
=== : equal to(typechecks)
!= : is not equal to
!== : 
*/
// if(condition) {                         // condition should be true, to execute scope.

// }

const temperature = 41

// if(temperature < 49) {
//     console.log(`Temperature is ${temperature} less than 49.`);
// } else {
//     console.log(`Temperature is greater than 49`);
// }

const score = 200

// if (score> 100) {
//     const power = "fly"
//     console.log(`Usser Power: ${power}`);
// }
// console.log(`User Power: ${power}`);                     // not defined, out of scope.

const balance = 1000

// Implicit scope.
// if(balance > 500) console.log("True.");

// if (balance < 500) {
//     console.log("Less Than 500.");
// } else if (balance < 750) {
//     console.log("Less than 750.");
// } else if (balance < 900) {
//     console.log("Less than 900.");
// } else {
//     console.log("Less than 1200.");
// }

const userLoggedIn = true
const debitCard = true

const loggedInFromGoogle = true
const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course.");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log(`Logged in Sucessfully.`);
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 10 ?? 5                       // prints first value.
// val1 = null ?? 10                       // if null presents, automatically value jumps to the second value.
// val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20

// console.log(val1);

// Ternary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 120 ? console.log("Less than 80.") : console.log("More than 80.");

// NOTE: Nullish Coalescing Operator and Ternary Operator are different, not same.