/* Arrays in JavaScript.
- Js arrays are resizable and elements can be of different datatypes.
- not associative arrays(Arrays with named indexes are called associative arrays (or hashes)).
- zero-indexed.
- Js array create shallow copies, rather than deep copies.
NOTE: Shallow copies: 
A copy whose properties share the same references as those of the source object from which the copy
was made. 
As a result, when you change either the source or the copy,we may also cause the other object to change too.
NOTE: Deep copies: 
A copy whose properties do not share the same references as those of the source object from which 
the copy was made.
As a result, when we change either the source or the copy, we are changing the other object too.
*/

// declaration of array(object) in js.
const myArr = [0,1,2,3,4,5]
// console.log(myArr);

// let arr = new Array(1,4,65,7,6)
// console.log(arr);

// Array methods.

myArr.push(6)                    // add elements.
myArr.pop()                      // deletes last element of the array.

myArr.unshift(33)
myArr.shift()

// console.log(myArr);

// slice, splice

// console.log("A: ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
// console.log("B: ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
// console.log("C: ", myArr);

 