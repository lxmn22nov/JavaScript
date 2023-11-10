/* 
Global and Local Scopes: determines the accessibility of variables.
{} scope.
Block scope: variable defined inside the scope.
Global scope: variables defined outside the scope.
Function scope: variables declared inside function are not accessible from outside the function.
Automatically Global: variable that has not been declared, it will automatically become a global variable.
NOTE: variable without (let,const, var) is automatically become global.

NOTE: Strict Mode: undeclared variable are not automatically global.
*/

var c = 300 

if(true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);

// ==============================================================================================================
// Ways of creating functions(mini-hoisting).

console.log(addOne(5));                     // OUTPUT: 6
function addOne(num) {
    return num + 1
 }
 addOne(5)

console.log(addTwo(5));                    // ERROR: cuz function stored into variable, it can be accessed before.
 const addTwo = function(num) {
    return num + 2
 }
 addTwo(5)
 // =============================================================================================================