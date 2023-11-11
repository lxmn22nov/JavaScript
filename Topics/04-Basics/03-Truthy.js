// falsy values.
// false, 0, -0, BigInt On, "", null, undefined, NaN

// truthy values.
// "0", 'false', " ", [], {}, function() {},

// How to check the object is empty or not.
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty.");
}

// How to check the array is empty or not.
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is Empty.");
}