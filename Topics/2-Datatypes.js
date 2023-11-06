/* There's diff b/w older and newer js, older version js doesn't used to have the classes,
 modules and arrow functions and many more.
ECMA decided not to spoil older written code, so they introduced "use strict".
*/

"use strict";           // treat all JS code as newer version.

// alert(3 + 3)         // we are running this in nodejs, not browser. Diff syntax to use it inside nodejs.

let name = "Laxman"         // String
let age = 21                // Number
let isLoggedIn = false      // boolean => true/false
let state;

// null => stand alone value.
// undefined => value not assigned.
// symbol => unique

// Object

console.log(typeof "Laxman");           // string
console.log(typeof null);               // object?
console.log(typeof undefined);          // undefined